
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import SliderCard from './SliderCard';

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  locationLabel: string;
}


interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: "Cinematic Editing",
    title: "ALPINE HORIZONS",
    description: "Capturing the raw beauty of high-altitude landscapes through dynamic cuts and precise color grading. This project explored the limits of aerial cinematography.",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070",
    locationLabel: "SWISS ALPS"
  },
  {
    id: 2,
    category: "Motion Graphics",
    title: "NEON SYNTHESIS",
    description: "A deep dive into 2D and 3D integration. Combining cyberpunk aesthetics with fluid animation to create a high-impact brand identity for tech pioneers.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
    locationLabel: "TOKYO METRO"
  },
  {
    id: 3,
    category: "Brand Identity",
    title: "DESERT ECHOES",
    description: "Minimalist visual storytelling for luxury travel brands. Soft textures, warm tones, and deliberate pacing define this award-winning campaign.",
    imageUrl: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=2070",
    locationLabel: "SAHARA DUNES"
  },
  {
    id: 4,
    category: "Social Content",
    title: "URBAN RHYTHM",
    description: "High-energy edits designed for maximum engagement. Utilizing split-screen effects and rapid transitions to capture the essence of city life.",
    imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=2070",
    locationLabel: "NEW YORK CITY"
  },
  {
    id: 5,
    category: "VFX Production",
    title: "CELESTIAL VOID",
    description: "Advanced compositing and particle systems used to build otherworldly environments. Pushing the boundaries of what is possible in post-production.",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2070",
    locationLabel: "DEEP SPACE"
  }
];


const App: React.FC = () => {
  const [order, setOrder] = useState<number[]>(PORTFOLIO_ITEMS.map((_, i) => i));
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevActiveIndex, setPrevActiveIndex] = useState<number | null>(null);
  const [startRect, setStartRect] = useState<Rect | null>(null);
  
  // To handle the "Expansion" state specifically
  const [expansionActive, setExpansionActive] = useState(false);

  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeIndex = order[0];
  const activeItem = useMemo(() => PORTFOLIO_ITEMS[activeIndex], [activeIndex]);
  
  const thumbnails = useMemo(() => order.slice(1).map(idx => ({
    item: PORTFOLIO_ITEMS[idx],
    originalIndex: idx
  })), [order]);

  const getThumbnailRect = (index: number): Rect => {
    const el = thumbnailRefs.current[index];
    if (el) {
      const r = el.getBoundingClientRect();
      return { top: r.top, left: r.left, width: r.width, height: r.height };
    }
    return { top: window.innerHeight * 0.7, left: window.innerWidth * 0.6, width: 200, height: 300 };
  };

  const startTransition = (rect: Rect, nextOrder: number[]) => {
    setIsAnimating(true);
    setExpansionActive(false); // Reset
    setStartRect(rect);
    setPrevActiveIndex(order[0]);
    
    // Step 1: Prepare the expansion state (at card size)
    setTimeout(() => {
      setOrder(nextOrder);
      // Step 2: Trigger the actual expansion in the next frame
      requestAnimationFrame(() => {
        setExpansionActive(true);
      });
    }, 50);

    // Step 3: Cleanup
    setTimeout(() => {
      setIsAnimating(false);
      setExpansionActive(false);
      setStartRect(null);
      setPrevActiveIndex(null);
    }, 1100);
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    const rect = getThumbnailRect(0);
    const nextOrder = [...order];
    const first = nextOrder.shift()!;
    nextOrder.push(first);
    startTransition(rect, nextOrder);
  }, [isAnimating, order]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    const rect = getThumbnailRect(thumbnails.length - 1);
    const nextOrder = [...order];
    const last = nextOrder.pop()!;
    nextOrder.unshift(last);
    startTransition(rect, nextOrder);
  }, [isAnimating, order, thumbnails.length]);

  const goToSlide = (thumbnailIndexInQueue: number, e: React.MouseEvent) => {
    if (isAnimating) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nextOrder = [...order];
    const rotateCount = thumbnailIndexInQueue + 1;
    const moved = nextOrder.splice(0, rotateCount);
    startTransition(rect, [...nextOrder, ...moved]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 15000);
    return () => clearInterval(timer);
  }, [handleNext]);

  // Precise Clip-Path Generator
  const getClipPath = (rect: Rect | null, isFull: boolean) => {
    if (isFull || !rect) return 'inset(0% 0% 0% 0% round 0px)';
    
    const top = (rect.top / window.innerHeight) * 100;
    const left = (rect.left / window.innerWidth) * 100;
    const right = 100 - ((rect.left + rect.width) / window.innerWidth) * 100;
    const bottom = 100 - ((rect.top + rect.height) / window.innerHeight) * 100;
    
    return `inset(${top}% ${right}% ${bottom}% ${left}% round 16px)`;
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white selection:bg-orange-500">
      {/* <Navbar /> */}

      {/* Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {PORTFOLIO_ITEMS.map((item, index) => {
          const isActive = index === activeIndex;
          const wasActive = index === prevActiveIndex;
          
          // Current Active Image logic
          // If we are currently expanding, the 'active' image is the one growing
          const clip = (isActive && isAnimating) 
            ? getClipPath(startRect, expansionActive) 
            : 'inset(0% 0% 0% 0% round 0px)';

          return (
            <div 
              key={item.id}
              className={`absolute inset-0 transition-all transform
                ${isActive 
                  ? 'z-20 opacity-100' 
                  : wasActive 
                    ? 'z-10 opacity-0 scale-110 blur-xl' 
                    : 'z-0 opacity-0'
                }
              `}
              style={{
                clipPath: clip,
                transitionDuration: (isActive && isAnimating) ? '1000ms' : '800ms',
                transitionTimingFunction: 'cubic-bezier(0.85, 0, 0.15, 1)',
                transitionProperty: 'clip-path, opacity, transform, filter'
              }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className={`w-full h-full object-cover filter brightness-[0.4] transition-transform duration-[1500ms]
                  ${isActive ? 'scale-100' : 'scale-125'}
                `}
              />
            </div>
          );
        })}
      </div>

      {/* Main Content Overlay */}
      <main className="relative z-30 flex flex-col h-full justify-center px-8 md:px-16 pointer-events-none">
        <div className="max-w-xl space-y-4 md:space-y-6 pointer-events-auto">
          <div className="overflow-hidden">
            <span className={`text-orange-500 font-bold tracking-[0.3em] text-xs md:text-sm uppercase block transition-all duration-700 delay-100
              ${isAnimating ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}
            `}>
              {activeItem.category}
            </span>
          </div>

          <div className="overflow-hidden">
            <h1 className={`text-5xl md:text-7xl lg:text-9xl font-bebas tracking-tighter leading-[0.8] mb-4 transition-all duration-700 delay-200
               ${isAnimating ? 'opacity-0 translate-y-1/2 scale-y-150' : 'opacity-100 translate-y-0 scale-y-100'}
            `}>
              {activeItem.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className={`text-sm md:text-base text-white/60 leading-relaxed font-medium transition-all duration-700 delay-300
              ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
            `}>
              {activeItem.description}
            </p>
          </div>

          <div className={`flex items-center gap-4 transition-all duration-700 delay-400 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <button className="group relative flex items-center gap-3 bg-white/10 hover:bg-orange-500 border border-white/20 hover:border-orange-500 backdrop-blur-md px-6 py-3 rounded-full transition-all duration-300">
              <span className="text-[10px] font-bold tracking-widest uppercase">DISCOVER PROJECT</span>
              <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/40 flex items-center justify-center transition-colors">
                <ChevronRight size={14} className="text-white" />
              </div>
            </button>
            <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-widest font-bold">
              <MapPin size={14} />
              <span>{activeItem.locationLabel}</span>
            </div>
          </div>
        </div>
      </main>

      {/* Slider Thumbnails Container */}
      <div className="absolute bottom-12 right-0 left-0 md:left-auto md:right-16 z-40 flex flex-col items-end gap-12">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar w-full md:w-[60vw] lg:w-[50vw] px-8 md:px-0 scroll-smooth">
          {thumbnails.map((thumb, index) => (
            <div 
              key={thumb.item.id} 
              ref={el => thumbnailRefs.current[index] = el}
              className={`flex-shrink-0 transition-all duration-700 ${isAnimating ? 'opacity-50 blur-[2px]' : 'opacity-100 blur-0'}`}
            >
              <SliderCard 
                item={thumb.item} 
                isActive={false}
                onClick={(e) => goToSlide(index, e)}
              />
            </div>
          ))}
        </div>

        {/* Controls and Index */}
        <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-12 px-8 md:px-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 group"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="relative w-12 h-12">
               <svg className="w-full h-full -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white/10"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={138}
                  strokeDashoffset={138 - (138 * (activeIndex + 1)) / PORTFOLIO_ITEMS.length}
                  className="text-orange-500 transition-all duration-1000 ease-in-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={handleNext}
                  disabled={isAnimating}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:text-orange-500 disabled:opacity-0 transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-1 mb-1">
            <span className="text-5xl font-bebas leading-none tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <div className="h-0.5 w-8 bg-white/20 mb-2" />
          </div>
        </div>
      </div>

      {/* Decorative vertical line / Progress indicator */}
      <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/10 z-20">
        <div 
          className="absolute top-0 left-0 w-full bg-orange-500 transition-all duration-1000"
          style={{ height: `${((activeIndex + 1) / PORTFOLIO_ITEMS.length) * 100}%` }}
        />
      </div>

      {/* Floating social links */}
      <div className="hidden lg:flex fixed left-8 bottom-8 flex-col gap-4 text-[10px] font-bold tracking-widest text-white/30 z-20">
        <a href="#" className="hover:text-white transition-colors rotate-90 origin-left mb-8">INSTAGRAM</a>
        <a href="#" className="hover:text-white transition-colors rotate-90 origin-left mb-8">BEHANCE</a>
        <a href="#" className="hover:text-white transition-colors rotate-90 origin-left">VIMEO</a>
      </div>
    </div>
  );
};

export default App;
