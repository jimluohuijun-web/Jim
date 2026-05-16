import type { Metadata } from "next";

import {
  MatchaBottomCTA,
  MatchaCoreFeatures,
  MatchaCrafting,
  MatchaCrossSell,
  MatchaGiftBox,
  MatchaHeroSection,
  MatchaIngredients,
  MatchaLayeredTaste,
  MatchaProductSpecs,
} from "@/components/sections/matcha-detail-page";
import { matchaProductData } from "@/data/matcha-detail";

export const metadata: Metadata = {
  title: "抹茶酥｜云酥坊 yunsucake",
  description:
    "云酥坊抹茶酥，红豆沙搭配整颗咸蛋黄，36层抹茶酥皮，茶香浓郁回甘，现做现发。",
};

export default function MatchaPastryPage() {
  return (
    <main className="bg-[#f7f1e7] pb-28">
      {/* 1. Hero 模块：顶部吸睛 */}
      <MatchaHeroSection data={matchaProductData.hero} />

      {/* 2. 核心卖点模块 */}
      <MatchaCoreFeatures data={matchaProductData.coreFeatures} />

      {/* 3. 精选原料模块 */}
      <MatchaIngredients data={matchaProductData.ingredients} />

      {/* 4. 层次口感解析 */}
      <MatchaLayeredTaste data={matchaProductData.layeredTaste} />

      {/* 5. 匠心制作工艺 */}
      <MatchaCrafting data={matchaProductData.crafting} />

      {/* 6. 产品参数规格 */}
      <MatchaProductSpecs data={matchaProductData.productSpecs} />

      {/* 7. 礼盒场景展示 */}
      <MatchaGiftBox data={matchaProductData.giftBox} />

      {/* 8. 同系列搭配 */}
      <MatchaCrossSell data={matchaProductData.crossSell} />

      {/* 9. 底部 CTA 转化模块，含固定底部 CTA */}
      <MatchaBottomCTA data={matchaProductData.bottomCTA} />
    </main>
  );
}
