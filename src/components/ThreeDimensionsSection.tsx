import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioContent';
import { soundFx } from '../utils/sound';
import { 
  Code2, 
  Gamepad2, 
  Users2, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2, 
  Trophy, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ThreeDimensionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'engineer' | 'competitor' | 'builder'>('engineer');

  const dimensions = PORTFOLIO_DATA.dimensions;
  const currentDim = dimensions.find((d) => d.id === activeTab) || dimensions[0];

  const handleTabChange = (id: 'engineer' | 'competitor' | 'builder') => {
    soundFx.click(700);
    setActiveTab(id);
  };

  return (
    <section id="dimensions" className="py-20 border-b-2 border-ink bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-baseline justify-between border-b-2 border-ink pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs bg-ink text-background px-2 py-0.5 font-bold">
              02 // TRIFECTA
            </span>
            <span className="font-mono text-xs text-ink-muted">THREE PERSPECTIVES • ONE MIND</span>
          </div>
          <div className="font-mono text-xs text-ink-muted">
            SIGNATURE SECTION
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-10">
          <div className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1">
            CORE DISCIPLINARY PILLARS
          </div>
          <h2 className="font-grotesk font-black text-5xl sm:text-7xl lg:text-8xl tracking-tightest uppercase text-ink">
            NOT JUST ONE THING<span className="text-acid-lime">.</span>
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-ink/80 mt-2 max-w-2xl">
            {PORTFOLIO_DATA.personal.supportingStatement}
          </p>
        </div>

        {/* Dimension Selector Tabs (Swiss Brutalist Switcher) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {dimensions.map((dim, idx) => {
            const isSelected = activeTab === dim.id;
            const Icon = idx === 0 ? Code2 : idx === 1 ? Gamepad2 : Users2;

            return (
              <button
                key={dim.id}
                onClick={() => handleTabChange(dim.id as 'engineer' | 'competitor' | 'builder')}
                data-cursor="SELECT"
                className={`text-left p-5 border-2 border-ink transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-ink text-background shadow-brutalist-lime -translate-y-1'
                    : 'bg-background text-ink hover:bg-surface shadow-brutalist'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 border ${
                    isSelected 
                      ? 'bg-acid-lime text-ink border-ink' 
                      : 'bg-surface text-ink-muted border-ink/20'
                  }`}>
                    0{idx + 1} // {dim.meta.specLabel}
                  </span>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-acid-lime' : 'text-ink'}`} />
                </div>

                <div>
                  <div className={`font-grotesk font-black text-2xl tracking-tight ${
                    isSelected ? 'text-background' : 'text-ink'
                  }`}>
                    {dim.title}
                  </div>
                  <div className={`font-mono text-xs mt-1 ${
                    isSelected ? 'text-acid-lime' : 'text-ink-muted'
                  }`}>
                    {dim.subtitle}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-current/20 flex items-center justify-between font-mono text-[11px]">
                  <span>{isSelected ? 'ACTIVE VIEW' : 'INSPECT'}</span>
                  <span>{isSelected ? '●' : '→'}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Dimension Editorial Stage */}
        <div className="border-2 border-ink bg-background p-6 sm:p-10 shadow-brutalist-lg">
          
          {/* Top Stage Header */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-ink pb-4 mb-8 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-acid-lime border border-ink"></span>
              <span className="font-bold text-ink">{currentDim.code}</span>
              <span className="text-ink-muted">:: {currentDim.title}</span>
            </div>
            <div className="text-ink-muted">
              {currentDim.meta.specLabel}
            </div>
          </div>

          {/* DIMENSION 01: THE ENGINEER */}
          {activeTab === 'engineer' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
              
              {/* Left Column (6 Cols): Concept & Tech Focus */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-xs bg-acid-lime text-ink px-2 py-0.5 font-bold border border-ink">
                    ENGINEERING MANIFESTO
                  </span>
                  <h3 className="font-grotesk font-black text-4xl sm:text-5xl tracking-tight text-ink mt-3">
                    THINK. BUILD. EXPERIMENT.
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-ink/90 mt-4 leading-relaxed">
                    {currentDim.description}
                  </p>
                </div>

                {/* Tech Pills Matrix */}
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-xs font-bold text-ink uppercase flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-ink" /> CORE TECHNICAL ARSENAL
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentDim.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-surface border border-ink font-mono text-xs font-bold text-ink hover:bg-acid-lime transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Focus Points */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs font-bold text-ink uppercase">
                    AREAS OF EXPLORATION
                  </div>
                  <div className="space-y-1.5 font-sans text-sm text-ink">
                    {currentDim.coreFocus.map((focus, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-ink shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (6 Cols): Architectural Blueprint Card */}
              <div className="lg:col-span-6 bg-surface border-2 border-ink p-6 shadow-brutalist space-y-5">
                <div className="flex justify-between items-center border-b border-ink/20 pb-3 font-mono text-xs">
                  <span className="font-bold">SYSTEM BLUEPRINT // CSE-NMAMIT</span>
                  <span className="bg-ink text-background px-1.5 py-0.5 text-[10px]">LIVE LOGIC</span>
                </div>

                {/* Mock Code / Architectural Box */}
                <div className="bg-ink text-background p-4 font-mono text-xs space-y-2 border border-ink overflow-x-auto">
                  <div className="text-acid-lime font-bold"># Python Concurrent Socket & Web Architecture</div>
                  <div className="text-gray-400">class FullStackNetworkEngine:</div>
                  <div className="pl-4 text-gray-300">def __init__(self, host=&apos;0.0.0.0&apos;, port=8080):</div>
                  <div className="pl-8 text-gray-400">self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</div>
                  <div className="pl-8 text-gray-400">self.frontend = &apos;React + TypeScript + Tailwind&apos;</div>
                  <div className="pl-4 text-gray-300">def deploy_ecosystem(self):</div>
                  <div className="pl-8 text-acid-lime">return self.bind_and_serve_threads()</div>
                </div>

                {/* Specification Grid */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="border border-ink p-3 bg-background">
                    <span className="text-ink-muted text-[10px] uppercase">PRIMARY LANGUAGES</span>
                    <p className="font-bold text-ink mt-1">Python, Java, JavaScript, TypeScript, SQL</p>
                  </div>
                  <div className="border border-ink p-3 bg-background">
                    <span className="text-ink-muted text-[10px] uppercase">ARCHITECTURES</span>
                    <p className="font-bold text-ink mt-1">TCP Sockets, React, REST, Modular UI</p>
                  </div>
                </div>

                <div className="p-3 bg-acid-lime/20 border border-ink font-mono text-xs text-ink flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                  <span>
                    Focusing on interactive web experiences, low-level network communication, and collegiate community platforms.
                  </span>
                </div>
              </div>

            </div>
          )}

          {/* DIMENSION 02: THE COMPETITOR */}
          {activeTab === 'competitor' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
              
              {/* Left Column (6 Cols): Competitive Mindset */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-xs bg-acid-lime text-ink px-2 py-0.5 font-bold border border-ink">
                    ESPORTS LEADERSHIP & COMPETITION
                  </span>
                  <h3 className="font-grotesk font-black text-4xl sm:text-5xl tracking-tight text-ink mt-3">
                    BUILT FOR THE GAME.
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-ink/90 mt-4 leading-relaxed">
                    {currentDim.description}
                  </p>
                </div>

                {/* Verified Achievements Callouts */}
                <div className="p-5 bg-surface border-2 border-ink shadow-brutalist space-y-3">
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-ink" /> VERIFIED COMPETITIVE ACHIEVEMENTS
                  </div>
                  <div className="space-y-2">
                    {currentDim.verifiedAchievements?.map((ach, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-background border border-ink">
                        <span className="font-mono text-xs font-black bg-acid-lime text-ink px-1.5 py-0.5 border border-ink">
                          0{i + 1}
                        </span>
                        <span className="font-grotesk font-bold text-sm text-ink">{ach}</span>
                        <span className="ml-auto font-mono text-[10px] bg-ink text-background px-1 py-0.5">
                          VERIFIED
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-mono text-xs font-bold text-ink uppercase">
                    COMPETITIVE FOUNDATIONS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentDim.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 bg-surface border border-ink font-mono text-xs font-semibold text-ink">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (6 Cols): Tactical Dossier */}
              <div className="lg:col-span-6 bg-surface border-2 border-ink p-6 shadow-brutalist space-y-5">
                <div className="flex justify-between items-center border-b border-ink/20 pb-3 font-mono text-xs">
                  <span className="font-bold">TEAM DOSSIER // XTREME PHOENIX</span>
                  <span className="bg-acid-lime text-ink px-1.5 py-0.5 font-bold border border-ink">
                    ROSTER LEADER
                  </span>
                </div>

                {/* Stats / Timeline Milestones */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-background border border-ink flex justify-between items-center">
                    <span className="text-ink-muted">GAMING INCEPTION:</span>
                    <span className="font-bold text-ink">2018</span>
                  </div>
                  <div className="p-3 bg-background border border-ink flex justify-between items-center">
                    <span className="text-ink-muted">COMPETITIVE CIRCUIT ENTRY:</span>
                    <span className="font-bold text-ink">2020</span>
                  </div>
                  <div className="p-3 bg-background border border-ink flex justify-between items-center">
                    <span className="text-ink-muted">SQUAD OWNERSHIP:</span>
                    <span className="font-bold text-ink">XTREME PHOENIX (BGMI)</span>
                  </div>
                  <div className="p-3 bg-background border border-ink flex justify-between items-center">
                    <span className="text-ink-muted">EXPERIENCE ARENA:</span>
                    <span className="font-bold text-ink">Online Cups & On-Ground LANs</span>
                  </div>
                </div>

                <div className="p-4 bg-background border border-ink font-serif italic text-base text-ink leading-relaxed">
                  &quot;Under tournament pressure, victory isn&apos;t just mechanical aim—it&apos;s team communication, macro map awareness, and absolute discipline.&quot;
                </div>

                <div className="font-mono text-[11px] text-ink-muted border-t border-ink/20 pt-2 flex justify-between">
                  <span>DISCIPLINE: BATTLE ROYALE</span>
                  <span>VERIFICATION: STRICT RECORDS</span>
                </div>
              </div>

            </div>
          )}

          {/* DIMENSION 03: THE BUILDER */}
          {activeTab === 'builder' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
              
              {/* Left Column (6 Cols): The Founder Story */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-xs bg-acid-lime text-ink px-2 py-0.5 font-bold border border-ink">
                    COMMUNITY & INSTITUTION BUILDING
                  </span>
                  <h3 className="font-grotesk font-black text-4xl sm:text-5xl tracking-tight text-ink mt-3">
                    IDEAS NEED PEOPLE.
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-ink/90 mt-4 leading-relaxed">
                    {currentDim.description}
                  </p>
                </div>

                {/* Club Founder Banner */}
                <div className="p-5 bg-surface border-2 border-ink shadow-brutalist space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-ink">FOUNDED & LED</span>
                    <span className="bg-ink text-background px-2 py-0.5 font-mono text-[10px] font-bold">
                      COLLEGIATE INITIATIVE
                    </span>
                  </div>
                  <div className="font-grotesk font-black text-2xl text-ink">
                    AFTER HOURS
                  </div>
                  <div className="font-mono text-xs text-ink-muted">
                    Collegiate Esports Club // NMAM Institute of Technology, Nitte
                  </div>
                  <p className="font-sans text-sm text-ink leading-relaxed">
                    Conceived, founded, and built from the ground up to establish a recognized, institutional esports ecosystem on campus for both PC and mobile gaming competitors.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2">
                  <div className="font-mono text-xs font-bold text-ink uppercase">
                    OPERATIONAL SCOPE
                  </div>
                  <div className="space-y-1.5 font-sans text-sm text-ink">
                    {currentDim.coreFocus.map((focus, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-ink shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (6 Cols): Operational Blueprint */}
              <div className="lg:col-span-6 bg-surface border-2 border-ink p-6 shadow-brutalist space-y-5">
                <div className="flex justify-between items-center border-b border-ink/20 pb-3 font-mono text-xs">
                  <span className="font-bold">CLUB ARCHITECTURE // AFTER HOURS</span>
                  <span className="bg-acid-lime text-ink px-1.5 py-0.5 font-bold border border-ink">
                    ACTIVE SQUAD
                  </span>
                </div>

                {/* Blueprint Breakdown Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="border border-ink p-3 bg-background">
                    <span className="text-ink-muted text-[10px] uppercase">PLATFORM DOMAINS</span>
                    <p className="font-bold text-ink mt-1">PC & Mobile Competitive Titles</p>
                  </div>
                  <div className="border border-ink p-3 bg-background">
                    <span className="text-ink-muted text-[10px] uppercase">TALENT PIPELINE</span>
                    <p className="font-bold text-ink mt-1">Recruitment & Scrim Trials</p>
                  </div>
                  <div className="border border-ink p-3 bg-background">
                    <span className="text-ink-muted text-[10px] uppercase">EVENTS ORCHESTRATED</span>
                    <p className="font-bold text-ink mt-1">Campus Tournaments & Streams</p>
                  </div>
                  <div className="border border-ink p-3 bg-background">
                    <span className="text-ink-muted text-[10px] uppercase">LEADERSHIP STRUCTURE</span>
                    <p className="font-bold text-ink mt-1">Operations, Logistics, Media</p>
                  </div>
                </div>

                <div className="p-3 bg-background border border-ink font-mono text-xs space-y-2">
                  <div className="font-bold text-ink">// FOUNDER&apos;S REFLECTION</div>
                  <p className="text-ink/80 text-[11px] leading-relaxed">
                    &quot;Building AFTER HOURS proved that esports isn&apos;t just leisure; when structured with clear roles, governance, and events, it fosters leadership, organizational discipline, and authentic student belonging.&quot;
                  </p>
                </div>

                <div className="font-mono text-[11px] text-ink-muted border-t border-ink/20 pt-2 flex justify-between">
                  <span>CAMPUS: NMAMIT NITTE</span>
                  <span>INITIATIVE: STUDENT-DRIVEN</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
