import React from 'react';
import { ArrowUp, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';
import { RegoxLogo } from './RegoxBrandmark';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050608] border-t border-[rgba(255,255,255,0.08)] pt-20 pb-14 text-[#9aa1b0]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[rgba(255,255,255,0.06)]">
          {/* Brand & Manifesto */}
          <div className="md:col-span-6 space-y-4">
            <RegoxLogo className="text-2xl" />
            <div className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#f4f5f8] leading-tight">
              BUILD DIGITAL.<br />
              <span className="text-[#0066ff]">THINK BIG.</span>
            </div>
            <p className="text-sm text-[#7e8696] max-w-md leading-relaxed">
              REGOX is a modern technology and digital experience agency building thoughtful websites, powerful digital products and modern AI-powered solutions.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[11px] font-mono text-[#a5abb8]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                <span>SYSTEMS OPERATIONAL • ACCEPTING NEW PROJECTS</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4f5f8] font-bold block mb-4">
              // INDEX
            </span>
            <ul className="space-y-3 text-sm font-mono">
              <li>
                <a href="#work" className="hover:text-[#f4f5f8] no-underline transition-colors">
                  WORK
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f4f5f8] no-underline transition-colors">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#f4f5f8] no-underline transition-colors">
                  PROCESS
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#f4f5f8] no-underline transition-colors">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f4f5f8] no-underline transition-colors">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4f5f8] font-bold block mb-4">
              // CONNECT
            </span>
            <ul className="space-y-3 text-sm font-mono">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#f4f5f8] no-underline transition-colors group"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} className="text-[#646d7e] group-hover:text-[#0066ff]" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#f4f5f8] no-underline transition-colors group"
                >
                  <Twitter size={15} />
                  <span>X / Twitter</span>
                  <ArrowUpRight size={12} className="text-[#646d7e] group-hover:text-[#0066ff]" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#f4f5f8] no-underline transition-colors group"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} className="text-[#646d7e] group-hover:text-[#0066ff]" />
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <span className="font-mono text-[11px] text-[#6d7585] block">
                DIRECT INQUIRIES
              </span>
              <a
                href="mailto:contact@regox.agency"
                className="text-xs text-[#d1d5db] hover:text-[#0066ff] no-underline transition-colors font-mono"
              >
                contact@regox.agency
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6d7585]">
          <div>
            © {new Date().getFullYear()} REGOX TECHNOLOGY AGENCY. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>DESIGN × CODE × AI</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#9aa1b0] hover:text-[#f4f5f8] transition-colors cursor-pointer"
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
