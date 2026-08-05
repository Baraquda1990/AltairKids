import { MetadataRoute } from "next";
import { products } from "@/components/Catalog/Products";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = "https://altairkids.shop";

  return [
    {
      url: site,
      priority: 1,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: site + "/catalog",
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: site + "/about",
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: site + "/boys",
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: site + "/girls",
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: site + "/contacts",
      priority: 0.8,
      lastModified: new Date(),
    },
    ...products.map((item) => ({
      url: `${site}/detail/${item.linkHref}`,
      priority: 0.7,
      lastModified: new Date(),
    })),
  ];
}