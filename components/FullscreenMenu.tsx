// import React from "react";
// import {useRef, useState, useEffect} from "react";
// import { gsap } from "gsap/gsap-core";

// interface FullscreenMenuProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
//    const [time, setTime] = useState("");

//   useEffect(() => {
//     // Function to update the time
//     const updateTime = () => {
//       const now = new Date();

//       // Format options
//       const options: Intl.DateTimeFormatOptions = {
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric",
//         hour12: true,
//       };

//       // Format time string
//       const timeString = now.toLocaleTimeString("en-US", options);

//       // Get UTC offset in hours
//       const offset = -now.getTimezoneOffset() / 60; // e.g., +8
//       const sign = offset >= 0 ? "+" : "-";
//       const offsetString = `UTC${sign}${Math.abs(offset)}`;

//       setTime(`${timeString} ${offsetString}`);
//     };

//     // Update immediately
//     updateTime();

//     // Update every second
//     const interval = setInterval(updateTime, 1000);

//     // Cleanup
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div
//       className={`fixed inset-0 z-[90] 
//   bg-black/90 backdrop-blur-xl backdrop-saturate-150 
//   text-white menu-transition 
//   flex flex-col md:flex-row 
//   border-b border-white/10 shadow-2xl overflow-hidden ${
//     isOpen ? "translate-y-0" : "-translate-y-full"
//   }`}
//     >
//       {/* Left Section: Main Links */}
//       <div className="flex-1 flex flex-col justify-center  px-6 pt-32 pb-12 md:px-24 md:pt-0">
//        <div className="space-y-4 md:space-y-8">
//   {["Home", "Work", "Contact"].map((item) => {
//     const textRef = useRef<HTMLAnchorElement>(null);

//     const handleMouseEnter = () => {
//       gsap.to(textRef.current, {
//         rotationX: 1,
//         rotationZ: 25,
//         y: -10,
//         duration: 0.6,
//         ease: "power3.out",
//         transformPerspective: 800,
//         transformOrigin: "center bottom",
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(textRef.current, {
//         rotationX: 0,
//         rotationZ: 0,
//         y: 0,
//         duration: 0.6,
//         ease: "power3.out",
//       });
//     };

//     return (
//       <div
//         key={item}
//         className="overflow-hidden border-b border-white/5 last:border-0"
//       >
//         <a
//           ref={textRef}
//           href={`#${item.toLowerCase()}`}
//           onClick={(e) => {
//             e.preventDefault();
//             onClose();
//           }}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           className="block text-6xl md:text-[6rem]
//           font-serif italic font-light text-white
//           will-change-transform cursor-pointer"
//         >
//           {item}
//         </a>
//       </div>
//     );
//   })}
// </div>
          
        
//       </div>

//       {/* Right Section: Info & Socials */}
//       <div
//         className="
//   w-full md:w-[40%] 

//   border-l border-white/10 
//   flex flex-col justify-between 
//   p-8 md:p-24 pt-0 md:pt-24
// "
//       >
//         {/* Contact Details */}
//         <div className="space-y-6 md:space-y-12">
//           <div className="space-y-2">
//             <p className="text-white/60 text-sm uppercase tracking-widest font-medium">
//               Get in touch
//             </p>
//             <p className="text-white text-xl md:text-2xl">+91 7066006854</p>
//             <p className="text-white/70 text-xs uppercase tracking-widest mb-2">
//               hello@snappymotion.com
//             </p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex space-x-6">
//             <SocialIcon icon="X" />
//             <SocialIcon icon="In" />
//             <SocialIcon icon="Github" />
//           </div>
//         </div>

//         {/* Footer info in menu */}
//         <div className="mt-12 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-8">
//           <div>
//             <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">
//               Remote from
//             </p>
//             <p className="text-sm font-medium">Pune(MH), India</p>
//           </div>
//           <div>
//             <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">
//               Local Time
//             </p>
//             <p className="text-sm font-medium">{time}</p>
//           </div>
//           <div>
//             <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">
//               Current Status
//             </p>
//             <p className="text-sm font-medium flex items-center">
//               <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
//               Available
//             </p>
//           </div>
//         </div>

//         {/* Brand mark at bottom right */}
//         <div className="hidden md:flex justify-end mt-12">
//           {/* <div
//             className="w-16 h-16 bg-white/20 backdrop-blur-md 
// flex items-center justify-center 
// text-white text-xl font-serif rounded-lg"
//           >
//             Z.
//           </div> */}
//           <div className="flex items-center">
//                   <img
//                     src="../../assets/Logo_T.png"
//                     alt="Logo"
//                     className="
//                       w-[140px]
//                       sm:w-[160px]
//                       md:w-[200px]
//                       lg:w-[220px]
//                       h-auto
//                       object-contain
//                     "
//                   />
//                 </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SocialIcon = ({ icon }: { icon: string }) => (
//   <div
//     className="
//     w-10 h-10 md:w-12 md:h-12 
//     border border-white/20 
//     rounded-full flex items-center justify-center 
//     text-white 
//     hover:bg-white/20 
//     transition-all cursor-pointer
//   "
//   >
//     <span className="text-sm font-bold">{icon}</span>
//   </div>
// );

// export default FullscreenMenu;


"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const [time, setTime] = useState("");
  const router = useRouter();

  const linkRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };

      const timeString = now.toLocaleTimeString("en-US", options);

      const offset = -now.getTimezoneOffset() / 60;
      const sign = offset >= 0 ? "+" : "-";

      setTime(`${timeString} UTC${sign}${Math.abs(offset)}`);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const menuItems = ["Home", "Work", "Contact"];

  const handleMouseEnter = (index: number) => {
    const el = linkRefs.current[index];

    if (!el) return;

    gsap.to(el, {
      y: -4,
      color: "#f97316",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    const el = linkRefs.current[index];

    if (!el) return;

    gsap.to(el, {
      y: 0,
      color: "#ffffff",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <div
      className={`
        fixed inset-0 z-[90]
        bg-black/95 backdrop-blur-2xl
        text-white
        transition-all duration-700 ease-in-out
        overflow-y-auto
        ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div
          className="
            flex-1
            flex
            flex-col
            justify-center

            px-5
            sm:px-8
            md:px-12
            lg:px-20

            pt-28
            pb-12
          "
        >
          <div className="space-y-3 sm:space-y-5">
            {menuItems.map((item, index) => (
              <div
                key={item}
                className="border-b border-white/10 pb-3"
              >
                <button
                  ref={(el) => {
                    if (el) linkRefs.current[index] = el;
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => {
                    router.push(`/${item.toLowerCase()}`);
                    onClose();
                  }}
                  className="
                    text-left
                    font-light
                    leading-none
                    tracking-tight
                    transition-all
                    duration-300

                    text-[2.5rem]
                    sm:text-[3.5rem]
                    md:text-[4.5rem]
                    lg:text-[5.5rem]
                    xl:text-[6rem]

                    hover:text-orange-500
                  "
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            w-full
            lg:w-[38%]

            border-t
            lg:border-t-0
            lg:border-l
            border-white/10

            flex
            flex-col
            justify-between

            px-5
            sm:px-8
            md:px-12
            lg:px-14

            py-10
            lg:py-20

            gap-10
          "
        >
          {/* CONTACT */}
          <div className="space-y-8">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-3">
                Get in touch
              </p>

              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                +91 7387445538
              </p>

              <p className="text-white/70 text-sm mt-2 break-all">
                contact@snappymotion.com
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-4">
              <SocialIcon icon="X" />
              <SocialIcon icon="In" />
              <SocialIcon icon="Github" />
            </div>
          </div>

          {/* INFO GRID */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-6
            "
          >
            <InfoBlock
              title="Remote From"
              value="Pune (MH), India"
            />

            <InfoBlock
              title="Local Time"
              value={time}
            />

            <InfoBlock
              title="Status"
              value="Available"
              green
            />
          </div>

          {/* LOGO */}
          <div className="flex lg:justify-end">
            <img
              src="/Logo_T.png"
              alt="Logo"
              className="
                w-[120px]
                sm:w-[150px]
                md:w-[180px]
                lg:w-[200px]
                h-auto
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoBlock = ({
  title,
  value,
  green,
}: {
  title: string;
  value: string;
  green?: boolean;
}) => (
  <div>
    <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-2">
      {title}
    </p>

    <div className="flex items-center gap-2">
      {green && (
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      )}

      <p className="text-sm sm:text-base">{value}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon }: { icon: string }) => (
  <button
    className="
      w-11 h-11
      sm:w-12 sm:h-12

      border border-white/20
      rounded-full

      flex items-center justify-center

      hover:bg-white/10
      active:scale-95

      transition-all duration-300
    "
  >
    <span className="text-sm font-medium">{icon}</span>
  </button>
);

export default FullscreenMenu;