import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Limitlessly terms of service. Understand our policies on custom software development, intellectual property, payments, and more.",
  alternates: {
    canonical: "https://limitlessly.vercel.app/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
