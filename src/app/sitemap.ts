import { MetadataRoute } from "next";
import { allLinks } from "../constants/sitemap-links";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapLinks: MetadataRoute.Sitemap = allLinks.map((link) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${link}`,
  }));
  return sitemapLinks;
}
