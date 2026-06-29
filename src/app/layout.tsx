import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnnouncementBar from "@/components/announcement-bar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Limitless — AI Product Studio",
  description: "We design and build full-scale AI SaaS platforms — from idea to launch to scale. A product studio for ambitious founders worldwide.",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-neutral-950 text-neutral-100">
        {/* The Navbar will now show on every page, including Blog posts */}
        <AnnouncementBar />
        <Navbar />

        {/* This container ensures content doesn't get hidden behind a fixed Navbar */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* The Footer will now show at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}