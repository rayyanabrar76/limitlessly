"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: "ai-saas-platform",
    title: "AI SaaS Platform",
    tagline: "Your full product, engineered end-to-end with AI at the core.",
    badge: "Flagship",
    accent: "#6366f1", // Indigo
    href: "/store/ai-saas-platform",
    image: "/images/products/saas_dashboard_light.jpg",
  },
  {
    id: "ecommerce-store",
    title: "Custom E-Commerce Store",
    tagline: "A store built to sell, with the admin panel to run it.",
    badge: "Popular",
    accent: "#d946ef", // Fuchsia
    href: "/store/ecommerce-store",
    image: "/images/products/ecommerce_ui_light.jpg",
  },
  {
    id: "mvp-sprint",
    title: "AI MVP Sprint",
    tagline: "Idea to a launched, fundable product — fast.",
    badge: "Best Value",
    accent: "#0ea5e9", // Sky
    href: "/store/mvp-sprint",
    image: "/images/products/saas_dashboard_light.jpg",
  },
];

export default function StoreHero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-950 transition-colors duration-300">
      
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full bg-neutral-900">
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill 
                  className={`object-cover transition-transform duration-[15s] ease-out ${isActive ? "scale-105" : "scale-100"}`}
                  priority={index === 0}
                />
              </div>

              {/* Advanced Gradients for Text Readability & Mood */}
              <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-[#09090b]/80 via-transparent to-[#09090b]/80" />
              
              <div 
                className="absolute inset-0 opacity-40 mix-blend-color"
                style={{
                  background: `radial-gradient(circle at center, ${slide.accent} 0%, transparent 80%)`
                }}
              />
              
              {/* Film grain overlay */}
              <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />

              {/* Content Box */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto pt-24 pb-12">
                <div 
                  className={`flex flex-col items-center transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <span 
                    className="mb-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full text-white border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] backdrop-blur-md"
                    style={{ backgroundColor: `${slide.accent}30`, borderColor: `${slide.accent}60` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {slide.badge}
                  </span>
                  
                  <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1] font-bold text-white tracking-tighter mb-8 max-w-5xl">
                    {slide.title}
                  </h1>
                  
                  <p className="text-lg md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-12 font-medium tracking-tight">
                    {slide.tagline}
                  </p>
                  
                  <Link
                    href={slide.href}
                    className="group flex items-center justify-center gap-2 bg-white text-neutral-950 font-bold text-[15px] px-10 py-4 rounded-full hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                  >
                    Explore Platform
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Premium Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dynamic Pill Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 p-3 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              index === current 
                ? "bg-white w-10 shadow-[0_0_12px_rgba(255,255,255,0.8)]" 
                : "bg-white/40 w-2 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
