import type { MetadataRoute } from "next";

import { SITE_URL } from "@/data/profile";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const basePath = process.env.NEXT_BASE_PATH ?? "";

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: new URL(`${basePath}/sitemap.xml`, SITE_URL).toString()
  };
}
