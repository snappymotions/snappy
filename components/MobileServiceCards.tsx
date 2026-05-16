"use client";

import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "./../public/constants";

const MobileServiceCards = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-black
        px-5 py-20
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute left-1/2 top-0
            h-[500px] w-[500px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/10
            blur-[120px]
          "
        />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-14 text-center">
        <p
          className="
            mb-4
            text-[10px]
            font-bold
            uppercase
            tracking-[0.5em]
            text-orange-500/70
          "
        >
          ARCHITECTURE_MANIFESTO
        </p>

        <h2
          className="
            text-4xl
            font-black
            leading-none
            tracking-[-0.04em]
            text-white
          "
        >
          OUR
          <br />
          CAPABILITIES
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-col gap-5">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="
              relative overflow-hidden

              rounded-3xl
              border border-white/10

              bg-white/[0.03]
              p-6

              backdrop-blur-xl
            "
          >
            {/* Number */}
            <div
              className="
                mb-5
                text-xs
                font-bold
                tracking-[0.3em]
                text-orange-500
              "
            >
              0{index + 1}
            </div>

            {/* Title */}
            <h3
              className="
                mb-3
                text-2xl
                font-bold
                tracking-[-0.03em]
                text-white
              "
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-sm
                leading-relaxed
                text-white/70
              "
            >
              {service.description}
            </p>

            {/* Glow */}
            <div
              className="
                absolute right-0 top-0
                h-32 w-32
                rounded-full
                bg-orange-500/10
                blur-3xl
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileServiceCards;