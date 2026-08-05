import { Geist, Geist_Mono, DM_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Header from "@/components/Header/Header";
const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://altairkids.shop"),

  title: {
    default: "Altair Kids — Детская одежда",
    template: "%s | Altair Kids",
  },

  description:
    "Интернет-магазин детской одежды. Качественная одежда для мальчиков и девочек.",

  keywords: [
    "детская одежда",
    "детская одежда Актобе",
    "одежда для мальчиков",
    "одежда для девочек",
    "школьная одежда Актобе",
    "Altair Kids",
  ],

  applicationName: "Altair Kids",

  creator: "Altair Kids",

  publisher: "Altair Kids",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Altair Kids",
    title: "Altair Kids",
    description: "Стильная одежда для детей",
    url: "https://altairkids.shop",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Altair Kids",
    description: "Стильная одежда для детей",
    images: ["/opengraph-image.jpg"],
  },

  alternates: {
    canonical: "/",
  },
};

import YandexMetrika from "@/components/YandexMetrika";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", dmSans.variable)}
    >
      <body>
          <YandexMetrika />
          <Header/>
          {children}
      </body>
    </html>
  )
}
