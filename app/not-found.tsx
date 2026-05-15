"use client";

import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center text-center overflow-hidden px-6">
      
      {/* Soft Ambient Aura */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-transparent blur-[160px] -z-10 opacity-70"></div>

      {/* ELEGANT HEADER ANIMATION */}
      <motion.h1
        initial={{ opacity: 0, y: -40, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
        className="text-[90px] md:text-[110px] font-light tracking-tight text-gray-900"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
      >
        The page you’re looking for has drifted somewhere beyond reach.
      </motion.p>

      {/* Elegant Divider Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 120, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
      ></motion.div>

      {/* Sublime Button */}
      <motion.a
        href="/"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="mt-10 px-8 py-3 rounded-full bg-gray-900 text-white shadow-lg shadow-gray-300/40 hover:bg-gray-800 transition-all"
      >
        Return Home
      </motion.a>

      {/* Soft floating “aesthetic dust particles” */}
      <FloatingDust count={8} />
    </div>
  );
}

/* --------------------------
   Floating Dust (Aesthetic Mode)
   -------------------------- */
function FloatingDust({ count = 6 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150,
            scale: Math.random() * 0.6 + 0.4,
          }}
          animate={{
            opacity: [0.15, 0.4, 0.15],
            x: [`${Math.random() * 30}px`, `${Math.random() * -30}px`],
            y: [`${Math.random() * -30}px`, `${Math.random() * 30}px`],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          className="absolute w-2 h-2 rounded-full bg-white/70 shadow-[0_0_12px_3px_rgba(255,255,255,0.6)]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
