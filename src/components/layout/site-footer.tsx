import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background/82">
      <div className="ysj-container grid gap-8 py-10 text-sm text-muted-foreground lg:grid-cols-[1.1fr_1fr_0.85fr]">
        <div className="flex flex-col gap-3">
          <p className="text-base font-semibold text-foreground">
            {siteConfig.name} · {siteConfig.englishName}
          </p>
          <p className="max-w-md leading-7">
            面向温哥华的新中式手作甜点品牌，正在准备第一阶段小批量试吃与预约。
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="页脚快速链接">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-500 hover:text-foreground"
            >
              {item.label === "温哥华预订" ? "预约意向" : item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 lg:text-right">
          <p>当前为准备期，尚无固定门店。</p>
          <p>© 2026 云酥记 Yun Su Ji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
