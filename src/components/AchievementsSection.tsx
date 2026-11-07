import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioContent';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const AchievementsSection: React.FC = () => {
  const achievements = PORTFOLIO_DATA.achievements;

  return (
    <section id="achievements" className="py-20 border-b-2 border-ink bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-baseline justify-between border-b-2 border-ink pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs bg-ink text-background px-2 py-0.5 font-bold">
              06 // PROOF
            </span>
            <span className="font-mono text-xs text-ink-muted">VERIFIED TRACK RECORD & HONORS</span>
          </div>
          <div className="font-mono text-xs text-ink-muted">
            NO INVENTED CLAIMS // 100% FACTUAL
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <div className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1">
            MEASURED OUTCOMES
          </div>
          <h2 className="font-grotesk font-black text-5xl sm:text-7xl lg:text-8xl tracking-tightest uppercase text-ink">
            PROOF OF EXECUTION<span className="text-acid-lime">.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-ink/80 mt-2 max-w-xl">
            Tangible milestones across esports competition, collegiate community foundation, and academic software engineering.
          </p>
        </div>

        {/* Editorial Record Registry Layout */}
        <div className="border-2 border-ink bg-background shadow-brutalist divide-y-2 divide-ink">
          {achievements.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => soundFx.hover()}
              className="p-6 sm:p-8 hover:bg-surface-subtle transition-colors group flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Index & Title */}
              <div className="flex items-start gap-6">
                <span className="font-mono text-2xl sm:text-3xl font-black text-ink-muted group-hover:text-ink transition-colors">
                  {item.index}
                </span>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] bg-acid-lime text-ink px-1.5 py-0.5 font-bold border border-ink">
                      {item.type}
                    </span>
                    <span className="font-mono text-[11px] text-ink-muted">
                      // {item.entity}
                    </span>
                  </div>

                  <h3 className="font-grotesk font-black text-2xl sm:text-3xl lg:text-4xl text-ink uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-ink/80 max-w-2xl pt-1">
                    {item.notes}
                  </p>
                </div>
              </div>

              {/* Verified Marker */}
              <div className="flex items-center gap-3 lg:self-center shrink-0">
                <div className="font-mono text-xs text-right hidden sm:block">
                  <div className="font-bold text-ink">{item.year}</div>
                  <div className="text-ink-muted text-[10px]">RECORD ACTIVE</div>
                </div>

                <div className="px-3 py-1.5 bg-ink text-background font-mono text-xs font-bold flex items-center gap-1.5 border border-ink group-hover:bg-acid-lime group-hover:text-ink transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>VERIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Footnote */}
        <div className="mt-6 flex flex-wrap justify-between items-center font-mono text-xs text-ink-muted">
          <span>REGISTRY: ARSH KASIM SAYED</span>
          <span>NMAM INSTITUTE OF TECHNOLOGY, NITTE</span>
        </div>

      </div>
    </section>
  );
};
