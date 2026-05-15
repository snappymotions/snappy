"use client"
import React from 'react';


interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  locationLabel: string;
}

interface SliderCardProps {
  item: PortfolioItem;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const SliderCard: React.FC<SliderCardProps> = ({ item, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative flex-shrink-0 cursor-pointer transition-all duration-700 ease-out overflow-hidden rounded-2xl
        ${isActive ? 'w-48 h-64 lg:w-56 lg:h-72 ring-2 ring-white/30' : 'w-40 h-56 lg:w-48 lg:h-64 opacity-60 hover:opacity-90'}
      `}
    >
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-[8px] tracking-widest uppercase mb-1 text-white/60">{item.category}</p>
        <h4 className="text-xs font-bold tracking-wider leading-tight line-clamp-2 uppercase">{item.title}</h4>
      </div>
    </div>
  );
};

export default SliderCard;
