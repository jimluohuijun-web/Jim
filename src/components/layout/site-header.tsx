"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flower2, Menu, X } from "lucide-react";

import { siteConfig } from "@/data/site";
import { type MouseEvent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const mobileNavItems = [
  { label: "首页", href: "/#home" },
  { label: "花酥系列", href: "/#pastries" },
  { label: "月饼官宣", href: "/#mooncakes" },
  { label: "试吃登记", href: "/#trial" },
  { label: "品牌故事", href: "/#brand" },
  { label: "联系我们", href: "/#contact" },
];

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
    <header className="sticky top-0 z-[70] border-b border-soft-gold/16 bg-[#f7f3ec]/92 shadow-[0_10px_30px_rgb(79_95_78_/_4%)] backdrop-blur-xl">
      <div className="ysj-container hidden min-h-[6.25rem] items-center justify-between gap-5 md:flex">
        <Link
          href="/"
          className="relative flex h-[5.25rem] w-[13.5rem] shrink-0 items-center sm:w-[15.5rem] md:h-[5.75rem] md:w-[17.5rem]"
          aria-label="云酥坊首页"
        >
          <Image
            src="/images/logo/yunsufang-logo-cropped.webp"
            alt="云酥坊品牌 Logo"
            fill
            sizes="(min-width: 768px) 280px, 216px"
            className="object-contain object-left"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="主导航">
          {siteConfig.navItems.map((item) => {
            const isActive =
              pathname === "/"
                ? activeHref === item.href
                : item.href === pathname || (item.href !== "/" && item.href.startsWith(pathname));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative px-1 py-3 text-sm font-medium transition-colors duration-500 hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/80"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-1 -bottom-0.5 h-px origin-center bg-primary transition-transform duration-500 group-hover:scale-x-100",
                    isActive ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <Link
          href="/#tasting-register"
          className="ysj-button-primary hidden min-h-11 items-center gap-2 px-5 text-sm font-medium md:inline-flex"
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
              className="shrink-0 rounded-full px-2.5 py-2 text-xs text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="ysj-container flex min-h-16 items-center justify-between gap-4 md:hidden">
        <Link
          href="/#home"
          onClick={(event) => handleMobileNavClick(event, "/#home")}
          className="relative h-14 w-44 shrink-0"
          aria-label="云酥坊首页"
        >
          <Image
            src="/images/logo/yunsufang-logo-cropped.webp"
            alt="云酥坊品牌 Logo"
            fill
            sizes="160px"
            className="object-contain object-left"
            priority
          />
        </Link>
        <button
          type="button"
          aria-label={isOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer-menu"
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-full border border-soft-gold/25 bg-[#fffaf4]/70 text-primary shadow-[0_10px_24px_rgb(79_95_78_/_6%)] transition-colors hover:bg-[#fffaf4]"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-x-0 top-16 z-[80] min-h-[calc(100dvh-4rem)] md:hidden">
          <button
            type="button"
            aria-label="关闭菜单遮罩"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#163c33]/20 backdrop-blur-[2px]"
          />
          <div
            id="mobile-drawer-menu"
            className="relative ml-auto mr-4 mt-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] border border-soft-gold/20 bg-[#fffaf4]/96 p-4 shadow-[0_22px_60px_rgb(22_60_51_/_18%)] backdrop-blur-xl"
          >
            <nav className="grid gap-1" aria-label="移动端抽屉菜单">
              {mobileNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleMobileNavClick(event, item.href)}
                  className="rounded-2xl px-4 py-3 text-[0.95rem] font-medium text-foreground transition-colors hover:bg-[#f7f3ec]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/#trial"
              onClick={(event) => handleMobileNavClick(event, "/#trial")}
              className="ysj-button-primary mt-4 flex min-h-11 w-full items-center justify-center gap-2 text-sm font-medium"
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
