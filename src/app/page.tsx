import StoreHero from "@/components/store-hero";
import CategoryStrip from "@/components/category-strip";
import FeaturedProducts from "@/components/featured-products";
import HomeFaq from "@/components/home-faq";
import MarqueeStrip from "@/components/marquee-strip";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Limitlessly — Custom Software & AI Development",
  description: "Browse 20 ready-to-build software and AI products. Add what you need to a quote — no prices, no pressure, a reply in 24 hours.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Limitlessly",
  url: "https://limitlessly.vercel.app",
  logo: "https://limitlessly.vercel.app/limit.png",
  description: "Custom software and AI development agency.",
};

export default function Home() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StoreHero />
      <CategoryStrip />
      <FeaturedProducts />
      <HomeFaq />
      <MarqueeStrip />
    </main>
  );
}
