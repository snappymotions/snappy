/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
// import { motion } from "";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Share2, Info } from "lucide-react";

interface Poster {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  color: string;
}

const POSTERS: Poster[] = [
  {
    id: 1,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Aurora%20Coffee.png",
    color: "#4ade80",
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Aurora%20Marine%20Parfum.png",
    color: "#fbbf24",
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Aurora%20Men%20Pardum.png",
    color: "#f472b6",
  },
  {
    id: 4,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Aurora%20Oud.png",
    color: "#60a5fa",
  },
  {
    id: 5,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Blossom.png",
    color: "#94a3b8",
  },
  {
    id: 6,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Blueberry%20Frozen%20Deset.png",
    color: "#94a3b8",
  },
  {
    id: 7,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Coffee%201.png",
    color: "#94a3b8",
  },
  {
    id: 8,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Coffee%202.png",
    color: "#94a3b8",
  },
  {
    id: 9,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Energy%20Drink%20BlueBerry.png",
    color: "#94a3b8",
  },
  {
    id: 10,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Energy%20Drink%20BlueBerry.png",
    color: "#94a3b8",
  },
  {
    id: 11,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Energy.png",
    color: "#94a3b8",
  },
  {
    id: 12,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Green%20Guava.png",
    color: "#94a3b8",
  },
  {
    id: 13,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Green.png",
    color: "#94a3b8",
  },
  {
    id: 14,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Online%20Shopping.png",
    color: "#94a3b8",
  },
  {
    id: 15,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Parfum.png",
    color: "#94a3b8",
  },
  {
    id: 16,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Redbull%202.png",
    color: "#94a3b8",
  },
  {
    id: 17,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Seiko%201.png",
    color: "#94a3b8",
  },
  {
    id: 18,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Seiko%202.png",
    color: "#94a3b8",
  },
  {
    id: 19,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Siko%203.png",
    color: "#94a3b8",
  },
  {
    id: 20,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/True%20Element.png",
    color: "#94a3b8",
  },
  {
    id: 21,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/True%20Elements%20Overnight%20Oats%202.png",
    color: "#94a3b8",
  },
  {
    id: 22,
    title: "",
    subtitle: "",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/True%20Elements%20Overnight%20Oats.png",
    color: "#94a3b8",
  },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % POSTERS.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + POSTERS.length) % POSTERS.length);
  };

  // Auto-slide logic
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      next();
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(timer);
  }, [isHovered, index]); // Re-run when hover state or index changes to reset timer

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-between py-12 px-6 overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      {/* <header className="w-full flex justify-center items-center gap-8 mb-8">
        <span className="text-xs font-display tracking-[0.4em] uppercase opacity-60">Art</span>
        <span className="text-xs font-display tracking-[0.4em] uppercase opacity-60">Of</span>
        <span className="text-xs font-display tracking-[0.4em] uppercase opacity-60">2025</span>
      </header> */}

      {/* Carousel Container */}
      <div className="relative w-full max-w-md aspect-[3/4] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          {/* Previous Slide (Left) */}
          <motion.div
            key={`prev-${(index - 1 + POSTERS.length) % POSTERS.length}`}
            className="absolute left-[-40%] w-[70%] aspect-[3/4] rounded-3xl overflow-hidden opacity-30 scale-75 grayscale blur-sm z-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.3 }}
            exit={{ x: -100, opacity: 0 }}
          >
            <img
              src={POSTERS[(index - 1 + POSTERS.length) % POSTERS.length].image}
              alt="Previous"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Current Slide (Center) */}
          <motion.div
            key={POSTERS[index].id}
            custom={direction}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? 300 : -300,
                opacity: 0,
                scale: 0.8,
              }),
              center: {
                zIndex: 10,
                x: 0,
                opacity: 1,
                scale: 1,
              },
              exit: (direction: number) => ({
                zIndex: 0,
                x: direction < 0 ? 300 : -300,
                opacity: 0,
                scale: 0.8,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) > 50;
              if (swipe) {
                if (offset.x > 0) prev();
                else next();
              }
            }}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing border border-white/10"
          >
            <img
              src={POSTERS[index].image}
              alt={POSTERS[index].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p
                  className="text-[10px] tracking-[0.5em] uppercase font-display mb-2 opacity-80"
                  style={{ color: POSTERS[index].color }}
                >
                  {POSTERS[index].subtitle}
                </p>
                <h2 className="text-5xl font-display font-bold tracking-tighter leading-none mb-4">
                  {POSTERS[index].title.split("").map((char, i) => (
                    <span
                      key={i}
                      className={i % 2 === 0 ? "text-white" : "text-white/80"}
                    >
                      {char}
                    </span>
                  ))}
                </h2>
              </motion.div>
            </div>
          </motion.div>

          {/* Next Slide (Right) */}
          <motion.div
            key={`next-${(index + 1) % POSTERS.length}`}
            className="absolute right-[-40%] w-[70%] aspect-[3/4] rounded-3xl overflow-hidden opacity-30 scale-75 grayscale blur-sm z-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.3 }}
            exit={{ x: 100, opacity: 0 }}
          >
            <img
              src={POSTERS[(index + 1) % POSTERS.length].image}
              alt="Next"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Controls */}
      <footer className="w-full flex flex-col items-center gap-6 mt-2">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-display font-bold tracking-[0.2em] uppercase mb-1">
            Motion Posters
          </h3>
          <div className="h-[1px] w-12 bg-brand-orange mb-0" />
        </div>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-display tracking-[0.3em] uppercase flex items-center gap-2 hover:bg-brand-orange hover:border-brand-orange transition-colors duration-300"
        >
          Extended Graphic
        </motion.button> */}

        {/* Navigation Dots */}
        <div className="flex gap-2 mt-0">
          {POSTERS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-brand-orange w-4" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </footer>

      {/* Side Controls (Desktop) */}
      <div className="hidden md:flex fixed inset-y-0 left-0 right-0 items-center justify-between px-6 pointer-events-none">
        {/* Left Button */}
        <button
          onClick={prev}
          className="pointer-events-auto p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Button */}
        <button
          onClick={next}
          className="pointer-events-auto p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
