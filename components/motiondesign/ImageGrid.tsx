// "use client"

// import React from 'react';

// interface ImageGridProps {
//   type: 'storyboard' | 'color';
//   count: number;
// }

// const ImageGrid: React.FC<ImageGridProps> = ({ type, count }) => {
//   const images = Array.from({ length: count });
  
//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
//       <div className={`grid ${type === 'storyboard' ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5' : 'grid-cols-2 md:grid-cols-4'} gap-1 bg-neutral-900 border border-neutral-800 p-1`}>
//         {images.map((_, i) => (
//           <div key={i} className="aspect-video bg-black overflow-hidden group">
//             <img 
//               src={`https://picsum.photos/seed/${type}-${i}/600/400?${type === 'storyboard' ? 'grayscale=1&blur=2' : ''}`} 
//               alt={`Grid item ${i}`}
//               className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ImageGrid;

// "use client";

// import React from "react";

// interface ImageGridProps {
//   type?: "storyboard" | "color";
//   images?: string[];
// }

// const ImageGrid: React.FC<ImageGridProps> = ({ type = "storyboard", images = [] }) => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
//       <div
//         className={`grid ${
//           type === "storyboard"
//             ? "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
//             : "grid-cols-2 md:grid-cols-4"
//         } gap-1 bg-neutral-900 border border-neutral-800 p-1`}
//       >
//         {images.map((src, i) => (
//           <div key={i} className="aspect-video bg-black overflow-hidden group">
//             <img
//               src={src}
//               alt={`Grid item ${i}`}
//               className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ImageGrid;

"use client";

import React from "react";

interface ImageGridProps {
  images?: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images = [] }) => {
  if (images.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2">

        {/* Large Image */}
        {images[0] && (
          <div className="col-span-2 row-span-2 overflow-hidden group rounded-xl">
            <img
              src={images[0]}
              alt="featured"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
        )}

        {/* Small images */}
        {images.slice(1).map((src, i) => (
          <div
            key={i}
            className="aspect-video overflow-hidden group rounded-xl"
          >
            <img
              src={src}
              alt={`grid-${i}`}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;