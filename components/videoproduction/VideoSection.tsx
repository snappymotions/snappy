// "use client";
// import { useScroll, useSpring, useTransform } from "framer-motion";
// import { ArrowDown } from "lucide-react";
// import { useRef } from "react";
// import { motion } from "framer-motion";

// interface SectionData {
//   id: number;
//   videoUrl: string;
//   title: string;
//   subtitle: string;
//   category: string;
//   description: string;
// }
// interface VideoSectionProps {
//   data: SectionData;
//   index: number;
// }

// const VideoSection: React.FC<VideoSectionProps> = ({ data, index }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   // Smooth out the scroll progress
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   // Animations based on scroll progress
//   const scale = useTransform(smoothProgress, [0.4, 0.6], [1, 15]);
//   const opacity = useTransform(smoothProgress, [0.4, 0.55, 0.6], [1, 1, 0]);
//   const videoScale = useTransform(smoothProgress, [0.4, 0.6], [1, 1.1]);
//   const blurValue = useTransform(smoothProgress, [0.4, 0.6], [0, 10]);
//   const filter = useTransform(blurValue, (v) => `blur(${v}px) brightness(0.5)`);

//   return (

//     // <div ref={containerRef} className="relative h-[200vh] w-full bg-black">
//     //   <div className="sticky top-0 h-screen w-full overflow-hidden">
//     //     {/* Background Video */}
//     //     <motion.div
//     //       style={{ scale: videoScale }}
//     //       animate={{ scale: 1.03 }}
//     //       transition={{
//     //         duration: 15,
//     //         repeat: Infinity,
//     //         repeatType: "mirror",
//     //         ease: "easeInOut",
//     //       }}
//     //       className="absolute inset-0 z-0"
//     //     >
//     //       <video
//     //         autoPlay
//     //         muted
//     //         loop
//     //         playsInline
//     //         className="h-full w-full object-cover"
//     //         src={data.videoUrl}
//     //       />
//     //     </motion.div>

//     //     {/* Black Gradient Overlay */}
//     //     <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/80 to-transparent" />

//     //     {/* Content */}
//     //     <div className="relative z-10 flex h-full w-full items-center px-6 md:px-10">
//     //       <motion.div
//     //         initial={{ opacity: 0, y: 40 }}
//     //         animate={{ opacity: 1, y: 0 }}
//     //         transition={{ duration: 1.2, ease: "easeOut" }}
//     //         className="max-w-2xl space-y-10"
//     //       >
//     //         {/* Modular Block */}
//     //         <div className="space-y-6 border-l-4 border-orange-500 pl-6">
//     //           {/* Title */}
//     //           <h1 className="text-white font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.02em]">
//     //             {data.title}
//     //           </h1>

//     //           {/* Short Description */}
//     //           <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
//     //             {data.description}
//     //           </p>
//     //         </div>
//     //       </motion.div>
//     //     </div>

//     //     {/* Scroll Indicator */}
//     //     <div className="absolute bottom-10 left-6 md:left-20">
//     //       <motion.div
//     //         animate={{ y: [0, 8, 0] }}
//     //         transition={{ repeat: Infinity, duration: 2 }}
//     //         className="flex items-center gap-3"
//     //       >
//     //         <div className="h-[2px] w-10 bg-orange-500" />
//     //         <span className="text-xs uppercase tracking-[0.3em] text-white">
//     //           Scroll
//     //         </span>
//     //       </motion.div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default VideoSection;

// ***************************************************************************************************

// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import { useRouter } from "next/navigation";
// // import { VideoData } from "@/data/videos";
// export interface VideoData {
//   id: number;
//   videoUrl: string;
//   title: string;
//   subtitle: string;
//   category: string;
//   description: string;
//   client: string;
//   role: string;
//   tools: string;
//   headerText?: string;
// }
// interface VideoSectionProps {
//   data: VideoData;
// }

// const VideoSection: React.FC<VideoSectionProps> = ({ data }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const scale = useTransform(smoothProgress, [0.4, 0.6], [1, 15]);
//   const opacity = useTransform(smoothProgress, [0.4, 0.55, 0.6], [1, 1, 0]);
//   const videoScale = useTransform(smoothProgress, [0.4, 0.6], [1, 1.1]);
//   const blurValue = useTransform(smoothProgress, [0.4, 0.6], [0, 10]);
//   const filter = useTransform(blurValue, (v) => `blur(${v}px) brightness(0.5)`);

//   const router = useRouter();

//   const handleClick = () => {
//     router.push(`/work/${data.id}`);
//   };

//   return (
//     <div ref={containerRef} className="relative h-[200vh] w-full cursor-pointer" onClick={handleClick}>
//       <div className="sticky top-0 h-screen w-full overflow-hidden">
//         <motion.div
//           style={{ scale: videoScale, filter }}
//           className="absolute inset-0 z-0"
//         >
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="h-full w-full object-cover"
//             src={data.videoUrl}
//           />
//         </motion.div>

//         <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 md:px-20 text-white">
//           <motion.div
//             style={{ scale, opacity }}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="max-w-5xl flex flex-col items-center text-center space-y-8"
//           >
//             <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/60">
//               {data.category}
//             </span>
//             <h2 className="font-serif text-[clamp(3rem,10vw,10rem)] font-semibold leading-[0.9] tracking-[-0.02em]">
//               {data.title}
//             </h2>
//             <div className="flex flex-col items-center gap-4 text-white/70">
//               <span className="font-serif text-2xl md:text-3xl italic">{data.subtitle}</span>
//               <div className="h-[1px] w-16 bg-white/30" />
//               <span className="text-xs uppercase tracking-[0.3em] text-white/50">{data.description}</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoSection;

// "use client";

// import { useScroll, useSpring, useTransform, motion } from "framer-motion";
// import { useRef } from "react";

// interface SectionData {
//   id: number;
//   videoUrl: string;
//   title: string;
//   subtitle: string;
//   category: string;
//   description: string;
// }
// interface VideoSectionProps {
//   data: SectionData;
//   index: number;
// }

// const VideoSection: React.FC<VideoSectionProps> = ({ data }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const scale = useTransform(smoothProgress, [0.4, 0.6], [1, 15]);
//   const opacity = useTransform(smoothProgress, [0.4, 0.55, 0.6], [1, 1, 0]);
//   const videoScale = useTransform(smoothProgress, [0.4, 0.6], [1, 1.1]);
//   const blurValue = useTransform(smoothProgress, [0.4, 0.6], [0, 10]);
//   const filter = useTransform(blurValue, (v) => `blur(${v}px) brightness(0.5)`);

//   return (
//     <div ref={containerRef} className="relative h-[200vh] w-full bg-black">
//       <div className="sticky top-0 h-screen w-full overflow-hidden">
//         {/* Background Video */}
//         <motion.div style={{ scale: videoScale, filter }} className="absolute inset-0 z-0">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="h-full w-full object-cover"
//             src={data.videoUrl}
//           />
//         </motion.div>

//         {/* Black Gradient Overlay */}
//         <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/80 to-transparent" />

//         {/* Content */}
//         <div className="relative z-10 flex h-full w-full items-center px-6 md:px-10">
//           <motion.div
//             style={{ opacity }}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="max-w-2xl space-y-10"
//           >
//             <div className="space-y-6 border-l-4 border-orange-500 pl-6">
//               <h1 className="text-white font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.02em]">
//                 {data.title}
//               </h1>
//               <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
//                 {data.description}
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-6 md:left-20">
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="flex items-center gap-3"
//           >
//             <div className="h-[2px] w-10 bg-orange-500" />
//             <span className="text-xs uppercase tracking-[0.3em] text-white">Scroll</span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoSection;

// *************************Final ************************************

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface VideoCardProps {
//   videoUrl: string;
//   backgroundImage: string;
//   title: string;
//   description: string;
// }

// const VideoCard: React.FC<VideoCardProps> = ({
//   videoUrl,
//   backgroundImage,
//   title,
//   description,
// }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div
//       className="relative h-screen w-full bg-cover bg-center flex items-center px-6 md:px-16"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Black Gradient Overlay */}
//       <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/80 to-transparent" />
//       {/* Left side content */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="w-full md:w-1/2 max-w-xl border-l-4 border-orange-500 pl-6 text-white space-y-6 z-[100]"
//       >
//         <h1 className="text-[clamp(2rem,5vw,4rem)] font-serif leading-tight">
//           {title}
//         </h1>
//         <p className="text-base md:text-lg text-white/80">{description}</p>
//         {/* Scroll Indicator */}
//          <div className="absolute bottom-10 left-6 md:left-20">
//            <motion.div
//              animate={{ y: [0, 8, 0] }}
//              transition={{ repeat: Infinity, duration: 2 }}
//              className="flex items-center gap-3"
//            >
//              <div className="h-[2px] w-10 bg-orange-500" />
//              <span className="text-xs uppercase tracking-[0.3em] text-white">Scroll</span>
//            </motion.div>
//          </div>
//       </motion.div>

//       {/* Right side video card */}
//       <div className="w-full md:w-1/3 flex justify-center items-center">
//         <AnimatePresence>
//           {!isPlaying && (
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="relative w-full cursor-pointer"
//               onClick={() => setIsPlaying(true)}
//             >
//               <div className="bg-black aspect-video rounded-xl overflow-hidden relative">
//                 <video
//                   src={videoUrl}
//                   className="w-full h-full object-cover"
//                   muted
//                   playsInline
//                 />
//                 {/* Play Button */}
//                 <div className="absolute inset-0 flex justify-center items-center">
//                   <div className="bg-orange-500 rounded-full p-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-8 w-8 text-white"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M14.752 11.168l-6.518-3.758A1 1 0 007 8.23v7.539a1 1 0 001.234.97l6.518-3.757a1 1 0 000-1.694z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {isPlaying && (
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 bg-black flex justify-center items-center"
//             >
//               <video
//                 src={videoUrl}
//                 className="w-full h-full object-contain"
//                 controls
//                 autoPlay
//               />
//               <button
//                 onClick={() => setIsPlaying(false)}
//                 className="absolute top-6 right-6 text-white text-3xl font-bold"
//               >
//                 ×
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;



// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface VideoCardProps {
//   videoUrl: string;
//   backgroundImage: string;
//   title: string;
//   description: string;
// }

// const VideoCard: React.FC<VideoCardProps> = ({
//   videoUrl,
//   backgroundImage,
//   title,
//   description,
// }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div
//       className="relative h-screen w-full bg-cover bg-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />

//       {/* Content Wrapper */}
//       <div className="relative z-20 h-full flex items-center justify-between px-6 md:px-16 gap-10">

//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-1/2 max-w-xl border-l-4 border-orange-500 pl-6 text-white space-y-6"
//         >
//           <h1 className="text-[clamp(2rem,5vw,4rem)] font-serif leading-tight">
//             {title}
//           </h1>

//           <p className="text-base md:text-lg text-white/80">
//             {description}
//           </p>

//           {/* Scroll indicator */}
//           <div className="absolute bottom-10 left-6 md:left-20">
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="flex items-center gap-3"
//             >
//               <div className="h-[2px] w-10 bg-orange-500" />
//               <span className="text-xs uppercase tracking-[0.3em]">
//                 Scroll
//               </span>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Right Video Card */}
//         <div className="w-full md:w-[420px] flex justify-end">

//           <AnimatePresence>

//             {!isPlaying && (
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="relative w-full cursor-pointer"
//                 onClick={() => setIsPlaying(true)}
//               >
//                 <div className="bg-black aspect-video rounded-xl overflow-hidden relative shadow-2xl">

//                   <video
//                     src={videoUrl}
//                     className="w-full h-full object-cover"
//                     muted
//                     playsInline
//                   />

//                   {/* Play Button */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="bg-orange-500 rounded-full p-4 shadow-lg">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-8 w-8 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M14.752 11.168l-6.518-3.758A1 1 0 007 8.23v7.539a1 1 0 001.234.97l6.518-3.757a1 1 0 000-1.694z"
//                         />
//                       </svg>
//                     </div>
//                   </div>

//                 </div>
//               </motion.div>
//             )}

//             {isPlaying && (
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 z-50 bg-black flex items-center justify-center"
//               >
//                 <video
//                   src={videoUrl}
//                   className="w-full h-full object-contain"
//                   controls
//                   autoPlay
//                 />

//                 <button
//                   onClick={() => setIsPlaying(false)}
//                   className="absolute top-6 right-6 text-white text-4xl"
//                 >
//                   ×
//                 </button>
//               </motion.div>
//             )}

//           </AnimatePresence>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;
"use client";

type Props = {
  videoUrl: string;
  backgroundImage: string;
  title: string;
  description?: string;
  setActiveVideo: (url: string) => void;
};

export default function VideoSection({
  videoUrl,
  backgroundImage,
  title,
  description,
  setActiveVideo,
}: Props) {
  return (
    <div className="group relative w-full h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* DARK + ORANGE TINT OVERLAY (UI THEME MATCH) */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* CENTER PLAY BUTTON */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <button
          onClick={() => setActiveVideo(videoUrl)}
          className="w-20 h-20 flex items-center justify-center rounded-full
          border border-orange-500/40 bg-black/30 backdrop-blur-md
          hover:bg-orange-500 hover:border-orange-500
          transition-all duration-300 group"
        >
          <svg
            className="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 3v18l15-9-15-9z" />
          </svg>
        </button>
      </div>

      {/* BOTTOM LEFT TITLE BLOCK */}
      <div className="absolute bottom-10 left-10 z-20 max-w-fit space-y-3">

        <h2 className="text-white font-serif text-[clamp(2rem,4vw,4.5rem)] leading-tight">
          {title}
        </h2>

        {description && (
          <p className="text-white/70 text-base md:text-lg border-l-4 border-orange-500 pl-4">
            {description}
          </p>
        )}

        {/* SMALL LABEL (OPTIONAL PREMIUM FEEL) */}
        {/* <div className="flex items-center gap-2 text-orange-400 text-sm tracking-widest uppercase">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          Featured Work
        </div> */}

      </div>
    </div>
  );
}