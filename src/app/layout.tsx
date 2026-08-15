import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { QuoteProvider } from "@/lib/quote-context";
import QuoteDrawer from "@/components/store/quote-drawer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://limitlessly.vercel.app"),
  title: {
    default: "Limitlessly — The Software Store",
    template: "%s | Limitlessly"
  },
  description: "Browse 20 ready-to-build software and AI products. Add what you need to a quote — no prices, no pressure, a reply in 24 hours.",
  keywords: [
    "custom software development",
    "AI development agency",
    "SaaS development",
    "AI SaaS platform",
    "custom AI agents",
    "web application development",
    "mobile app development",
    "e-commerce development",
    "Next.js development",
    "software store",
    "Limitlessly",
  ],
  authors: [{ name: "Limitlessly", url: "https://limitlessly.vercel.app" }],
  creator: "Limitlessly",
  publisher: "Limitlessly",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "https://limitlessly.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  openGraph: {
    title: "Limitlessly — The Software Store",
    description: "Browse 20 ready-to-build software and AI products. Add what you need to a quote — no prices, no pressure, a reply in 24 hours.",
    url: "https://limitlessly.vercel.app",
    siteName: "Limitlessly",
    images: [
      {
        url: "/images/products/saas_dashboard_light.jpg", // Fallback OG image
        width: 1200,
        height: 630,
        alt: "Limitlessly Software Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limitlessly — The Software Store",
    description: "Browse 20 ready-to-build software and AI products. Add what you need to a quote.",
    images: ["/images/products/saas_dashboard_light.jpg"],
  },
  verification: {
    google: "qq8BrUVLnAVbIdaN48osQMK24XU-mq2m-vJnr8U8vtM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <QuoteProvider>
          {/* The Navbar will now show on every page, including Blog posts */}
          <Navbar />

          {/* This container ensures content doesn't get hidden behind a fixed Navbar */}
          <div className="min-h-screen">
            {children}
          </div>

          {/* The Footer will now show at the bottom of every page */}
          <Footer />

          {/* Global Slide-out Drawer */}
          <QuoteDrawer />
        </QuoteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}