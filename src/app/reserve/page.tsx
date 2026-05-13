import type { Metadata } from "next";

import { ReserveForm } from "@/components/sections/reserve-form";
import { ReserveInfoCard } from "@/components/sections/reserve-info-card";

export const metadata: Metadata = {
  title: "温哥华预约意向｜云酥坊 yunsucake",
  description:
    "留下云酥坊温哥华预约意向，参与 2026 年 7-8 月小批量试吃、产品测试和礼盒咨询的第一阶段通知。",
};

export default function ReservePage() {
  return (
    <>
      <section className="ysj-container ysj-section flex flex-col gap-6">
        <p className="text-sm uppercase tracking-[0.32em] text-primary/80">
          yunsucake · Vancouver Reserve
        </p>
        <div className="flex max-w-4xl flex-col gap-5">
          <h1 className="ysj-title-xl text-balance">温哥华预约意向</h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
            云酥坊计划于 2026 年 7-8 月在温哥华开启小批量试吃与预约意向收集。先留下你的意向，我们会在开放时优先通知你。
          </p>
        </div>
      </section>

      <section className="ysj-section-tight border-t border-border/60 bg-background/48">
        <div className="ysj-container grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <ReserveInfoCard />
          <ReserveForm />
        </div>
      </section>

      <section className="ysj-section-tight">
        <div className="ysj-container">
          <div className="ysj-card relative overflow-hidden p-7 md:p-10">
            <div className="absolute -right-16 top-0 size-56 rounded-full border border-soft-gold/25" />
            <div className="absolute -bottom-24 left-10 size-72 rounded-full bg-mist-gray/28 blur-3xl" />
            <p className="relative max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              我们会根据预约人数、产品测试和取货安排，逐步开放第一批试吃名额。感谢你愿意提前认识云酥坊。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
