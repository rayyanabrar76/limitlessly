import Hero from "@/components/hero";
import MarqueeStrip from "@/components/marquee-strip";
import LiveMockup from "@/components/live-mockup";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import LeadMagnet from "@/components/lead-magnet";
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
      <LeadMagnet />
      <Contact />
    </main>
  );
}
