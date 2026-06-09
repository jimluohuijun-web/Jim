import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";

import type { JournalArticle } from "@/data/brand-journal";

type JournalArticlePageProps = {
  article: JournalArticle;
};

export function JournalArticlePage({ article }: JournalArticlePageProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "云酥坊 yunsucake",
    },
    publisher: {
      "@type": "Organization",
      name: "云酥坊 yunsucake",
    },
    keywords: article.keywords.join(", "),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="ysf-pc-home overflow-hidden bg-[#1A0F0A] text-[#E8CFA4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article>
        <section className="relative isolate overflow-hidden border-b border-[#D89A42]/16 bg-[#120905]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgb(216_154_66_/_14%),transparent_26rem),radial-gradient(circle_at_82%_12%,rgb(242_195_107_/_10%),transparent_28rem),linear-gradient(180deg,#1A0F0A,#120905_64%,#1A0F0A)]" />
          <div className="ysj-container py-12 md:py-16 lg:py-20">
            <Link
              href="/about#brand-journal"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#F2C36B] transition-colors hover:text-[#F8E6BF]"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              返回云酥记事
            </Link>

            <div className="grid gap-9 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
              <div className="flex max-w-4xl flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#F2C36B]/34 bg-[#2A1710]/72 px-4 py-2 text-xs font-medium tracking-[0.18em] text-[#F2C36B]">
                    {article.categoryLabel}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-[#E8CFA4]/72">
                    <CalendarDays className="size-4" aria-hidden="true" />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-[#E8CFA4]/72">
                    <Clock className="size-4" aria-hidden="true" />
                    {article.readingTime}
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
                    {article.categoryEnglish}
                  </p>
                  <h1 className="text-balance font-serif text-5xl font-semibold leading-tight text-[#F8E6BF] md:text-7xl">
                    {article.title}
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-[#E8CFA4]/90 md:text-xl md:leading-9">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-[#D89A42]/30 bg-[#1A0F0A]/42 px-3 py-1 text-xs text-[#F2C36B]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-[#D89A42]/30 bg-[#2A1710]/72 shadow-[0_34px_96px_rgb(0_0_0_/_42%)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgb(18_9_5_/_62%))]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-b border-[#D89A42]/16 bg-[#1A0F0A]">
          <div className="ysj-container grid gap-8 py-14 md:py-18 lg:grid-cols-[minmax(0,0.76fr)_minmax(18rem,0.24fr)] lg:py-20">
            <div className="flex flex-col gap-6">
              {article.sections.map((section, index) => (
                <section
                  key={section.heading}
                  className="rounded-[1.45rem] border border-[#D89A42]/24 bg-[#2A1710]/58 p-6 shadow-[0_22px_64px_rgb(0_0_0_/_24%)] md:p-8"
                >
                  <div className="flex flex-col gap-5">
                    <p className="text-xs uppercase tracking-[0.26em] text-[#D89A42]">
                      0{index + 1}
                    </p>
                    <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-[#F8E6BF] md:text-4xl">
                      {section.heading}
                    </h2>
                    <div className="flex flex-col gap-4 text-base leading-8 text-[#E8CFA4]/88 md:text-lg">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </section>
              ))}

              <section className="rounded-[1.45rem] border border-[#D89A42]/24 bg-[#2A1710]/58 p-6 shadow-[0_22px_64px_rgb(0_0_0_/_24%)] md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-[0.26em] text-[#D89A42]">FAQ</p>
                    <h2 className="font-serif text-3xl font-semibold leading-tight text-[#F8E6BF] md:text-4xl">
                      常见问题
                    </h2>
                  </div>
                  <div className="grid gap-4">
                    {article.faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="rounded-[1.1rem] border border-[#D89A42]/20 bg-[#1A0F0A]/40 p-5"
                      >
                        <h3 className="text-lg font-semibold leading-tight text-[#F8E6BF]">
                          {faq.question}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[#E8CFA4]/86">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[1.45rem] border border-[#D89A42]/28 bg-[#2A1710]/72 p-6 shadow-[0_22px_64px_rgb(0_0_0_/_24%)]">
                <div className="flex flex-col gap-5">
                  <span className="h-px w-14 bg-[#D89A42]" />
                  <div className="flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-[0.26em] text-[#D89A42]">
                      Related
                    </p>
                    <h2 className="font-serif text-2xl font-semibold leading-tight text-[#F8E6BF]">
                      继续了解云酥坊
                    </h2>
                    <p className="text-sm leading-7 text-[#E8CFA4]/86">
                      从产品详情、预约试吃到企业团购，把文章里的关键词和真实购买路径连接起来。
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {article.relatedLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex min-h-11 items-center justify-between gap-3 rounded-full border border-[#D89A42]/28 bg-[#1A0F0A]/42 px-4 text-sm font-medium text-[#F2C36B] transition-colors hover:border-[#F2C36B]/58 hover:text-[#F8E6BF]"
                      >
                        {link.label}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    ))}
                    <Link
                      href="/about#brand-journal"
                      className="inline-flex min-h-11 items-center justify-between gap-3 rounded-full border border-[#D89A42]/28 bg-[#1A0F0A]/42 px-4 text-sm font-medium text-[#E8CFA4] transition-colors hover:border-[#F2C36B]/58 hover:text-[#F8E6BF]"
                    >
                      查看全部文章
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}
