
import React from 'react';
import { ServiceCardData } from '../types';

interface CardFrontProps {
  data: ServiceCardData;
}

const CardFront: React.FC<CardFrontProps> = ({ data }) => {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/10 rounded-bl-3xl flex items-center justify-center border-l border-b border-orange-500/20">
         <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
           <div className="w-8 h-px bg-orange-500" />
           <span className="text-orange-500 font-mono text-[10px] tracking-widest">SYSTEM_ACTIVE</span>
        </div>
        
        <h2 className="text-4xl font-bold  mb-3 bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
          {data.title}
        </h2>
        
        <ul className="space-y-1">
          {data.items.map((item, idx) => (
            <li key={idx} className="group flex flex-col">
              <span className="text-[9px] text-white/20 font-mono tracking-widest mb-1 group-hover:text-orange-500/50 transition-colors">
                IDX_{idx.toString().padStart(2, '0')}
              </span>
              <span className="text-lg text-gray-400 font-light tracking-wide group-hover:text-white transition-colors cursor-default">
                {item}
              </span>
              <div className="w-0 group-hover:w-full h-px bg-orange-500/30 mt-2 transition-all duration-500" />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-end relative z-10">
        <div className="flex flex-col">
            <span className="text-[10px] text-white/20 font-mono mb-[-8px]">SEQUENCE</span>
            <div className="text-7xl font-black text-white/5 select-none leading-none">
              {data.number}
            </div>
        </div>
        <button className="mb-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] tracking-widest text-white hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300">
          INITIALIZE
        </button>
      </div>
    </div>
  );
};

export default CardFront;
