import React from 'react';
import { ArrowDownRight, ArrowUpRight, Compass, Terminal, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioContent';
import { HeroCanvas } from './HeroCanvas';
import { soundFx } from '../utils/sound';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative border-b-2 border-ink pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      
      {/* Background Swiss Grid Accent */}
      <div className="absolute inset-0 swiss-grid-bg opacity-70 pointer-events-none" />

      {/* Hero Structural Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Technical Datum Line */}
        <div className="flex flex-wrap items-center justify-between border-b border-ink/20 pb-3 mb-6 font-mono text-[11px] text-ink-muted">
          <div className="flex items-center gap-3">
            <span className="bg-ink text-background px-1.5 py-0.5 font-bold">FIG 01.0</span>
            <span className="hidden sm:inline">SWISS TYPOGRAPHIC POSTER // SYSTEM 2026</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-ink font-semibold">COORDINATES: 13.2048° N, 74.9922° E</span>
            <span className="hidden md:inline border-l border-ink/20 pl-3">NITTE, KARNATAKA</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Cols 1-7): Oversized Dominant Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Massive Display Heading */}
            <div className="space-y-0 leading-none select-none">
              <div className="flex items-baseline">
                <h1 className="font-grotesk font-black text-7xl sm:text-9xl md:text-[11rem] tracking-tightest text-ink hover:text-ink-muted transition-colors">
                  ARSH
                </h1>
                <span className="inline-block w-4 h-4 sm:w-7 sm:h-7 bg-acid-lime border-2 border-ink ml-2 transform rotate-12 animate-pulse"></span>
              </div>
              <div className="font-grotesk font-bold text-4xl sm:text-6xl md:text-7xl tracking-tighter text-ink/90 -mt-2 sm:-mt-6">
                KASIM
              </div>
              <div className="font-grotesk font-black text-5xl sm:text-7xl md:text-8xl tracking-tightest text-ink -mt-1 sm:-mt-4 flex items-center">
                <span>SAYED</span>
                <span className="text-acid-lime font-mono text-4xl sm:text-6xl">.</span>
              </div>
            </div>

            {/* Acid-Lime Statement Banner Bar */}
            <div className="mt-8 bg-acid-lime border-2 border-ink p-4 sm:p-5 shadow-brutalist max-w-xl">
              <div className="font-mono text-[10px] tracking-widest text-ink font-bold uppercase mb-1">
                // CORE POSITIONING
              </div>
              <p className="font-grotesk font-black text-xl sm:text-2xl text-ink leading-tight uppercase">
                &quot;{PORTFOLIO_DATA.personal.headline}&quot;
              </p>
              <p className="font-serif italic text-sm text-ink/80 mt-1">
                {PORTFOLIO_DATA.personal.supportingStatement}
              </p>
            </div>

            {/* Supporting Introduction */}
            <div className="mt-6 max-w-xl">
              <p className="font-sans text-base sm:text-lg text-ink/90 leading-relaxed font-normal">
                {PORTFOLIO_DATA.personal.bioIntro}
              </p>
            </div>

            {/* Action Buttons & Magnetic Triggers */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={() => soundFx.click()}
                data-cursor="WORK"
                className="px-6 py-3.5 bg-ink text-background hover:bg-acid-lime hover:text-ink border-2 border-ink font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-brutalist flex items-center gap-2 group"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={() => soundFx.click()}
                data-cursor="CONTACT"
                className="px-6 py-3.5 bg-surface text-ink hover:bg-ink hover:text-background border-2 border-ink font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-brutalist flex items-center gap-2 group"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column (Cols 8-12): Modular Spec-Sheet + Interactive Kinetic Mesh */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Technical Metadata Spec Box */}
            <div className="bg-surface border-2 border-ink p-5 shadow-brutalist space-y-4">
              <div className="flex justify-between items-center border-b border-ink/20 pb-2 font-mono text-xs">
                <span className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-ink" /> SPECIFICATION SHEET
                </span>
                <span className="bg-acid-lime px-1.5 py-0.5 text-ink text-[10px] font-bold border border-ink">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-ink/10">
                  <span className="text-ink-muted">BASE LOCATION:</span>
                  <span className="font-bold text-ink uppercase">{PORTFOLIO_DATA.personal.location} (NITTE / KARNATAKA)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-ink/10">
                  <span className="text-ink-muted">DEPARTMENT:</span>
                  <span className="font-bold text-ink uppercase">CSE / NMAMIT</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-ink/10">
                  <span className="text-ink-muted">DISCIPLINES:</span>
                  <span className="font-bold text-ink">AI / ESPORTS / DEV</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-ink/10">
                  <span className="text-ink-muted">STATUS:</span>
                  <span className="text-ink font-bold flex items-center gap-1">
                    <span className="w-2 h-2 bg-acid-lime inline-block border border-ink"></span>
                    AVAILABLE
                  </span>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-2.5 bg-background border border-ink font-mono text-[11px] text-ink leading-tight">
                <span className="font-bold text-ink">// NOTE: </span>
                Seeking software engineering internships, collaborative creative tech builds, and competitive opportunities.
              </div>
            </div>

            {/* Interactive Kinetic Graphic */}
            <div className="h-[280px] sm:h-[320px] shadow-brutalist">
              <HeroCanvas />
            </div>

            {/* Fine Bottom Spec Coordinates */}
            <div className="flex justify-between font-mono text-[10px] text-ink-muted border-t border-ink/20 pt-2">
              <span>CANVAS: 2D VECTOR ISOMETRIC</span>
              <span>GRID ALIGNMENT: 100%</span>
            </div>

          </div>

        </div>

        {/* Scroll Indicator Footer */}
        <div className="mt-12 pt-4 border-t border-ink/20 flex flex-wrap justify-between items-center font-mono text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-acid-lime animate-bounce"></span>
            <span>SCROLL TO EXPLORE ARCHIVE</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>INDEX 01: IDENTITY</span>
            <span>INDEX 02: TRIFECTA</span>
            <span>INDEX 03: ARCHIVE</span>
            <span>INDEX 04: TIMELINE</span>
          </div>
        </div>

      </div>
    </section>
  );
};
