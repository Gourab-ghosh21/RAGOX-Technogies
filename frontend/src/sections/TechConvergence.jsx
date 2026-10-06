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
    <section id="technology" className="py-32 border-b border-[rgba(255,255,255,0.08)] bg-[#07080a] relative">
      <div className="container-custom">
        <SectionHeading
          badge="// 05 CONVERGENCE SYSTEM"
          title="DESIGN × CODE × AI"
          subtitle="Modern digital products require more than static code. We unify aesthetic rigor, robust software engineering, and artificial intelligence into a cohesive delivery system."
        />

        {/* Convergence Diagram & Node Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Convergence Diagram: DESIGN, CODE, AI -> DIGITAL PRODUCT */}
          <div className="lg:col-span-6 bg-[#0b0e14] border border-[rgba(255,255,255,0.09)] rounded-[22px] p-6 sm:p-10 flex flex-col items-center justify-center relative shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6e7686] mb-4 self-start">
              // REGOX CONVERGENCE SYSTEM
            </div>

            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center my-2">
              <svg viewBox="0 0 320 320" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting lines from 3 outer nodes converging into center */}
                <line x1="160" y1="50" x2="160" y2="175" stroke="#0066FF" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
                <line x1="60" y1="240" x2="160" y2="175" stroke="#0066FF" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
                <line x1="260" y1="240" x2="160" y2="175" stroke="#0066FF" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />

                {/* Central Converged Target: DIGITAL PRODUCT */}
                <circle cx="160" cy="175" r="42" fill="#0d1424" stroke="#0066FF" strokeWidth="2" />
                <circle cx="160" cy="175" r="48" stroke="rgba(0, 102, 255, 0.25)" strokeWidth="1" strokeDasharray="4 4" />
                <text x="160" y="171" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  DIGITAL
                </text>
                <text x="160" y="184" textAnchor="middle" fill="#0066FF" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  PRODUCT
                </text>

                {/* Node 1: DESIGN (Top) */}
                <g className="cursor-pointer" onClick={() => setActiveNode('design')}>
                  <circle cx="160" cy="50" r="32" fill="#0e1118" stroke={activeNode === 'design' ? '#0066FF' : 'rgba(255,255,255,0.2)'} strokeWidth="2" />
                  <text x="160" y="54" textAnchor="middle" fill="#F4F5F8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    DESIGN
                  </text>
                </g>

                {/* Node 2: CODE (Bottom Left) */}
                <g className="cursor-pointer" onClick={() => setActiveNode('code')}>
                  <circle cx="60" cy="240" r="32" fill="#0e1118" stroke={activeNode === 'code' ? '#0066FF' : 'rgba(255,255,255,0.2)'} strokeWidth="2" />
                  <text x="60" y="244" textAnchor="middle" fill="#F4F5F8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    CODE
                  </text>
                </g>

                {/* Node 3: AI (Bottom Right) */}
                <g className="cursor-pointer" onClick={() => setActiveNode('ai')}>
                  <circle cx="260" cy="240" r="32" fill="#0e1118" stroke={activeNode === 'ai' ? '#0066FF' : 'rgba(255,255,255,0.2)'} strokeWidth="2" />
                  <text x="260" y="244" textAnchor="middle" fill="#F4F5F8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    AI
                  </text>
                </g>
              </svg>
            </div>

            <div className="font-mono text-[11px] text-[#788090] text-center">
              Convergence Target: High-Impact Digital Products
            </div>
          </div>

          {/* Right Column: Node Details */}
          <div className="lg:col-span-6 space-y-4">
            {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`p-6 sm:p-7 rounded-[16px] border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0f1422] border-[rgba(0,102,255,0.5)] shadow-[0_4px_24px_rgba(0,102,255,0.15)]'
                      : 'bg-[#090b10] border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.16)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-[rgba(0,102,255,0.1)] border border-[rgba(0,102,255,0.25)] flex items-center justify-center text-[#0066ff]">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#f4f5f8]">
                        {node.title} — {node.subtitle}
                      </h3>
                    </div>

                    {isSelected && (
                      <span className="font-mono text-[10px] text-[#0066ff] bg-[rgba(0,102,255,0.1)] px-2 py-0.5 rounded">
                        SELECTED
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#9aa1b0] leading-relaxed mb-3">
                    {node.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {node.details.map((item, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#cbd0dc]"
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

        {/* Subtle, restrained technology list (NOT a logo wall) */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-12">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6e7686]">
              // CORE TECHNOLOGIES
            </span>
            <span className="font-mono text-xs text-[#6e7686]">PRACTICAL &amp; PRODUCTION-TESTED</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'REST APIs', 'AI APIs', 'Vite'].map((tech) => (
              <div
                key={tech}
                className="p-3 rounded-[8px] bg-[#090c12] border border-[rgba(255,255,255,0.06)] text-center font-mono text-xs text-[#d1d5df] hover:border-[rgba(0,102,255,0.4)] transition-colors"
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
