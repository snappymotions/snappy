"use client";
// import { CustomCursor } from "@/components/CustomCursor";
// import Navbar from "@/components/Navbar";
// import VideoSection from "@/components/videoproduction/VideoSection";
// import ReelsSection from "@/components/videoproduction/ReelsSection";
// import { useEffect, useState } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRouter } from "next/navigation";
// import Footer from "@/components/footer";

interface SectionData {
  id: number;
  videoUrl: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
}
interface VideoSectionProps {
  data: SectionData;
  index: number;
}

const SECTIONS: SectionData[] = [];

export interface VideoData {
  id: number;
  videoUrl: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  bgImage: string;
}

// export const VIDEOS: VideoData[] = [
//   {
//     id: 1,
//     videoUrl:
//       "https://snappy-motions.b-cdn.net/Film/H/01_WPL_Season_2.mp4",
//     title: "WPL Season 2",
//     subtitle: "",
//     category: ".",
//     description: "",
//     bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f1.png",
//   },
//   {
//     id: 2,
//     videoUrl:
//       "https://snappy-motions.b-cdn.net/Film/H/02BOL%20X%20Shreya%20Dhanwanthary.MP4",
//     title: "BOL X Shreya Dhanwanthary",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f2.png",
//   },
//   {
//     id: 3,
//     videoUrl:
//       "https://snappy-motions.b-cdn.net/Film/H/03_THERMAX.mp4",
//     title: "THERMAX",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f3.png",
//   },
//   {
//     id: 4,
//     videoUrl:
//       "https://snappy-motions.b-cdn.net/Film/H/04_BOL_%20Anti%20microbial%20spray.mp4",
//     title: "BOL Anti Microbial Spray",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f4.png",
//   },
//   {
//     id: 5,
//     videoUrl:
//       "https://snappy-motions.b-cdn.net/Film/H/05_BOL_Multivitamin%20immunity%20chewsticks.mp4",
//     title: "BOL Multivitamin Immunity Chewsticks",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f5.png",
//   },
//   {
//     id: 6,
//     videoUrl: "https://snappy-motions.b-cdn.net/Film/H/06_Malpani%20X%20Mitsubishi.MP4",
//     title: "Malpani X Mitsubishi",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f6.png",
//   },
//   {
//     id: 7,
//     videoUrl:
//       "https://snappy-motions.b-cdn.net/Film/H/07_Reflo_naturals.mp4",
//     title: "Reflo Naturals",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f7.png",
//   },
//   {
//     id: 8,
//     videoUrl:
//       "https://snappy-motions.b-cdn.net/Film/H/08_Pushpak_nagar_navi_mumbai.mp4",
//     title: "Pushpak Nagar Navi Mumbai",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f8.png",
//   }
// ];


// export const Reels: VideoData[] = [
//   {
//     id: 11,
//     videoUrl: "https://snappy-motions.b-cdn.net/Film/V/01_Amyra_dastur%20X%20BOL.MP4",
//     title: "Amyra Dastur X BOL",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "",
//   },
//   {
//     id: 12,
//     videoUrl: "https://snappy-motions.b-cdn.net/Film/V/02_Atul_khatri%20X%20MH%26Y.mp4",
//     title: "Atul Khatri X MH&Y",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "",
//   },
//   {
//     id: 13,
//     videoUrl: "https://snappy-motions.b-cdn.net/Film/V/03_DECATHLON.mp4",
//     title: "DECATHLON",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "",
//   },
//   {
//     id: 14,
//     videoUrl: "https://snappy-motions.b-cdn.net/Film/V/04_Shreya_dhanwanthary%20X%20Bark_Out_Loud.MP4",
//     title: "Shreya Dhanwanthary X Bark Out Loud",
//     subtitle: "",
//     category: "",
//     description: "",
//     bgImage: "",
//   }
// ];



// export default function App() {
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const router = useRouter();

//   const handleBack = () => {
//     router.back();
//   };

//   useEffect(() => {
//     if (!loading) return;

//     // Simulate an organic loading process
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => setLoading(false), 800);
//           return 100;
//         }
//         // Random increments to feel more natural
//         const increment = Math.floor(Math.random() * 8) + 1;
//         return Math.min(prev + increment, 100);
//       });
//     }, 150);

//     return () => clearInterval(interval);
//   }, [loading]);

//   const handleRestart = () => {
//     setProgress(0);
//     setLoading(true);
//   };

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   // Prevent scroll when menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isMenuOpen]);

//   useEffect(() => {
//     ScrollTrigger.refresh();
//   }, [isMenuOpen]);
//   return (
//     <>
//       <CustomCursor />
//       <button
//         onClick={handleBack}
//         className="group fixed top-6 left-6 z-50
//     flex items-center justify-center
//     bg-white/10 hover:bg-orange-500
//     border border-white/20 hover:border-orange-500
//     backdrop-blur-md
//     px-4 py-3 rounded-full
//     transition-all duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-white group-hover:text-white transition-colors"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </button>
//       <div className="relative h-screen w-full bg-black overflow-hidden">
//         {/* Background Video */}
//         <div className="absolute inset-0 z-0">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="h-full w-full object-cover"
//             src="/hero-video.mp4"
//           />
//         </div>

//         {/* Dark Overlay for Readability */}
//         <div className="absolute inset-0 bg-black/70 z-[1]" />

//         {/* Centered Content */}
//         <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 md:px-20 text-center space-y-8">
//           {/* Title */}
//           <h1 className="text-white font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
//             Crafting Visual Stories That Move
//           </h1>

//           {/* Short Description */}
//           <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
//             We produce cinematic films, branded content, and high-impact
//             commercial visuals that elevate brands and captivate audiences.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
//             <button className="bg-orange-500 text-black px-8 py-3 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-orange-400 transition-colors">
//               View Work
//             </button>
//             {/* 
//       <button className="border border-white/30 text-white px-8 py-3 uppercase tracking-[0.2em] text-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
//         About Us
//       </button> */}
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
//           <div className="flex items-center gap-3">
//             <div className="h-[2px] w-12 bg-orange-500" />
//             <span className="text-xs uppercase tracking-[0.3em] text-white">
//               Scroll to Explore
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* MAINN  */}
//       <div className=" w-full bg-black">
//         {/* <Navbar />  */}

//         {VIDEOS.map((section, index) => (
//           <VideoSection
//             videoUrl={section.videoUrl}
//             backgroundImage={section.bgImage}
//             title={section.title}
//             description={section.description}
//           />
//         ))}
//         {Reels.map((section, index) => (
//           <ReelsSection
//             videoUrl={section.videoUrl}
//             backgroundImage={section.bgImage}
//             title={section.title}
//             description={section.description}
//           />
//         ))}

//         {/* Footer / End Section */}

//       </div>
//       <Footer/>
//     </>

//   );
// }



// "use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CustomCursor } from "@/components/CustomCursor";
import VideoSection from "@/components/videoproduction/VideoSection";
import ReelsSection from "@/components/videoproduction/ReelsSection";
import Footer from "@/components/footer";
import BackButton from "@/components/ui/BackButton";

// 👉 Import your data from wherever you keep it
export const VIDEOS: VideoData[] = [
  {
    id: 1,
    videoUrl:
      "https://snappy-motions.b-cdn.net/Film/H/01_WPL_Season_2.mp4",
    title: "WPL Season 2",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f1.png",
  },
  {
    id: 2,
    videoUrl:
      "https://snappy-motions.b-cdn.net/Film/H/02BOL%20X%20Shreya%20Dhanwanthary.MP4",
    title: "BOL X Shreya Dhanwanthary",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f2.png",
  },
  {
    id: 3,
    videoUrl:
      "https://snappy-motions.b-cdn.net/Film/H/03_THERMAX.mp4",
    title: "THERMAX",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f3.png",
  },
  {
    id: 4,
    videoUrl:
      "https://snappy-motions.b-cdn.net/Film/H/04_BOL_%20Anti%20microbial%20spray.mp4",
    title: "BOL Anti Microbial Spray",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f4.png",
  },
  {
    id: 5,
    videoUrl:
      "https://snappy-motions.b-cdn.net/Film/H/05_BOL_Multivitamin%20immunity%20chewsticks.mp4",
    title: "BOL Multivitamin Immunity Chewsticks",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f5.png",
  },
  {
    id: 6,
    videoUrl: "https://snappy-motions.b-cdn.net/Film/H/06_Malpani%20X%20Mitsubishi.MP4",
    title: "Malpani X Mitsubishi",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f6.png",
  },
  {
    id: 7,
    videoUrl:
      "https://snappy-motions.b-cdn.net/Film/H/07_Reflo_naturals.mp4",
    title: "Reflo Naturals",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f7.png",
  },
  {
    id: 8,
    videoUrl:
      "https://snappy-motions.b-cdn.net/Film/H/08_Pushpak_nagar_navi_mumbai.mp4",
    title: "Pushpak Nagar Navi Mumbai",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/H/BgImage/f8.png",
  }
];


export const Reels: VideoData[] = [
  {
    id: 11,
    videoUrl: "https://snappy-motions.b-cdn.net/Film/V/01_Amyra_dastur%20X%20BOL.MP4",
    title: "Amyra Dastur X BOL",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/V/BgImage/f1.png",
  },
  {
    id: 12,
    videoUrl: "https://snappy-motions.b-cdn.net/Film/V/02_Atul_khatri%20X%20MH%26Y.mp4",
    title: "Atul Khatri X MH&Y",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/V/BgImage/f2.png",
  },
  {
    id: 13,
    videoUrl: "https://snappy-motions.b-cdn.net/Film/V/03_DECATHLON.mp4",
    title: "DECATHLON",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/V/BgImage/f3.png",
  },
  {
    id: 14,
    videoUrl: "https://snappy-motions.b-cdn.net/Film/V/04_Shreya_dhanwanthary%20X%20Bark_Out_Loud.MP4",
    title: "Shreya Dhanwanthary X Bark Out Loud",
    subtitle: "",
    category: "Video Production",
    description: "",
    bgImage: "https://snappy-motions.b-cdn.net/Film/V/BgImage/f4.png",
  }
];


// export default function App() {
//   const router = useRouter();

//   const [activeType, setActiveType] = useState<"landscape" | "reels">("landscape");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleBack = () => {
//     router.back();
//   };

//   const handleSwitch = (type: "landscape" | "reels") => {
//     setActiveType(type);

//     // Smooth scroll after switching
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//   };

//   // Prevent scroll when menu is open
//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
//   }, [isMenuOpen]);

//   useEffect(() => {
//     ScrollTrigger.refresh();
//   }, [isMenuOpen, activeType]);

//   return (
//     <>
//       <CustomCursor />

//       {/* BACK BUTTON */}
//       <button
//         onClick={handleBack}
//         className="group fixed top-6 left-6 z-50 flex items-center justify-center
//         bg-white/10 hover:bg-orange-500 border border-white/20 hover:border-orange-500
//         backdrop-blur-md px-4 py-3 rounded-full transition-all duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-white"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//       {/* HERO SECTION */}
//       <div className="relative h-screen w-full bg-black overflow-hidden">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover"
//           src="/hero-video.mp4"
//         />

//         <div className="absolute inset-0 bg-black/70" />

//         <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 space-y-8">
//           <h1 className="text-white font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.95]">
//             Crafting Visual Stories That Move
//           </h1>

//           <p className="text-white/70 text-lg max-w-2xl">
//             Cinematic films, branded content, and high-impact visuals that elevate brands.
//           </p>

//           <button
//             onClick={() =>
//               window.scrollTo({
//                 top: window.innerHeight,
//                 behavior: "smooth",
//               })
//             }
//             className="bg-orange-500 text-black px-8 py-3 uppercase text-sm font-semibold"
//           >
//             View Work
//           </button>
//         </div>
//       </div>

//       {/* TOGGLE BUTTONS */}
//       <div className="flex justify-center gap-6 py-2 bg-black sticky top-0 z-40">
//         <button
//           onClick={() => handleSwitch("landscape")}
//           className={`px-6 py-2 uppercase tracking-wider border transition ${
//             activeType === "landscape"
//               ? "bg-orange-500 text-black"
//               : "text-white border-white/30"
//           }`}
//         >
//           Horizontal
//         </button>

//         <button
//           onClick={() => handleSwitch("reels")}
//           className={`px-6 py-2 uppercase tracking-wider border transition ${
//             activeType === "reels"
//               ? "bg-orange-500 text-black"
//               : "text-white border-white/30"
//           }`}
//         >
//           Vertical
//         </button>
//       </div>

//       {/* VIDEO SECTION */}
//       <div className="w-full bg-black">
//         {activeType === "landscape" &&
//           VIDEOS.map((section) => (
//             <VideoSection
//               key={section.id}
//               videoUrl={section.videoUrl}
//               backgroundImage={section.bgImage}
//               title={section.title}
//               description={section.description}
//             />
//           ))}

//         {activeType === "reels" &&
//           Reels.map((section) => (
//             <ReelsSection
//               key={section.id}
//               videoUrl={section.videoUrl}
//               backgroundImage={section.bgImage}
//               title={section.title}
//               description={section.description}
//             />
//           ))}
//       </div>

//       <Footer />
//     </>
//   );
// }

export default function App() {
  const router = useRouter();

  const [activeType, setActiveType] = useState<"landscape" | "reels">("landscape");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleBack = () => {
    router.back();
  };

  const handleSwitch = (type: "landscape" | "reels") => {
    setActiveType(type);

    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // ✅ LOCK SCROLL (menu + video)
useEffect(() => {
  if (isMenuOpen || activeVideo) {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY); // restore position
    };
  }
}, [isMenuOpen, activeVideo]);
  // ✅ ESC TO CLOSE VIDEO
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isMenuOpen, activeType]);

  return (
    <>
      <CustomCursor />

      {/* BACK BUTTON */}
      <BackButton/>

      {/* HERO SECTION */}
      <div className="relative h-screen w-full bg-black overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-video.mp4"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 space-y-8">
          <h1 className="text-white font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.95]">
            Crafting Visual Stories That Move
          </h1>

          <p className="text-white/70 text-lg max-w-2xl">
            Cinematic films, branded content, and high-impact visuals that elevate brands.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
            className="bg-orange-500 text-black px-8 py-3 uppercase text-sm font-semibold"
          >
            View Work
          </button>
        </div>
      </div>

      {/* ✅ TOGGLE BAR (FIXED - NOT STICKY) */}
      <div className="flex justify-center gap-6 py-8 bg-black relative z-10 border-t border-white/10">
        <button
          onClick={() => handleSwitch("landscape")}
          className={`px-6 py-2 uppercase tracking-wider border transition ${
            activeType === "landscape"
              ? "bg-orange-500 text-black"
              : "text-white border-white/30"
          }`}
        >
          Horizontal
        </button>

        <button
          onClick={() => handleSwitch("reels")}
          className={`px-6 py-2 uppercase tracking-wider border transition ${
            activeType === "reels"
              ? "bg-orange-500 text-black"
              : "text-white border-white/30"
          }`}
        >
          Vertical
        </button>
      </div>

      {/* VIDEO SECTION */}
<div className="w-full bg-black">
  {activeType === "landscape" &&
    VIDEOS.map((section) => (
      <VideoSection
        key={section.id}
        videoUrl={section.videoUrl}
        backgroundImage={section.bgImage}
        title={section.title}
        description={section.description}
        setActiveVideo={setActiveVideo}
      />
    ))}

  {activeType === "reels" &&
    Reels.map((section) => (
      <VideoSection
        key={section.id}
        videoUrl={section.videoUrl}
        backgroundImage={section.bgImage}
        title={section.title}
        description={section.description}
        setActiveVideo={setActiveVideo}
      />
    ))}
</div>

      {/* ✅ FULLSCREEN VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center overflow-hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveVideo(null);
          }}
        >
          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-w-full max-h-full object-contain"
          />

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 z-[100000] text-white text-2xl bg-black/60 px-4 py-2 rounded"
          >
            ✕
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}