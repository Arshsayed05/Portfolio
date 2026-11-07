import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioContent';
import { soundFx } from '../utils/sound';
import { Terminal, Cpu, Palette, Users, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = PORTFOLIO_DATA.skills;

  const handleCategoryClick = (cat: string) => {
    soundFx.click(640);
    setActiveCategory(cat);
  };

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'PROGRAMMING':
        return Terminal;
      case 'TECHNOLOGY':
        return Cpu;
      case 'CREATIVE':
        return Palette;
      case 'LEADERSHIP':
        return Users;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-20 border-b-2 border-ink bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-baseline justify-between border-b-2 border-ink pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs bg-ink text-background px-2 py-0.5 font-bold">
              05 // CAPABILITIES
            </span>
            <span className="font-mono text-xs text-ink-muted">TECHNICAL & STRATEGIC REPERTOIRE</span>
          </div>
          <div className="font-mono text-xs text-ink-muted">
            INDEX SYSTEM // NO FAKE PERCENTAGES
          </div>
        </div>

        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1">
              CURATED COMPETENCY INDEX
            </div>
            <h2 className="font-grotesk font-black text-5xl sm:text-7xl lg:text-8xl tracking-tightest uppercase text-ink">
              TOOLS OF THE TRADE<span className="text-acid-lime">.</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            <button
              onClick={() => handleCategoryClick('ALL')}
              className={`px-3 py-1.5 border-2 border-ink font-bold transition-all ${
                activeCategory === 'ALL'
                  ? 'bg-ink text-background shadow-brutalist-lime'
                  : 'bg-surface text-ink hover:bg-surface-subtle'
              }`}
            >
              ALL [18]
            </button>
            {categories.map((c) => (
              <button
                key={c.category}
                onClick={() => handleCategoryClick(c.category)}
                className={`px-3 py-1.5 border-2 border-ink font-bold transition-all ${
                  activeCategory === c.category
                    ? 'bg-ink text-background shadow-brutalist-lime'
                    : 'bg-surface text-ink hover:bg-surface-subtle'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Modular Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories
            .filter((c) => activeCategory === 'ALL' || activeCategory === c.category)
            .map((catGroup) => {
              const Icon = getCategoryIcon(catGroup.category);

              return (
                <div
                  key={catGroup.category}
                  className="border-2 border-ink bg-surface shadow-brutalist p-6 sm:p-8 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between border-b-2 border-ink pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs bg-acid-lime text-ink px-2 py-0.5 font-bold border border-ink">
                          {catGroup.categoryCode}
                        </span>
                        <h3 className="font-grotesk font-black text-2xl text-ink">
                          {catGroup.category}
                        </h3>
                      </div>
                      <Icon className="w-5 h-5 text-ink" />
                    </div>

                    <p className="font-sans text-xs text-ink/80 mb-6">
                      {catGroup.description}
                    </p>

                    {/* Skill Index Items */}
                    <div className="space-y-3">
                      {catGroup.skills.map((skill) => (
                        <div
                          key={skill.name}
                          onMouseEnter={() => soundFx.hover()}
                          className="p-3 bg-background border border-ink flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-acid-lime hover:bg-surface-subtle transition-all"
                        >
                          <div>
                            <div className="font-grotesk font-bold text-base text-ink flex items-center gap-2">
                              <span>{skill.name}</span>
                              <span className="font-mono text-[9px] bg-ink text-background px-1.5 py-0.5">
                                {skill.level}
                              </span>
                            </div>
                            <div className="font-mono text-[11px] text-ink-muted mt-0.5">
                              {skill.focus}
                            </div>
                          </div>
                          <span className="font-mono text-xs text-acid-lime bg-ink px-2 py-0.5 self-start sm:self-auto shrink-0">
                            INDEXED
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-ink/20 flex justify-between font-mono text-[10px] text-ink-muted">
                    <span>SECTOR: {catGroup.category}</span>
                    <span>VERIFIED MASTERY</span>
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
};
