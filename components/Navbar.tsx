'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface NavbarProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, onToggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
// bg-black/20 backdrop-blur-md
  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-[100] px-4 py-5 sm:px-6 sm:py-6 md:px-12 md:py-4
        flex justify-between items-center
        transition-all duration-300
        ${scrolled ? 'bg-black' : 'bg-transparent'}
      `}
    >
      {/* Logo */}
      <div onClick={()=>router.push('/')} className="flex items-center">
        <img
          src="/Logo_T.png"
          className="w-[140px] sm:w-[160px] md:w-[200px] lg:w-[220px] h-auto object-contain"
          alt="Logo"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        <button
          onClick={onToggleMenu}
          className="
            group relative flex items-center justify-center
            bg-white/10 hover:bg-orange-500
            border border-white/20 hover:border-orange-500
            backdrop-blur-md
            px-4 py-3 rounded-full
            transition-all duration-300
          "
        >
          {!isMenuOpen ? (
            <svg
              className="w-5 h-5 text-white transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-white transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
