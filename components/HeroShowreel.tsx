import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroShowreel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        videoRef.current,
        {
          scale: 0.85,
          opacity: 0,
          y: 80,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.6,
        }
      ).fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Overlay Glow */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black pointer-events-none" /> */}

      {/* Video Container */}
      <div className="relative z-10 w-[95%] ">
        <div className="group relative overflow-hidden  border border-white/10">
          <video
            ref={videoRef}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            src="/showreel.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Dark overlay for cinematic look */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text */}
        {/* <div
          ref={textRef}
          className="mt-8 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Snappy Motion
          </h1>
          <p className="mt-3 text-white/60 text-lg">
            Design • Motion • Film
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default HeroShowreel;




// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const HeroShowreel = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const [isMuted, setIsMuted] = useState(true);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

//       tl.fromTo(
//         videoRef.current,
//         { scale: 0.85, opacity: 0, y: 80 },
//         { scale: 1, opacity: 1, y: 0, duration: 1.6 }
//       ).fromTo(
//         textRef.current,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.8 },
//         "-=0.6"
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const toggleMute = () => {
//     if (!videoRef.current) return;
//     videoRef.current.muted = !isMuted;
//     setIsMuted(!isMuted);
//   };

//   return (
//     <section
//       ref={containerRef}
//       className="relative mt-0 h-screen w-full bg-black h-[98%] overflow-hidden flex items-center justify-center"
//     >
//       <div className="relative z-10 w-[95%]">
//         <div className="group relative overflow-hidden "> {/* border border-white/10 */}
//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
//             src="/showreel.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//           />

//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-black/20" />

//           {/* 🔊 Mute / Unmute Button */}
//           <button
//             onClick={toggleMute}
//             className={`
//               absolute bottom-5 right-5 z-20
//               h-12 w-12 rounded-full
//               backdrop-blur-md bg-white/10
//               border border-white/20
//               flex items-center justify-center
//               transition-all duration-300 ease-out
//               hover:bg-orange-500/90 hover:border-orange-400
//               active:scale-95
//               ${!isMuted ? "bg-orange-500/90 border-orange-400" : ""}
//             `}
//           >
//             {isMuted ? (
//               /* Muted Icon */
//               <svg
//                 className="h-5 w-5 text-white transition-colors duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M9 9l6 6M15 9l-6 6" transform="translate(5, 0)" />
//                 <path d="M11 5L6 9H3v6h3l5 4V5z" />
//               </svg>
//             ) : (
//               /* Sound Icon */
//               <svg
//                 className="h-5 w-5 text-white transition-colors duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M11 5L6 9H3v6h3l5 4V5z" />
//                 <path d="M15 9a4 4 0 010 6" />
//                 <path d="M17 7a7 7 0 010 10" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroShowreel;
