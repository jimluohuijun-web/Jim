export type JournalCategory = "news" | "cases" | "craft";

export type JournalSection = {
  heading: string;
  paragraphs: string[];
};

export type JournalFaq = {
  question: string;
  answer: string;
};

export type JournalRelatedLink = {
  label: string;
  href: string;
};

export type JournalArticle = {
  slug: string;
  category: JournalCategory;
  categoryLabel: string;
  categoryEnglish: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  featured?: boolean;
  sections: JournalSection[];
  faqs: JournalFaq[];
  relatedLinks: JournalRelatedLink[];
};

export const journalCategoryLabels: Record<JournalCategory, string> = {
  news: "品牌动态",
  cases: "重要案例",
  craft: "手作工艺",
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "vancouver-tasting-plan-2026",
    category: "news",
    categoryLabel: "品牌动态",
    categoryEnglish: "Brand News",
    title: "云酥坊 2026 温哥华小批量试吃计划",
    excerpt:
      "云酥坊 yunsucake 正在温哥华筹备新中式手作点心系列，第一阶段将围绕蛋黄酥、花酥与中秋月饼礼盒展开小批量试吃反馈。",
    date: "2026-06-10",
    readingTime: "5 分钟阅读",
    image: "/images/pages/reserve-mood-01.webp",
    imageAlt: "云酥坊温哥华新品试吃计划中式手作点心氛围图",
    keywords: ["温哥华甜点", "新中式点心", "新品试吃"],
    featured: true,
    sections: [
      {
        heading: "为什么先做小批量试吃",
        paragraphs: [
          "云酥坊希望把新中式点心带到温哥华的日常餐桌、茶席与节日礼盒里。正式推出前，我们会先通过小批量试吃确认口味、甜度、酥皮层次与礼盒组合。",
          "第一阶段重点产品包括经典蛋黄酥、花酥系列和中秋月饼预告款。每一次反馈都会帮助我们判断温哥华本地消费者对低糖糕点、手作点心和东方礼赠体验的真实需求。",
        ],
      },
      {
        heading: "试吃会关注哪些细节",
        paragraphs: [
          "我们会记录酥皮是否足够轻、馅心是否甜而不腻、咸蛋黄是否饱满、茶饮搭配是否协调，也会观察产品在伴手礼、家庭分享和企业团购场景中的接受度。",
          "这些反馈会反过来影响后续产品页面、预约表单、礼盒组合和文章内容，让云酥坊的每一次上新都更接近真实用户。",
        ],
      },
      {
        heading: "如何收到试吃通知",
        paragraphs: [
          "如果你正在寻找温哥华中式糕点、温哥华手作甜点或新中式点心试吃机会，可以通过预约页面留下联系方式。开放名额时，我们会优先通知已登记的用户。",
        ],
      },
    ],
    faqs: [
      {
        question: "云酥坊试吃计划在哪里进行？",
        answer: "第一阶段围绕温哥华市场筹备，具体时间与领取方式会通过预约名单通知。",
      },
      {
        question: "试吃产品包含哪些点心？",
        answer: "计划优先覆盖蛋黄酥、花酥系列和部分中秋月饼礼盒风味。",
      },
    ],
    relatedLinks: [
      { label: "预约新品试吃", href: "/reserve" },
      { label: "查看点心系列", href: "/products" },
    ],
  },
  {
    slug: "mid-autumn-gift-box-preview",
    category: "news",
    categoryLabel: "品牌动态",
    categoryEnglish: "Brand News",
    title: "云酥坊中秋月饼礼盒进入风味测试",
    excerpt:
      "从蛋黄莲蓉、经典豆沙到五仁、冬翅与苏式鲜肉，云酥坊正在为 2026 中秋月饼礼盒建立第一轮风味和礼赠方案。",
    date: "2026-06-10",
    readingTime: "4 分钟阅读",
    image: "/images/mooncakes/mooncake-announcement-banner.webp",
    imageAlt: "云酥坊中秋月饼礼盒风味测试与节日礼赠预告图",
    keywords: ["中秋月饼", "月饼礼盒", "节日礼盒"],
    sections: [
      {
        heading: "中秋礼盒为什么要提前测试",
        paragraphs: [
          "中秋月饼不只是单一产品，更是团圆、拜访和企业礼赠的节日心意。云酥坊在温哥华筹备中秋月饼礼盒时，会同时考虑口味组合、包装体面度、运输稳定性和不同预算需求。",
          "风味测试会覆盖蛋黄莲蓉月饼、经典豆沙月饼、五仁月饼、冬翅月饼和苏式鲜肉月饼，让礼盒既有传统味道，也有适合现代口味的低糖选择。",
        ],
      },
      {
        heading: "适合哪些礼赠场景",
        paragraphs: [
          "四枚礼盒适合轻量拜访和亲友分享，六枚礼盒适合家庭节日餐桌，八枚礼盒更适合企业团购、客户答谢和员工福利。",
          "后续文章会继续拆解中秋礼盒怎么选、企业团购预算怎么规划，以及不同月饼口味如何搭配。",
        ],
      },
    ],
    faqs: [
      {
        question: "云酥坊中秋月饼礼盒什么时候开放？",
        answer: "目前处于预告和风味测试阶段，正式开放会优先通知预约名单用户。",
      },
      {
        question: "是否支持企业团购？",
        answer: "支持企业团购咨询，可通过联系页面说明预算、数量和交付时间。",
      },
    ],
    relatedLinks: [
      { label: "查看中秋月饼", href: "/products#mid-autumn-preview" },
      { label: "咨询企业团购", href: "/contact" },
    ],
  },
  {
    slug: "corporate-mid-autumn-gift-box",
    category: "cases",
    categoryLabel: "重要案例",
    categoryEnglish: "Case Notes",
    title: "企业中秋礼盒怎么选？云酥坊团购方案记录",
    excerpt:
      "企业团购不只是买一盒月饼，更是预算、数量、口味、交付和品牌体面的综合选择。云酥坊用礼盒方案帮助企业表达节日心意。",
    date: "2026-06-10",
    readingTime: "6 分钟阅读",
    image: "/images/pages/events-corporate-tea.jpg",
    imageAlt: "云酥坊企业中秋礼盒团购与商务茶点案例图",
    keywords: ["企业团购", "中秋礼盒", "伴手礼"],
    sections: [
      {
        heading: "企业礼盒先确定三个问题",
        paragraphs: [
          "企业中秋礼盒的第一步，不是直接挑最贵的包装，而是确认收礼对象、预算区间和交付时间。不同团队适合的礼盒规格并不一样。",
          "如果是员工福利，口味接受度和数量稳定更重要；如果是客户答谢，包装质感、品牌识别和礼盒故事会更影响体面感。",
        ],
      },
      {
        heading: "云酥坊如何设计团购组合",
        paragraphs: [
          "云酥坊会把经典月饼、花酥和蛋黄酥放在同一个礼赠逻辑里思考。中秋月饼负责节令仪式感，蛋黄酥和花酥负责日常分享与新中式点心记忆点。",
          "对温哥华企业客户来说，低糖糕点、清晰配料和东方审美包装，是更容易被不同年龄层接受的关键。",
        ],
      },
    ],
    faqs: [
      {
        question: "企业团购需要提前多久沟通？",
        answer: "建议节日前至少 3-4 周确认需求，方便安排口味、数量和交付节奏。",
      },
      {
        question: "礼盒可以搭配不同产品吗？",
        answer: "可以根据预算和场景组合月饼、蛋黄酥、花酥和其他手作点心。",
      },
    ],
    relatedLinks: [
      { label: "联系云酥坊", href: "/contact" },
      { label: "查看礼盒预告", href: "/products#gift-corporate" },
    ],
  },
  {
    slug: "tasting-feedback-product-adjustment",
    category: "cases",
    categoryLabel: "重要案例",
    categoryEnglish: "Case Notes",
    title: "新中式甜点试吃会：从反馈到产品调整",
    excerpt:
      "一次有效的试吃会，不只是收集喜欢或不喜欢，而是把甜度、酥皮、馅心、包装和购买场景转化为产品调整依据。",
    date: "2026-06-10",
    readingTime: "5 分钟阅读",
    image: "/images/pages/events-tasting.jpg",
    imageAlt: "云酥坊新中式甜点试吃会与产品反馈案例图",
    keywords: ["新中式甜点", "试吃反馈", "手作点心"],
    sections: [
      {
        heading: "试吃反馈应该问什么",
        paragraphs: [
          "云酥坊在试吃环节会把问题拆得更具体：酥皮是否太厚、馅料是否太甜、咸蛋黄是否有沙感、单颗大小是否适合下午茶或礼盒。",
          "这些问题可以帮助我们判断产品是否真正适合温哥华甜点市场，而不只是停留在好看或好吃的主观评价上。",
        ],
      },
      {
        heading: "从反馈回到产品页面",
        paragraphs: [
          "当试吃反馈稳定后，产品页面会同步更新更准确的风味描述、适合场景和预约提示。文章也会继续沉淀关键词，比如低糖中式糕点、温哥华手作甜点、蛋黄酥试吃和中秋月饼礼盒。",
        ],
      },
    ],
    faqs: [
      {
        question: "试吃反馈会影响正式产品吗？",
        answer: "会。甜度、口感、包装和组合方式都会根据反馈持续调整。",
      },
      {
        question: "普通用户可以参与试吃吗？",
        answer: "可以先通过预约页面登记，开放名额时会优先通知。",
      },
    ],
    relatedLinks: [
      { label: "加入试吃名单", href: "/reserve" },
      { label: "查看品牌故事", href: "/about" },
    ],
  },
  {
    slug: "how-to-make-egg-yolk-pastry",
    category: "craft",
    categoryLabel: "手作工艺",
    categoryEnglish: "Craft Notes",
    title: "蛋黄酥怎么做才层层起酥？云酥坊的手作开酥方法",
    excerpt:
      "蛋黄酥好不好吃，关键在油皮、油酥、包馅和烘烤节奏。云酥坊用三十六层开酥，让咸蛋黄、低糖豆沙和酥皮保持平衡。",
    date: "2026-06-10",
    readingTime: "7 分钟阅读",
    image: "/images/products/egg-yolk-pastry/pastry-layers.jpg",
    imageAlt: "云酥坊蛋黄酥层层起酥手作开酥方法图",
    keywords: ["蛋黄酥", "层层起酥", "低糖豆沙"],
    sections: [
      {
        heading: "蛋黄酥起酥的关键是什么",
        paragraphs: [
          "蛋黄酥的层次来自油皮与油酥的反复擀卷。油皮负责延展和包裹，油酥负责形成分层。两者比例、松弛时间和擀卷力度都会影响最终口感。",
          "云酥坊希望做出的不是厚重油腻的酥，而是入口轻落、层次分明、可以搭配茶饮的手作点心。",
        ],
      },
      {
        heading: "为什么低糖豆沙更适合现代口味",
        paragraphs: [
          "传统蛋黄酥容易给人齁甜印象，原因往往是豆沙甜度过高，盖过了咸蛋黄和酥皮香气。低糖豆沙能让红豆香、咸蛋黄油润感和酥皮层次同时出现。",
          "这也是云酥坊在温哥华试吃计划中重点观察的方向：甜度降低后，是否仍然保留中式糕点的记忆点。",
        ],
      },
      {
        heading: "整颗咸蛋黄如何影响口感",
        paragraphs: [
          "整颗咸蛋黄能提供更明确的咸香和沙润口感，但也要求豆沙和酥皮更克制。如果馅料过甜，咸蛋黄会显得突兀；如果酥皮过厚，整体会变得沉重。",
          "好的蛋黄酥应该让三者互相衬托，而不是任何一部分抢走全部注意力。",
        ],
      },
    ],
    faqs: [
      {
        question: "蛋黄酥为什么会不够酥？",
        answer: "常见原因包括油皮油酥比例不稳、松弛不足、擀卷过重或烘烤温度不合适。",
      },
      {
        question: "低糖蛋黄酥会不会没味道？",
        answer: "不会。低糖不是寡淡，而是让豆沙、咸蛋黄和酥皮香气更平衡。",
      },
    ],
    relatedLinks: [
      { label: "查看经典蛋黄酥", href: "/products/classic-egg-yolk-pastry" },
      { label: "预约蛋黄酥试吃", href: "/reserve" },
    ],
  },
  {
    slug: "low-sugar-red-bean-filling",
    category: "craft",
    categoryLabel: "手作工艺",
    categoryEnglish: "Craft Notes",
    title: "低糖豆沙馅怎么调才甜而不腻？",
    excerpt:
      "低糖豆沙不是简单少放糖，而是重新平衡红豆香、油润度、水分和烘烤后的口感，让中式酥点更适合现代甜度偏好。",
    date: "2026-06-10",
    readingTime: "6 分钟阅读",
    image: "/images/products/egg-yolk-pastry/red-bean-paste.jpg",
    imageAlt: "云酥坊低糖红豆沙馅中式酥点制作方法图",
    keywords: ["低糖豆沙", "中式糕点", "手作点心"],
    sections: [
      {
        heading: "低糖豆沙不是单纯减糖",
        paragraphs: [
          "如果只是减少糖量，豆沙可能会变得干、涩、散，甚至失去红豆本身的香气。真正适合中式酥点的低糖豆沙，需要同时调整水分、油润度和细腻度。",
          "云酥坊在蛋黄酥、桃花酥和牡丹花酥中使用豆沙时，会把甜度控制在不压过酥皮香气的范围。",
        ],
      },
      {
        heading: "不同产品里的豆沙角色不同",
        paragraphs: [
          "蛋黄酥里的豆沙要承接咸蛋黄的咸香，花酥里的豆沙则要衬托造型和茶席气质。相同的低糖豆沙，在不同产品中也需要微调比例。",
          "这类工艺文章会持续帮助用户理解云酥坊为什么强调手作点心、低糖糕点和新中式点心，而不是只看产品图片。",
        ],
      },
    ],
    faqs: [
      {
        question: "低糖豆沙适合老人和孩子吗？",
        answer: "低糖可以降低厚甜感，但具体饮食需求仍建议根据个人情况判断。",
      },
      {
        question: "低糖豆沙可以用于哪些产品？",
        answer: "常用于蛋黄酥、桃花酥、牡丹花酥、豆沙月饼等中式糕点。",
      },
    ],
    relatedLinks: [
      { label: "查看花酥系列", href: "/products#featured-recommendations" },
      { label: "查看预约入口", href: "/reserve" },
    ],
  },
  {
    slug: "flower-pastry-differences",
    category: "craft",
    categoryLabel: "手作工艺",
    categoryEnglish: "Craft Notes",
    title: "花酥是什么？荷花酥、桃花酥、牡丹花酥的区别",
    excerpt:
      "花酥是把中式开酥、花型造型和馅心风味结合起来的东方点心。不同花型不只好看，也会影响层次、入口和礼盒记忆点。",
    date: "2026-06-10",
    readingTime: "6 分钟阅读",
    image: "/images/products/rose-red-bean-peony-pastry.webp",
    imageAlt: "云酥坊荷花酥桃花酥牡丹花酥花酥系列区别图",
    keywords: ["花酥", "荷花酥", "桃花酥"],
    sections: [
      {
        heading: "花酥和普通酥点有什么不同",
        paragraphs: [
          "花酥是在开酥基础上加入花型塑形的中式糕点。它既要有层层起酥的口感，也要在烘烤后保持清晰花瓣和东方审美。",
          "相比普通蛋黄酥，花酥更强调视觉记忆点，适合下午茶、内容拍摄、节日伴手礼和新中式点心礼盒。",
        ],
      },
      {
        heading: "荷花酥、桃花酥、牡丹花酥怎么区分",
        paragraphs: [
          "荷花酥通常强调舒展和清雅，适合搭配莲蓉、豆沙等温润馅心；桃花酥更偏轻盈柔和，适合春夏分享和女生礼物；牡丹花酥则更端庄饱满，适合礼盒主视觉。",
          "云酥坊会根据花型气质调整馅心、色泽和酥皮厚薄，让每一种花酥都不只是换个造型。",
        ],
      },
      {
        heading: "为什么花酥适合新中式礼盒",
        paragraphs: [
          "新中式礼盒需要同时满足好吃、好看和有故事。花酥本身就带有东方花月意象，能自然承接节令礼赠、品牌审美和中式点心文化。",
          "对温哥华甜点市场来说，花酥也是一个让用户重新认识中式糕点的入口。",
        ],
      },
    ],
    faqs: [
      {
        question: "花酥适合长期保存吗？",
        answer: "花酥更适合新鲜食用。具体保存时间会根据馅料、包装和温度调整。",
      },
      {
        question: "花酥适合做礼盒吗？",
        answer: "适合。花酥造型有记忆点，适合节日伴手礼、新中式甜点礼盒和商务分享。",
      },
    ],
    relatedLinks: [
      { label: "查看花酥产品", href: "/products#featured-recommendations" },
      { label: "预约花酥试吃", href: "/reserve" },
    ],
  },
];

export const featuredJournalArticle =
  journalArticles.find((article) => article.featured) ?? journalArticles[0];

export function getJournalArticle(category: string, slug: string) {
  return journalArticles.find((article) => article.category === category && article.slug === slug);
}

export function getJournalHref(article: Pick<JournalArticle, "category" | "slug">) {
  return `/about/${article.category}/${article.slug}`;
}
