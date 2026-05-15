
// "use client"

// import { useRef, useState } from "react";

// const VideoSection = ({videoUrl}) => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);

//   const togglePlay = () => {
//     if (!videoRef.current) return;

//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   const toggleMute = () => {
//     if (!videoRef.current) return;

//     videoRef.current.muted = !isMuted;
//     setIsMuted(!isMuted);
//   };

//   return (
//     <div className="relative px-6 lg:px-12 max-w-7xl mx-auto mt-16 pb-28 z-10">
//       <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black group">
//         {/* Video */}
//         <video
//           ref={videoRef}
//           src={videoUrl}
//           poster="/posters/blackline-poster.jpg"
//           muted={isMuted}
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//         />

//         {/* Cinematic overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

//         {/* Center Play / Pause (on hover) */}
//         <button
//           onClick={togglePlay}
//           className="
//             absolute inset-0 z-20
//             flex items-center justify-center
//             opacity-0 group-hover:opacity-100
//             transition-opacity duration-300
//           "
//         >
//           <div className="relative w-24 h-24 flex items-center justify-center">
//             <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-xl group-hover:scale-125 transition-transform" />
//             <div className="relative w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
//               {isPlaying ? (
//                 /* Pause icon */
//                 <div className="flex gap-2">
//                   <div className="w-2 h-6 bg-black rounded" />
//                   <div className="w-2 h-6 bg-black rounded" />
//                 </div>
//               ) : (
//                 /* Play icon */
//                 <div className="ml-1 w-0 h-0 border-l-[18px] border-l-black border-y-[12px] border-y-transparent" />
//               )}
//             </div>
//           </div>
//         </button>

//         {/* Mute button (bottom-right) */}
//         <button
//           onClick={toggleMute}
//           className={`
//             absolute bottom-5 right-5 z-20
//             h-12 w-12 rounded-full
//             backdrop-blur-md bg-white/10
//             border border-white/20
//             flex items-center justify-center
//             transition-all duration-300 ease-out
//             hover:bg-orange-500/90 hover:border-orange-400
//             active:scale-95
//             opacity-0 group-hover:opacity-100
//             ${!isMuted ? "bg-orange-500/90 border-orange-400" : ""}
//           `}
//         >
//           {isMuted ? (
//             /* Muted Icon */
//             <svg
//               className="h-5 w-5 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path d="M9 9l6 6M15 9l-6 6" transform="translate(5, 0)" />
//               <path d="M11 5L6 9H3v6h3l5 4V5z" />
//             </svg>
//           ) : (
//             /* Sound Icon */
//             <svg
//               className="h-5 w-5 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path d="M11 5L6 9H3v6h3l5 4V5z" />
//               <path d="M15 9a4 4 0 010 6" />
//               <path d="M17 7a7 7 0 010 10" />
//             </svg>
//           )}
//         </button>

//         {/* Branding */}
//         {/* <div className="absolute bottom-8 left-8 text-3xl font-bold tracking-tight text-white">
//           Black<span className="text-orange-500">Line</span>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default VideoSection;


"use client";

import { useRef, useState, useEffect } from "react";

const VideoSection = ({ videoUrl }) => {
  const mediaRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const isAudio = videoUrl?.endsWith(".mp3");

  useEffect(() => {
    if (mediaRef.current) {
      mediaRef.current.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    if (!mediaRef.current) return;

    if (isPlaying) {
      mediaRef.current.pause();
    } else {
      mediaRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!mediaRef.current) return;

    mediaRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative px-6 lg:px-12 max-w-7xl mx-auto mt-16 pb-28 z-10">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black group">

        {/* Video or Audio */}
        {isAudio ? (
          <audio
            ref={mediaRef}
            autoPlay
            muted={isMuted}
            loop
            className="w-full"
          >
            <source src={videoUrl} type="audio/mpeg" />
          </audio>
        ) : (
          <video
            ref={mediaRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            poster="/posters/blackline-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            <source src={videoUrl} type="audio/mpeg" />
          </video>
        )}

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

        {/* Play / Pause */}
        {/* <button
          onClick={togglePlay}
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-xl group-hover:scale-125 transition-transform" />
            <div className="relative w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              {isPlaying ? (
                <div className="flex gap-2">
                  <div className="w-2 h-6 bg-black rounded" />
                  <div className="w-2 h-6 bg-black rounded" />
                </div>
              ) : (
                <div className="ml-1 w-0 h-0 border-l-[18px] border-l-black border-y-[12px] border-y-transparent" />
              )}
            </div>
          </div>
        </button> */}

        {/* Mute */}
        <button
          onClick={toggleMute}
          className={`absolute bottom-5 right-5 z-20 h-12 w-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 ease-out hover:bg-orange-500/90 hover:border-orange-400 active:scale-95 opacity-0 group-hover:opacity-100 ${
            !isMuted ? "bg-orange-500/90 border-orange-400" : ""
          }`}
        >
          {isMuted ? (
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 9l6 6M15 9l-6 6" transform="translate(5, 0)" />
              <path d="M11 5L6 9H3v6h3l5 4V5z" />
            </svg>
          ) : (
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M11 5L6 9H3v6h3l5 4V5z" />
              <path d="M15 9a4 4 0 010 6" />
              <path d="M17 7a7 7 0 010 10" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoSection;