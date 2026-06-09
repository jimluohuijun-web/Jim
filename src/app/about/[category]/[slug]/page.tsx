import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JournalArticlePage } from "@/components/sections/journal-article-page";
import { getJournalArticle, getJournalHref, journalArticles } from "@/data/brand-journal";

type JournalPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return journalArticles.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getJournalArticle(category, slug);

  if (!article) {
    return {
      title: "文章未找到｜云酥坊 yunsucake",
    };
  }

  return {
    title: `${article.title}｜云酥坊 yunsucake`,
    description: article.excerpt,
    keywords: ["云酥坊", "yunsucake", ...article.keywords],
    alternates: {
      canonical: getJournalHref(article),
    },
    openGraph: {
      title: `${article.title}｜云酥坊 yunsucake`,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.date,
      images: [
        {
          url: article.image,
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default async function JournalPage({ params }: JournalPageProps) {
  const { category, slug } = await params;
  const article = getJournalArticle(category, slug);

  if (!article) {
    notFound();
  }

  return <JournalArticlePage article={article} />;
}
