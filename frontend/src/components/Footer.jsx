import React from 'react';
import { ArrowUp, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';
import { RegoxLogo } from './RegoxBrandmark';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#04060c] border-t border-white/[0.08] pt-20 pb-14 text-slate-400 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand & Manifesto */}
          <div className="md:col-span-6 space-y-4">
            <RegoxLogo className="text-2xl" />
            <div className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              BUILD DIGITAL.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">THINK BIG.</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              REGOX is a modern technology and digital experience agency building thoughtful websites, powerful digital products and modern AI-powered solutions.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-300 backdrop-blur-md shadow-[0_0_16px_rgba(16,185,129,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
                <span>SYSTEMS OPERATIONAL • ACCEPTING NEW PROJECTS</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold block mb-4">
              // INDEX
            </span>
            <ul className="space-y-3 text-sm font-mono">
              <li>
                <a href="#work" className="hover:text-white no-underline transition-colors">
                  WORK
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white no-underline transition-colors">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white no-underline transition-colors">
                  PROCESS
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white no-underline transition-colors">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white no-underline transition-colors">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold block mb-4">
              // CONNECT
            </span>
            <ul className="space-y-3 text-sm font-mono">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white no-underline transition-colors group"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} className="text-slate-500 group-hover:text-sky-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white no-underline transition-colors group"
                >
                  <Twitter size={15} />
                  <span>X / Twitter</span>
                  <ArrowUpRight size={12} className="text-slate-500 group-hover:text-sky-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white no-underline transition-colors group"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} className="text-slate-500 group-hover:text-sky-400" />
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <span className="font-mono text-[11px] text-slate-500 block">
                DIRECT INQUIRIES
              </span>
              <a
                href="mailto:contact@regox.agency"
                className="text-xs text-slate-300 hover:text-sky-400 no-underline transition-colors font-mono"
              >
                contact@regox.agency
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} REGOX TECHNOLOGY AGENCY. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>DESIGN × CODE × AI</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

