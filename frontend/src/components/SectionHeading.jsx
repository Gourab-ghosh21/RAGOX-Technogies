import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'} ${className}`}>
      {badge && (
        <div className={`mb-4 inline-flex items-center gap-2 ${isCenter ? 'justify-center' : ''}`}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066ff] font-semibold">
            {badge}
          </span>
          <span className="w-8 h-[1px] bg-[rgba(0,102,255,0.4)]"></span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-[-0.03em] text-[#f4f5f8] leading-[1.08] mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-[#9aa1b0] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
