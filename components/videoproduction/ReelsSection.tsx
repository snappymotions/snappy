// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface VideoCardProps {
//   videoUrl: string;
//   backgroundImage: string;
//   title: string;
//   description: string;
// }

// const ReelsSection: React.FC<VideoCardProps> = ({
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
//         </motion.div>

//         {/* Right Video Card */}
//         <div className="w-full md:w-[300px] flex justify-end">

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
//                 <div className="bg-black aspect-[9/16] rounded-xl overflow-hidden relative shadow-2xl">

//                   <video
//                     src={videoUrl}
//                     className="w-full h-full object-cover"
//                     muted
//                     playsInline
//                   />

//                   {/* Play Button */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="bg-orange-500 rounded-full p-4 shadow-lg">
//                       ▶
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
//                   className="h-full object-contain"
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

// export default ReelsSection;

export { default } from "./VideoSection";