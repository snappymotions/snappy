import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoaderProps {
  progress: number;
}

const Loader: React.FC<LoaderProps> = ({ progress }) => {
  const pathsRef = useRef<SVGPathElement[]>([]);
  const pointsRef = useRef<number[][]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const numPoints = 10;
  const delayPointsMax = 0.3;
  const delayPerPath = 0.25;
  const duration = 0.9;

  const bgOpacity = 0.8 + (progress / 100) * 0.2;
  const translationX = (progress / 100) * 2;

  // Initialize SVG paths
  useEffect(() => {
    const numPaths = pathsRef.current.length;

    pointsRef.current = [];

    for (let i = 0; i < numPaths; i++) {
      const points: number[] = [];
      for (let j = 0; j < numPoints; j++) points.push(100);
      pointsRef.current.push(points);
    }

    tlRef.current = gsap.timeline({
      paused: true,
      onUpdate: render,
      defaults: {
        ease: "power2.inOut",
        duration,
      },
    });

    render(); // 👈 draw initial shape
  }, []);

  // Run transition when loading finishes
  useEffect(() => {
    if (progress === 100) {
      runTransition();
    }
  }, [progress]);

  const runTransition = () => {
    const tl = tlRef.current;
    if (!tl) return;

    const pointsDelay: number[] = [];

    tl.clear().progress(0);

    for (let i = 0; i < numPoints; i++) {
      pointsDelay[i] = Math.random() * delayPointsMax;
    }

    pointsRef.current.forEach((points, i) => {
      const pathDelay = delayPerPath * i;

      for (let j = 0; j < numPoints; j++) {
        const delay = pointsDelay[j];
        tl.to(
          points,
          { [j]: 0 },
          delay + pathDelay
        );
      }
    });

    tl.play();
  };

  const render = () => {
    pathsRef.current.forEach((path, i) => {
      const points = pointsRef.current[i];
      if (!points) return;

      let d = `M 0 0 V ${points[0]} C`;

      for (let j = 0; j < points.length - 1; j++) {
        const p = ((j + 1) / (points.length - 1)) * 100;
        const cp = p - (1 / (points.length - 1) * 100) / 2;
        d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
      }

      d += ` V 100 H 0`;
      path.setAttribute("d", d);
    });
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-[#E15A00] flex items-center justify-center overflow-hidden z-[9999]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#FF6600] via-[#E15A00] to-[#C14D00]"
        style={{
          opacity: bgOpacity,
          transform: `translateX(${translationX}px)`,
        }}
      />

      {/* Number */}
      <div className="absolute bottom-10 right-10 font-thin md:bottom-20 md:right-20 select-none pointer-events-none">
        <h1 className="text-[9rem] md:text-[19rem] font-black  leading-none tracking-tighter text-black/90">
          {progress}
        </h1>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-2 bg-white w-full">
        <div
          className="h-full bg-[#f15120] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* SVG Transition Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[10000]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f15120" />
            <stop offset="100%" stopColor="#fffffff" />
          </linearGradient>

          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f15120" />
            <stop offset="100%" stopColor="#f15120" />
          </linearGradient>
        </defs>

        <path
          ref={(el) => el && (pathsRef.current[0] = el)}
          fill="url(#gradient2)"
        />
        <path
          ref={(el) => el && (pathsRef.current[1] = el)}
          fill="url(#gradient1)"
        />
      </svg>
    </div>
  );
};

export default Loader;
