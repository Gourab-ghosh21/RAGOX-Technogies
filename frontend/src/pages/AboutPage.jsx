import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Terminal, Zap, Code2, Globe, Layers } from 'lucide-react';
import { technologies } from '../data/technologies';

export const AboutPage = () => {
  const principles = [
    {
      icon: Terminal,
      title: 'ZERO GENERIC TEMPLATES',
      desc: 'Every architecture, design token, and code module is authored bespoke to match precise product needs and performance requirements.',
    },
    {
      icon: Zap,
      title: 'PERFORMANCE-FIRST CODEBASES',
      desc: 'Zero unnecessary bloat. Fast DOM reconciliation, sub-second Core Web Vitals, and lightweight asset bundles engineered for peak responsiveness.',
    },
    {
      icon: ShieldCheck,
      title: 'FACTUAL PRODUCTION RIGOR',
      desc: 'We build resilient systems with structured error handling, strict input sanitization, rate limiting, and defensive API contracts.',
    },
    {
      icon: Layers,
      title: 'SYSTEMIC DESIGN TOKENS',
      desc: 'Interfaces governed by strict mathematical spacing scales, WCAG 2.1 AAA accessible typography contrast, and cohesive brand languages.',
    },
  ];

  return (
    <div className="container-custom">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
          // STUDIO PHILOSOPHY & CAPABILITY
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
          ENGINEERING AT THE HIGHEST STANDARD
        </h1>
        <p className="text-slate-300/85 text-base sm:text-lg leading-relaxed max-w-2xl">
          REGOX is an elite technology agency specializing in modern web applications, high-density digital software, and bespoke interface systems. We operate at the intersection of technical architecture and editorial design.
        </p>
      </div>

      {/* Core Principles: Semi-Transparent Glass Cards */}
      <div className="mb-16 sm:mb-24">
        <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
          // ARCHITECTURAL PRINCIPLES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-[22px] glass-card p-6 sm:p-8"
              >
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-400/25 text-sky-400 w-fit mb-4 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-bold uppercase tracking-tight text-slate-100 mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-300/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technology Convergence: Glass Cards Grid */}
      <div className="mb-16 sm:mb-24">
        <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
          // TECHNICAL CONVERGENCE
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-8">
          OUR CORE PRODUCTION STACK
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="rounded-xl glass-card-subtle p-4 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider block mb-1">
                  {tech.category}
                </span>
                <span className="font-bold text-sm text-slate-100">
                  {tech.name}
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 mt-3 block">
                {tech.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA: Translucent Glass Card */}
      <div className="p-8 sm:p-12 rounded-[24px] glass-card-static border border-white/[0.1] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
            // COLLABORATION
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
            LET'S BUILD TOGETHER
          </h3>
          <p className="text-slate-300/80 text-sm mt-1 max-w-lg">
            Whether you require an architectural consultation, a dedicated product sprint, or a full-scale rebuild, our studio is ready to execute.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_25px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] border border-white/20 shrink-0"
        >
          <span>GET IN TOUCH</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;

