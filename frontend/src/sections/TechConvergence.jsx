import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { technologies } from '../data/technologies';
import { Layers, Terminal, Sparkles } from 'lucide-react';

export const TechConvergence = () => {
  const [activeNode, setActiveNode] = useState('design');

  const nodes = [
    {
      id: 'design',
      title: 'DESIGN',
      subtitle: 'Aesthetic Rigor & Systems',
      icon: Layers,
      description: 'Systematic visual architecture, typographical hierarchy, design tokens, and ergonomic interfaces.',
      details: ['Design Systems', 'Atomic Components', 'Information Architecture', 'Micro-interactions'],
    },
    {
      id: 'code',
      title: 'CODE',
      subtitle: 'Engineering Precision',
      icon: Terminal,
      description: 'Type-safe full-stack codebases, clean REST interfaces, high-throughput microservices, and speed.',
      details: ['React & Next.js', 'Node.js & Express', 'TypeScript Reliability', 'REST Architecture'],
    },
    {
      id: 'ai',
      title: 'AI',
      subtitle: 'Modern Intelligence',
      icon: Sparkles,
      description: 'Pragmatic LLM integration, streaming workflows, semantic data parsing, and smart reasoning.',
      details: ['AI Model APIs', 'Streaming Parsers', 'Vector Workflows', 'Intelligent Automation'],
    },
  ];

  return (
    <section id="technology" className="py-32 border-b border-white/[0.08] bg-[#05070e] relative">
      <div className="container-custom">
        <SectionHeading
          badge="// 05 CONVERGENCE SYSTEM"
          title="DESIGN × CODE × AI"
          subtitle="Modern digital products require more than static code. We unify aesthetic rigor, robust software engineering, and artificial intelligence into a cohesive delivery system."
        />

        {/* Convergence Diagram & Node Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Convergence Diagram: Semi-Transparent Glass Card */}
          <div className="lg:col-span-6 glass-card-static rounded-[24px] p-6 sm:p-10 flex flex-col items-center justify-center relative shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.12)]">
            <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4 self-start flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
              // REGOX CONVERGENCE SYSTEM
            </div>

            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center my-2">
              <svg viewBox="0 0 320 320" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting lines from 3 outer nodes converging into center */}
                <line x1="160" y1="50" x2="160" y2="175" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
                <line x1="60" y1="240" x2="160" y2="175" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
                <line x1="260" y1="240" x2="160" y2="175" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />

                {/* Central Converged Target: DIGITAL PRODUCT */}
                <circle cx="160" cy="175" r="42" fill="#0d1424" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="160" cy="175" r="48" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                <text x="160" y="171" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  DIGITAL
                </text>
                <text x="160" y="184" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  PRODUCT
                </text>

                {/* Node 1: DESIGN (Top) */}
                <g className="cursor-pointer" onClick={() => setActiveNode('design')}>
                  <circle cx="160" cy="50" r="32" fill="#0c111d" stroke={activeNode === 'design' ? '#38bdf8' : 'rgba(255,255,255,0.2)'} strokeWidth="2" />
                  <text x="160" y="54" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    DESIGN
                  </text>
                </g>

                {/* Node 2: CODE (Bottom Left) */}
                <g className="cursor-pointer" onClick={() => setActiveNode('code')}>
                  <circle cx="60" cy="240" r="32" fill="#0c111d" stroke={activeNode === 'code' ? '#38bdf8' : 'rgba(255,255,255,0.2)'} strokeWidth="2" />
                  <text x="60" y="244" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    CODE
                  </text>
                </g>

                {/* Node 3: AI (Bottom Right) */}
                <g className="cursor-pointer" onClick={() => setActiveNode('ai')}>
                  <circle cx="260" cy="240" r="32" fill="#0c111d" stroke={activeNode === 'ai' ? '#38bdf8' : 'rgba(255,255,255,0.2)'} strokeWidth="2" />
                  <text x="260" y="244" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    AI
                  </text>
                </g>
              </svg>
            </div>

            <div className="font-mono text-[11px] text-slate-400 text-center">
              Convergence Target: High-Impact Digital Products
            </div>
          </div>

          {/* Right Column: Node Details as Glass Cards */}
          <div className="lg:col-span-6 space-y-4">
            {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`p-6 sm:p-7 rounded-[18px] border transition-all cursor-pointer backdrop-blur-md ${
                    isSelected
                      ? 'bg-slate-900/80 border-sky-400/50 shadow-[0_8px_30px_rgba(56,189,248,0.18),inset_0_1px_0_rgba(255,255,255,0.15)] scale-[1.01]'
                      : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.07] hover:border-white/[0.14] shadow-[0_4px_16px_rgba(0,0,0,0.2)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-slate-100">
                        {node.title} — {node.subtitle}
                      </h3>
                    </div>

                    {isSelected && (
                      <span className="font-mono text-[10px] text-sky-400 bg-sky-500/10 border border-sky-400/20 px-2.5 py-0.5 rounded-full">
                        SELECTED
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed mb-3">
                    {node.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {node.details.map((item, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[10px] px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtle, restrained technology list: Translucent Glass Tags */}
        <div className="border-t border-white/[0.08] pt-12">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              // CORE TECHNOLOGIES
            </span>
            <span className="font-mono text-xs text-slate-400">PRACTICAL &amp; PRODUCTION-TESTED</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'REST APIs', 'AI APIs', 'Vite'].map((tech) => (
              <div
                key={tech}
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm border border-white/[0.07] hover:border-sky-400/35 text-center font-mono text-xs text-slate-200 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_16px_rgba(56,189,248,0.15)]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

