import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import { site, contact, social, siteOrigin } from "@/data/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${site.fullName} | Digital Marketing & Social Media`,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: siteOrigin,
    siteName: site.fullName,
    title: `${site.fullName} | Digital Marketing & Social Media`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | Digital Marketing & Social Media`,
    description: site.description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  jobTitle: site.title,
  email: contact.email,
  telephone: `+${contact.whatsappNumber}`,
  sameAs: [social.tiktok.href, social.facebook.href],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} bg-bg text-text antialiased pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-dark focus:font-semibold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
