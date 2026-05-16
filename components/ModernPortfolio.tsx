"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { PROJECTS } from "../public/constants";
import { useRouter } from "next/navigation";

const ModernPortfolioAuto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<GSAPTimeline | null>(null);
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({ repeat: -1 });
    marqueeRef.current = tl;

    const totalWidth = container.scrollWidth / 2;

    tl.to(container, {
      x: -totalWidth,
      duration: 30,
      ease: "linear",
    });

    const onMouseEnter = () => tl.pause();
    const onMouseLeave = () => tl.resume();

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      tl.kill();
    };
  }, []);

  return (
    <section className="w-full bg-black py-32 overflow-hidden">
      <div className="px-[8vw] mb-20">
        <h2 className="text-white text-6xl md:text-8xl font-black tracking-tight">
          Selected Work
        </h2>
        <p className="text-white/60 mt-4 max-w-xl">
          A curated collection of design, branding & digital experiences.
        </p>
      </div>

      {/* Marquee */}
      <div
        ref={containerRef}
        className="flex gap-12 px-[8vw] no-scrollbar"
        style={{ cursor: "grab" }}
      >
        {[...PROJECTS, ...PROJECTS].map((project, index) => (
          <article
            key={`${project.id}-${index}`}
            onClick={() => router.push(project.url)}
            className="relative flex-none w-[80vw] md:w-[55vw] h-[50vh] rounded-3xl overflow-hidden bg-neutral-900 cursor-pointer"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-0 p-10 text-white z-10">
              <p className="text-xs tracking-widest opacity-60 uppercase">
                {project.category} · {project.year}
              </p>
              <h3 className="text-4xl md:text-6xl font-bold mt-2">
                {project.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ModernPortfolioAuto;