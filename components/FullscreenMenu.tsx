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




import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { useRouter } from "next/navigation";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const [time, setTime] = useState("");
const router = useRouter();
  // Refs for links
  const linkRefs = useRef<HTMLAnchorElement[]>([]);

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
      const offsetString = `UTC${sign}${Math.abs(offset)}`;
      setTime(`${timeString} ${offsetString}`);
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
  duration: 0.35,
  ease: "power2.out"
});


  };

  const handleMouseLeave = (index: number) => {
    const el = linkRefs.current[index];
    if (!el) return;

    gsap.to(el, {
      rotationX: 0,
      rotationZ: 0,
      y: 0,
      color: "#FFFFFF",
      duration: 0.6,
      ease: "power3.out",
    });

    // Animate underline back
    const underline = el.nextElementSibling as HTMLElement;
    if (underline) {
      gsap.to(underline, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[90] 
        bg-black/90 backdrop-blur-xl backdrop-saturate-150 
        text-white menu-transition 
        flex flex-col md:flex-row 
        border-b border-white/10 shadow-2xl overflow-hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      {/* Left Section: Main Links */}
      <div className="flex-1 flex flex-col justify-center px-6 pt-32 pb-12 md:px-24 md:pt-0">
        <div className="space-y-4 md:space-y-5">
          {menuItems.map((item, index) => (
            <div
              key={item}
              className="overflow-hidden border-b border-white/5 last:border-0"
            >
              <button
                ref={(el) => {
                  if (el) linkRefs.current[index] = el;
                }}
              
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/${item.toLowerCase()}`)
                  onClose();
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="block text-3xl md:text-[6rem] heading-aminute font-light text-white will-change-transform cursor-pointer relative hover:text-orange-500"
              >
                {item}
              </button>
              {/* Underline */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white/20 scale-x-0 origin-left block"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Info & Socials */}
      <div className="w-full md:w-[40%] md:mt-20 border-l border-white/10 flex flex-col justify-between p-8 md:p-24 pt-0 md:pt-24">
        {/* Contact Details */}
        <div className="space-y-6 md:space-y-12">
          <div className="space-y-2">
            <p className="text-white/60 text-sm uppercase tracking-widest font-medium">
              Get in touch
            </p>
            <p className="text-white text-xl md:text-2xl">+91 7387445538</p>
            <p className="text-white/70 text-xs uppercase tracking-widest mb-2">
              contact@snappymotion.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <SocialIcon icon="X" />
            <SocialIcon icon="In" />
            <SocialIcon icon="Github" />
          </div>
        </div>

        {/* Footer info in menu */}
        <div className="mt-12 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">
              Remote from
            </p>
            <p className="text-sm font-medium">Pune(MH), India</p>
          </div>
          <div>
            <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">
              Local Time
            </p>
            <p className="text-sm font-medium">{time}</p>
          </div>
          <div>
            <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">
              Current Status
            </p>
            <p className="text-sm font-medium flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available
            </p>
          </div>
        </div>

        {/* Brand mark at bottom right */}
        <div className="hidden md:flex justify-end mt-12">
          <div className="flex items-center">
            <img
              src="/Logo_T.png"
              alt="Logo"
              className="w-[140px] sm:w-[160px] md:w-[200px] lg:w-[220px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon }: { icon: string }) => (
  <div className="w-10 h-10 md:w-12 md:h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer">
    <span className="text-sm font-bold">{icon}</span>
  </div>
);

export default FullscreenMenu;
