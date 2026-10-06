import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Play } from 'lucide-react';
import { RegoxBrandmark } from '../components/RegoxBrandmark';
import { ReelModal } from '../components/ReelModal';

export const Hero = () => {
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden hero-radial-lighting grid-lines-bg border-b border-[rgba(255,255,255,0.08)]"
    >
      {/* Main Content Area */}
      <div className="container-custom relative z-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="pill-badge pill-blue text-[11px] sm:text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] shadow-[0_0_8px_#0066ff]"></span>
                TECHNOLOGY &amp; DIGITAL EXPERIENCE AGENCY
              </span>
              <span className="pill-badge text-[11px] sm:text-xs">
                2026 EDITION
              </span>
            </div>

            {/* Expansive Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase tracking-[-0.035em] text-[#f4f5f8] leading-[1.02] break-words">
              WE BUILD DIGITAL <br />
              EXPERIENCES THAT MOVE <br />
              <span className="text-gradient">BUSINESSES FORWARD.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-lg md:text-xl text-[#9aa1b0] max-w-2xl leading-relaxed font-normal">
              REGOX is a technology and digital experience agency building thoughtful websites, powerful digital products and modern AI-powered solutions.
            </p>

            {/* Responsive Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-[8px] bg-[#f4f5f8] hover:bg-white text-[#07080a] font-bold text-xs sm:text-sm uppercase tracking-[0.12em] no-underline transition-all duration-200 shadow-[0_4px_24px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.3)] text-center"
              >
                <span>VIEW OUR WORK</span>
                <ArrowDownRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-[8px] bg-[#0066ff] hover:bg-[#1a75ff] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.12em] no-underline transition-all duration-200 shadow-[0_4px_24px_rgba(0,102,255,0.35)] hover:shadow-[0_4px_32px_rgba(0,102,255,0.5)] text-center"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                type="button"
                onClick={() => setReelOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-[8px] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] text-[#f4f5f8] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                <Play size={13} className="text-[#0066ff] fill-[#0066ff]" />
                <span>WATCH BRAND REEL</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural R + X Brand Signature Visual */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-square rounded-[22px] bg-[#0c0e15] border border-[rgba(255,255,255,0.1)] p-6 sm:p-8 flex flex-col justify-between shadow-[0_24px_70px_rgba(0,0,0,0.8)] overflow-hidden group">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[radial-gradient(circle,rgba(0,102,255,0.15)_0%,transparent_70%)] pointer-events-none" />

              <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#6e7686]">
                <span>ARCH. SPEC // R+X</span>
                <span className="text-[#0066ff] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] animate-pulse"></span>
                  NODE ACTIVE
                </span>
              </div>

              <div className="my-auto flex items-center justify-center py-4">
                <RegoxBrandmark
                  size={180}
                  className="filter drop-shadow-[0_0_24px_rgba(0,102,255,0.2)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-[rgba(255,255,255,0.06)] pt-3 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#7a8292]">
                <span>GEOMETRY: CAPITAL R • X</span>
                <span>SYSTEM: REGOX.CORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Editorial Information Strip */}
      <div className="container-custom relative z-10 pt-10 sm:pt-14">
        <div className="w-full bg-[#0b0e14] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center text-xs font-mono text-[#8a92a2]">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] shrink-0"></span>
              <div>
                <span className="text-[#5b6373] block text-[10px]">CORE ARCHITECTURE</span>
                <span className="text-[#f4f5f8] font-bold">DESIGN × CODE × AI</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0"></span>
              <div>
                <span className="text-[#5b6373] block text-[10px]">ENGINEERING STANDARD</span>
                <span className="text-[#f4f5f8] font-bold">PRECISION ENGINEERING</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0"></span>
              <div>
                <span className="text-[#5b6373] block text-[10px]">DESIGN DISCIPLINE</span>
                <span className="text-[#f4f5f8] font-bold">ZERO-COMPROMISE CRAFT</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0"></span>
              <div>
                <span className="text-[#5b6373] block text-[10px]">SYSTEM STATUS</span>
                <span className="text-[#0066ff] font-bold">ARCH. SPEC // ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReelModal isOpen={reelOpen} onClose={() => setReelOpen(false)} />
    </section>
  );
};
