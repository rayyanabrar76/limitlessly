import StoreHero from "@/components/store-hero";
import CategoryStrip from "@/components/category-strip";
import FeaturedProducts from "@/components/featured-products";
import HomeFaq from "@/components/home-faq";
import MarqueeStrip from "@/components/marquee-strip";

export default function Home() {
  return (
    <main className="relative">
      <StoreHero />
      <CategoryStrip />
      <FeaturedProducts />
      <HomeFaq />
      <MarqueeStrip />
    </main>
  );
}
