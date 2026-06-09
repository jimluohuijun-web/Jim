import { JsonLd } from "@/components/seo/json-ld";
import {
  buildBreadcrumbJsonLd,
  buildProductJsonLd,
  productSeoMap,
  type SeoEntry,
} from "@/lib/seo";

type ProductSeoJsonLdProps = {
  path: keyof typeof productSeoMap;
  category: string;
};

export function ProductSeoJsonLd({ path, category }: ProductSeoJsonLdProps) {
  const entry = productSeoMap[path] as SeoEntry;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "首页", path: "/" },
          { name: "产品系列", path: "/products" },
          { name: entry.h1, path: entry.path },
        ])}
      />
      <JsonLd data={buildProductJsonLd(entry, category)} />
    </>
  );
}
