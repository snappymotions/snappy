"use client"

import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-6 lg:px-12 py-10 flex justify-between items-center z-50 bg-transparent">
      <div className="text-3xl font-bold tracking-tighter">
        <span className="inline-block transform -rotate-12">β</span>
      </div>
      <div className="flex gap-6">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft size={28} />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowRight size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;
