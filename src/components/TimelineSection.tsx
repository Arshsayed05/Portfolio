import React, { useState } from 'react';
import { PORTFOLIO_DATA, TimelineItem } from '../data/portfolioContent';
import { soundFx } from '../utils/sound';
import { Compass, Trophy, Users, Laptop, ArrowRight } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<string>(PORTFOLIO_DATA.timeline[0].id);

  const milestones = PORTFOLIO_DATA.timeline;

  const handleSelect = (id: string) => {
    soundFx.click(720);
    setSelectedMilestone(id);
  };

  const getCategoryIcon = (category: TimelineItem['category']) => {
    switch (category) {
      case 'esports':
        return Trophy;
      case 'community':
        return Users;
      case 'technical':
        return Laptop;
      default:
        return Compass;
    }
  };

  return (
    <section id="journey" className="py-20 border-b-2 border-ink bg-surface/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-baseline justify-between border-b-2 border-ink pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs bg-ink text-background px-2 py-0.5 font-bold">
              04 // CHRONOLOGY
            </span>
            <span className="font-mono text-xs text-ink-muted">TACTICAL MILESTONES & EVOLUTION</span>
          </div>
          <div className="font-mono text-xs text-ink-muted">
            ACCUMULATIVE RECORD // 2018 — PRESENT
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <div className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1">
            CONTINUOUS PROGRESSION
          </div>
          <h2 className="font-grotesk font-black text-5xl sm:text-7xl lg:text-8xl tracking-tightest uppercase text-ink">
            THE JOURNEY SO FAR<span className="text-acid-lime">.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-ink/80 mt-2 max-w-xl">
            From grassroots tactical gaming to managing squads, launching a collegiate esports organization, and engineering intelligent software systems.
          </p>
        </div>

        {/* Modular Editorial Timeline Grid */}
        <div className="relative border-l-2 md:border-l-0 md:grid md:grid-cols-6 gap-4 pl-6 md:pl-0">
          
          {/* Hairline connector bar on desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-ink/20 -z-0" />

          {milestones.map((item, index) => {
            const isSelected = selectedMilestone === item.id;
            const Icon = getCategoryIcon(item.category);

            return (
              <div
                key={item.id}
                onClick={() => handleSelect(item.id)}
                data-cursor="INSPECT"
                className={`relative z-10 mb-8 md:mb-0 cursor-pointer transition-all duration-200 border-2 border-ink p-4 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-ink text-background shadow-brutalist-lime -translate-y-2'
                    : 'bg-background text-ink hover:bg-surface shadow-brutalist'
                }`}
              >
                {/* Year Marker / Display Heading */}
                <div>
                  <div className="flex items-center justify-between border-b border-current/20 pb-2 mb-3">
                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-acid-lime text-ink border border-ink">
                      {item.badge}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-acid-lime' : 'text-ink'}`} />
                  </div>

                  <div className={`font-grotesk font-black text-3xl sm:text-4xl tracking-tight leading-none ${
                    isSelected ? 'text-background' : 'text-ink'
                  }`}>
                    {item.year}
                  </div>

                  <div className={`font-grotesk font-bold text-sm tracking-tight mt-2 ${
                    isSelected ? 'text-acid-lime' : 'text-ink'
                  }`}>
                    {item.title}
                  </div>

                  {item.organization && (
                    <div className="font-mono text-[11px] text-ink-muted mt-0.5">
                      {item.organization}
                    </div>
                  )}
                </div>

                {/* Short excerpt */}
                <div className="mt-4 pt-3 border-t border-current/10">
                  <p className="font-sans text-xs leading-relaxed opacity-90 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Status Dot indicator */}
                <div className="mt-3 flex items-center justify-between font-mono text-[9px] pt-1">
                  <span>0{index + 1} // 06</span>
                  <span className={`w-2 h-2 ${isSelected ? 'bg-acid-lime' : 'bg-ink/30'}`}></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Milestone Granular Detail Drawer / Showcase */}
        {selectedMilestone && (() => {
          const active = milestones.find((m) => m.id === selectedMilestone);
          if (!active) return null;

          return (
            <div className="mt-12 bg-surface border-2 border-ink p-6 sm:p-8 shadow-brutalist animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between border-b-2 border-ink pb-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs bg-acid-lime text-ink px-2 py-0.5 font-bold border border-ink">
                    MILESTONE DOSSIER // {active.year}
                  </span>
                  <span className="font-grotesk font-black text-2xl text-ink">
                    {active.title}
                  </span>
                </div>
                <div className="font-mono text-xs text-ink-muted">
                  {active.organization}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-4">
                  <p className="font-sans text-base sm:text-lg text-ink leading-relaxed">
                    {active.description}
                  </p>
                  <div className="p-4 bg-background border border-ink font-mono text-xs space-y-2">
                    <span className="font-bold text-ink">// CONTEXT & LESSONS LEARNED</span>
                    <p className="text-ink-muted text-[11px]">
                      Each phase reinforced tactical adaptability: esports cultivated composure and macro vision, while academic engineering transformed curiosity into algorithmic execution.
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 bg-background border-2 border-ink p-5 space-y-3">
                  <div className="font-mono text-xs font-bold text-ink uppercase flex items-center gap-1.5 border-b border-ink/20 pb-2">
                    <span className="w-2 h-2 bg-acid-lime inline-block"></span> CORE EXECUTION DETAILS
                  </div>
                  <ul className="space-y-2 font-mono text-xs text-ink">
                    {active.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-acid-lime bg-ink px-1 font-bold text-[10px]">
                          0{idx + 1}
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
