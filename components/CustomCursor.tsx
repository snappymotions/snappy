import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll("button, a");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  useEffect(() => {
  const cursor = cursorRef.current;
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  const animate = () => {
    currentX += (mouseX - currentX) * 0.2; // adjust speed
    currentY += (mouseY - currentY) * 0.2;

    if (cursor) {
      cursor.style.left = currentX + "px";
      cursor.style.top = currentY + "px";
    }

    requestAnimationFrame(animate);
  };

  const moveCursor = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  window.addEventListener("mousemove", moveCursor);
  animate();

  return () => window.removeEventListener("mousemove", moveCursor);
}, []);


  return (
    <div
      ref={cursorRef}
      className={`
        pointer-events-none
        fixed
        z-50
        rounded-full
        transform -translate-x-1/2 -translate-y-1/2
        transition-all duration-150 ease-out
        ${hovering ? "w-5 h-5 bg-orange-500 scale-125" : "w-3 h-3 bg-orange-500"}
      `}
    />
  );
};
