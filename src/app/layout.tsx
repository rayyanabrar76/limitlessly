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
  title: "Limitlessly — The Software Store",
  description: "Browse 20 ready-to-build software and AI products. Add what you need to a quote — no prices, no pressure, a reply in 24 hours.",
  verification: {
    google: "Uk3At5gc6OYWMn1zmULpfwsM7qycNYAYt_HFoC2_tFw",
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