"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send, Sparkles } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    status: "即将开放",
    icon: Sparkles,
  },
  {
    name: "小红书",
    status: "即将开放",
    icon: Send,
  },
  {
    name: "WeChat / 微信",
    status: "即将开放",
    icon: MessageCircle,
  },
];

export function ContactSocial() {
  return (
    <section className="ysj-section-tight border-y border-border/60 bg-background/50">
      <div className="ysj-container flex flex-col gap-10">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="flex flex-col gap-4">
            <span className="h-px w-16 bg-soft-gold" />
            <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Social</p>
            <h2 className="ysj-title-lg text-balance">社交媒体</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground md:justify-self-end md:text-lg">
            云酥记的社交媒体内容正在准备中。未来会陆续更新产品测试、试吃开放、礼盒灵感和温哥华活动信息。
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
                className="ysj-card relative overflow-hidden p-7"
              >
                <div className="absolute -right-12 top-6 size-40 rounded-full border border-soft-gold/25" />
                <div className="relative flex min-h-48 flex-col justify-between gap-8">
                  <span className="flex size-12 items-center justify-center rounded-full border border-soft-gold/35 bg-cloud-white/55 text-primary">
                    <Icon data-icon="inline-start" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold leading-tight">{social.name}</h3>
                    <span className="w-fit rounded-full border border-primary/25 bg-cloud-white/50 px-3 py-1 text-sm text-primary">
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
