import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#D9B46A]/18 bg-[#080604] pb-[calc(6.5rem+env(safe-area-inset-bottom))] text-[#fffaf4] lg:border-t-0 lg:bg-[linear-gradient(135deg,#4c5c47,#31412f)] lg:pb-0">
      <div className="ysj-container grid gap-6 py-8 text-sm text-[#fffaf4]/72 lg:grid-cols-[1.1fr_1.1fr_1fr] lg:items-center lg:gap-8 lg:py-9">
        <div className="flex items-center gap-4 lg:gap-5 lg:pl-16">
          <span className="relative block size-20 shrink-0 overflow-visible lg:size-32">
            <Image
              src="/images/logo/yunsufang-logo-current.webp"
              alt="云酥坊品牌 Logo"
              fill
              sizes="(min-width: 1024px) 128px, 80px"
              className="object-contain drop-shadow-[0_0_16px_rgb(242_195_107_/_16%)]"
            />
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold text-[#fffaf4]">{siteConfig.name}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-soft-gold">YUNSUFANG</p>
            <p className="text-xs leading-5 text-[#E8CFA4]/76 lg:hidden">一口酥香，东方新味</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-4">
          <p className="max-w-md text-xs leading-6 lg:text-sm lg:leading-7">
            新中式手作酥点，花酥试吃登记与中秋月饼官宣通知正在准备中。
          </p>
          <nav
            className="grid grid-cols-2 gap-x-5 gap-y-2 text-xs lg:flex lg:flex-wrap lg:text-sm"
            aria-label="页脚快速链接"
          >
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-500 hover:text-soft-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#D9B46A]/16 pt-5 lg:items-end lg:border-t-0 lg:pt-0 lg:text-right">
          <div className="flex items-center gap-3 text-[#fffaf4]">
            <Mail className="size-4 shrink-0 text-soft-gold lg:size-5" />
            <span className="break-all text-sm font-semibold tracking-[0.04em] lg:text-lg">
              szkuge888@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid size-24 place-items-center rounded-xl border border-[#D9B46A]/24 bg-[#fffaf4]/92 text-center text-[0.68rem] leading-4 text-primary lg:size-16 lg:rounded-lg lg:text-[0.6rem]">
              即将<br />开放
            </span>
            <p className="max-w-[9rem] text-xs leading-6 lg:text-sm">社交媒体<br />内容准备中</p>
          </div>
          <p className="text-xs lg:text-sm">当前为准备期，尚无固定门店。</p>
          <p className="pt-1 text-xs text-[#fffaf4]/56 lg:pt-2 lg:text-sm">
            © 2026 云酥坊 yunsucake. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
