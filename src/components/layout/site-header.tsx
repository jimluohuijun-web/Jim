"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flower2, Menu, X } from "lucide-react";

import { siteConfig } from "@/data/site";
import { type MouseEvent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const mobileNavItems = siteConfig.navItems;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionMap = new Map(
      siteConfig.navItems
        .filter((item) => item.href.startsWith("/#"))
        .map((item) => [item.href.replace("/#", ""), item.href])
    );

    const syncHomeState = () => {
      if (window.scrollY < 260) {
        setActiveHref("/");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveHref(sectionMap.get(visibleEntry.target.id) ?? "/");
        } else {
          syncHomeState();
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.12, 0.25, 0.5],
      }
    );

    sectionMap.forEach((_, sectionId) => {
      const target = document.getElementById(sectionId);

      if (target) {
        observer.observe(target);
      }
    });

    const initialFrame = window.requestAnimationFrame(syncHomeState);
    window.addEventListener("scroll", syncHomeState, { passive: true });

    return () => {
      window.cancelAnimationFrame(initialFrame);
      observer.disconnect();
      window.removeEventListener("scroll", syncHomeState);
    };
  }, [pathname]);

  function handleMobileNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    setIsOpen(false);

    if (!href.startsWith("/#") || window.location.pathname !== "/") {
      return;
    }

    event.preventDefault();

    const targetId = href.replace("/#", "");
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  }

  return (
    <header className="sticky top-0 z-[70] border-b border-[rgb(216_154_66_/_28%)] bg-[#1A0F0A]/95 shadow-[0_14px_42px_rgb(0_0_0_/_26%)] backdrop-blur-xl">
      <div className="ysj-container hidden min-h-[5.75rem] items-center justify-between gap-5 lg:flex">
        <Link
          href="/"
          className="relative flex size-[5.25rem] shrink-0 items-center rounded-full bg-[radial-gradient(circle,rgb(248_230_191_/_10%),transparent_70%)] lg:ml-12 xl:ml-16"
          aria-label="云酥坊首页"
        >
          <Image
            src="/images/logo/yunsucake-seal-logo.png"
            alt="云酥坊品牌 Logo"
            fill
            sizes="84px"
            className="object-contain p-1 drop-shadow-[0_0_14px_rgb(242_195_107_/_18%)]"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="主导航">
          {siteConfig.navItems.map((item) => {
            const isActive =
              pathname === "/"
                ? activeHref === item.href
                : item.href === pathname || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative px-1 py-3 text-sm font-medium transition-colors duration-500 hover:text-[#F2C36B]",
                  isActive ? "text-[#F2C36B]" : "text-[#E8CFA4]/90"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-1 -bottom-0.5 h-px origin-center bg-[#D89A42] transition-transform duration-500 group-hover:scale-x-100",
                    isActive ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <Link
          href="/reserve"
          className="hidden min-h-11 items-center gap-2 rounded-full border border-[#F2C36B]/45 bg-[linear-gradient(135deg,#F2C36B,#D89A42_52%,#A96828)] px-5 text-sm font-medium text-[#1A0F0A] shadow-[0_14px_36px_rgb(216_154_66_/_22%)] transition-all duration-500 hover:-translate-y-0.5 hover:brightness-105 lg:inline-flex"
        >
          <Flower2 className="size-4" />
          预约试吃
        </Link>
        <nav
          className="-mr-2 hidden max-w-[50vw] items-center gap-1 overflow-x-auto lg:hidden"
          aria-label="移动端主导航"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-2.5 py-2 text-xs text-[#E8CFA4]/86 transition-colors hover:text-[#F2C36B]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="ysj-container flex min-h-16 items-center justify-between gap-4 lg:hidden">
        <Link
          href="/"
          onClick={(event) => handleMobileNavClick(event, "/")}
          className="relative size-14 shrink-0 rounded-full bg-[radial-gradient(circle,rgb(248_230_191_/_10%),transparent_70%)]"
          aria-label="云酥坊首页"
        >
          <Image
            src="/images/logo/yunsucake-seal-logo.png"
            alt="云酥坊品牌 Logo"
            fill
            sizes="56px"
            className="object-contain p-1 drop-shadow-[0_0_12px_rgb(242_195_107_/_18%)]"
            priority
          />
        </Link>
        <button
          type="button"
          aria-label={isOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer-menu"
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-full border border-[#D89A42]/35 bg-[#2A1710]/88 text-[#F2C36B] shadow-[0_10px_24px_rgb(0_0_0_/_22%)] transition-colors hover:bg-[#3A2116]"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-x-0 top-16 z-[80] min-h-[calc(100dvh-4rem)] lg:hidden">
          <button
            type="button"
            aria-label="关闭菜单遮罩"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#1A0F0A]/56 backdrop-blur-[2px]"
          />
          <div
            id="mobile-drawer-menu"
            className="relative ml-auto mr-4 mt-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] border border-[#D89A42]/28 bg-[#1A0F0A]/96 p-4 shadow-[0_22px_60px_rgb(0_0_0_/_32%)] backdrop-blur-xl"
          >
            <nav className="grid gap-1" aria-label="移动端抽屉菜单">
              {mobileNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleMobileNavClick(event, item.href)}
                  className="rounded-2xl px-4 py-3 text-[0.95rem] font-medium text-[#E8CFA4] transition-colors hover:bg-[#D89A42]/12 hover:text-[#F2C36B]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/reserve"
              onClick={(event) => handleMobileNavClick(event, "/reserve")}
              className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#F2C36B]/45 bg-[linear-gradient(135deg,#F2C36B,#D89A42_52%,#A96828)] px-5 text-sm font-medium text-[#1A0F0A] shadow-[0_14px_36px_rgb(216_154_66_/_18%)]"
            >
              <Flower2 className="size-4" />
              预约试吃
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
