import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, Play } from 'lucide-react';
import { RegoxBrandmark } from '../components/RegoxBrandmark';
import { ReelModal } from '../components/ReelModal';
import { Vortex } from '../components/Vortex';

export const Hero = () => {
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center pt-20 sm:pt-24 pb-8 overflow-hidden bg-[#07080a]"
    >
      {/* 3D Three.js Vortex / Tornado Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="w-full h-full transform translate-x-0 lg:translate-x-[12%] scale-105">
          <Vortex
            background="transparent"
            topRadius={380}
            waistRadius={52}
            waistPosition={50}
            bottomRadius={1200}
            twist={3.2}
            zoom={75}
            speed={11}
            direction="right"
            dots={true}
            comets={true}
            repel={true}
            repelOptions={{ radius: 65, strength: 12 }}
            lineOptions={{
              count: 220,
              color: '#84b6ff',
              glow: 9,
            }}
            dotOptions={{
              count: 7000,
              size: 18,
              color: '#ffffff',
              glow: 9,
              flicker: 10,
            }}
            cometOptions={{
              count: 14,
              speed: 7,
              color: '#0066FF',
              glow: 8,
              tail: 22,
              delay: 5,
              collide: 6,
            }}
            className="w-full h-full opacity-85"
          />
        </div>

        {/* Editorial Contrast Fades to keep left-hand text crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/85 lg:via-[#07080a]/50 to-transparent pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 65% 50%, transparent 25%, #07080a 92%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07080a] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#07080a]/90 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="container-custom relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7">
            {/* Top Badge */}
            <div className="flex items-center">
              <span className="pill-badge pill-blue text-[11px] sm:text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] shadow-[0_0_8px_#0066ff]"></span>
                TECHNOLOGY &amp; DIGITAL EXPERIENCE AGENCY
              </span>
            </div>

            {/* Expansive Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-[-0.035em] text-[#f4f5f8] leading-[1.04] break-words">
              WE BUILD DIGITAL <br />
              EXPERIENCES THAT MOVE <br />
              <span className="text-gradient">BUSINESSES FORWARD.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-[#9aa1b0] max-w-2xl leading-relaxed font-normal">
              REGOX is a technology and digital experience agency building thoughtful websites, powerful digital products and modern AI-powered solutions.
            </p>

            {/* Responsive Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-[8px] bg-[#f4f5f8] hover:bg-white text-[#07080a] font-bold text-xs sm:text-sm uppercase tracking-[0.12em] no-underline transition-all duration-200 shadow-[0_4px_24px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.3)] text-center cursor-pointer"
              >
                <span>VIEW OUR WORK</span>
                <ArrowDownRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-[8px] bg-[#0066ff] hover:bg-[#1a75ff] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.12em] no-underline transition-all duration-200 shadow-[0_4px_24px_rgba(0,102,255,0.35)] hover:shadow-[0_4px_32px_rgba(0,102,255,0.5)] text-center cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={16} />
              </Link>

              <button
                type="button"
                onClick={() => setReelOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-[8px] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] text-[#f4f5f8] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer text-center backdrop-blur-sm"
              >
                <Play size={13} className="text-[#0066ff] fill-[#0066ff]" />
                <span>WATCH BRAND REEL</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural R + X Brand Signature Visual */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-[22px] bg-[#0c0e15]/75 backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 sm:p-7 flex flex-col justify-between shadow-[0_24px_70px_rgba(0,0,0,0.8)] overflow-hidden group">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[radial-gradient(circle,rgba(0,102,255,0.18)_0%,transparent_70%)] pointer-events-none" />

              <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#6e7686]">
                <span>ARCH. SPEC // R+X</span>
                <span className="text-[#0066ff] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] animate-pulse"></span>
                  SYSTEM ACTIVE
                </span>
              </div>

              <div className="my-auto flex items-center justify-center py-3">
                <RegoxBrandmark
                  size={160}
                  className="filter drop-shadow-[0_0_24px_rgba(0,102,255,0.25)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-[rgba(255,255,255,0.06)] pt-3 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#7a8292]">
                <span>DESIGN × CODE × AI</span>
                <span>REGOX.CORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReelModal isOpen={reelOpen} onClose={() => setReelOpen(false)} />
    </section>
  );
};
