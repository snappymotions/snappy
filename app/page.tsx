"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { CustomCursor } from "@/components/CustomCursor";
import FullscreenMenu from "@/components/FullscreenMenu";
import Content from "@/components/Content";
import HeroSection from "@/components/HeroSection";
import ClientService from "@/components/ClientService";
import ScrollAnimatedCards from "@/components/ScrollAnimatedCards";
import ModernPortfolioAuto from "@/components/ModernPortfolio";
import { AboutSection } from "@/components/About";
import Footer from "@/components/footer";
import Loader from "@/components/Loader";


// ✅ Force static generation for low TTFB
export const dynamic = "force-static";

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://theskitbit.com/#pricing",
    name: "Pricing Plans",
    description:
      "3D Animation pricing plans - Startup, Pro, and Premium packages for all business needs",
    url: "https://theskitbit.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "3D Animation Services",
      description:
        "Professional 3D animation services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Startup Plan",
          price: "299",
          priceCurrency: "USD",
          description: "Up to 15s 3D Animation with 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "699",
          priceCurrency: "USD",
          description: "Up to 25s 3D Animation with 4 revisions",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "2049",
          priceCurrency: "USD",
          description: "40-60s 3D Animation with unlimited revisions",
        },
      ],
    },
  };

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://theskitbit.com/",
    name: "Aquilia Marketers",
    description:
      "From product launches to full-scale campaigns, Skitbit delivers 3D animation that’s fast, consistent, and built to wow your audience.",
    url: "https://theskitbit.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Aquilia Marketers",
      url: "https://theskitbit.com",
      sameAs: [
        "https://twitter.com/theskitbit",
        "https://www.youtube.com/@skitbitinternational",
        "https://instagram.com/theskitbit",
        "https://threads.com/theskitbit",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://theskitbit.com/#pricing",
        name: "Pricing Section",
        url: "https://theskitbit.com/#pricing",
      },
    ],
  };
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) return;

    // Simulate an organic loading process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        // Random increments to feel more natural
        const increment = Math.floor(Math.random() * 8) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [loading]);

  const handleRestart = () => {
    setProgress(0);
    setLoading(true);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isMenuOpen]);
  return (
    <>
      <CustomCursor />
      <main className="min-h-[100dvh]">
        <div className="relative min-h-screen bg-black text-white selection:bg-black selection:text-white">
          <Navbar isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
          <FullscreenMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
          <main
            className={`transition-all duration-700 bg-black ${
              isMenuOpen
                ? "opacity-20 blur-sm scale-95"
                : "opacity-100 scale-100"
            }`}
          >
            <Content />
            <HeroSection />
            <ClientService />
            <AboutSection />

            <ScrollAnimatedCards />
            <ModernPortfolioAuto />
            <Footer />
            {/* <Loader/> */}
          </main>
        </div>
      </main>

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  );
}
