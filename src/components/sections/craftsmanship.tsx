import { Layers3, ShieldCheck, Sparkles, Wheat } from "lucide-react";

import { craftSteps, type HomeCraftStep } from "@/data/home-sections";

const craftIcons: Record<HomeCraftStep["icon"], typeof Wheat> = {
  wheat: Wheat,
  layers: Layers3,
  sparkles: Sparkles,
  shield: ShieldCheck,
};

export function Craftsmanship() {
  return (
    <section id="craftsmanship" className="ysf-section ysj-section-tight scroll-mt-28">
      <div className="ysj-container">
        <div className="ysf-section-head mb-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-soft-gold">Craft</p>
          <h2 className="ysj-title-lg text-balance">匠心工艺 · 层层把控</h2>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground">
            本阶段先用统一 icon 呈现工艺路径，后续素材齐全后可替换为制作过程图片。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {craftSteps.map((step, index) => {
            const Icon = craftIcons[step.icon];

            return (
              <article
                key={step.id}
                className="ysf-craft-card relative min-h-full rounded-[1.35rem] border border-soft-gold/20 bg-cloud-white/62 p-6 shadow-[0_14px_42px_rgb(79_95_78_/_5%)]"
              >
                <span className="absolute right-5 top-5 text-sm font-semibold text-soft-gold/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mb-7 flex size-14 items-center justify-center rounded-full border border-soft-gold/28 bg-rice-white/65 text-soft-gold">
                  <Icon className="size-7" strokeWidth={1.45} />
                </div>
                <h3 className="text-xl font-semibold leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
