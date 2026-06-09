import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Gift, Moon } from "lucide-react";

import { MooncakeCard } from "@/components/sections/mooncake-card";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoFaqSection, SeoInternalLinks } from "@/components/seo/seo-content-blocks";
import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";
import { mooncakePreview } from "@/data/products";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildMetadata, pageSeoMap } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeoMap.mooncakes);

const mooncakeFaqs = [
  {
    question: "云酥坊中秋月饼礼盒适合哪些送礼场景？",
    answer:
      "中秋月饼礼盒适合加拿大华人家庭团圆、亲友拜访、长辈送礼、客户答谢和企业团购。可重点关注蛋黄莲蓉、豆沙、五仁、冬翅与苏式鲜肉月饼。",
  },
  {
    question: "月饼礼盒会有低糖口味吗？",
    answer:
      "云酥坊月饼强调低糖不腻和真材实料，豆沙、莲蓉、五仁、冬翅等口味都会围绕更适合华人家庭分享的清爽甜度设计。",
  },
  {
    question: "加拿大中秋月饼礼盒如何提前了解开放时间？",
    answer:
      "可以通过试吃登记页面留下联系方式，优先接收中秋月饼礼盒、口味试吃、批次开放和企业团购咨询提醒。",
  },
];

const mooncakeLinks = [
  { label: "蛋黄莲蓉月饼", href: "/products/egg-yolk-lotus-mooncake", description: "整颗蛋黄与低糖莲蓉的经典广式月饼" },
  { label: "苏式鲜肉月饼", href: "/products/suzhou-fresh-meat-mooncake", description: "咸口现烤，适合中秋聚会试吃" },
  { label: "中式酥点礼盒", href: "/gift-box", description: "搭配花酥、蛋黄酥与凤梨酥的送礼方案" },
  { label: "礼盒咨询", href: "/contact", description: "咨询企业团购、客户答谢与节日礼盒" },
];

export default function MooncakesPage() {
  return (
    <main className="ysf-pc-home overflow-hidden bg-[#1A0F0A] text-[#E8CFA4]">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "首页", path: "/" },
          { name: "中秋月饼礼盒", path: "/mooncakes" },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(mooncakeFaqs)} />

      <section className="relative isolate overflow-hidden border-b border-[#D89A42]/16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgb(242_195_107_/_15%),transparent_28rem),radial-gradient(circle_at_82%_22%,rgb(116_67_32_/_30%),transparent_25rem),linear-gradient(180deg,#1A0F0A,#120905_70%,#1A0F0A)]" />
        <div className="ysj-container ysj-section grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div className="flex max-w-4xl flex-col gap-7">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
              Mid-Autumn Mooncakes｜Canada
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-[#F8E6BF] md:text-7xl">
              加拿大华人中秋月饼礼盒
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[#E8CFA4]/90 md:text-xl md:leading-9">
              云酥坊为加拿大华人家庭准备中秋月饼礼盒，包含广式蛋黄莲蓉、低糖豆沙、传统五仁、特色冬翅与苏式鲜肉月饼，适合节日送礼、家庭团圆和企业团购。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/reserve" className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold">
                <CalendarDays className="size-4" />
                加入中秋提醒
              </Link>
              <Link href="/contact" className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold">
                <Gift className="size-4" />
                咨询礼盒团购
              </Link>
            </div>
          </div>

          <BrandImage
            src={pageMoodImages.giftboxConcept.src}
            alt="云酥坊加拿大中秋月饼礼盒概念图"
            ratio="4:5"
            variant="plain"
            priority
            sizes="(min-width: 1024px) 34vw, 90vw"
            className="rounded-[1.75rem] border border-[#D89A42]/32 bg-[#2A1710]/72 shadow-[0_34px_96px_rgb(0_0_0_/_42%)]"
          />
        </div>
      </section>

      <section className="ysj-section-tight bg-[#120905]">
        <div className="ysj-container flex flex-col gap-10">
          <div className="flex max-w-3xl flex-col gap-4">
            <span className="h-px w-16 bg-[#D89A42]" />
            <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
              Mooncake Flavors｜月饼口味
            </p>
            <h2 className="flex items-center gap-3 text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
              <Moon className="size-8 text-[#F2C36B]" />
              中秋五款风味预告
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {mooncakePreview.map((mooncake) => (
              <MooncakeCard key={mooncake.id} mooncake={mooncake} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      <SeoFaqSection eyebrow="Mooncake FAQ｜月饼常见问题" title="中秋月饼礼盒咨询" faqs={mooncakeFaqs} />
      <SeoInternalLinks title="相关月饼与礼盒入口" links={mooncakeLinks} />
    </main>
  );
}
