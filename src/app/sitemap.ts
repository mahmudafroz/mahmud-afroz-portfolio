import type { MetadataRoute } from "next";

import { SITE_URL } from "@/data/profile";

const routes = ["", "/about", "/experience", "/research", "/capabilities"];
const basePath = process.env.NEXT_BASE_PATH ?? "";

function routeWithBasePath(route: string) {
  const path = route === "" ? "/" : route;
  return `${basePath}${path}`;
}

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(routeWithBasePath(route), SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8
  }));
}
