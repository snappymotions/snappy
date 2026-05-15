"use client"

import { CustomCursor } from "@/components/CustomCursor"
import FullscreenMenu from "@/components/FullscreenMenu"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import gsap from "gsap"
import { useEffect, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/footer"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
   const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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

  return (
    <>
    <CustomCursor/>
    <Navbar isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
          <FullscreenMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
    <div className="min-h-screen bg-black text-white">

      {/* ================= HEADER ================= */}
      <header className="relative h-[70vh] w-full overflow-hidden">

        {/* Background Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,115,0,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-24 max-w-6xl mx-auto">

          <span className="text-orange-500 font-bold uppercase tracking-[0.35em] text-xs mb-6">
            Contact
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-wide leading-[0.95] mb-8">
            Let’s Create Something
            <br />
            <span className="text-orange-500">Impactful</span>
          </h1>

          <p className="text-lg text-zinc-300 max-w-2xl font-light leading-relaxed">
            Whether it’s a brand launch, product visual, or cinematic campaign —
            let’s bring your vision to life through motion.
          </p>

        </div>
      </header>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* LEFT SIDE INFO */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >

            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-zinc-400 leading-relaxed">
                We collaborate with brands, agencies, and creators to craft
                meaningful motion experiences. Tell me about your project,
                timeline, and goals.
              </p>
            </div>

            <div className="space-y-6 text-sm">

              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2">
                  Email
                </span>
                <a
                  href="mailto:hello@yourstudio.com"
                  className="text-white font-semibold hover:text-orange-500 transition-colors"
                >
                  hello@snappymotions.com
                </a>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2">
                  Based In
                </span>
                <span className="text-white font-semibold">
                  Pune & Remote Worldwide
                </span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-10"
          >

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-zinc-700 focus:border-orange-500 outline-none py-3 text-white transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-zinc-700 focus:border-orange-500 outline-none py-3 text-white transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                Project Details
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-zinc-700 focus:border-orange-500 outline-none py-3 text-white transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </section>

      {/* ================= BIG TYPOGRAPHY CTA ================= */}
      <section className="border-t border-zinc-900 py-32 text-center relative overflow-hidden">

        <h2 className="text-[12vw] font-black tracking-tighter text-zinc-900 select-none">
          CONTACT
        </h2>

        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-light">
            Let’s turn ideas into motion.
          </p>
        </div>

      </section>

    </div>
    <Footer/>
    </>
  )
}
