import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/72 backdrop-blur-xl">
      <div className="ysj-container flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="云酥坊首页">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-soft-gold/40 bg-card/75 text-sm font-semibold text-primary shadow-[0_12px_32px_rgb(36_32_29_/_7%)]">
            云
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-base font-semibold tracking-normal">{siteConfig.name}</span>
            <span className="truncate text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
              {siteConfig.englishName}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors duration-500 hover:bg-card/70 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/reserve"
          className="ysj-button-primary hidden px-4 py-2 text-sm font-medium md:inline-flex"
        >
          加入试吃名单
        </Link>
        <nav
          className="-mr-2 flex max-w-[52vw] items-center gap-1 overflow-x-auto md:hidden"
          aria-label="移动端主导航"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-2.5 py-2 text-xs text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
