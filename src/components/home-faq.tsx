"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the store process work?",
    answer: "You browse the catalog and add the systems you need to your quote. We review your requirements, scope the exact build, and return a fixed price and timeline within 24 hours. Once approved, we start building."
  },
  {
    question: "Do you use templates?",
    answer: "No. Every product is engineered custom from the ground up for your specific business logic. However, we use battle-tested architectural patterns (like Next.js, PostgreSQL, and Stripe) to move fast without sacrificing quality."
  },
  {
    question: "Can you integrate with our existing software?",
    answer: "Yes. We regularly integrate custom applications with existing CRMs, ERPs, legacy databases, and third-party tools via APIs and webhooks."
  },
  {
    question: "Do I own the source code?",
    answer: "Absolutely. Once the project is complete and the final payment is made, 100% of the Intellectual Property and source code is transferred directly to you."
  },
  {
    question: "How long does a typical build take?",
    answer: "It depends entirely on the scope. A high-converting landing page takes about 1 week. A full custom E-Commerce store takes 4 weeks. A complex AI SaaS platform takes 6+ weeks. We provide a strict, guaranteed timeline in your quote."
  }
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Everything you need to know about working with Limitlessly.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-neutral-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <div 
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen 
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" 
                        : "bg-neutral-100 text-neutral-500 dark:bg-white/5 dark:text-neutral-400"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
