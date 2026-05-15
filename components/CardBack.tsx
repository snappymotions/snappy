
import React from 'react';

const CardBack: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden backface-hidden shadow-2xl">
      <div className="absolute inset-0 opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cardPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L40 20L20 40L0 20Z" fill="none" stroke="#f97316" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="2" fill="#f97316" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cardPattern)" />
        </svg>
      </div>
      <div className="absolute inset-4 border border-orange-500/20 rounded-xl flex items-center justify-center">
        <div className="relative w-32 h-32 border-2 border-orange-500 rounded-full flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent animate-pulse" />
             <span className="text-orange-500 text-4xl font-black">X</span>
        </div>
      </div>
      <div className="absolute top-4 left-4 text-[10px] text-orange-500/50 tracking-widest font-mono">ENCRYPTED DATA</div>
      <div className="absolute bottom-4 right-4 text-[10px] text-orange-500/50 tracking-widest font-mono">VISION_CORE_v2</div>
    </div>
  );
};

export default CardBack;
