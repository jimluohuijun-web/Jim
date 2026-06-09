import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoLink = {
  label: string;
  href: string;
  description?: string;
};

export function SeoFaqSection({
  eyebrow = "FAQ",
  title = "常见问题",
  description,
  faqs,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  faqs: SeoFaq[];
}) {
  return (
    <section className="ysj-section-tight border-y border-[#D89A42]/16 bg-[#120905]">
      <div className="ysj-container flex flex-col gap-8">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="h-px w-16 bg-[#D89A42]" />
          <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">{eyebrow}</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="text-base leading-8 text-[#E8CFA4]/88 md:text-lg">{description}</p>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[1.35rem] border border-[#D89A42]/24 bg-[#2A1710]/60 p-6 shadow-[0_22px_60px_rgb(0_0_0_/_20%)]"
            >
              <h3 className="text-xl font-semibold leading-tight text-[#F8E6BF]">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#E8CFA4]/88">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SeoInternalLinks({
  eyebrow = "Related Links",
  title = "继续了解云酥坊",
  description,
  links,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  links: SeoLink[];
}) {
  return (
    <section className="ysj-section-tight bg-[#1A0F0A]">
      <div className="ysj-container flex flex-col gap-8">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div className="flex flex-col gap-4">
            <span className="h-px w-16 bg-[#D89A42]" />
            <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">{eyebrow}</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
              {title}
            </h2>
          </div>
          {description ? (
            <p className="max-w-3xl text-base leading-8 text-[#E8CFA4]/88 md:text-lg lg:justify-self-end">
              {description}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-[1.25rem] border border-[#D89A42]/24 bg-[#2A1710]/54 p-5 text-[#E8CFA4] shadow-[0_18px_48px_rgb(0_0_0_/_18%)] transition-all duration-500 hover:-translate-y-1 hover:border-[#F2C36B]/54"
            >
              <span className="flex items-center justify-between gap-4 text-lg font-semibold text-[#F8E6BF]">
                {link.label}
                <ArrowRight className="size-4 text-[#F2C36B] transition-transform duration-500 group-hover:translate-x-1" />
              </span>
              {link.description ? (
                <span className="mt-3 block text-sm leading-7 text-[#E8CFA4]/84">
                  {link.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
