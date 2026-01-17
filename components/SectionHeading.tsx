import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-12">
      {subtitle && (
        <span className={`block text-xs uppercase tracking-[0.3em] font-bold mb-3 ${light ? 'text-chalet-gold' : 'text-chalet-warm'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-serif font-bold ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`h-1 w-16 mx-auto mt-6 ${light ? 'bg-chalet-gold' : 'bg-chalet-warm'}`} />
    </div>
  );
};

export default SectionHeading;