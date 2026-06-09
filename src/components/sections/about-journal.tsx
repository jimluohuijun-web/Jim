import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Clock, Newspaper, ScrollText } from "lucide-react";

import {
  featuredJournalArticle,
  getJournalHref,
  journalArticles,
  type JournalArticle,
  type JournalCategory,
} from "@/data/brand-journal";

const categoryIcons: Record<JournalCategory, typeof Newspaper> = {
  news: Newspaper,
  cases: BriefcaseBusiness,
  craft: ScrollText,
};

function JournalTag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[#D89A42]/28 bg-[#1A0F0A]/44 px-3 py-1 text-xs leading-none text-[#F2C36B]">
      {children}
    </span>
  );
}

function SmallArticleCard({ article }: { article: JournalArticle }) {
  const Icon = categoryIcons[article.category];

  return (
    <article className="group relative flex min-h-[19rem] flex-col overflow-hidden rounded-[1.35rem] border border-[#D89A42]/24 bg-[#2A1710]/60 p-4 shadow-[0_22px_64px_rgb(0_0_0_/_26%)] transition-all duration-500 hover:-translate-y-1 hover:border-[#F2C36B]/50">
      <div className="absolute -right-16 top-12 size-48 rounded-full border border-[#F2C36B]/10" />
      <div className="relative flex h-full flex-col gap-5">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D89A42]/30 bg-[#1A0F0A]/42 px-3 py-1.5 text-xs text-[#F2C36B]">
            <Icon className="size-3.5" aria-hidden="true" />
            {article.categoryLabel}
          </span>
          <span className="text-xs text-[#E8CFA4]/64">{article.date}</span>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <h3 className="text-balance text-2xl font-semibold leading-tight text-[#F8E6BF]">
            <Link href={getJournalHref(article)} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {article.title}
            </Link>
          </h3>
          <p className="line-clamp-3 text-sm leading-7 text-[#E8CFA4]/86">{article.excerpt}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {article.keywords.slice(0, 3).map((keyword) => (
            <JournalTag key={keyword}>{keyword}</JournalTag>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#F2C36B]">
          阅读全文
          <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}

export function AboutJournal() {
  const secondaryArticles = journalArticles.filter((article) => article.slug !== featuredJournalArticle.slug);

  return (
    <section
      id="brand-journal"
      className="relative isolate scroll-mt-28 overflow-hidden border-y border-[#D89A42]/16 bg-[#100704]"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgb(216_154_66_/_12%),transparent_24rem),radial-gradient(circle_at_86%_16%,rgb(242_195_107_/_10%),transparent_26rem),linear-gradient(180deg,#100704,#1A0F0A_48%,#120905)]" />
      <div className="pointer-events-none absolute left-[-10rem] top-24 size-[30rem] rounded-full border border-[#D89A42]/10" />
      <div className="pointer-events-none absolute right-[-8rem] bottom-16 size-[28rem] rounded-full border border-[#F2C36B]/10" />

      <div className="ysj-container flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24">
        <div className="grid gap-7 lg:grid-cols-[0.86fr_1fr] lg:items-end">
          <div className="flex max-w-3xl flex-col gap-5">
            <span className="h-px w-16 bg-[#D89A42]" />
            <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">Brand Journal</p>
            <h2 className="text-balance font-serif text-[2.35rem] font-semibold leading-tight text-[#F8E6BF] md:text-6xl">
              云酥记事
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-[#E8CFA4]/88 md:text-lg lg:justify-self-end">
            记录云酥坊的新品筹备、温哥华试吃计划、节令礼盒案例与中式酥点工艺，把每一枚点心背后的选择、手艺与心意讲清楚。
          </p>
        </div>

        <article className="group grid overflow-hidden rounded-[1.75rem] border border-[#D89A42]/30 bg-[#2A1710]/68 shadow-[0_30px_92px_rgb(0_0_0_/_36%)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative isolate min-h-[20rem] overflow-hidden lg:min-h-[31rem]">
            <Image
              src={featuredJournalArticle.image}
              alt={featuredJournalArticle.imageAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(16_7_4_/_24%),rgb(16_7_4_/_68%))] lg:bg-[linear-gradient(90deg,transparent_0%,rgb(16_7_4_/_22%)_62%,rgb(16_7_4_/_82%)_100%)]" />
          </div>

          <div className="relative flex flex-col justify-between gap-8 p-7 md:p-9 lg:p-10">
            <div className="absolute -right-20 top-10 size-64 rounded-full border border-[#F2C36B]/12" />
            <div className="relative flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#F2C36B]/34 bg-[#1A0F0A]/48 px-4 py-2 text-xs font-medium tracking-[0.16em] text-[#F2C36B]">
                  {featuredJournalArticle.categoryLabel}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-[#E8CFA4]/72">
                  <Clock className="size-4" aria-hidden="true" />
                  {featuredJournalArticle.readingTime}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-balance font-serif text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
                  {featuredJournalArticle.title}
                </h3>
                <p className="text-base leading-8 text-[#E8CFA4]/88 md:text-lg">
                  {featuredJournalArticle.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredJournalArticle.keywords.map((keyword) => (
                  <JournalTag key={keyword}>{keyword}</JournalTag>
                ))}
              </div>
            </div>

            <Link
              href={getJournalHref(featuredJournalArticle)}
              className="ysj-button-primary relative inline-flex min-h-12 w-fit items-center justify-center gap-2 px-6 text-sm font-semibold"
            >
              阅读重点文章
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </article>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {secondaryArticles.map((article) => (
            <SmallArticleCard key={`${article.category}-${article.slug}`} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
