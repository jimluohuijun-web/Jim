#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  scripts/deploy-nginx.sh --plan
  scripts/deploy-nginx.sh [--activate]

Environment variables:
  SERVER_HOST   SSH host or alias. Default: yunsufang-vps
  SERVER_USER   SSH user. Optional when SERVER_HOST is an SSH config alias.
  SERVER_PORT   SSH port. Default: 22
  REMOTE_BASE   Remote release base. Default: /var/www/yunsucake
  APP_NAME      App label for logs. Default: yunsufang
  APP_PORT      App port. Default: 3000
  ENV_FILE      Remote env file. Default: /etc/yunsufang.env
  SERVICE_NAME  systemd service. Default: yunsufang.service

Notes:
  - This script never stores or passes a password. Use SSH key auth.
  - Without --activate, it uploads and prepares a release only.
  - With --activate, it switches current and restarts systemd.
USAGE
}

ACTIVATE=0
PLAN=0

for arg in "$@"; do
  case "$arg" in
    --activate)
      ACTIVATE=1
      ;;
    --plan|--dry-run)
      PLAN=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $arg" >&2
      usage
      exit 2
      ;;
  esac
done

SERVER_HOST="${SERVER_HOST:-yunsufang-vps}"
SERVER_USER="${SERVER_USER:-}"
SERVER_PORT="${SERVER_PORT:-22}"
REMOTE_BASE="${REMOTE_BASE:-/var/www/yunsucake}"
APP_NAME="${APP_NAME:-yunsufang}"
APP_PORT="${APP_PORT:-3000}"
ENV_FILE="${ENV_FILE:-/etc/yunsufang.env}"
SERVICE_NAME="${SERVICE_NAME:-yunsufang.service}"
RELEASE_ID="${RELEASE_ID:-$(date +%Y%m%d-%H%M%S)}"
REMOTE_RELEASE="$REMOTE_BASE/releases/$RELEASE_ID"
ARCHIVE="${TMPDIR:-/tmp}/yunsucake-$RELEASE_ID.tar.gz"

SSH_TARGET="$SERVER_HOST"
if [[ -n "$SERVER_USER" ]]; then
  SSH_TARGET="$SERVER_USER@$SERVER_HOST"
fi

ssh_cmd() {
  ssh -p "$SERVER_PORT" "$SSH_TARGET" "$@"
}

scp_to() {
  scp -P "$SERVER_PORT" "$1" "$SSH_TARGET:$2"
}

print_plan() {
  cat <<PLAN
Deploy plan
-----------
App:            $APP_NAME
SSH target:     $SSH_TARGET
SSH port:       $SERVER_PORT
Remote base:    $REMOTE_BASE
Release id:     $RELEASE_ID
Release path:   $REMOTE_RELEASE
Current link:   $REMOTE_BASE/current
Env file:       $ENV_FILE
Service:        $SERVICE_NAME
Port:           $APP_PORT
Activate:       $ACTIVATE

Package contents:
  .next/standalone -> release root
  .next/static     -> release root/.next/static
  public           -> release root/public
  package.json
  package-lock.json
PLAN
}

print_plan

if [[ "$PLAN" -eq 1 ]]; then
  exit 0
fi

echo "== Checking SSH connectivity =="
if ! ssh -p "$SERVER_PORT" -o BatchMode=yes -o ConnectTimeout=8 "$SSH_TARGET" "true"; then
  echo "Unable to connect to $SSH_TARGET using SSH key auth." >&2
  echo "Check SERVER_HOST/SERVER_USER/SERVER_PORT and ~/.ssh/config." >&2
  exit 10
fi

echo "== Local checks =="
npm run lint
npm run build
npm run check:pages

if [[ ! -d .next/standalone || ! -d .next/static ]]; then
  echo "Missing standalone build output. Expected .next/standalone and .next/static." >&2
  exit 11
fi

echo "== Packaging standalone release =="
rm -rf ".deploy-tmp"
mkdir -p ".deploy-tmp/release/.next"
cp -a .next/standalone/. ".deploy-tmp/release/"
cp -a .next/static ".deploy-tmp/release/.next/static"
cp -a public ".deploy-tmp/release/public"
cp package.json package-lock.json ".deploy-tmp/release/"

tar -C ".deploy-tmp/release" -czf "$ARCHIVE" .
rm -rf ".deploy-tmp"

echo "== Preparing remote release directory =="
ssh_cmd "mkdir -p '$REMOTE_BASE/releases' '$REMOTE_RELEASE'"
scp_to "$ARCHIVE" "$REMOTE_RELEASE/app.tar.gz"

echo "== Unpacking remote release =="
ssh_cmd "
  set -euo pipefail
  cd '$REMOTE_RELEASE'
  tar -xzf app.tar.gz
  rm -f app.tar.gz
  test -f server.js
  test -d .next/static
  test -d public
  if [ ! -f '$ENV_FILE' ]; then
    echo 'Warning: env file not found: $ENV_FILE' >&2
  fi
"

echo "== Updating current symlink =="
ssh_cmd "ln -sfn '$REMOTE_RELEASE' '$REMOTE_BASE/current'"

if [[ "$ACTIVATE" -ne 1 ]]; then
  cat <<DONE
Release uploaded and current symlink prepared, but service was not restarted.

To activate later:
  scripts/deploy-nginx.sh --activate

Or manually on server:
  systemctl daemon-reload
  systemctl restart $SERVICE_NAME
  systemctl status $SERVICE_NAME --no-pager

Rollback hint:
  ln -sfn <previous-release> $REMOTE_BASE/current
  systemctl restart $SERVICE_NAME
DONE
  exit 0
fi

echo "== Activating systemd service =="
ssh_cmd "
  set -euo pipefail
  systemctl daemon-reload
  systemctl restart '$SERVICE_NAME'
  systemctl status '$SERVICE_NAME' --no-pager
"

echo "== Remote smoke checks =="
ssh_cmd "curl -I --max-time 20 http://127.0.0.1:$APP_PORT/"
curl -I --max-time 20 https://www.yunsucake.com/

echo "Deployment activation completed."
