


'use client';

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

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
    id: "motiondesign",
    name: "Motion Design",
    tagline: "Logo Design, Branding Guidelines",
    description: "Creating a flagship destination for one of the world's most iconic brands.",
    image: "../assets/smb.png",
    secondaryImage: "../assets/smsb.png",
    labels: ["Branding", "2024", "Design"],
  },
  {
    id: "graphicdesign",
    name: "Graphic Design",
    tagline: "Website Design, 3D Render, Implementation",
    description: "Enabling open global finance without borders using the Lightning Network.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    labels: ["Fintech", "Web3", "Product"],
  },
  {
    id: "filmmaking",
    name: "Film Making",
    tagline: "Best Cup Visual Identity, Packaging, Art Direction",
    description: "A premium digital experience for a global coffee community.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2071&auto=format&fit=crop",
    labels: ["E-commerce", "Lifestyle", "UI/UX"],
  },
];

const Service = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
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

      {/* Desktop Nav */}
      {/* <nav
        className="
          hidden lg:flex
          absolute left-6 xl:left-10
top-1/2 -translate-y-1/2 z-50
          flex-col gap-4
        "
      >
        {PROJECTS.map((p) => {
          const active = activeProject?.id === p.id;
          return (
            <button
              key={p.id}
              onMouseEnter={() => setActiveProject(p)}
              onMouseLeave={() => setActiveProject(null)}
              className={`
                group flex items-center gap-2 px-4 py-2 rounded-full

                backdrop-blur-md border border-white/10
                transition-all duration-300
                ${active ? "bg-white/10 scale-105" : "hover:bg-white/5"}
              `}
            >
              <span
                className={`h-2 w-2 rounded-full transition-all ${
                  active ? "bg-orange-500 scale-150" : "bg-white/40"
                }`}
              />
              <span className="text-lg font-light tracking-wide">
                {p.name}
              </span>
            </button>
          );
        })}
      </nav> */}
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
        className={`
          group flex items-center gap-2 px-6 py-3 rounded-full
          backdrop-blur-md border border-white/10
          transition-all duration-300
          ${active ? "bg-white/10 scale-105" : "hover:bg-white/5"}
        `}
      >
        <span
          className={`
            h-2 w-2 rounded-full transition-all
            ${active ? "bg-orange-500 scale-150" : "bg-white/40"}
          `}
        />
        <span className="text-lg font-light tracking-wide">
          {p.name}
        </span>
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
        onClick={() => setActiveProject(active ? null : p)}
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

        "
      >
        {!activeProject ? (
          <div className="text-center max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50">
              Philosophy
            </p>
            <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-light leading-none">
              Design<span className="text-orange-500">.</span> Transform
              <span className="text-orange-500">.</span> Evolve
            </h1>
          </div>
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

            {activeProject.secondaryImage && (
              <div className="hidden lg:block lg:col-span-5">
                <div
                  ref={imageRef}
                  className="w-80 h-[30rem] rounded-2xl bg-cover bg-center border border-orange-500/20 shadow-2xl"
                  style={{
                    backgroundImage: `url(${activeProject.secondaryImage})`,
                  }}
                />
              </div>
            )}
          </div>
        )}
      </main>
    </section>
  );
};

export default Service;
