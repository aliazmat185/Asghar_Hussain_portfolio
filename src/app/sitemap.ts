import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteOrigin } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteOrigin, changeFrequency: "monthly", priority: 1 },
    ...services.map((service) => ({
      url: `${siteOrigin}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
