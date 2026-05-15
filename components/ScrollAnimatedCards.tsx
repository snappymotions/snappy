import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { SERVICES } from "./../public/constants";
import AnimatedCard from "./AnimatedCard";
import ProgressBar from "./ProgressBar";

const ScrollAnimatedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic animations for the header text based on scroll
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.1, 0.8, 0.95]
  );

  const titleScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);
  const titleText = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["DISCOVERING CORE", "OUR CAPABILITIES"]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-full bg-black overflow-clip"
    >
          <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#FF5722] blur-[160px] rounded-full" />
      </div>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-500/5 rounded-full blur-[150px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Dynamic Title */}
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="mb-5 z-20 text-center"
        >
          <motion.h2 className="text-orange-500/60 uppercase tracking-[0.6em] text-[10px] font-bold mb-4">
            ARCHITECTURE_MANIFESTO
          </motion.h2>
          <motion.h1 className="text-5xl md:text-8xl font-black text-white ">
            {titleText}
          </motion.h1>
        </motion.div>

        {/* Card Stage - Increased height to prevent bottom clipping */}
        <div className="relative w-full max-w-7xl h-[500px] flex items-center justify-center perspective-2000">
          {SERVICES.map((service, index) => (
            <AnimatedCard
              key={service.id}
              data={service}
              index={index}
              total={SERVICES.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute bottom-3 flex flex-col items-center gap-5 z-20"
        >
          <div className="flex gap-3">
            {SERVICES.map((_, i) => (
              <ProgressBar
                key={i}
                progress={scrollYProgress}
                index={i}
                total={SERVICES.length}
              />
            ))}
          </div>

          <p className="text-[9px] font-mono tracking-[0.4em] text-white uppercase">
            Navigate Infrastructure
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollAnimatedCards;
