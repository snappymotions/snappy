"use client";

import N from "@/components/N";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HorizontalCTA from "@/components/motiondesign/HorizontalCTA";
import ImageGrid from "@/components/motiondesign/ImageGrid";
import NextProject from "@/components/motiondesign/NextProject";
import Testimonial from "@/components/motiondesign/Testimonial";
import TextBlock from "@/components/motiondesign/TextBlock";
import VideoSection from "@/components/motiondesign/VideoSection";
import React from "react";
import { CustomCursor } from "@/components/CustomCursor";
import FullscreenMenu from "@/components/FullscreenMenu";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

function page() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoUrl = "https://snappy-motions.b-cdn.net/MotionDesign/skullz/main%20video.MP4";
const router = useRouter();
  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [loading]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuOpen]);
function handleBack(){
  router.back();
}
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isMenuOpen]);
 const  images = ["https://snappy-motions.b-cdn.net/MotionDesign/skullz/p1.png", "https://snappy-motions.b-cdn.net/MotionDesign/skullz/image-gen%20(32).png","https://snappy-motions.b-cdn.net/MotionDesign/skullz/image-gen%20(46).png", "https://snappy-motions.b-cdn.net/MotionDesign/skullz/image-gen%20(53).png","https://snappy-motions.b-cdn.net/MotionDesign/skullz/image-gen%20(54).png"]
  return (
    <>
      <CustomCursor />
      <Navbar isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
<button
        onClick={handleBack}
        className="group relative top-30 left-20 z-50
    flex items-center justify-center
    bg-white/10 hover:bg-orange-500
    border border-white/20 hover:border-orange-500
    backdrop-blur-md
    px-4 py-3 rounded-full
    transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white group-hover:text-white transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="min-h-screen flex flex-col selection:bg-orange-400 mt-20 selection:text-black bg-black">
        <main className="flex-grow">
          {/* HERO */}
          <section className="relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-orange-500/20 blur-[170px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 -left-40 w-[420px] h-[420px] bg-orange-600/10 blur-[190px] rounded-full pointer-events-none" />

            <div className="relative px-6 lg:px-12 pt-20 pb-28 max-w-7xl mx-auto z-10">
              <div className="max-w-4xl space-y-6">
                <p className="text-xs uppercase tracking-[0.35em] text-orange-500 font-semibold">
                  AI Product Commercial
                </p>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white">
                  Skullz Energy Drink
                  <span className="block text-orange-500">AI Ad</span>
                </h1>

                <p className="max-w-xl text-gray-400 text-sm md:text-base">
                  A stylized AI-generated commercial showcasing the bold,
                  high-energy identity of skullz Energy Drink through cinematic
                  visuals and dynamic editing.
                </p>
              </div>

              {/* META */}
              <div className="mt-24 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { label: "Project", value: "Skullz Energy Drink AI Ad" },
                  { label: "AI Production", value: "Higgsfield AI" },
                  { label: "Post Production", value: "Adobe Premiere Pro" },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      {item.label}
                    </span>
                    <span className="text-lg text-white hover:text-orange-500 transition-colors">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <VideoSection videoUrl={videoUrl} />

          {/* PROJECT OVERVIEW */}
          <section className="relative bg-black overflow-hidden">
            <div className="absolute -top-24 -right-32 w-[360px] h-[360px] bg-orange-500/10 blur-[160px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-10">
                  <span className="text-xs uppercase tracking-[0.35em] text-orange-500 font-semibold">
                    Project Overview
                  </span>

                  <h2 className="text-3xl md:text-4xl font-medium leading-tight max-w-xl text-white">
                    This project is an AI-generated product advertisement
                    created to showcase the bold, energetic identity of skullz
                    Energy Drink.
                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                    Instead of filming a traditional commercial with studio
                    lighting and camera rigs, the visuals were generated using
                    AI and refined through professional editing to create a
                    stylized, high-impact product advertisement.
                  </p>
                </div>

                <div className="hidden lg:flex items-end justify-end">
                  <div className="text-right text-sm text-gray-500 leading-relaxed max-w-xs">
                    Designed to communicate power, intensity, and adrenaline
                    through cinematic lighting, dramatic visuals, and fast-paced
                    editing.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CHALLENGE */}
          <TextBlock
            title="The Challenge"
            content={`Energy drink commercials usually rely on complex production setups including controlled studio lighting, high-speed cameras, and advanced liquid simulations.

The challenge for this project was recreating those premium advertising visuals using AI-generated imagery while ensuring the product remained sharp, realistic, and visually powerful across every shot.

Another key challenge was designing scenes that captured the aggressive, high-energy personality of the skullz brand while maintaining visual consistency throughout the ad.`}
          />

          <ImageGrid type="color" images={images} />


          {/* STATEMENT */}
         <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center lg:text-left">
            <h3 className="font-serif text-lg md:text-2xl lg:text-5xl leading-[1.1] max-w-4xl tracking-tight text-white">
              The ad focuses on pure visual impact — dramatic lighting, bold
              colors, and dynamic liquid motion designed to mirror the instant
              energy and adrenaline of an energy drink.
            </h3>
          </div>

          {/* SOLUTION */}
          <TextBlock
            title="The Solution"
            columns={2}
            content={[
              "All core visuals were generated using Higgsfield AI. Prompts were designed to create cinematic product shots, dramatic lighting environments, and dynamic energy splash effects. Multiple outputs were generated and refined to achieve the most realistic scenes possible.",
              "Once the visuals were generated, the clips were assembled and refined in Adobe Premiere Pro. Editing focused on pacing, transitions, contrast enhancement, and color grading to create a cohesive, fast-paced advertisement that feels similar to a high-budget beverage commercial.",
            ]}
          />

          <ImageGrid type="color" count={16} />

          {/* IMPACT */}
          <TextBlock
            title="The Impact"
            content={`The final skullz Energy Drink ad demonstrates how AI can be used to create stylized product commercials efficiently and creatively.

By combining AI-generated visuals with professional editing techniques, the project achieved a bold cinematic aesthetic without requiring a traditional production shoot.

This workflow allows faster concept-to-content creation and opens new possibilities for creative experimentation in product advertising.`}
          />

          {/* TESTIMONIAL */}
          <Testimonial
            testimonial={
              "This project demonstrates how AI-assisted production can create visually striking product advertisements while dramatically reducing the complexity of traditional shoots."
            }
            name={"Creative Direction"}
            position={"AI Assisted Production"}
            company={"Skullz Energy Drink Ad"}
          />

          {/* CTA */}
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-orange-500/20 blur-[140px] rounded-full pointer-events-none" />

            <div className="text-center px-6 lg:px-12">
              <a
                href="#"
                className="inline-block text-3xl md:text-4xl font-light text-white hover:text-orange-500 transition-colors duration-300"
              >
                Want to create AI powered commercials?{" "}
                <span className="underline underline-offset-8 decoration-orange-500 decoration-2">
                  Let's talk!
                </span>
              </a>
            </div>
          </section>

          {/* NEXT PROJECT */}
          <NextProject
            title={"Renult"}
            image={"https://snappy-motions.b-cdn.net/MotionDesign/renault/p2.png"}
            link={"/work/motion-designing/renult"}
          />
        </main>

        <HorizontalCTA />
      </div>

      <Footer />
    </>
  );
}

export default page;
