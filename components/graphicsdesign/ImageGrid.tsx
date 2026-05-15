
import React from 'react';

interface ImageGridProps {
  images: string[];
  layout: '3-portrait' | 'mixed-3' | '2-landscape' | 'full' | 'sketch' | 'moodboard';
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, layout }) => {
  if (layout === '3-portrait') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 my-16">
        {images.map((src, idx) => (
          <div key={idx} className="aspect-[3/4] overflow-hidden bg-zinc-900 group">
            <img 
              src={src} 
              alt="Project detail" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
            />
          </div>
        ))}
      </div>
    );
  }

  if (layout === 'mixed-3') {
    // 2 landscape + 1 portrait
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-16">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="aspect-video overflow-hidden bg-zinc-900">
             <img src={images[0]} alt="detail 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="aspect-video overflow-hidden bg-zinc-900">
             <img src={images[1]} alt="detail 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
        <div className="aspect-[3/4] md:aspect-auto overflow-hidden bg-zinc-900">
           <img src={images[2]} alt="detail 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 h-full" />
        </div>
      </div>
    );
  }

  if (layout === '2-landscape') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-16">
        {images.map((src, idx) => (
          <div key={idx} className="aspect-video overflow-hidden bg-zinc-900">
            <img src={src} alt="Project detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        ))}
      </div>
    );
  }
    if (layout === 'sketch') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-16">
        {images.map((src, idx) => (
          <div key={idx} className="h-[70vh] overflow-hidden bg-zinc-900">
            <img src={src} alt="Project detail" className="w-full h-full object-fit grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        ))}
      </div>
    );
  }
    if (layout === 'moodboard') {
    return (
      <div className=" my-16">
      
          <div  className="h-[80vh] overflow-hidden bg-zinc-900">
            <img src='/m1.png' alt="Project detail" className="w-full h-full object-fit grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
      
      </div>
    );
  }

  return null;
};

export default ImageGrid;
