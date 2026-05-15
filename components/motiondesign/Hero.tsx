"use client"

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative  overflow-hidden">
      {/* Global ambient glows */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-orange-500/20 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[420px] h-[420px] bg-orange-600/10 blur-[190px] rounded-full pointer-events-none" />

      {/* ================= HERO ================= */}
      <div className="relative px-6 lg:px-12 pt-20 pb-28 max-w-7xl mx-auto z-10">
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-500 font-semibold">
            Marketing Promo
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white">
            Beyond The Black
            <span className="block text-orange-500">Event Opener</span>
          </h1>

          <p className="max-w-xl text-gray-400 text-sm md:text-base">
            A high-energy event opener designed to amplify brand presence
            through bold pacing, cinematic transitions, and immersive sound
            design.
          </p>
        </div>

        {/* Meta */}
        <div className="mt-24 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "Client", value: "Blackline" },
            { label: "Production", value: "Buff" },
            { label: "Sound Design", value: "James Locke-Hart" },
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
  );
};

export default Hero;
