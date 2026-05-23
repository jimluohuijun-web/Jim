"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

const socials = [
  {
    name: "预约表单",
    status: "推荐优先提交",
    note: "请通过预约表单提交需求，我们会尽快联系确认。",
    icon: Send,
  },
  {
    name: "WeChat / 微信",
    status: "即将开放",
    note: "后续开放后会用于试吃确认、取货沟通与团购细节。",
    icon: MessageCircle,
  },
  {
    name: "Email",
    status: "即将开放",
    note: "适合企业团购、品牌合作与节日礼盒方案沟通。",
    icon: Mail,
  },
];

export function ContactSocial() {
  return (
    <section className="ysj-section-tight border-y border-[#D89A42]/16 bg-[#120905]">
      <div className="ysj-container flex flex-col gap-10">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="flex flex-col gap-4">
            <span className="h-px w-16 bg-[#D89A42]" />
            <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">Contact Method</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
              联系方式
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#E8CFA4]/76 md:justify-self-end md:text-lg">
            当前为温哥华第一阶段准备期。若信息尚未开放，请优先通过预约表单提交需求，我们会尽快联系确认。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {socials.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.article
                key={social.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.66,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-[1.5rem] border border-[#D89A42]/24 bg-[#2A1710]/60 p-7 shadow-[0_22px_60px_rgb(0_0_0_/_22%)]"
              >
                <div className="absolute -right-12 top-6 size-40 rounded-full border border-[#D89A42]/12" />
                <div className="relative flex min-h-52 flex-col justify-between gap-8">
                  <span className="flex size-12 items-center justify-center rounded-full border border-[#F2C36B]/32 bg-[#1A0F0A]/72 text-[#F2C36B]">
                    <Icon data-icon="inline-start" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold leading-tight text-[#F8E6BF]">
                      {social.name}
                    </h3>
                    <p className="text-sm leading-7 text-[#E8CFA4]/72">{social.note}</p>
                    <span className="w-fit rounded-full border border-[#F2C36B]/25 bg-[#1A0F0A]/50 px-3 py-1 text-sm text-[#F2C36B]">
                      {social.status}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
