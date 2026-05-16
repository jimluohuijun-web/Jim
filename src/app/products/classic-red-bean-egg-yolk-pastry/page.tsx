import type { Metadata } from "next";

import {
  BottomCTA,
  CoreFeatures,
  Crafting,
  CrossSell,
  GiftBox,
  HeroSection,
  Ingredients,
  LayeredTaste,
  ProductSpecs,
} from "@/components/sections/egg-yolk-detail-page";
import { eggYolkProductData } from "@/data/egg-yolk-detail";

export const metadata: Metadata = {
  title: "经典红豆蛋黄酥｜云酥坊 yunsucake",
  description:
    "云酥坊经典红豆蛋黄酥，真整颗咸蛋黄搭配低糖红豆沙，层层起酥松软，甜咸平衡。",
};

export default function ClassicRedBeanEggYolkPastryPage() {
  return (
    <main className="bg-[#fbf1e4] pb-28">
      {/* 1. Hero 模块：顶部吸睛 */}
      <HeroSection data={eggYolkProductData.hero} />

      {/* 2. 核心卖点模块 */}
      <CoreFeatures data={eggYolkProductData.coreFeatures} />

      {/* 3. 精选原料模块 */}
      <Ingredients data={eggYolkProductData.ingredients} />

      {/* 4. 层次口感模块 */}
      <LayeredTaste data={eggYolkProductData.layeredTaste} />

      {/* 5. 匠心工艺模块 */}
      <Crafting data={eggYolkProductData.crafting} />

      {/* 6. 产品参数模块 */}
      <ProductSpecs data={eggYolkProductData.productSpecs} />

      {/* 7. 礼盒场景模块 */}
      <GiftBox data={eggYolkProductData.giftBox} />

      {/* 8. 同系列搭配模块 */}
      <CrossSell data={eggYolkProductData.crossSell} />

      {/* 9. 底部 CTA 转化模块，含固定底部 CTA */}
      <BottomCTA data={eggYolkProductData.bottomCTA} />
    </main>
  );
}
