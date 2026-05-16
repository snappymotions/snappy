// About.tsx

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  const router = useRouter();

  const text =
    "SNAPPY MOTION IS A CREATIVE STUDIO SPECIALIZING IN MOTION DESIGN, GRAPHIC DESIGN, AND VIDEO PRODUCTION. WE CRAFT VISUALLY ENGAGING CONTENT THAT TELLS STORIES, ELEVATES BRANDS, AND LEAVES A LASTING IMPRESSION. OUR TEAM COMBINES INNOVATIVE DESIGN, ANIMATED VISUALS, AND STRATEGIC THINKING TO DELIVER HIGH-QUALITY MEDIA SOLUTIONS TAILORED TO YOUR NEEDS.";

  // GSAP CHARACTER REVEAL
  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll("span");

    gsap.set(chars, {
      color: "#6B7280",
    });

    const tween = gsap.to(chars, {
      color: "#ffffff",
      stagger: {
        each: 0.015,
        from: "start",
      },
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "bottom 40%",
        scrub: 0.6,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  // SPLIT TEXT
  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  // NAVIGATION
  const goToDashboard = () => {
    router.push("/contact");
  };

  return (
    <section
      className="
        relative w-full overflow-hidden

        min-h-[70vh]
        md:min-h-[85vh]

        py-16 md:py-24
      "
      style={{
        backgroundImage: `url(/ab.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div
        className="
          relative z-10

          mx-4 md:mx-auto
          flex flex-col items-center justify-center

          rounded-2xl md:rounded-3xl

          border border-white/10
          bg-black/30
          backdrop-blur-xl

          px-5 py-10
          sm:px-8
          md:px-14 md:py-16

          text-center

          max-w-6xl
        "
      >
        {/* LABEL */}
        <h2
          className="
            mb-5 md:mb-7

            text-[10px]
            sm:text-xs
            md:text-sm

            font-bold
            uppercase
            tracking-[0.35em]

            text-orange-500
          "
        >
          ABOUT
        </h2>

        {/* TEXT */}
        <h1
          ref={textRef}
          className="
            font-bold uppercase

            leading-[1.4]
            tracking-[0.02em]

            text-base
            sm:text-xl
            md:text-3xl
            lg:text-4xl

            max-w-[95%]
            md:max-w-[90%]
          "
        >
          {splitText(text)}
        </h1>

        {/* BUTTON */}
        <div className="mt-8 md:mt-12">
          <button
            onClick={goToDashboard}
            className="
              group relative overflow-hidden

              inline-flex items-center justify-center

              rounded-xl

              bg-gradient-to-r
              from-orange-600
              to-orange-500

              px-6 py-3
              md:px-8 md:py-4

              text-[11px]
              sm:text-sm

              font-bold uppercase
              tracking-[0.18em]

              text-white

              transition-all duration-300

              shadow-[0_0_20px_rgba(234,88,12,0.35)]

              hover:scale-105
              hover:shadow-[0_0_30px_rgba(234,88,12,0.55)]

              active:scale-95
            "
          >
            <span className="relative z-10">
              More About Me
            </span>

            <div
              className="
                absolute inset-0
                translate-y-full
                bg-white/20
                transition-transform duration-300
                group-hover:translate-y-0
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
};