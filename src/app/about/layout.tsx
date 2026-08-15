import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Limitlessly — Elite Software & AI Development Studio",
  description: "We build platforms that scale from day one. Trusted by 40+ visionary founders worldwide. See our portfolio of delivered AI SaaS platforms, e-commerce stores, and custom software.",
  alternates: {
    canonical: "https://limitlessly.vercel.app/about",
  },
  openGraph: {
    title: "About Limitlessly — Elite Software & AI Development Studio",
    description: "We build platforms that scale from day one. Trusted by 40+ visionary founders worldwide.",
    url: "https://limitlessly.vercel.app/about",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Limitlessly",
    description: "Limitlessly is an elite software agency building platforms that scale from day one.",
    url: "https://limitlessly.vercel.app/about",
    mainEntity: {
      "@type": "Organization",
      name: "Limitlessly",
      url: "https://limitlessly.vercel.app",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Limitlessly Portfolio",
    description: "Selected work and case studies from Limitlessly.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "CreativeWork",
          name: "Advanced Power Solutions",
          description: "AI-assisted e-commerce platform for a heavy-duty engineering firm with an AI sizing advisor.",
          genre: "AI Industrial Commerce",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "CreativeWork",
          name: "StorePanel",
          description: "AI admin panel that lets you query your database in plain English.",
          genre: "AI SaaS Platform",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "CreativeWork",
          name: "ShopFlow",
          description: "Multi-tenant commerce SaaS with AI-native features — Shopify, but AI-native.",
          genre: "AI SaaS Platform",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "CreativeWork",
          name: "LinkedIn Bulk Opener",
          description: "AI tool that opens 100+ LinkedIn profiles in under a minute, used by 10,000+ recruiters globally.",
          genre: "AI Productivity Tool",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "CreativeWork",
          name: "Agrolync",
          description: "AI-powered farm-to-market platform connecting 12,400+ verified farmers across 36 Nigerian states.",
          genre: "AI AgriTech Platform",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does the quote process work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Browse our Software Store and add the specific products or components you need to your Quote Basket. Once submitted, our engineering team reviews your requirements and gets back to you within 24 hours with a custom proposal, timeline, and exact pricing. No commitment is required until you approve the proposal.",
        },
      },
      {
        "@type": "Question",
        name: "Do I own the source code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Once the project is completed and paid in full, 100% of the intellectual property, source code, and assets are transferred to you. You are never locked into our services.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical build take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the complexity of the platform. MVP Sprints and custom AI Agents typically take 2-4 weeks. Full-scale AI SaaS platforms and multi-tenant architectures usually take 6-12 weeks from discovery to launch.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer post-launch support and maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer optional retainer packages for ongoing maintenance, feature updates, scaling infrastructure, and ensuring your AI models remain performant as your user base grows.",
        },
      },
    ],
  },
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
