"use client";
import N from "@/components/N";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/motiondesign/Hero";
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
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

function page() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const videoUrl =
    "https://snappy-motions.b-cdn.net/MotionDesign/renault/main%20video.mp4";
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
  function handleBack() {
    router.back();
  }

  const images = [
    "https://snappy-motions.b-cdn.net/MotionDesign/renault/p1.png",
    "https://snappy-motions.b-cdn.net/MotionDesign/renault/p2.png",
    "https://snappy-motions.b-cdn.net/MotionDesign/renault/p3.png",
    "https://snappy-motions.b-cdn.net/MotionDesign/renault/p4.png",
    "https://snappy-motions.b-cdn.net/MotionDesign/renault/p5.png",
  ];
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
                  AI Automotive Commercial
                </p>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white">
                  Renault Duster
                  <span className="block text-orange-500">AI Ad</span>
                </h1>

                <p className="max-w-xl text-gray-400 text-sm md:text-base">
                  A cinematic AI-generated automotive advertisement showcasing
                  the rugged personality, off-road capability, and adventurous
                  spirit of the Renault Duster through dynamic environments and
                  cinematic storytelling.
                </p>
              </div>

              {/* META */}
              <div className="mt-24 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { label: "Project", value: "Renault Duster AI Ad" },
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
                    An AI-generated automotive commercial designed to showcase
                    the power, durability, and adventurous identity of the
                    Renault Duster.
                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                    Instead of filming a traditional car commercial with large
                    production crews and complex camera rigs, the visual
                    sequences for this advertisement were generated using AI.
                    Higgsfield AI was used to create cinematic environments and
                    vehicle motion, while Adobe Premiere Pro was used for
                    editing, pacing, and final visual polish. The final result
                    is a fast-paced cinematic AI advertisement highlighting the
                    Duster’s off-road capability and bold adventurous spirit.
                  </p>
                </div>

                <div className="hidden lg:flex items-end justify-end">
                  <div className="text-right text-sm text-gray-500 leading-relaxed max-w-xs">
                    Designed to communicate power, exploration, and terrain
                    dominance through cinematic lighting, dynamic landscapes,
                    and dramatic camera movement.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CHALLENGE */}
          <TextBlock
            title="The Challenge"
            content={`Automotive commercials typically require large production crews, expensive camera rigs, location permits, and multiple shooting days across dramatic landscapes.

The challenge for this project was to recreate the premium aesthetic of a cinematic automotive advertisement using AI-generated visuals.

It was important to maintain believable vehicle motion, cinematic camera angles, and realistic environmental interaction while ensuring the Renault Duster remained visually consistent throughout the advertisement.

Achieving this required generating multiple AI variations and carefully selecting shots that maintained realism, continuity, and cinematic quality.`}
          />

          {/* <ImageGrid type="storyboard" count={24} /> */}
          <img
            src="https://snappy-motions.b-cdn.net/MotionDesign/renault/Renault%20Duster%20Storyboard-01.jpg.jpeg"
            alt="storyboard"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
          {/* STATEMENT */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center lg:text-left">
            <h3 className="font-serif text-lg md:text-2xl lg:text-5xl leading-[1.1] max-w-4xl tracking-tight text-white">
              The advertisement focuses on cinematic motion and dramatic
              landscapes — positioning the Renault Duster as a fearless explorer
              built for adventure and off-road capability.
            </h3>
          </div>

          {/* SOLUTION */}
          <TextBlock
            title="The Solution"
            columns={2}
            content={[
              `All primary visuals were generated using Higgsfield AI with prompts designed to simulate professional automotive cinematography. These prompts focused on tracking shots, low-angle hero shots, speed sequences, and dramatic environmental transitions to emphasize the rugged performance of the Renault Duster.`,

              `Once the scenes were generated, the project moved into Adobe Premiere Pro where the advertisement was assembled and refined. Editing focused on cinematic pacing, smooth transitions, color grading, and sound design to transform individual AI clips into a cohesive automotive commercial.`,
            ]}
          />

          <ImageGrid type="color" images={images} />

          {/* IMPACT */}
          <TextBlock
            title="The Impact"
            content={`The Renault Duster AI advertisement demonstrates how modern AI tools can be used to produce cinematic brand content without the complexity of traditional production.

By combining AI-generated visuals with professional editing techniques, the project achieved the visual quality of a high-end automotive commercial while dramatically reducing production time and cost.

This workflow highlights the growing role of AI-assisted filmmaking in advertising, opening new possibilities for creative experimentation and rapid content creation.`}
          />

          {/* TESTIMONIAL */}
          <Testimonial
            testimonial={
              "This project showcases how AI-assisted filmmaking can recreate the cinematic scale of automotive advertising while dramatically simplifying production workflows."
            }
            name={"Creative Direction"}
            position={"AI Assisted Production"}
            company={"Renault Duster AI Ad"}
          />

          {/* CTA */}
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-orange-500/20 blur-[140px] rounded-full pointer-events-none" />

            <div className="text-center px-6 lg:px-12">
              <a
                href="#"
                className="inline-block text-3xl md:text-4xl font-light text-white hover:text-orange-500 transition-colors duration-300"
              >
                Interested in AI-powered automotive advertising?{" "}
                <span className="underline underline-offset-8 decoration-orange-500 decoration-2">
                  Let's collaborate!
                </span>
              </a>
            </div>
          </section>

          {/* NEXT PROJECT */}
          <NextProject
            title={"Skullz"}
            image={
              "https://snappy-motions.b-cdn.net/MotionDesign/skullz/image-gen%20(53).png"
            }
            link={"/work/motion-designing/skullz"}
          />
        </main>

        <HorizontalCTA />
      </div>

      <Footer />
    </>
  );
}

export default page;
