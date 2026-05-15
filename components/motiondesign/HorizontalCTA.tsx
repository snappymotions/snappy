"use client";

import React from "react";

const HorizontalCTA: React.FC = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden py-20 lg:py-28">
      {/* Subtle orange glow behind the text */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-72 h-72 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
          Let's co-create something <span className="text-orange-500">great</span> for your brand
        </h2>

        {/* CTA Button */}
        <button className="mt-6 lg:mt-0 group relative overflow-hidden rounded-full bg-orange-500 px-10 py-3 font-semibold text-black shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <span className="relative z-10">Start a project</span>
          <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          <span className="absolute inset-0 flex items-center justify-center text-orange-500 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            Start a project
          </span>
        </button>
      </div>
    </section>
  );
};

export default HorizontalCTA;
