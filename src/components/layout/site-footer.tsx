import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[linear-gradient(135deg,#4c5c47,#31412f)] pb-[calc(6.5rem+env(safe-area-inset-bottom))] text-[#fffaf4] md:pb-0">
      <div className="ysj-container grid gap-8 py-9 text-sm text-[#fffaf4]/72 lg:grid-cols-[1.1fr_1.1fr_1fr] lg:items-center">
        <div className="flex items-center gap-5 lg:pl-16">
          <span className="relative block size-28 shrink-0 overflow-visible lg:size-32">
            <Image
              src="/images/logo/yunsufang-logo-current.webp"
              alt="云酥坊品牌 Logo"
              fill
              sizes="128px"
              className="object-contain drop-shadow-[0_0_16px_rgb(242_195_107_/_16%)]"
            />
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold text-[#fffaf4]">{siteConfig.name}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-soft-gold">YUNSUFANG</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="max-w-md leading-7">
            新中式手作酥点，花酥试吃登记与中秋月饼官宣通知正在准备中。
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="页脚快速链接">
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

        <div className="flex flex-col gap-4 lg:items-end lg:text-right">
          <div className="flex items-center gap-3 text-[#fffaf4]">
            <Mail className="size-5 text-soft-gold" />
            <span className="text-lg font-semibold tracking-[0.04em]">szkuge888@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid size-16 place-items-center rounded-lg border border-[#fffaf4]/20 bg-[#fffaf4]/92 text-center text-[0.6rem] leading-4 text-primary">
              即将<br />开放
            </span>
            <p className="max-w-[9rem] leading-6">社交媒体<br />内容准备中</p>
          </div>
          <p>当前为准备期，尚无固定门店。</p>
          <p className="pt-2 text-[#fffaf4]/56">© 2026 云酥坊 yunsucake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
