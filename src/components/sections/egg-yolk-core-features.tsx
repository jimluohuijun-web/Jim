import { Egg, HandHeart, Layers3, Scale } from "lucide-react";

const coreFeatures = [
  {
    number: "01",
    icon: Egg,
    title: "真颗蛋黄，满口沙糯",
    description:
      "甄选完整海鸭咸蛋黄，拒绝碎末填充，掰开起沙流香，咸香纯正浓郁。",
  },
  {
    number: "02",
    icon: Layers3,
    title: "超薄起酥，皮薄馅足",
    description:
      "传统薄酥开酥工艺，摒弃厚重面皮，皮薄料满，每一口都是扎实馅料。",
  },
  {
    number: "03",
    icon: Scale,
    title: "黄金咸甜比，老少皆宜",
    description:
      "改良低糖红豆沙，柔和中和蛋黄咸香，不油、不腻、不齁，全家都爱吃。",
  },
  {
    number: "04",
    icon: HandHeart,
    title: "纯手工现做，新鲜短保",
    description:
      "拒绝工业预制半成品，手工揉酥、包馅、成型，现烤现发，锁住出炉新鲜。",
  },
];

export function EggYolkCoreFeatures() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff8ee] px-4 py-14 text-[#4f3a2c] sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(200,169,107,0.14),transparent_28%),linear-gradient(180deg,#fff8ee_0%,#fbf1e4_100%)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-px w-[min(42rem,70vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c8a96b]/45 to-transparent" />
      <div className="absolute bottom-4 right-8 -z-10 hidden h-64 w-64 rounded-full border border-[#c8a96b]/18 lg:block" />

      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c6a4]/70 bg-[#fffaf3]/82 px-4 py-10 shadow-[0_24px_80px_rgba(79,58,44,0.08)] sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-[0.18em] text-[#8b7449]">
            快速建立产品认知优势，帮助用户一眼看懂差异
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#3f3026] sm:text-4xl lg:text-[2.65rem]">
            快速建立优势，拉开普通蛋黄酥差距
          </h2>
          <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-[#b8241c]" />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group relative flex min-h-[24rem] flex-col items-center rounded-[1.35rem] border border-[#d8c6a4]/85 bg-[#fffaf2]/88 px-5 py-8 text-center shadow-[0_14px_42px_rgba(79,58,44,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(79,58,44,0.10)]"
              >
                <div className="relative flex size-28 items-center justify-center rounded-full border border-[#c8a96b]/55 bg-[radial-gradient(circle,#fffdf7_0%,#f8eddf_100%)] text-[#9b5f2c]">
                  <span className="absolute inset-3 rounded-full border border-[#c8a96b]/22" />
                  <Icon className="relative size-14 stroke-[1.35]" />
                </div>

                <span className="mt-5 inline-flex size-9 items-center justify-center rounded-full bg-[#b8241c] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(184,36,28,0.18)]">
                  {feature.number}
                </span>

                <h3 className="mt-5 font-serif text-2xl font-semibold leading-snug text-[#9f1f18]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#6a6258]">{feature.description}</p>

                <span className="mt-auto block h-1 w-10 rounded-full bg-[#b8241c]/85 transition group-hover:w-14" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
