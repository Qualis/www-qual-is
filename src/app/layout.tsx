import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `The quality of quality | Sean Van Osselaer`,
  description: `Musings on software development and delivery by Sean Van Osselaer (SVO). Covering architecture, agile practices, DevOps, and tech leadership to empower your digital journey.`,
  metadataBase: new URL("https://qual.is"),
  keywords: `Sean Van Osselaer, Van Osselaer, SVO, software development, engineering leadership, tech blog, architecture, agile, DevOps`,
  authors: [{ name: "Sean Van Osselaer", url: "https://qual.is" }],
  creator: "Sean Van Osselaer",
  publisher: "Sean Van Osselaer",
  openGraph: {
    title: "The quality of quality | Sean Van Osselaer",
    description:
      "Musings on software development and delivery by Sean Van Osselaer (SVO)",
    url: "https://qual.is",
    siteName: "qual.is",
    images: [HOME_OG_IMAGE_URL],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The quality of quality | Sean Van Osselaer",
    description:
      "Musings on software development and delivery by Sean Van Osselaer (SVO)",
    images: [HOME_OG_IMAGE_URL],
  },
  alternates: {
    canonical: "https://www.qual.is",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-mode="system">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="dd0b2581-9ffc-4bcb-8423-6973b138c1e4"
        ></script>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#005FCC" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#005FCC" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "The quality of quality | Sean Van Osselaer",
            url: "https://qual.is",
            description:
              "Musings on software development and delivery by Sean Van Osselaer (SVO)",
            author: {
              "@type": "Person",
              "@id": "https://qual.is/#seanvanosselaer",
              name: "Sean Van Osselaer",
              givenName: "Sean",
              familyName: "Van Osselaer",
              alternateName: "SVO",
              url: "https://qual.is",
              sameAs: [
                "https://github.com/svo",
                "https://www.linkedin.com/in/5v0/",
              ],
            },
          })}
        </script>
      </head>
      <body
        className={cn(
          inter.className,
          "bg-accent-1 text-accent-3 dark:bg-accent-3 dark:text-accent-1"
        )}
      >
        <div id="__next" className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
