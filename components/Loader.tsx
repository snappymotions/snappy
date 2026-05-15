
import React from 'react';

interface LoaderProps {
  progress: number;
}

const Loader: React.FC<LoaderProps> = ({ progress }) => {
  // Use progress to drive background intensity or subtle shifts
  const bgOpacity = 0.8 + (progress / 100) * 0.2;
  const translationX = (progress / 100) * 2; // subtle movement

  return (
    <div className="fixed z-50 inset-0 w-full h-full bg-[#E15A00] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Layer for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#FF6600] via-[#E15A00] to-[#C14D00] pulse-bg"
        style={{ 
          opacity: bgOpacity,
          transform: `translateX(${translationX}px)`
        }}
      />

      {/* Grid Pattern Overlay for texture */}
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #872020 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      /> */}

      {/* The Big Number - positioned bottom right as per video */}
      <div className="absolute bottom-10 font-md right-10 md:bottom-20 md:right-20 select-none pointer-events-none">
        <h1 className="text-[9rem] md:text-[19rem] font-thin font-black loader-text  leading-none tracking-tighter text-black/90 transition-all duration-300 flex items-baseline">
          <span className="inline-block tabular-nums loader-text">
            {progress}
          </span>
       
        </h1>
      </div>

      {/* Bottom Progress Bar - Aesthetic touch */}
      <div className="absolute bottom-0 left-0 h-2 bg-black/20 w-full">
        <div 
          className="h-full bg-black/60 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Status Text Center */}
      {/* <div className="z-10 text-center">
        <p className="loader-text text-black/40 uppercase tracking-[0.5em] font-bold text-sm md:text-lg mb-2">
          Initializing
        </p>
        <div className="h-0.5 w-12 bg-black/20 mx-auto" />
      </div> */}
    </div>
  );
};

export default Loader;
