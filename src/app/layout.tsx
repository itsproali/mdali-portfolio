import type { Metadata, Viewport } from "next";
import { preconnect } from "react-dom";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";

import { siteConfig, socials } from "@/content/site";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Backdrop } from "@/components/layout/backdrop";
import { ServiceWorker } from "@/components/layout/service-worker";

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

/* Display serif for the hero and section titles. Optical size axis is
   included so large settings get the high-contrast cut. */
const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
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
  manifest: "/manifest.webmanifest",
  category: "technology",
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
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
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c10" },
  ],
  colorScheme: "dark light",
};

/* Person + WebSite in one graph so crawlers see the author and the site as
   linked entities. Pages add BreadcrumbList / BlogPosting / CreativeWork. */
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
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
      worksFor: { "@type": "Organization", name: "VidRush AI", url: "https://vidrush.ai" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Project screenshots are served from Cloudinary.
  preconnect("https://res.cloudinary.com");

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      // Font variables live on <html> so the theme tokens in :root can
      // resolve them — on <body> they'd be invalid at the root level.
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
    >
      <body className="antialiased">
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
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
          >
            Skip to content
          </a>

          <Backdrop />
          <Header />

          <main id="main" className="relative z-10">
            {children}
          </main>

          <Footer />
          <ServiceWorker />
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </body>
    </html>
  );
}
