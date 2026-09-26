import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteConfig, socials } from "@/content/site";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GridLines } from "@/components/layout/grid-lines";
import { ScrollProgress } from "@/components/layout/scroll-progress";

import "./globals.css";

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Mohammad Ali",
    "itsproali",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Remotion Developer",
    "Chrome Extension Developer",
    "Team Lead",
    "Developer in Bangladesh",
    "Software Engineer Dhaka",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    creator: "@itsproali",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  colorScheme: "dark light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.avatar}`,
  email: `mailto:${siteConfig.email}`,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: socials.map((s) => s.href),
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "AWS",
    "Remotion",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        {/* Runs during parse, before first paint. Scroll reveals start hidden
            only when JS is available to reveal them again. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase"
          >
            Skip to content
          </a>

          <ScrollProgress />
          <GridLines />
          <Header />

          <main id="main" className="relative z-10">
            {children}
          </main>

          <Footer />

        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
