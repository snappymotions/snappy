"use client"

import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react';
import FullscreenMenu from './FullscreenMenu';
import { CustomCursor } from './CustomCursor';

function N() {
 const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) return;

    // Simulate an organic loading process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        // Random increments to feel more natural
        const increment = Math.floor(Math.random() * 8) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [loading]);

  const handleRestart = () => {
    setProgress(0);
    setLoading(true);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isMenuOpen]);
  return(
    <>
     <CustomCursor/>
  <Navbar isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
          <FullscreenMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
      
    </>
  )
}

export default N
