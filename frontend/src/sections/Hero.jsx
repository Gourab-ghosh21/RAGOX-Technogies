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
      className="relative min-h-[100svh] flex flex-col justify-center pt-20 sm:pt-24 pb-8 overflow-hidden bg-[#05070e]"
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
              color: '#38bdf8',
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
              color: '#3b82f6',
              glow: 8,
              tail: 22,
              delay: 5,
              collide: 6,
            }}
            className="w-full h-full opacity-85"
          />
        </div>

        {/* Editorial Contrast Fades to keep left-hand text crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070e] via-[#05070e]/85 lg:via-[#05070e]/50 to-transparent pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 65% 50%, transparent 25%, #05070e 92%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05070e] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#05070e]/90 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="container-custom relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7">
            {/* Top Badge */}
            <div className="flex items-center">
              <span className="pill-badge pill-blue text-[11px] sm:text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
                TECHNOLOGY &amp; DIGITAL EXPERIENCE AGENCY
              </span>
            </div>

            {/* Expansive Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-[-0.035em] text-white leading-[1.04] break-words">
              WE BUILD DIGITAL <br />
              EXPERIENCES THAT MOVE <br />
              <span className="text-gradient">BUSINESSES FORWARD.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300/85 max-w-2xl leading-relaxed font-normal">
              REGOX is a technology and digital experience agency building thoughtful websites, powerful digital products and modern AI-powered solutions.
            </p>

            {/* Responsive Action Buttons with Glassmorphic Accent Touch */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-[0.12em] no-underline transition-all duration-200 shadow-[0_4px_24px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.35)] text-center cursor-pointer active:scale-95"
              >
                <span>VIEW OUR WORK</span>
                <ArrowDownRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm uppercase tracking-[0.12em] no-underline transition-all duration-200 shadow-[0_4px_25px_rgba(59,130,246,0.45),inset_0_1px_0_rgba(255,255,255,0.25)] border border-white/20 text-center cursor-pointer active:scale-95"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={16} />
              </Link>

              <button
                type="button"
                onClick={() => setReelOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-slate-100 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer text-center backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] active:scale-95"
              >
                <Play size={13} className="text-sky-400 fill-sky-400" />
                <span>WATCH BRAND REEL</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural R + X Transparent Glass Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-[24px] glass-card-static p-6 sm:p-7 flex flex-col justify-between shadow-[0_24px_70px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.15)] overflow-hidden group">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[radial-gradient(circle,rgba(56,189,248,0.2)_0%,transparent_70%)] pointer-events-none" />

              <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-400">
                <span>ARCH. SPEC // R+X</span>
                <span className="text-sky-400 flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                  SYSTEM ACTIVE
                </span>
              </div>

              <div className="my-auto flex items-center justify-center py-3">
                <RegoxBrandmark
                  size={160}
                  className="filter drop-shadow-[0_0_24px_rgba(56,189,248,0.3)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-white/[0.08] pt-3 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-slate-400">
                <span>DESIGN × CODE × AI</span>
                <span className="text-sky-400 font-bold">REGOX.CORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReelModal isOpen={reelOpen} onClose={() => setReelOpen(false)} />
    </section>
  );
};

