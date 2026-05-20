import Image from "next/image";
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
            从原料、起酥、现做到品质把控，每一步都为一口安心酥香服务。
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {craftSteps.map((step, index) => {
            const Icon = craftIcons[step.icon];

            return (
              <article
                key={step.id}
                className="group relative min-h-[15rem] overflow-hidden rounded-[1.05rem] border border-soft-gold/24 bg-[#120a06] shadow-[0_18px_48px_rgb(0_0_0_/_24%)] transition-all duration-500 hover:-translate-y-1 hover:border-soft-gold/58 hover:shadow-[0_22px_62px_rgb(216_154_66_/_12%)]"
              >
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 92vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(8_6_4_/_44%)_0%,rgb(8_6_4_/_33%)_45%,rgb(8_6_4_/_10%)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(8_6_4_/_9%)_0%,rgb(8_6_4_/_36%)_100%)]" />
                <span className="absolute right-5 top-5 text-sm font-semibold text-soft-gold/55">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex min-h-[15rem] flex-col justify-end p-5">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-full border border-soft-gold/30 bg-[#1A0F0A]/72 text-soft-gold backdrop-blur-sm">
                    <Icon className="size-5" strokeWidth={1.45} />
                  </div>
                  <h3 className="text-xl font-semibold leading-tight text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/86">{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
