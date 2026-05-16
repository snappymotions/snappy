"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  secondaryImage?: string;
  labels: string[];
}

const PROJECTS: Project[] = [
  {
    id: "/work/motion-designing",
    name: "Motion Design",
    tagline: "Logo Design, Branding Guidelines",
    description:
      "Creating a flagship destination for one of the world's most iconic brands.",
    image:
      "https://snappy-motions.b-cdn.net/MotionDesign/motion%20design%20slide.mp4",
    secondaryImage: "",
    labels: ["Branding", "2024", "Design"],
  },
  {
    id: "/work/graphics-designing",
    name: "Graphic Design",
    tagline: "Website Design, 3D Render, Implementation",
    description:
      "Enabling open global finance without borders using the Lightning Network.",
    image:
      "https://snappy-motions.b-cdn.net/GraphicsDesign/graphicsServicesBg.mp4",
    secondaryImage: "",
    labels: ["Fintech", "Web3", "Product"],
  },
  {
    id: "/work/video-production",
    name: "Video Production",
    tagline: "Best Cup Visual Identity, Packaging, Art Direction",
    description: "A premium digital experience for a global coffee community.",
    image: "https://snappy-motions.b-cdn.net/Film/video%20production%20bg.mp4",
    secondaryImage: "",
    labels: ["E-commerce", "Lifestyle", "UI/UX"],
  },
];

const ClientService = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const router = useRouter();
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Slide mobile nav
  useEffect(() => {
    if (!mobileNavRef.current) return;

    gsap.fromTo(
      mobileNavRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  // Main animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!activeProject) {
        gsap.to(bgRef.current, { opacity: 0, duration: 0.6 });
        gsap.to(contentRef.current, { opacity: 1, y: 0, duration: 0.4 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(bgRef.current, {
        opacity: 0.75,
        scale: 1.05,
        duration: 1,
      })
        .fromTo(
          contentRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0
        )
        .fromTo(
          imageRef.current,
          { y: 60, rotate: 4, opacity: 0 },
          { y: 0, rotate: 0, opacity: 1, duration: 1 },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, [activeProject]);

  return (
    <section className="relative min-h-screen bg-black my-10 text-white overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center transition-opacity"
        style={{
          backgroundImage: activeProject?.image
            ? `url(${activeProject.image})`
            : undefined,
          opacity: 0,
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
      {/* Desktop Horizontal Nav */}
      <nav
        className="
    hidden lg:flex
    absolute top-6 left-1/2 -translate-x-1/2 z-50
    flex-row gap-4
  "
      >
        {PROJECTS.map((p) => {
          const active = activeProject?.id === p.id;
          return (
            <button
              key={p.id}
              onMouseEnter={() => setActiveProject(p)}
              onMouseLeave={() => setActiveProject(null)}
              onClick={() => router.push(`${p.id}`)}
              className={`
    group flex items-center gap-2 px-6 py-3 rounded-full
    backdrop-blur-md border border-white/10
    transition-all duration-300

    shadow-[0_0_8px_rgba(249,115,22,0.35)]

    ${
      active
        ? "bg-white/10 scale-105 shadow-[0_0_25px_rgba(249,115,22,0.9)]"
        : "hover:bg-white/5 hover:scale-105 hover:shadow-[0_0_18px_rgba(249,115,22,0.7)]"
    }
  `}
            >
              <span
                className={`
            h-2 w-2 rounded-full transition-all
            ${active ? "bg-orange-500 scale-150" : "bg-white/40"}
          `}
              />
              <span className="text-lg font-light tracking-wide">{p.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Slide Nav */}
      {/* Mobile Top Nav */}
      <div
        ref={mobileNavRef}
        className="
    lg:hidden
    absolute top-4 left-1/2 -translate-x-1/2 z-50
    flex gap-2
    bg-black/60 backdrop-blur-xl
    px-3 py-2 rounded-full
    border border-white/10
  "
      >
        {PROJECTS.map((p) => {
          const active = activeProject?.id === p.id;
          return (
            <button
              key={p.id}
              onMouseEnter={() => setActiveProject(p)}
              onMouseLeave={() => setActiveProject(null)}
              onClick={() => router.push(`${p.id}`)}
              className={`
          flex items-center gap-1.5
          px-3 py-1.5 rounded-full text-xs
          transition-all duration-300
          ${active ? "bg-white/15 scale-105" : "bg-white/5"}
        `}
            >
              <span
                className={`
            h-1.5 w-1.5 rounded-full
            ${active ? "bg-orange-500" : "bg-white/40"}
          `}
              />
              {p.name}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <main
        ref={contentRef}
        className="
    relative z-40
    min-h-screen
    flex items-center justify-center
    px-6 lg:pl-56 xl:pl-64
    overflow-hidden
  "
      >
        {/* BACKGROUND VIDEO */}
        {activeProject?.image && (
          <video
            className="absolute inset-0 w-full h-full object-cover -z-10"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={activeProject.image} type="video/mp4" />
          </video>
        )}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 -z-10" />

        {!activeProject ? (
          <section className="w-full h-screen flex items-center justify-center bg-black">
            <div className="text-center w-full max-w-4xl px-4 mx-auto">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50">
                Philosophy
              </p>
              <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-light leading-none">
                Design<span className="text-orange-500">.</span> Transform
                <span className="text-orange-500">.</span> Evolve
              </h1>
            </div>
          </section>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl w-full items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-4">
                {activeProject.tagline}
              </p>

              <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-none mb-6">
                {activeProject.name}
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {activeProject.description}
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                {activeProject.labels.map((l) => (
                  <span
                    key={l}
                    className="px-4 py-1.5 text-xs rounded-full border border-white/15 bg-white/5"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
            {/* HERE  */}
          </div>
        )}
      </main>
    </section>
  );
};

export default ClientService;

{
  /* SIDE VIDEO (replaces secondaryImage) */
}
{
  /* {activeProject.secondaryImage && (
        <div className="hidden lg:block lg:col-span-5">
          <div
            ref={imageRef}
            className="w-80 h-[30rem] rounded-2xl overflow-hidden border border-orange-500/20 shadow-2xl"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={activeProject.secondaryImage} type="video/mp4" />
            </video>
          </div>
        </div>
      )} */
}
