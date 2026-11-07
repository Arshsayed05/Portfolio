import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 400);
          }, 150);
          return 100;
        }
        // Snappy incremental steps
        const step = Math.floor(Math.random() * 18) + 12;
        return Math.min(prev + step, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-background text-ink flex flex-col justify-between p-6 sm:p-12 transition-transform duration-500 ease-in-out select-none border-b-4 border-ink ${
        isExiting ? '-translate-y-full opacity-90' : 'translate-y-0'
      }`}
    >
      {/* Top Technical Metadata */}
      <div className="flex justify-between items-start font-mono text-xs border-b border-ink/20 pb-4">
        <div>
          <span className="font-bold">ARSH.SYS</span> // INITIALIZING
        </div>
        <div className="text-right">
          <span className="font-bold text-ink">SYS_REF:</span> NMAMIT.CSE.2026
        </div>
      </div>

      {/* Center Dominant Typography */}
      <div className="my-auto">
        <div className="overflow-hidden">
          <h1 className="font-grotesk font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter leading-none text-ink flex items-baseline">
            ARSH<span className="text-acid-lime">.</span>
          </h1>
        </div>
        <p className="font-mono text-xs sm:text-sm text-ink-muted uppercase tracking-widest mt-3">
          ENGINEERED TO THINK. BUILT TO CREATE.
        </p>
      </div>

      {/* Bottom Progress Bar & Coordinates */}
      <div className="space-y-3 font-mono text-xs border-t border-ink/20 pt-4">
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-acid-lime animate-ping"></span>
            <span className="text-ink-muted">LOADING ASSETS & GRIDS</span>
          </div>
          <div className="font-grotesk font-black text-2xl text-ink">
            {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}%
          </div>
        </div>

        {/* Brutalist Progress Track */}
        <div className="w-full h-2 bg-surface border border-ink overflow-hidden p-0.5">
          <div
            className="h-full bg-ink transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-[10px] text-ink-muted pt-1">
          <span>LAT: 13.2048° N, 74.9922° E</span>
          <span>SWISS MODULAR RATIO 1:1.618</span>
        </div>
      </div>
    </div>
  );
};
