import React, { useRef, useState, useEffect } from 'react';

export const MagneticButton = ({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'pill'
  strength = 0.25,
  ...props
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handler = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e) => {
    if (isReducedMotion || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#f4f5f8] text-[#07080a] hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] font-semibold';
      case 'blue':
        return 'bg-[#0066ff] text-white hover:bg-[#1a75ff] hover:shadow-[0_0_24px_rgba(0,102,255,0.35)] font-semibold';
      case 'secondary':
        return 'bg-[#12151b] text-[#f4f5f8] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(0,102,255,0.4)] hover:bg-[#171b23]';
      case 'ghost':
        return 'bg-transparent text-[#f4f5f8] border border-[rgba(255,255,255,0.15)] hover:border-white hover:bg-[rgba(255,255,255,0.04)]';
      case 'pill':
        return 'bg-[rgba(255,255,255,0.06)] text-[#f4f5f8] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(0,102,255,0.5)] hover:bg-[rgba(0,102,255,0.08)]';
      default:
        return 'bg-[#f4f5f8] text-[#07080a]';
    }
  };

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 && position.y === 0 ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.1s ease-out',
  };

  const combinedClasses = `relative inline-flex items-center justify-center px-6 py-3.5 text-xs md:text-sm uppercase tracking-[0.12em] transition-colors duration-200 cursor-pointer select-none rounded-[6px] ${getVariantStyles()} ${className}`;

  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={combinedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};
