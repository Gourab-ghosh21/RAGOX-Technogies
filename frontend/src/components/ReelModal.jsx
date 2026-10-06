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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-[#090b10] border border-[rgba(255,255,255,0.12)] rounded-[18px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.9)] z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(255,255,255,0.08)] bg-[#07090d]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#0066ff] shadow-[0_0_8px_#0066ff]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4f5f8] font-bold">
              REGOX // BRAND IDENTITY REEL
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close brand reel"
            className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-[#9aa1b0] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
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
        <div className="px-5 py-3 bg-[#07090d] border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-xs text-[#7e8696] font-mono">
          <span>CREATIVE DIRECTION &amp; MOTION SPECIFICATION</span>
          <span>REGOX TECHNOLOGY AGENCY</span>
        </div>
      </div>
    </div>
  );
};
