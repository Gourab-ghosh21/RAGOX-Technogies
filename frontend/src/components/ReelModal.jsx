import React, { useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const ReelModal = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="REGOX Brand Reel Video"
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-[#05070e]/92 backdrop-blur-2xl border border-white/[0.12] rounded-[24px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.15)] z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              REGOX // BRAND IDENTITY REEL
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close brand reel"
            className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black/90 flex items-center justify-center">
          <video
            ref={videoRef}
            src="/assets/regox_brand_reel.mp4"
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>CREATIVE DIRECTION &amp; MOTION SPECIFICATION</span>
          <span>REGOX TECHNOLOGY AGENCY</span>
        </div>
      </div>
    </div>
  );
};

export default ReelModal;

