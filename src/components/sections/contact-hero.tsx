"use client";

import Link from "next/link";
import { BriefcaseBusiness, Gift, Handshake } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";

const contactTags = ["企业团购", "节日礼盒", "品牌合作", "试吃预约"];

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_14%,rgb(242_195_107_/_16%),transparent_28rem),radial-gradient(circle_at_84%_18%,rgb(116_67_32_/_30%),transparent_26rem),linear-gradient(180deg,#1A0F0A,#120905_60%,#1A0F0A)]" />
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 size-[34rem] -translate-x-1/2 rounded-full border border-[#D89A42]/12" />
      <div className="ysj-container ysj-section">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="flex max-w-5xl flex-col gap-8">
            <div className="flex flex-wrap gap-2">
              {contactTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D89A42]/34 bg-[#2A1710]/72 px-4 py-2 text-xs font-medium tracking-[0.18em] text-[#F2C36B]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-[#F8E6BF] md:text-7xl">
                联系我们
              </h1>
              <p className="max-w-4xl text-lg leading-8 text-[#E8CFA4]/82 md:text-xl md:leading-9">
                企业团购、节日礼盒、品牌合作与试吃预约，欢迎联系云酥坊。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
              >
                <BriefcaseBusiness className="size-4" />
                咨询企业团购
              </Link>
              <Link
                href="/products"
                className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
              >
                <Gift className="size-4" />
                查看产品系列
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#D89A42]/12" />
            <BrandImage
              src={pageMoodImages.contactMood.src}
              alt={pageMoodImages.contactMood.alt}
              ratio="4:5"
              variant="plain"
              priority
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="rounded-[1.75rem] border border-[#D89A42]/32 bg-[#2A1710]/72 shadow-[0_34px_96px_rgb(0_0_0_/_42%)]"
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-[1.25rem] border border-[#D89A42]/28 bg-[#1A0F0A]/82 p-4 shadow-[0_18px_48px_rgb(0_0_0_/_32%)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full border border-[#F2C36B]/30 text-[#F2C36B]">
                  <Handshake className="size-5" />
                </span>
                <p className="text-sm leading-6 text-[#E8CFA4]/82">
                  请通过预约表单提交需求，我们会尽快联系确认。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
