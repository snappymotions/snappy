
"use client"



import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const NextProject = ({ title, image, link }) => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-white/5">

      <div className="group cursor-pointer">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 order-2 lg:order-1">

            <span className="text-orange-500 uppercase tracking-widest">
              Next Project
            </span>

            <h3 className="text-5xl md:text-6xl text-white group-hover:translate-x-4 transition-transform duration-500">
              {title}
            </h3>

            <a
              href={link}
              className="text-gray-400 group-hover:text-white uppercase text-xs"
            >
              Check out the project
            </a>

          </div>

          <div className="overflow-hidden rounded-2xl aspect-[4/3]">
            <img
              src={image}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default NextProject;
