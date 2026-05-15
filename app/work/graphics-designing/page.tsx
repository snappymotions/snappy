"use client";
import React, { useEffect, useState } from "react";
// import { OTHER_PROJECTS, AURORA_IMAGES } from './constants';
import SectionHeader from "../../../components/graphicsdesign/SectionHeader";
import ImageGrid from "../../../components/graphicsdesign/ImageGrid";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CustomCursor } from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ImageCarousel from "@/components/graphicsdesign/ImageCarousel";

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface ImageAsset {
  url: string;
  alt: string;
  aspect: "portrait" | "landscape";
}

const OTHER_PROJECTS: ProjectCard[] = [
  {
    id: "1",
    title: "Velvet Noir - Fashion Film",
    description:
      "A cinematic exploration of high-fashion and midnight aesthetics.",
    imageUrl: "https://picsum.photos/seed/fashion/800/600",
    category: "Cinematography",
  },
  {
    id: "2",
    title: "Oasis Smart Home",
    description:
      "Branding and UI design for the next generation of home automation.",
    imageUrl: "https://picsum.photos/seed/smart/800/600",
    category: "Product Design",
  },
  {
    id: "3",
    title: "Ethereal Watch Co.",
    description:
      "3D product visualization for a luxury timepiece manufacturer.",
    imageUrl: "https://picsum.photos/seed/watch/800/600",
    category: "3D Visuals",
  },
];

const AURORA_IMAGES = {
  idea: ["https://snappy-motions.b-cdn.net/GraphicsDesign/SI1.jpg", "https://snappy-motions.b-cdn.net/GraphicsDesign/SI2.jpg", "https://snappy-motions.b-cdn.net/GraphicsDesign/SI3.jpg"],
  research: ["https://snappy-motions.b-cdn.net/GraphicsDesign/SR1.jpg", "https://snappy-motions.b-cdn.net/GraphicsDesign/SR2.jpg", "https://snappy-motions.b-cdn.net/GraphicsDesign/SR3.jpg"],
  rd: ["https://snappy-motions.b-cdn.net/GraphicsDesign/SRD1.jpg", "https://snappy-motions.b-cdn.net/GraphicsDesign/SRD2.jpg", "https://snappy-motions.b-cdn.net/GraphicsDesign/SRD3.jpg"],
  sketching: ["https://snappy-motions.b-cdn.net/GraphicsDesign/S11.png", "https://snappy-motions.b-cdn.net/GraphicsDesign/S12.png"],
  moodboard: ["https://snappy-motions.b-cdn.net/GraphicsDesign/SM1.jpg", "https://snappy-motions.b-cdn.net/GraphicsDesign/SM2.jpg"],
  final: "https://snappy-motions.b-cdn.net/GraphicsDesign/Final.png",
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        delay: 0.8,
        ease: "power4.out",
      }
    );
  }, []);
  return (
    <>
      {" "}
      <CustomCursor />
      <Navbar isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <div className="min-h-screen">
        <section className="relative h-screen w-full overflow-hidden bg-black">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://snappy-motions.b-cdn.net/GraphicsDesign/GraphicDesigner.mp4" // your video
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Center Bottom Text */}
          <div className="relative z-10 h-full flex items-end justify-center pb-24 px-6">
            <div ref={textRef} className="text-center max-w-3xl">
              <h1 className="text-4xl md:text-7xl font-black tracking-wide leading-tight text-white">
                Hi, I’m <span className="text-orange-500">Saksham</span>
              </h1>

              <p className="mt-6 text-lg md:text-2xl text-zinc-300 font-light tracking-wide">
                A Motion Designer crafting stories through movement.
              </p>
            </div>
          </div>

          {/* Soft Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </section>

        {/* Navigation */}
        {/* Hero Section - Motion Designer Intro */}

        {/* Project section  */}
        {/* <header className="relative h-screen w-full overflow-hidden">        
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-20 max-w-7xl mx-auto">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Marketing Promo</span>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
            AURORA Wild <br /> <span className="text-zinc-500">Blueberry Dream</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed">
            A high-energy visual concept designed to amplify brand presence through bold pacing, cinematic transitions, and immersive sound design.
          </p>
          
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl pt-8 border-t border-zinc-800">
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Client</span>
              <span className="text-sm font-medium">Aurora Premium</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Production</span>
              <span className="text-sm font-medium">Internal Concept</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Visual Direction</span>
              <span className="text-sm font-medium">Studio Snappy</span>
            </div>
          </div>
        </div>
      </header> */}
        <header className="relative h-screen w-full overflow-hidden bg-black">
          {/* Orange Glow Depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,115,0,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />

          <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-28 max-w-7xl mx-auto">
            {/* Category Badge */}
            <span className="inline-block text-orange-500 font-bold uppercase tracking-[0.35em] text-xs mb-8">
              Marketing Promo
            </span>

            {/* Title */}
            <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-black tracking-wide leading-[0.92] mb-12 text-white">
              AURORA Wild
              <br />
              <span className="text-orange-500">Blueberry Dream</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed">
              A high-energy visual concept designed to amplify brand presence
              through bold pacing, cinematic transitions, and immersive sound
              design.
            </p>

            {/* Meta Info */}
            <div className="mt-20 pt-10 border-t border-zinc-800 flex flex-wrap gap-16 text-sm">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                  Client
                </span>
                <span className="text-white font-semibold">Aurora Premium</span>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                  Production
                </span>
                <span className="text-white font-semibold">
                  Internal Concept
                </span>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                  Visual Direction
                </span>
                <span className="text-white font-semibold">Studio Snappy</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Sections */}
        <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
          {/* Project Overview */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <SectionHeader title="Project Overview" subtitle="Context" />
              </div>
              <div className="md:col-span-8">
                <div className="space-y-6 text-zinc-300 text-lg md:text-xl font-light leading-relaxed">
                  <p className="text-white font-medium text-2xl mb-8">
                    AURORA Wild Blueberry Dream is a concept driven product
                    visual created to explore how emotion, texture, and
                    storytelling can elevate a simple dessert into a premium
                    brand experience.
                  </p>
                  <p>
                    The objective was to design a hero image that does more than
                    show the product. It needed to communicate comfort,
                    indulgence, and quiet luxury, while still feeling fresh and
                    modern. This project was developed as a brand concept
                    suitable for websites, campaigns, and digital marketing
                    placements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Idea and Thinking Process */}
          <section>
            <SectionHeader
              title="The Idea and Thinking Process"
              subtitle="Creative Core"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p className="text-2xl text-white font-light italic">
                  "What does blueberry feel like emotionally?"
                </p>
                <p>
                  Blueberry does not feel loud or aggressive. It feels calm,
                  deep, and intimate. We associated it with cool evenings, soft
                  lighting, and moments of pause. This insight shaped the entire
                  direction of the project.
                </p>
                <p>
                  Instead of focusing on sharp contrasts or high energy chaos,
                  the idea was to create a visual that feels like a frozen
                  moment in time. A moment where the viewer feels present,
                  holding the product just before the first bite.
                </p>
                <div className="pt-8 border-l-2 border-orange-500 pl-6 space-y-4">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">
                    Key intentions defined early:
                  </h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Emotion over decoration</li>
                    <li>Indulgence without excess</li>
                    <li>Calm motion rather than explosive action</li>
                    <li>A human presence to build connection</li>
                  </ul>
                </div>
              </div>
              <div className="bg-zinc-900 aspect-video rounded-lg overflow-hidden flex items-center justify-center">
                <p className="text-zinc-600 text-xs italic">OKAY</p>
              </div>
            </div>
            <ImageGrid images={AURORA_IMAGES.idea} layout="3-portrait" />
          </section>

          {/* Research and Visual Exploration */}
          <section>
            <SectionHeader
              title="Research and Visual Exploration"
              subtitle="Deep Dive"
            />
            <div className="max-w-3xl space-y-8 text-zinc-300 text-lg font-light">
              <p>
                The research phase focused on understanding how premium dessert
                brands communicate value visually. We studied luxury food
                editorials, high end product photography, and modern brand
                campaigns.
              </p>
              <p>
                A clear pattern emerged. The most memorable visuals rely on
                restraint. Fewer elements, stronger textures, and controlled
                lighting. We also explored the psychology of hands in product
                imagery. A hand instantly adds warmth, scale, and realism. It
                places the viewer inside the scene rather than outside it.
              </p>
            </div>
            <ImageGrid images={AURORA_IMAGES.research} layout="mixed-3" />
          </section>

          {/* Research and Development Process */}
          <section>
            <SectionHeader
              title="Research and Development Process"
              subtitle="Evolution"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6 text-zinc-400">
                <h3 className="text-white text-2xl font-medium">
                  Prototyping Motion & Texture
                </h3>
                <p>
                  During the R and D phase, multiple visual directions were
                  tested. We explored static product versus hand held
                  composition, clean studio backgrounds versus flowing textured
                  environments, and minimal topping styling versus generous
                  indulgent layering.
                </p>
                <p>
                  Texture development was critical. The ice cream needed to feel
                  dense and cold. The syrup needed to look slow and glossy.
                  Blueberries had to appear fresh and slightly imperfect to
                  avoid an artificial feel.
                </p>
              </div>
              <div className="space-y-6 text-zinc-400">
                <p>
                  The hand held approach stood out immediately. It added
                  intimacy and made the product feel real and desirable. From
                  there, we refined how motion would be introduced. Syrup drips,
                  floating blueberries, and gentle splashes were designed to
                  feel controlled and elegant rather than chaotic.
                </p>
                <p>
                  Lighting was refined to enhance depth without harsh contrast,
                  allowing every surface to feel touchable and the colors to pop
                  against the deep blue palette.
                </p>
              </div>
            </div>
            <ImageGrid images={AURORA_IMAGES.rd} layout="3-portrait" />
          </section>

          {/* Sketching and Concept Development */}
          <section>
            <SectionHeader
              title="Sketching and Concept Development"
              subtitle="Foundation"
            />
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
              <div className="md:w-1/2 space-y-6">
                <p className="text-zinc-300 text-xl font-light">
                  Before moving into final execution, rough sketches were
                  created to explore composition, balance, and motion. Both
                  rough pencil sketches and colored concept sketches were used
                  to validate the mood and palette early in the process.
                </p>
              </div>
              {/* <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="h-40 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] text-zinc-500 uppercase tracking-widest">Sketch A</div>
                <div className="h-40 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] text-zinc-500 uppercase tracking-widest">Sketch B</div>
             </div> */}
            </div>
            <ImageGrid images={AURORA_IMAGES.sketching} layout="sketch" />
          </section>

          {/* Mood Board and Visual Direction */}
          <section>
            <div className="bg-zinc-900/50 p-12 md:p-24 rounded-3xl border border-zinc-800">
              <SectionHeader
                title="Mood Board and Visual Direction"
                subtitle="Atmosphere"
                className="border-t-0 pt-0"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                <div>
                  <h4 className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
                    Core Atmosphere
                  </h4>
                  <p className="text-zinc-300">
                    Calm indulgence. Cold comfort. Quiet luxury.
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
                    Color Language
                  </h4>
                  <p className="text-zinc-300">
                    Deep blueberry blues, muted violets, soft cream, and natural
                    green accents.
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
                    Texture Language
                  </h4>
                  <p className="text-zinc-300">
                    Dense ice cream, glossy syrup, matte packaging, and flowing
                    fabric backgrounds.
                  </p>
                </div>
              </div>
              <ImageGrid
                images={AURORA_IMAGES.moodboard}
                layout="2-landscape"
              />
              {/* <ImageGrid
               images={AURORA_IMAGES.moodboard}
                layout="moodboard"
              /> */}
            </div>
          </section>

          {/* Final Composition and Outcome */}
          <section className="space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeader
                  title="Final Composition"
                  subtitle="Resolution"
                />
                <p className="text-zinc-400 leading-relaxed mb-6">
                  The final composition was built vertically to emphasize
                  abundance and indulgence. Multiple scoops suggest generosity,
                  while syrup drips and floating berries create movement without
                  clutter.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  The packaging design was kept minimal and elegant so the
                  flavor could remain the hero. Branding supports the visual
                  rather than competing with it.
                </p>
              </div>
              <div className="aspect-square flex items-center justify-center">
                <div  className="h-[80vh] overflow-hidden ">
            <img src='https://snappy-motions.b-cdn.net/GraphicsDesign/F1.png' alt="Project detail" className="w-full h-full object-fit grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto py-24 border-y border-zinc-900">
              <SectionHeader
                title="Final Outcome"
                subtitle="Deliverable"
                className="border-t-0 pt-0"
              />
              <p className="text-3xl md:text-5xl font-light text-zinc-100 leading-tight mb-12">
                "The viewer is not just looking at a product. They are
                experiencing a feeling."
              </p>
              <div className=" w-full bg-zinc-900 overflow-hidden mb-12">
                <img
                  src={AURORA_IMAGES.final}
                  alt="Final visual"
                  className="w-full h-full  object-fill"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-zinc-400 text-sm border-t border-zinc-800 pt-12">
                <div>
                  <h5 className="text-white font-bold mb-4 uppercase text-[10px]">
                    Learnings
                  </h5>
                  <p>
                    Emotion-driven concepts create stronger visual impact than
                    feature-driven design.
                  </p>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-4 uppercase text-[10px]">
                    Human Connection
                  </h5>
                  <p>
                    Human elements dramatically increase connection and realism
                    in product photography.
                  </p>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-4 uppercase text-[10px]">
                    Tools
                  </h5>
                  <p>
                    Figma, Photoshop, Midjourney, and Cinema 4D were used for
                    final execution.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <ImageCarousel />

          {/* Closing Note CTA */}
          <section className="text-center py-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider">
              Let's co-create something{" "}
              <span className="text-orange-500 italic">great</span> for your
              brand
            </h2>
            <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase tracking-widest text-xs px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95">
              Start a project
            </button>
          </section>

          {/* Other Projects - The Card Section */}
          {/* <section className="pt-32 border-t border-zinc-900">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4 block">
                  Archive
                </span>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                  Explore More Work
                </h2>
              </div>
              <a
                href="#"
                className="text-xs font-bold uppercase tracking-widest border-b border-orange-500 pb-2 text-zinc-400 hover:text-white transition-colors"
              >
                View All Projects
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {OTHER_PROJECTS.map((project) => (
                <div key={project.id} className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden bg-zinc-900 mb-6 relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section> */}
        </main>

        {/* Footer */}
        {/* <footer className="bg-zinc-950 pt-32 pb-16 px-6 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start mb-32">
               <div>
                  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12">CONTACT</h2>
                  <div className="space-y-2">
                    <p className="text-zinc-500 text-xs uppercase tracking-widest">Email us at</p>
                    <a href="mailto:hello@snappymotion.com" className="text-xl md:text-2xl font-medium hover:text-orange-500 transition-colors">hello@snappymotion.com</a>
                  </div>
               </div>
               <div className="space-y-8">
                  <div className="flex flex-col space-y-4">
                     <a href="#" className="text-3xl font-bold tracking-tighter hover:pl-4 transition-all duration-300">ABOUT</a>
                     <a href="#" className="text-3xl font-bold tracking-tighter hover:pl-4 transition-all duration-300">PROJECTS</a>
                     <a href="#" className="text-3xl font-bold tracking-tighter hover:pl-4 transition-all duration-300">SERVICES</a>
                     <a href="#" className="text-3xl font-bold tracking-tighter hover:pl-4 transition-all duration-300">CONTACT</a>
                  </div>
                  <div className="pt-12 border-t border-zinc-900 flex space-x-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                     <a href="#" className="hover:text-white transition-colors">Instagram</a>
                     <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                     <a href="#" className="hover:text-white transition-colors">Dribbble</a>
                     <a href="#" className="hover:text-white transition-colors">Framer</a>
                  </div>
               </div>
            </div>

            <div className="relative pt-16 border-t border-zinc-900">
               <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-zinc-700 font-bold">
                  <span>© ALL RIGHTS RESERVED / 2024</span>
                  <span className="mt-4 md:mt-0">CREATIVE STUDIO IN LONDON & NYC</span>
               </div>
               <h1 className="text-[12vw] font-black tracking-tighter leading-none text-zinc-900 select-none mt-12 opacity-50 whitespace-nowrap">
                  SNAPPY MOTION
               </h1>
            </div>
         </div>
      </footer> */}
      <Footer/>
      </div>
    </>
  );
};

export default App;
