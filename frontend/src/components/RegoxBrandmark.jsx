import React from 'react';

/**
 * REGOX Architectural R + X Brandmark
 * Directly inspired by the reference design asset:
 * Crisp capital 'R', restrained '+' operator, and bold geometric 'X'.
 */
export const RegoxBrandmark = ({ className = '', size = 200, interactive = false }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="REGOX Brandmark"
    >
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-500 ease-out"
      >
        {/* Subtle coordinate grid lines inside monogram */}
        <line x1="20" y1="120" x2="220" y2="120" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3 3" />
        <line x1="120" y1="20" x2="120" y2="220" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3 3" />

        {/* Capital 'R' */}
        <g id="letter-R">
          {/* Vertical stem */}
          <line x1="42" y1="38" x2="42" y2="202" stroke="#F4F5F8" strokeWidth="18" strokeLinecap="square" />
          {/* Bowl of R */}
          <path
            d="M42 47H96C118 47 132 60 132 83C132 106 118 119 96 119H42"
            stroke="#F4F5F8"
            strokeWidth="18"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          {/* Leg of R */}
          <line x1="88" y1="119" x2="136" y2="202" stroke="#F4F5F8" strokeWidth="18" strokeLinecap="square" />
        </g>

        {/* Restrained '+' Operator (Electric Blue Accent) */}
        <g id="plus-operator">
          <line x1="102" y1="138" x2="122" y2="138" stroke="#0066FF" strokeWidth="6" strokeLinecap="square" />
          <line x1="112" y1="128" x2="112" y2="148" stroke="#0066FF" strokeWidth="6" strokeLinecap="square" />
        </g>

        {/* Diagonal 'X' Cross */}
        <g id="letter-X">
          <line x1="140" y1="38" x2="206" y2="202" stroke="#F4F5F8" strokeWidth="18" strokeLinecap="square" />
          <line x1="206" y1="38" x2="140" y2="202" stroke="#F4F5F8" strokeWidth="18" strokeLinecap="square" />
        </g>
      </svg>
    </div>
  );
};

export const RegoxLogo = ({ className = '', showDot = true }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 tracking-tight font-extrabold select-none ${className}`}>
      <span className="text-xl md:text-2xl tracking-[0.08em] text-[#f4f5f8] font-bold">REGOX</span>
      {showDot && <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]"></span>}
    </div>
  );
};
