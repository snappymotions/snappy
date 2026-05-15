
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-12 border-t border-zinc-800 pt-8 ${className}`}>
      <span className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4 block">
        {subtitle || "Section"}
      </span>
      <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
