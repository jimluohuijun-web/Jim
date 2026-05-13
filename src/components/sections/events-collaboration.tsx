"use client";

import { motion } from "framer-motion";
import { Handshake, MessageCircleHeart, Package, Store } from "lucide-react";

const collaborations = [
  {
    title: "小型快闪合作",
    description: "适合咖啡店、茶空间、生活方式空间的小批量甜点快闪。",
    icon: Store,
  },
  {
    title: "活动甜点支持",
    description: "适合朋友聚会、品牌小活动、下午茶分享等轻量场景。",
    icon: Handshake,
  },
  {
    title: "礼盒咨询",
    description: "适合节日送礼、企业小批量礼盒、朋友分享礼盒。",
    icon: Package,
  },
  {
    title: "口味共创反馈",
    description: "欢迎提前预约试吃，为第一阶段产品口味提供反馈。",
    icon: MessageCircleHeart,
  },
];

export function EventsCollaboration() {
  return (
    <section className="ysj-section-tight">
      <div className="ysj-container flex flex-col gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="h-px w-16 bg-primary" />
          <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Collaboration</p>
          <h2 className="ysj-title-lg text-balance">欢迎这些合作意向</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {collaborations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.66,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="ysj-card relative overflow-hidden p-7"
              >
                <div className="absolute -right-20 top-6 size-56 rounded-full border border-soft-gold/20" />
                <div className="relative grid gap-5 sm:grid-cols-[3rem_1fr]">
                  <span className="flex size-12 items-center justify-center rounded-full border border-soft-gold/35 bg-cloud-white/55 text-primary">
                    <Icon data-icon="inline-start" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                    <p className="text-base leading-7 text-muted-foreground">{item.description}</p>
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
