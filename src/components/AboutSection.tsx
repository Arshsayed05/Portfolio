import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioContent';
import { Crosshair, Award, MapPin, GraduationCap, Cpu } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b-2 border-ink bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Swiss Index Label */}
        <div className="flex flex-wrap items-baseline justify-between border-b-2 border-ink pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs bg-ink text-background px-2 py-0.5 font-bold">
              01 // IDENTITY
            </span>
            <span className="font-mono text-xs text-ink-muted">ARCHIVE // DOSSIER</span>
          </div>
          <div className="font-mono text-xs text-ink-muted">
            SECTION REF: NMAMIT.CSE
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="font-grotesk font-black text-5xl sm:text-7xl lg:text-8xl tracking-tightest uppercase text-ink">
            MORE THAN A TITLE<span className="text-acid-lime">.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-ink-muted tracking-widest uppercase mt-2">
            ENGINEERING • COMPETITIVE ESPORTS • CREATIVE COMMUNITY
          </p>
        </div>

        {/* Editorial Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Cols 1-7): Editorial Story & Oversized Pull Quote */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* The Text Body */}
            <div className="space-y-6 font-sans text-lg sm:text-xl text-ink leading-relaxed font-normal">
              {PORTFOLIO_DATA.personal.aboutParagraphs.map((para, i) => (
                <p key={i} className="border-l-2 border-ink/20 pl-4 hover:border-acid-lime transition-colors">
                  {para}
                </p>
              ))}
            </div>

            {/* Oversized Editorial Pull Quote */}
            <div className="p-8 bg-surface border-2 border-ink shadow-brutalist relative overflow-hidden">
              <span className="absolute -right-4 -bottom-6 font-grotesk font-black text-9xl text-ink/5 pointer-events-none select-none">
                “
              </span>
              <div className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-acid-lime inline-block"></span>
                <span>CORE CREED</span>
              </div>
              <blockquote className="font-serif italic text-2xl sm:text-3xl text-ink leading-snug">
                &quot;{PORTFOLIO_DATA.personal.editorialPullQuote}&quot;
              </blockquote>
              <div className="font-mono text-xs text-ink-muted mt-4 font-bold">
                — ARSH KASIM SAYED
              </div>
            </div>

            {/* Quick Fact Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="border border-ink p-3 bg-background">
                <div className="font-mono text-[10px] text-ink-muted uppercase">ACADEMICS</div>
                <div className="font-grotesk font-bold text-base text-ink mt-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-ink" /> CSE
                </div>
                <div className="font-mono text-[10px] text-ink-muted">NMAMIT Nitte</div>
              </div>

              <div className="border border-ink p-3 bg-background">
                <div className="font-mono text-[10px] text-ink-muted uppercase">LOCATION</div>
                <div className="font-grotesk font-bold text-base text-ink mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-ink" /> India
                </div>
                <div className="font-mono text-[10px] text-ink-muted">Karnataka (IST)</div>
              </div>

              <div className="border border-ink p-3 bg-background col-span-2 sm:col-span-1">
                <div className="font-mono text-[10px] text-ink-muted uppercase">ESPORTS SQUAD</div>
                <div className="font-grotesk font-bold text-base text-ink mt-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-ink" /> XTREME PHOENIX
                </div>
                <div className="font-mono text-[10px] text-ink-muted">Team Owner</div>
              </div>
            </div>

          </div>

          {/* Right Column (Cols 8-12): Custom Brutalist Portrait Placeholder */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* The Photo Container with Crop Marks and Measurement Lines */}
            <div 
              className="relative border-2 border-ink bg-surface shadow-brutalist p-4 group transition-transform hover:-translate-y-1 duration-200"
              onMouseEnter={() => soundFx.hover()}
            >
              {/* Corner Crop Marks (Swiss Graphic Style) */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-ink pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-ink pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-ink pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-ink pointer-events-none" />

              {/* Graphic Frame */}
              <div className="relative aspect-[4/5] bg-ink text-background flex flex-col justify-between p-6 overflow-hidden">
                
                {/* Background Swiss Grid lines inside photo box */}
                <div className="absolute inset-0 opacity-15 swiss-grid-bg" />

                {/* Top Overlay Tag */}
                <div className="relative z-10 flex justify-between items-center font-mono text-[10px]">
                  <span className="bg-acid-lime text-ink px-1.5 py-0.5 font-bold">
                    PORTRAIT PLACEHOLDER
                  </span>
                  <span className="text-gray-400">FIG // 01.1</span>
                </div>

                {/* Center Abstract Brutalist Visual Placeholder */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-4">
                  <div className="w-24 h-24 border-2 border-dashed border-acid-lime flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <Crosshair className="w-10 h-10 text-acid-lime" />
                  </div>
                  <div>
                    <div className="font-grotesk font-black text-2xl tracking-tight text-white">
                      ARSH KASIM SAYED
                    </div>
                    <div className="font-mono text-xs text-acid-lime uppercase tracking-widest mt-1">
                      [PORTRAIT PLACEHOLDER]
                    </div>
                  </div>
                  <p className="font-mono text-[11px] text-gray-400 max-w-xs leading-tight">
                    Clean slot configured to showcase official photographic portrait or high-contrast editorial capture.
                  </p>
                </div>

                {/* Bottom Spec Footer inside Photo */}
                <div className="relative z-10 font-mono text-[10px] text-gray-400 border-t border-white/20 pt-2 flex justify-between">
                  <span>SCALE: 1:1 RATIO</span>
                  <span>ISO 400 // F/2.8</span>
                </div>
              </div>

              {/* Placeholder Guidance Banner */}
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-ink-muted">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-acid-lime inline-block border border-ink"></span>
                  SLOT: READY FOR PORTRAIT
                </span>
                <span className="font-bold text-ink">ARSH.JPG</span>
              </div>
            </div>

            {/* Spec Information Card */}
            <div className="border border-ink bg-surface-subtle p-4 font-mono text-xs space-y-2">
              <div className="font-bold text-ink flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" /> SYSTEM ORIENTATION
              </div>
              <p className="text-ink-muted text-[11px] leading-relaxed">
                Balanced between algorithmic precision in computer science, aggressive strategic mastery in BGMI esports, and organizational leadership founding collegiate initiatives.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
