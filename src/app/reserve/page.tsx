import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness, CalendarCheck, Gift, Moon, Sparkles } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { ReserveForm } from "@/components/sections/reserve-form";
import { ReserveInfoCard } from "@/components/sections/reserve-info-card";
import { pageMoodImages } from "@/data/images";

export const metadata: Metadata = {
  title: "新品尝鲜与中秋预订｜云酥坊 yunsucake",
  description:
    "提前锁定云酥坊新品试吃名额，咨询中秋礼盒预订、企业福利团购与温哥华小批量试吃安排。",
};

const reserveTags = ["新品试吃", "中秋礼盒", "企业团购", "现做现发"];

const reserveScenes = [
  {
    title: "新品试吃",
    description: "优先体验云酥坊新品酥点，填写偏好后等待名额确认。",
    icon: Sparkles,
  },
  {
    title: "中秋礼盒预订",
    description: "提前锁定中秋批次，适合家庭礼赠、亲友分享。",
    icon: Moon,
  },
  {
    title: "企业福利团购",
    description: "支持批量采购、礼盒组合、企业定制与代发咨询。",
    icon: BriefcaseBusiness,
  },
];

export default function ReservePage() {
  return (
    <main className="ysf-pc-home overflow-hidden bg-[#1A0F0A] text-[#E8CFA4]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgb(242_195_107_/_16%),transparent_27rem),radial-gradient(circle_at_82%_16%,rgb(116_67_32_/_28%),transparent_24rem),linear-gradient(180deg,#1A0F0A,#120905_62%,#1A0F0A)]" />
        <div className="pointer-events-none absolute left-[-10rem] top-20 size-[26rem] rounded-full border border-[#D89A42]/12" />
        <div className="pointer-events-none absolute right-[-7rem] top-10 size-[32rem] rounded-full border border-[#F2C36B]/10" />
        <div className="ysj-container ysj-section grid gap-10 lg:grid-cols-[1.02fr_0.78fr] lg:items-center">
          <div className="flex max-w-4xl flex-col gap-8">
            <div className="flex flex-wrap gap-2">
              {reserveTags.map((tag) => (
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
                新品尝鲜与中秋预订
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#E8CFA4]/82 md:text-xl md:leading-9">
                提前锁定云酥坊新品试吃名额，或咨询中秋礼盒与企业团购方案。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#reserve-form"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
              >
                <CalendarCheck className="size-4" />
                立即填写预约
              </a>
              <Link
                href="/contact"
                className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
              >
                <BriefcaseBusiness className="size-4" />
                咨询企业团购
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#D89A42]/12" />
            <BrandImage
              src={pageMoodImages.reserveMood.src}
              alt={pageMoodImages.reserveMood.alt}
              ratio="4:5"
              variant="plain"
              priority
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="rounded-[1.75rem] border border-[#D89A42]/32 bg-[#2A1710]/72 shadow-[0_34px_96px_rgb(0_0_0_/_42%)]"
              imageClassName="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="ysj-section-tight border-y border-[#D89A42]/16 bg-[#120905]">
        <div className="ysj-container grid gap-5 md:grid-cols-3">
          {reserveScenes.map((scene) => {
            const Icon = scene.icon;

            return (
              <article
                key={scene.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#D89A42]/24 bg-[#2A1710]/60 p-6 shadow-[0_22px_60px_rgb(0_0_0_/_22%)] transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="absolute -right-14 top-6 size-40 rounded-full border border-[#D89A42]/12" />
                <div className="relative flex flex-col gap-5">
                  <span className="flex size-12 items-center justify-center rounded-full border border-[#F2C36B]/32 bg-[#1A0F0A]/72 text-[#F2C36B]">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-semibold text-[#F8E6BF]">{scene.title}</h2>
                    <p className="text-sm leading-7 text-[#E8CFA4]/76">{scene.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="reserve-form" className="ysf-trial ysj-section-tight scroll-mt-24 bg-[#1A0F0A]">
        <div className="ysj-container grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <ReserveInfoCard />
          <ReserveForm />
        </div>
      </section>

      <section className="ysj-section-tight border-t border-[#D89A42]/16 bg-[linear-gradient(180deg,#120905,#1A0F0A)]">
        <div className="ysj-container">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#D89A42]/28 bg-[#2A1710]/72 p-7 shadow-[0_26px_80px_rgb(0_0_0_/_34%)] md:p-10">
            <div className="absolute -right-16 top-0 size-56 rounded-full border border-[#F2C36B]/14" />
            <div className="absolute -bottom-24 left-10 size-72 rounded-full bg-[#D89A42]/10 blur-3xl" />
            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex max-w-3xl flex-col gap-3">
                <Gift className="size-6 text-[#F2C36B]" />
                <h2 className="text-3xl font-semibold leading-tight text-[#F8E6BF]">
                  想先了解产品再预约？
                </h2>
                <p className="text-base leading-8 text-[#E8CFA4]/76 md:text-lg">
                  先查看云酥坊酥点、花酥与中秋月饼系列，再留下试吃或礼盒咨询需求。
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/products"
                  className="ysj-button-primary inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold"
                >
                  查看产品系列
                </Link>
                <Link
                  href="/contact"
                  className="ysj-button-secondary inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold"
                >
                  联系企业团购
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
