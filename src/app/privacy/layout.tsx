import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Limitlessly privacy policy. Learn how we collect, use, and protect your data when you use our software store and services.",
  alternates: {
    canonical: "https://limitlessly.vercel.app/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
