import type { Metadata } from "next";

import {
  PineappleBottomCTA,
  PineappleCoreFeatures,
  PineappleCrafting,
  PineappleCrossSell,
  PineappleGiftBox,
  PineappleHeroSection,
  PineappleIngredients,
  PineappleLayeredTaste,
  PineappleProductSpecs,
} from "@/components/sections/pineapple-detail-page";
import { pineappleProductData } from "@/data/pineapple-detail";

export const metadata: Metadata = {
  title: "经典凤梨酥｜云酥坊 yunsucake",
  description:
    "云酥坊经典凤梨酥，精选金钻凤梨果肉，36层薄酥工艺，低糖酸甜不齁腻，适合自用与送礼。",
};

export default function ClassicPineapplePastryPage() {
  return (
    <main className="bg-[#fbf1e4] pb-28">
      {/* 1. Hero 模块：顶部吸睛 */}
      <PineappleHeroSection data={pineappleProductData.hero} />

      {/* 2. 核心卖点模块 */}
      <PineappleCoreFeatures data={pineappleProductData.coreFeatures} />

      {/* 3. 精选原料模块 */}
      <PineappleIngredients data={pineappleProductData.ingredients} />

      {/* 4. 层次口感模块 */}
      <PineappleLayeredTaste data={pineappleProductData.layeredTaste} />

      {/* 5. 匠心制作工艺模块 */}
      <PineappleCrafting data={pineappleProductData.crafting} />

      {/* 6. 产品参数模块 */}
      <PineappleProductSpecs data={pineappleProductData.productSpecs} />

      {/* 7. 礼盒场景模块 */}
      <PineappleGiftBox data={pineappleProductData.giftBox} />

      {/* 8. 同系列搭配模块 */}
      <PineappleCrossSell data={pineappleProductData.crossSell} />

      {/* 9. 底部 CTA 转化模块，含固定底部 CTA */}
      <PineappleBottomCTA data={pineappleProductData.bottomCTA} />
    </main>
  );
}
