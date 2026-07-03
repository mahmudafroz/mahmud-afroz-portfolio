import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeScript } from "@/components/theme/theme-script";
import { PROFILE, SITE_URL } from "@/data/profile";
import { assetPath } from "@/lib/assets";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mahmud Afroz | GIS Technician & Geographic Data Analyst",
    template: "%s | Mahmud Afroz"
  },
  description: PROFILE.summary,
  openGraph: {
    title: "Mahmud Afroz | GIS Technician & Geographic Data Analyst",
    description: PROFILE.summary,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: assetPath("/og-image.svg"),
        width: 1200,
        height: 630,
        alt: "Mahmud Afroz portfolio"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: assetPath("/favicon.svg")
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
