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

import Script from "next/script";

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

  <Script id="yandex-metrika" strategy="afterInteractive">
    {
      `<!-- Yandex.Metrika counter -->
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=111319045', 'ym');

    ym(111319045, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
<noscript><div><img src="https://mc.yandex.ru/watch/111319045" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->`
    }
  </Script>

          <Header/>
          {children}
      </body>
    </html>
  )
}
