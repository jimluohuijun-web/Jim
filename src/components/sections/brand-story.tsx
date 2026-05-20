import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { brandStory } from "@/data/home-sections";

export function BrandStory() {
  return (
    <section
      id="brand-story"
      className="ysf-story relative isolate overflow-hidden border-y border-[rgb(217_180_106_/_18%)] bg-[#080604] scroll-mt-28"
    >
      <Image
        src={brandStory.image.src}
        alt={brandStory.image.alt}
        fill
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#080604_0%,rgb(8_6_4_/_96%)_28%,rgb(8_6_4_/_72%)_46%,rgb(8_6_4_/_24%)_66%,transparent_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgb(8_6_4_/_32%)_0%,transparent_46%,rgb(8_6_4_/_56%)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_74%_50%,rgb(240_201_120_/_13%),transparent_32rem)]" />

      <div className="ysj-container flex min-h-[460px] items-center py-14 md:min-h-[340px] md:py-10 lg:min-h-[360px]">
        <div className="max-w-xl md:w-[42%] md:pl-8 lg:pl-12 xl:pl-16">
          <span className="mb-5 block h-px w-16 bg-soft-gold" />
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-[1.75rem] font-semibold leading-tight tracking-[0.04em] text-[#F5E7C8] md:text-[2.15rem]">
              {brandStory.title}
            </h2>
            <p className="whitespace-pre-line text-sm leading-[1.95] text-[#BCA77F] md:text-[0.95rem]">
              {brandStory.description}
            </p>
          </div>
          <Link
            href={brandStory.cta.href}
            className="ysf-button-primary mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium"
          >
            {brandStory.cta.label}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
