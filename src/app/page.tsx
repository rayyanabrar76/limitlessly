import Hero from "@/components/hero";
import MarqueeStrip from "@/components/marquee-strip";
import LiveMockup from "@/components/live-mockup";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeStrip />
      <LiveMockup />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
    </main>
  );
}
