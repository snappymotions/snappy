// import React, { useEffect, useState, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Play } from "lucide-react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/src/ScrollTrigger";
// const HeroSection: React.FC = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const { scrollY } = useScroll();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const [isMuted, setIsMuted] = useState(true);

//   useEffect(() => {

// // *******Changes over here ***************
// // function setupSplits() {
// //   textRef.forEach((quote) => {
// //     // Reset if needed
// //     if (quote.anim) {
// //       quote.anim.progress(1).kill();
// //       quote.split.revert();
// //     }

// //     quote.split = SplitText.create(quote, {
// //       type: "words,chars",
// //       linesClass: "split-line"
// //     });

// //     // Set up the anim
// //     quote.anim = gsap.from(quote.split.chars, {
// //       scrollTrigger: {
// //         trigger: quote,
// //         toggleActions: "restart pause resume reverse",
// //         start: "center center",
// //         markers: { startColor: "#dfdcff", endColor: "transparent" }
// //       },
// //       duration: 0.6,
// //       ease: "circ.out",
// //       y: 80,
// //       stagger: 0.02
// //     });
// //   });
// // }

// // ScrollTrigger.addEventListener("refresh", setupSplits);
// // setupSplits();


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

//   // Parallax effects for the visual block
//   const y = useTransform(scrollY, [0, 500], [0, -50]);
//   const scale = useTransform(scrollY, [0, 500], [1, 1.05]);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <>
//       <section className=" z-10 relative  pt-32 md:pt-48 pb-20 px-8 md:px-12 overflow-hidden">
//         {/* Background Decorative Swirl (SVG) */}
//         {/* <div className=" absolute top-20 right-[-10%] md:right-[-5%] w-[60%] md:w-[45%] pointer-events-none opacity-10">
//           <motion.svg
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={isLoaded ? { pathLength: 1, opacity: 1 } : {}}
//             transition={{ duration: 2.5, ease: "easeInOut" }}
//           >
//             <motion.path
//               d="M 10,50 C 30,10 70,90 90,50 C 110,10 130,50 100,80 C 70,110 30,50 50,20"
//               stroke="currentColor"
//               strokeWidth="0.5"
//               strokeLinecap="round"
//             />
//           </motion.svg>
//         </div> */}

//         <div className="max-w-7xl mx-auto relative z-10 text-white">
//           {/* Main Heading */}
//           <div className="max-w-4xl">
//             <motion.h1
//               initial={{ y: 60, opacity: 0 }}
//               animate={isLoaded ? { y: 0, opacity: 1 } : {}}
//               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//               className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] tracking-[-0.03em] font-medium"
//             >
//               We're a <span className="italic font-normal">motion-first</span>{" "}
//               creative studio for brands and agencies.
//             </motion.h1>
//           </div>

//           {/* Visual Showcase Block */}
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={isLoaded ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             style={{ y, scale }}
//             className=" z-4 mt-20 md:mt-32 relative h-screen w-full  rounded-md overflow-hidden group cursor-pointer"
//           >
//             <div className="absolute inset-0 w-full h-full">
//               <section
//                 ref={containerRef}
//                 className="relative w-full h-full  overflow-hidden flex items-center justify-center"
//               >
//                 <div className="relative z-10 w-[95%] h-f">
//                   <div className="group relative w-full h-full rounded-md overflow-hidden">
//                     <video
//                       ref={videoRef}
//                       className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
//                       src="https://snappy-motions.b-cdn.net/showreel%20v2.mp4"
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                     />

//                     <div className="absolute inset-0 bg-black/20" />

//                     {/* 🔊 Mute / Unmute Button */}
//                     <button
//                       onClick={toggleMute}
//                       className={`
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
//                     >
//                       {isMuted ? (
//                         /* Muted Icon */
//                         <svg
//                           className="h-5 w-5 text-white transition-colors duration-300"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             d="M9 9l6 6M15 9l-6 6"
//                             transform="translate(5, 0)"
//                           />
//                           <path d="M11 5L6 9H3v6h3l5 4V5z" />
//                         </svg>
//                       ) : (
//                         /* Sound Icon */
//                         <svg
//                           className="h-5 w-5 text-white transition-colors duration-300"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M11 5L6 9H3v6h3l5 4V5z" />
//                           <path d="M15 9a4 4 0 010 6" />
//                           <path d="M17 7a7 7 0 010 10" />
//                         </svg>
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </motion.div>
//         </div>
//         {/* Secondary text or CTA below visual */}

//         {/* Subtle Scroll Indicator */}
//       </section>
//       <div className="mt-0 z-2 relative bg-orange-500 pt-80 w-full  md:-mt-96 ">
//         <div className="  px-8 md:px-12  overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:pb-14">
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-lg md:text-xl font-medium max-w-sm leading-relaxed opacity-60"
//           >
//             Specializing in identity, 3D motion, and digital experiences that
//             move people.
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="
//     group relative overflow-hidden
//     flex items-center justify-center
//     px-6 py-3 rounded-full
//     bg-white/10 hover:bg-orange-500
//     border border-white/20 hover:border-orange-500
//     backdrop-blur-md
//     transition-all duration-300
//     hover:shadow-[0_0_20px_rgba(255,165,0,0.4)]
//   "
//           >
//             <span className="relative z-10 text-sm font-bold uppercase tracking-widest">
//               Explore our work
//             </span>

//             <span
//               className="
//     absolute inset-0 rounded-full
//     bg-gradient-to-br from-white/30 to-transparent
//     opacity-0 group-hover:opacity-100
//     transition-opacity duration-300
//   "
//             />
//           </motion.button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;



// HeroSection.tsx

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollY } = useScroll();

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      tl.fromTo(
        videoRef.current,
        {
          scale: 0.9,
          opacity: 0,
          y: 80,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.4,
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // smoother parallax
  const y = useTransform(scrollY, [0, 500], [0, -40]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.03]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={containerRef}
        className="
          relative z-10 overflow-hidden
          px-5 pt-24 pb-14
          md:px-12 md:pt-40 md:pb-20
        "
      >
        <div className="relative z-10 mx-auto max-w-7xl text-white">
          {/* HEADING */}
          <div className="max-w-5xl">
            <motion.h1
              ref={textRef}
              initial={{ y: 60, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-[12ch]
                font-serif font-medium
                leading-[1.02]
                tracking-[-0.03em]
                text-[clamp(2.8rem,9vw,6.5rem)]
              "
            >
              We're a{" "}
              <span className="italic font-normal">
                motion-first
              </span>{" "}
              creative studio for brands and agencies.
            </motion.h1>
          </div>

          {/* VIDEO SHOWCASE */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ y, scale }}
            className="
              relative mt-12 md:mt-24
              w-full overflow-hidden
              rounded-2xl md:rounded-3xl
              group cursor-pointer

              h-[55vh]
              sm:h-[65vh]
              md:h-[80vh]
              lg:h-screen
            "
          >
            <div className="absolute inset-0 h-full w-full">
              <section className="relative flex h-full w-full items-center justify-center overflow-hidden">
                <div className="relative z-10 h-full w-full">
                  <div className="group relative h-full w-full overflow-hidden rounded-2xl md:rounded-3xl">
                    <video
                      ref={videoRef}
                      className="
                        h-full w-full object-cover
                        transition-transform duration-700 ease-out
                        group-hover:scale-[1.03]
                      "
                      src="https://snappy-motions.b-cdn.net/showreel%20v2.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* MUTE BUTTON */}
                    <button
                      onClick={toggleMute}
                      className={`
                        absolute bottom-4 right-4 md:bottom-5 md:right-5
                        z-20
                        flex h-11 w-11 md:h-12 md:w-12
                        items-center justify-center
                        rounded-full
                        border border-white/20
                        bg-white/10
                        backdrop-blur-md
                        transition-all duration-300 ease-out
                        hover:border-orange-400
                        hover:bg-orange-500/90
                        active:scale-95
                        ${
                          !isMuted
                            ? "border-orange-400 bg-orange-500/90"
                            : ""
                        }
                      `}
                    >
                      {isMuted ? (
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 9l6 6M15 9l-6 6"
                            transform="translate(5, 0)"
                          />
                          <path d="M11 5L6 9H3v6h3l5 4V5z" />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11 5L6 9H3v6h3l5 4V5z" />
                          <path d="M15 9a4 4 0 010 6" />
                          <path d="M17 7a7 7 0 010 10" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <div
        className="
          relative z-[2]
          w-full bg-orange-500

          pt-16 pb-12

          md:-mt-32
          md:pt-52
        "
      >
        <div
          className="
            flex flex-col gap-8
            items-start justify-between
            overflow-hidden

            px-5 md:px-12
            md:flex-row md:items-end
          "
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              max-w-sm
              text-base leading-relaxed opacity-70
              md:text-xl
            "
          >
            Specializing in identity, 3D motion, and digital
            experiences that move people.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="
              group relative overflow-hidden

              flex items-center justify-center

              rounded-full
              border border-white/20
              bg-white/10
              px-6 py-3

              backdrop-blur-md
              transition-all duration-300

              hover:border-orange-500
              hover:bg-orange-500
              hover:shadow-[0_0_20px_rgba(255,165,0,0.4)]
            "
          >
            <span className="relative z-10 text-sm font-bold uppercase tracking-widest">
              Explore our work
            </span>

            <span
              className="
                absolute inset-0 rounded-full
                bg-gradient-to-br from-white/30 to-transparent
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100
              "
            />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;