
"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from 'next/navigation';

import bgImage from "/ab.webp";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // const text =
  //   "I AM A DUTCH DIGITAL DESIGNER AND WEB DEVELOPER WITH OVER 8 YEARS OF EXPERIENCE, SPECIALIZING AT THE CROSSROADS OF DESIGN, ANIMATION, AND WEB DEVELOPMENT. MY BROAD EXPERTISE ALLOWS ME TO APPROACH DESIGN CHALLENGES FROM MULTIPLE PERSPECTIVES.";

const text =
  "SNAPPY MOTION IS A CREATIVE STUDIO SPECIALIZING IN MOTION DESIGN, GRAPHIC DESIGN, AND VIDEO PRODUCTION. WE CRAFT VISUALLY ENGAGING CONTENT THAT TELLS STORIES, ELEVATES BRANDS, AND LEAVES A LASTING IMPRESSION. OUR TEAM COMBINES INNOVATIVE DESIGN, ANIMATED VISUALS, AND STRATEGIC THINKING TO DELIVER HIGH-QUALITY MEDIA SOLUTIONS TAILORED TO YOUR NEEDS.";


  // ✅ GSAP SCROLL ANIMATION
  // useEffect(() => {
  //   if (!textRef.current) return;

  //   const chars = textRef.current.querySelectorAll("span");

  //   const tween = gsap.fromTo(
  //     chars,
  //     { color: "#9CA3AF" },
  //     {
  //       color: "#ffffff",
  //       stagger: 0.02,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: textRef.current,
  //         start: "bottom 20%",
  //         end: "top 90%",
  //         scrub: 1,
  //       },
  //     }
  //   );

  //   return () => {
  //     tween.scrollTrigger?.kill();
  //     tween.kill();
  //   };
  // }, []);
useEffect(() => {
  if (!textRef.current) return;

  const chars = textRef.current.querySelectorAll("span");

  // Set initial color immediately
  gsap.set(chars, { color: "#9CA3AF" });

  const tween = gsap.to(chars, {
    color: "#ffffff",
    stagger: {
      each: 0.02,
      from: "start", // start from first character
    },
    ease: "none",
    scrollTrigger: {
      trigger: textRef.current,
      start: "top 80%",   // animation starts when top of text is 80% from top of viewport
      end: "bottom 20%",  // ends when bottom of text reaches 20% from top
      scrub: 0.5,         // smooth scrub
    },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}, []);

  // ✅ TEXT SPLIT
  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  // ✅ NAVIGATION
  const goToDashboard = () => {
     router.push('/contact');
  };

  return (
    <section
      className="relative w-full h-[80vh] overflow-hidden"
      style={{
        backgroundImage: `url(/ab.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative my-20 z-10 flex flex-col items-center justify-center h-fit py-12 px-4 sm:px-8 md:px-16 text-center max-w-7xl mx-auto rounded-3xl bg-black/30 backdrop-blur-xl border border-white/10">
        <h2 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs sm:text-lg mb-6">
          ABOUT
        </h2>

        <h1
          ref={textRef}
          className="font-bold text-lg tracking-wide sm:text-2xl md:text-4xl lg:text-3xl"
        >
          {splitText(text)}
        </h1>

        <div className="mt-10">
          <button
            onClick={goToDashboard}
            className="group relative inline-flex items-center justify-center
              px-6 sm:px-8 py-3 font-bold text-white uppercase
              text-xs sm:text-sm tracking-wider
              bg-gradient-to-r from-orange-600 to-orange-500
              rounded-xl transition-all duration-300
              shadow-[0_0_20px_rgba(234,88,12,0.4)]
              hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]
              hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">More About Me</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
