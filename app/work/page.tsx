"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import FullscreenMenu from "@/components/FullscreenMenu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

type Category =
  | "Motion Designing"
  | "Video Production"
  | "Graphics Designing"
  | "All";

interface Project {
  id: string;
  title: string;
  category: Category;
  image: string;
  description: string;
  url: string
}

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "RENULT",
    category: "Motion Designing",
    image: "https://snappy-motions.b-cdn.net/MotionDesign/renault/p2.png",
    description: "A cinematic AI-generated automotive advertisement showcasing the rugged personality, off-road capability, and adventurous spirit of the Renault Duster through dynamic environments and cinematic storytelling.",
    url: '/work/motion-designing/renult'
  },
  {
    id: "2",
    title: "SKULLZ",
    category: "Motion Designing",
    image: "https://snappy-motions.b-cdn.net/MotionDesign/skullz/image-gen%20(46).png",
    description: "A stylized AI-generated commercial showcasing the bold, high-energy identity of Skullz Energy Drink through cinematic visuals and dynamic editing.",
    url:"/work/motion-designing/skullz"
  },
  {
    id: "3",
    title: "AURORA",
    category: "Graphics Designing",
    image: "https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Blueberry%20Frozen%20Deset.png",
    description: " A high-energy visual concept designed to amplify brand presence through bold pacing, cinematic transitions, and immersive sound design.",
    url:"/work/graphics-designing"
  },
  {
    id: "4",
    title: "WPL Season 2",
    category: "Video Production",
    image: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f1.png",
    description: "",
    url:"/work/video-production"
  },
  {
    id: "5",
    title: "BOL X Shreya Dhanwanthary",
    category: "Video Production",
    image: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f2.png",
    description: "",
    url:"/work/video-production"
  },
  {
    id: "6",
    title: "THERMAX",
    category: "Video Production",
    image: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f3.png",
    description: "",
    url:"/work/video-production"
  },
  {
    id: "7",
    title: "BOL Anti Microbial Spray",
    category: "Video Production",
    image: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f4.png",
    description: "",
    url:"/work/video-production"
  },
  {
    id: "8",
    title: "BOL Multivitamin Immunity Chewsticksy",
    category: "Video Production",
    image: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f5.png",
    description: "",
    url:"/work/video-production"
  },
  {
    id: "9",
    title: "Malpani X Mitsubishi",
    category: "Video Production",
    image: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f6.png",
    description: "",
    url:"/work/video-production"
  },
  {
    id: "10",
    title: "Reflo Naturals",
    category: "Video Production",
    image: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f7.png",
    description: "",
    url:"/work/video-production"
  },
  {
    id: "11",
    title: "Pushpak Nagar Navi Mumbai",
    category: "Video Production",
    image: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f8.png",
    description: "",
    url:"/work/video-production"
  },
  {
    id: "12",
    title: "Amyra Dastur X BOL",
    category: "Video Production",
    description: "",
    image: "https://snappy-motions.b-cdn.net/Film/V/BgImage/f1.png",
    url:"/work/video-production"
  },
  {
    id: "13",
    title: "Atul Khatri X MH&Y",
    category: "Video Production",
    description: "",
    image: "https://snappy-motions.b-cdn.net/Film/V/BgImage/f2.png",
    url:"/work/video-production"
  },
  {
    id: "14",
    title: "DECATHLON",
    category: "Video Production",
    description: "",
    image: "https://snappy-motions.b-cdn.net/Film/V/BgImage/f3.png",
    url:"/work/video-production"
  },
  {
    id: "15",
    title: "Shreya Dhanwanthary X Bark Out Loud",
    category: "Video Production",
    description: "",
    image: "https://snappy-motions.b-cdn.net/Film/V/BgImage/f4.png",
    url:"/work/video-production"
  },
];

const CATEGORIES: Category[] = [
  "Motion Designing",
  "Video Production",
  "Graphics Designing",
  "All",
];

const CATEGORY_CONTENT: Record<
  Category,
  { title: string; description: string }
> = {
  "Motion Designing": {
    title: "Bringing ideas to life through motion.",
    description:
      "High-end motion graphics and 3D animations that tell a story and engage your audience.",
  },
  "Video Production": {
    title: "Cinematic storytelling that resonates.",
    description:
      "Professional video production from concept to final cut, delivering high-impact visual narratives.",
  },
  "Graphics Designing": {
    title: "Bold visual identities for modern brands.",
    description:
      "Strategic graphic design that builds trust and creates a lasting impression across all touchpoints.",
  },
  All: {
    title: "Bringing ideas to life through motion and design.",
    description:
      "We specialize in high-end motion graphics, cinematic video production, and bold visual identities that command attention.",
  },
};

export default function App() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Motion Designing");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const { title, description } = CATEGORY_CONTENT[activeCategory];
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
const router = useRouter();
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
      <Navbar isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <div className="min-h-screen mt-32 bg-black text-white selection:bg-orange-500 selection:text-black">
        {/* Header */}
        <header className="max-w-7xl mx-auto px-6 py-8 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-orange-500">
          <span className="px-3 py-1 border  rounded-full text-orange-400">
            Work
          </span>
          <ChevronRight size={14} className="text-orange-500" />
          <span className="text-white">{activeCategory}</span>
        </header>

        <main className="max-w-7xl mx-auto px-6 pb-24">
          {/* Hero */}
          <section className="mt-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rotate-45" />
              </div>
              <motion.h2
                key={`cat-${activeCategory}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm font-bold uppercase tracking-widest text-orange-500"
              >
                {activeCategory}
              </motion.h2>
            </div>

            <motion.h1
              key={`title-${activeCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl"
            >
              {title}
            </motion.h1>

            <motion.p
              key={`desc-${activeCategory}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-white max-w-2xl leading-relaxed"
            >
              {description}
            </motion.p>
          </section>

          {/* Filter */}
          <section className="mb-16">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
              Choose a service to filter the work
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all  border border-white duration-300 ${
                    activeCategory === cat
                      ? "bg-orange-500 text-black border-0"
                      : "bg-white/5 text-white hover:bg-orange-500 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="mb-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-1">
                Selected Projects
              </h3>
              <p className="text-sm text-white">
                Showing{" "}
                <span className="font-bold text-orange-400">
                  {filteredProjects.length}
                </span>{" "}
                projects in{" "}
                <span className="text-orange-400">{activeCategory}</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group cursor-pointer"
                    onClick={()=>router.push(`${project.url}`)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/5 mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500" />
                      <div className="absolute top-6 right-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowUpRight className="text-black" size={24} />
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-2xl font-medium text-white mb-2 group-hover:text-orange-400 transition-colors">
                          {project.title}
                        </h4>
                        <p className=" leading-relaxed max-w-md">
                          {project.description}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mt-2">
                        {project.id.padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
