import React from 'react';
import { Contact } from '../sections/Contact';

export const ContactPage = () => {
  return (
    <div className="container-custom">
      <div className="max-w-3xl mb-8 sm:mb-12">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066ff] mb-3">
          // DIRECT ENGAGEMENT & PROJECT INQUIRIES
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#f4f5f8] mb-6">
          START A PROJECT WITH REGOX
        </h1>
        <p className="text-[#9aa1b0] text-base sm:text-lg leading-relaxed max-w-2xl">
          Tell us about your digital product requirements, timelines, and technical challenges. Our engineering team reviews submissions within 24 hours.
        </p>
      </div>

      <div className="rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[rgba(14,16,21,0.6)] backdrop-blur-md p-2 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
