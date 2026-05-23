import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, Layers3, ShieldCheck, ShoppingCart, Sparkles } from "lucide-react";

const painTags = [
  {
    icon: Sparkles,
    title: "整颗蛋黄",
    text: "真整颗咸蛋黄，沙润咸香",
  },
  {
    icon: ShieldCheck,
    title: "低糖红豆沙",
    text: "甜度克制，细腻不齁嘴",
  },
  {
    icon: Layers3,
    title: "层层起酥超松软",
    text: "酥皮分明，入口轻盈松化",
  },
];

const trustNotes = ["甄选食材", "传统工艺", "新鲜直达", "安心无忧"];

export function EggYolkPastryHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbf5eb] px-4 py-12 text-[#4f3a2c] sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(200,169,107,0.18),transparent_28%),linear-gradient(135deg,#fffaf2_0%,#f7efe3_48%,#fff8ee_100%)]" />
      <div className="absolute left-0 top-10 -z-10 h-80 w-80 rounded-full border border-[#c8a96b]/20 opacity-70" />
      <div className="absolute bottom-0 right-0 -z-10 h-[28rem] w-[34rem] bg-[radial-gradient(ellipse_at_bottom_right,rgba(95,115,88,0.14),transparent_64%)]" />
      <div className="absolute left-10 top-28 -z-10 hidden h-32 w-44 rounded-[50%] border-l border-t border-[#c8a96b]/30 lg:block" />

      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c6a4]/70 bg-[#fffbf4]/78 p-4 shadow-[0_28px_90px_rgba(79,58,44,0.10)] backdrop-blur sm:p-6 lg:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-14">
          <div className="rounded-[1.6rem] border border-dashed border-[#c8a96b]/45 bg-[#fffaf2]/72 p-6 sm:p-8 lg:p-10">
            <p className="mb-4 inline-flex rounded-full border border-[#b73b2f]/20 bg-[#fff2ee] px-4 py-2 text-sm font-medium tracking-[0.14em] text-[#a92f25]">
              云酥坊手作经典
            </p>

            <h1 className="text-balance font-serif text-3xl font-semibold leading-tight text-[#3f3026] sm:text-4xl lg:text-[2.65rem]">
              云酥坊・经典红豆蛋黄酥
            </h1>

            <p className="mt-5 text-balance text-3xl font-semibold leading-tight text-[#b8241c] sm:text-4xl lg:text-[2.9rem]">
              一口爆沙！真整颗咸蛋黄，甜咸不齁嘴
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6a6258]">
              复刻中式老味道，年年回购的经典糕点。
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {painTags.map((tag) => {
                const Icon = tag.icon;
                return (
                  <div
                    key={tag.title}
                    className="rounded-2xl border border-[#d8c6a4]/80 bg-[#fffaf3] p-4 text-center shadow-[0_14px_36px_rgba(79,58,44,0.06)]"
                  >
                    <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full border border-[#b8241c]/35 bg-white text-[#b8241c]">
                      <Icon className="size-6 stroke-[1.7]" />
                    </div>
                    <h2 className="text-base font-semibold text-[#4f3a2c]">{tag.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#76695c]">{tag.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reserve"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#b8241c] px-7 text-base font-semibold text-white shadow-[0_18px_40px_rgba(184,36,28,0.22)] transition hover:-translate-y-0.5 hover:bg-[#9f1f18]"
              >
                <ShoppingCart className="size-5" />
                立即抢购
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/reserve"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[#b8241c]/65 bg-white/65 px-7 text-base font-semibold text-[#9f1f18] transition hover:-translate-y-0.5 hover:bg-[#fff2ee]"
              >
                <Gift className="size-5" />
                送礼专属礼盒
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[#d8c6a4]/70 pt-6 sm:grid-cols-4">
              {trustNotes.map((note) => (
                <div key={note} className="flex items-center gap-2 text-sm text-[#6a6258]">
                  <span className="flex size-7 items-center justify-center rounded-full border border-[#c8a96b]/55 text-[#8b7449]">
                    <ShieldCheck className="size-4 stroke-[1.8]" />
                  </span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem] border border-[#d8c6a4]/70 bg-[#f7eadb] shadow-[0_26px_70px_rgba(79,58,44,0.14)] sm:min-h-[560px] lg:min-h-[640px]">
            <Image
              src="/images/products/classic-egg-yolk-pastry.webp"
              alt="云酥坊经典红豆蛋黄酥整颗咸蛋黄与低糖红豆沙切面"
              fill
              priority
              sizes="(min-width: 1280px) 46vw, (min-width: 1024px) 48vw, 92vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,242,0.05),rgba(79,58,44,0.08))]" />
            <div className="absolute left-5 top-5 rounded-full border border-white/55 bg-white/70 px-4 py-2 text-sm font-medium text-[#6a4b34] backdrop-blur">
              整颗咸蛋黄 · 红豆沙切面
            </div>
            <div className="absolute bottom-5 right-5 rounded-2xl border border-[#c8a96b]/45 bg-[#fffaf2]/78 px-4 py-3 text-sm leading-6 text-[#5f4c3d] shadow-[0_16px_36px_rgba(79,58,44,0.12)] backdrop-blur">
              <p className="font-semibold text-[#4f3a2c]">酥皮层次清晰</p>
              <p>甜咸平衡，适合日常分享与节令送礼</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
