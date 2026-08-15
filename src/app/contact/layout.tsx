import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Strategy Call",
  description: "Get in touch to discuss your next software or AI project. Book a free 20-minute strategy call or send us a message. We reply within 24 hours.",
  alternates: {
    canonical: "https://limitlessly.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Limitlessly — Let's Build Your Platform",
    description: "Book a free strategy call or send us a message. We reply within 24 hours.",
    url: "https://limitlessly.vercel.app/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Limitlessly",
  description: "Get in touch to discuss your next software or AI project.",
  url: "https://limitlessly.vercel.app/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Limitlessly",
    url: "https://limitlessly.vercel.app",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://limitlessly.vercel.app/contact",
      availableLanguage: ["English"],
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
