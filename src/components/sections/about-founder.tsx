"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flower2, Gift, Moon } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";

const productFamilies = [
  {
    title: "酥点系列",
    description: "蛋黄酥、凤梨酥、抹茶酥，适合日常分享与伴手礼。",
    href: "/products",
    icon: Gift,
  },
  {
    title: "花酥系列",
    description: "桃花酥、荷花酥、牡丹酥，以花型开酥承接茶席与礼盒。",
    href: "/products",
    icon: Flower2,
  },
  {
    title: "中秋月饼",
    description: "蛋黄莲蓉、豆沙、五仁、冬翅与鲜肉月饼，适合节令预订。",
    href: "/products#mid-autumn-preview",
    icon: Moon,
  },
];

export function AboutFounder() {
  return (
    <section className="ysj-section-tight border-y border-[#D89A42]/16 bg-[#120905]">
      <div className="ysj-container flex flex-col gap-10">
        <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div className="flex flex-col gap-4">
            <span className="h-px w-16 bg-[#D89A42]" />
            <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">Product Matrix</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
              从日常酥点到节令礼盒
            </h2>
          </div>
          <p className="text-base leading-8 text-[#E8CFA4]/76 md:text-lg">
            云酥坊围绕自食、送礼、企业福利与节令预订，形成清晰的东方糕点产品矩阵。
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="ysj-card relative overflow-hidden p-7 md:p-10"
        >
          <div className="absolute -right-24 top-8 size-80 rounded-full border border-[#D89A42]/18" />
          <div className="absolute -bottom-28 left-12 size-80 rounded-full bg-[#D89A42]/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <BrandImage
              src={pageMoodImages.aboutFounder.src}
              alt={pageMoodImages.aboutFounder.alt}
              ratio="4:5"
              variant="soft"
              sizes="(min-width: 1024px) 26vw, 86vw"
            />
            <div className="grid gap-4">
              {productFamilies.map((family) => {
                const Icon = family.icon;

                return (
                  <Link
                    key={family.title}
                    href={family.href}
                    className="group rounded-[1.25rem] border border-[#D89A42]/24 bg-[#1A0F0A]/46 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#F2C36B]/48"
                  >
                    <div className="grid gap-4 sm:grid-cols-[3rem_1fr_auto] sm:items-center">
                      <span className="flex size-12 items-center justify-center rounded-full border border-[#F2C36B]/32 bg-[#1A0F0A]/72 text-[#F2C36B]">
                        <Icon className="size-5" />
                      </span>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold leading-tight text-[#F8E6BF]">
                          {family.title}
                        </h3>
                        <p className="text-sm leading-6 text-[#E8CFA4]/74 md:text-base">
                          {family.description}
                        </p>
                      </div>
                      <ArrowRight className="hidden size-5 text-[#F2C36B] transition-transform group-hover:translate-x-1 sm:block" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
