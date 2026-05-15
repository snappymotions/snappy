
"use client"

import React from 'react';

interface TextBlockProps {
  title: string;
  content: string | string[];
  columns?: 1 | 2;
}

const TextBlock: React.FC<TextBlockProps> = ({ title, content, columns = 1 }) => {
  const isArray = Array.isArray(content);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-white/5 relative">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* Title */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide sticky top-35 text-white">
            {title}
            <span className="block w-16 h-1 bg-orange-500 mt-4 rounded-full" />
          </h2>
        </div>

        {/* Content */}
        <div className={`lg:col-span-3 ${columns === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-12' : ''}`}>
          {isArray ? (
            content.map((p, i) => (
              <p
                key={i}
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 whitespace-pre-line"
              >
                {p}
              </p>
            ))
          ) : (
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl whitespace-pre-line">
              {content}
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default TextBlock