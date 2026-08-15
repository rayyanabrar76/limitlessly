import StoreHero from "@/components/store-hero";
import CategoryStrip from "@/components/category-strip";
import FeaturedProducts from "@/components/featured-products";
import HomeFaq from "@/components/home-faq";
import MarqueeStrip from "@/components/marquee-strip";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Limitlessly — Custom Software & AI Development Store",
  description: "Browse 20 ready-to-build software and AI products. From AI SaaS platforms to custom agents, e-commerce stores, and mobile apps. Add to quote — no prices, no pressure, a reply in 24 hours.",
  alternates: {
    canonical: "https://limitlessly.vercel.app",
  },
  openGraph: {
    title: "Limitlessly — The Software Store",
    description: "Browse 20 ready-to-build software and AI products. Add to quote, get a proposal in 24 hours.",
    url: "https://limitlessly.vercel.app",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Limitlessly",
    alternateName: "Limitlessly — The Software Store",
    url: "https://limitlessly.vercel.app",
    logo: "https://limitlessly.vercel.app/limit.png",
    description: "Custom software and AI development studio. Browse 20 ready-to-build products, add to quote, and get a proposal within 24 hours.",
    foundingDate: "2025",
    sameAs: [
      "https://www.linkedin.com/company/limitlessly",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://limitlessly.vercel.app/contact",
      availableLanguage: ["English"],
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: "20",
      url: "https://limitlessly.vercel.app/store",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Limitlessly",
    url: "https://limitlessly.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://limitlessly.vercel.app/store?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does the store process work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You browse the catalog and add the systems you need to your quote. We review your requirements, scope the exact build, and return a fixed price and timeline within 24 hours. Once approved, we start building.",
        },
      },
      {
        "@type": "Question",
        name: "Do you use templates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Every product is engineered custom from the ground up for your specific business logic. However, we use battle-tested architectural patterns (like Next.js, PostgreSQL, and Stripe) to move fast without sacrificing quality.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate with our existing software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We regularly integrate custom applications with existing CRMs, ERPs, legacy databases, and third-party tools via APIs and webhooks.",
        },
      },
      {
        "@type": "Question",
        name: "Do I own the source code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Once the project is complete and the final payment is made, 100% of the Intellectual Property and source code is transferred directly to you.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical build take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends entirely on the scope. A high-converting landing page takes about 1 week. A full custom E-Commerce store takes 4 weeks. A complex AI SaaS platform takes 6+ weeks. We provide a strict, guaranteed timeline in your quote.",
        },
      },
    ],
  }
];

export default function Home() {
  return (
    <main className="relative">
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <StoreHero />
      <CategoryStrip />
      <FeaturedProducts />
      <HomeFaq />
      <MarqueeStrip />
    </main>
  );
}
