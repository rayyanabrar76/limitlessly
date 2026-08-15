import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Custom Quote — Get a Proposal in 24 Hours",
  description: "Submit your software requirements and selected products. We review your scope and send a custom proposal with pricing and timeline within 24 hours. No commitment required.",
  alternates: {
    canonical: "https://limitlessly.vercel.app/quote",
  },
  openGraph: {
    title: "Request a Custom Quote — Limitlessly",
    description: "Submit your requirements and get a custom proposal with pricing within 24 hours.",
    url: "https://limitlessly.vercel.app/quote",
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
