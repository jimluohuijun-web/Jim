export type ProductTheme = "cloud" | "rose" | "gold" | "ink";

export type Product = {
  id: string;
  name: string;
  englishName: string;
  description: string;
  tags: string[];
  flavors: string[];
  status: string;
  theme: ProductTheme;
  accentColor: string;
  href: string;
};

export const products: Product[] = [
  {
    id: "cloud-souffle-square",
    name: "云酥小方",
    englishName: "Cloud Soufflé Square",
    description: "轻盈如云的中式酥点，外层酥松，内里柔软，适合作为品牌招牌单品。",
    tags: ["招牌", "轻盈", "手作"],
    flavors: ["原味奶香", "豆沙", "芝麻"],
    status: "即将开放预约",
    theme: "cloud",
    accentColor: "#d8d2c8",
    href: "/products#cloud-souffle-square",
  },
  {
    id: "red-bean-snow-crisp",
    name: "豆沙雪酥",
    englishName: "Red Bean Snow Crisp",
    description: "以细腻豆沙与松化酥皮结合，保留东方点心的温柔甜感。",
    tags: ["东方", "豆沙", "经典"],
    flavors: ["红豆", "低糖红豆"],
    status: "温哥华限定预告",
    theme: "rose",
    accentColor: "#9f4f4a",
    href: "/products#red-bean-snow-crisp",
  },
  {
    id: "osmanthus-cloud-roll",
    name: "桂花云卷",
    englishName: "Osmanthus Cloud Roll",
    description: "桂花香气轻盈铺开，卷入柔软内馅，适合下午茶与礼盒搭配。",
    tags: ["桂花", "茶点", "礼盒"],
    flavors: ["桂花", "茉莉", "乌龙"],
    status: "研发中",
    theme: "gold",
    accentColor: "#c8a968",
    href: "/products#osmanthus-cloud-roll",
  },
  {
    id: "black-sesame-crisp",
    name: "墨芝麻酥",
    englishName: "Black Sesame Crisp",
    description: "黑芝麻的醇厚香气与酥皮层次交织，适合喜欢浓郁东方风味的客人。",
    tags: ["芝麻", "浓香", "经典"],
    flavors: ["黑芝麻", "核桃芝麻"],
    status: "小批量测试",
    theme: "ink",
    accentColor: "#24201d",
    href: "/products#black-sesame-crisp",
  },
];
