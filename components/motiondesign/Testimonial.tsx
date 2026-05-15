"use client"

import React from 'react';

const Testimonial: React.FC = ({testimonial, name, position, company}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Large background quote SVG */}
      <div className="absolute -left-10 top-0 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="white">
            <path d="M30 40c0-10 10-20 20-20v10c-5 0-10 5-10 10h10v20H30V40zm30 0c0-10 10-20 20-20v10c-5 0-10 5-10 10h10v20H60V40z" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="hidden lg:block"></div>
        <div className="space-y-12">
            <blockquote className="text-3xl md:text-4xl font-light leading-snug">
            {testimonial}
            </blockquote>
            <div className="flex items-center gap-6">
                <img 
                  src="https://picsum.photos/id/64/100/100" 
                  alt="Matt Murray" 
                  className="w-16 h-16 rounded-full object-cover filter grayscale"
                />
                <div>
                    <h4 className="text-xl font-medium">{name}</h4>
                    <p className="text-gray-500">{position}<br/>{company}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
