import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioContent';
import { soundFx } from '../utils/sound';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  ArrowUpRight, 
  Cpu, 
  BarChart3, 
  FileText,
  X,
  Code
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'AI & ML' | 'DATA ANALYSIS'>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;
  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  const handleFilter = (cat: 'ALL' | 'AI & ML' | 'DATA ANALYSIS') => {
    soundFx.click(600);
    setFilter(cat);
  };

  const openProjectModal = (project: Project) => {
    soundFx.click(800);
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    soundFx.click(500);
    setSelectedProject(null);
  };

  return (
    <section id="work" className="py-20 border-b-2 border-ink bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-baseline justify-between border-b-2 border-ink pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs bg-ink text-background px-2 py-0.5 font-bold">
              03 // ARCHIVE
            </span>
            <span className="font-mono text-xs text-ink-muted">SELECTED ENGINEERING PROJECTS</span>
          </div>
          <div className="font-mono text-xs text-ink-muted">
            CODE REPOSITORY // GITHUB VERIFIED
          </div>
        </div>

        {/* Section Title & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1">
              PORTFOLIO OF IMPLEMENTATIONS
            </div>
            <h2 className="font-grotesk font-black text-5xl sm:text-7xl lg:text-8xl tracking-tightest uppercase text-ink">
              THINGS I&apos;VE PUT INTO MOTION<span className="text-acid-lime">.</span>
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 font-mono text-xs shrink-0">
            {(['ALL', 'AI & ML', 'DATA ANALYSIS'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                data-cursor="FILTER"
                className={`px-3 py-1.5 border-2 border-ink transition-all font-bold ${
                  filter === cat
                    ? 'bg-ink text-background shadow-brutalist-lime'
                    : 'bg-surface text-ink hover:bg-surface-subtle'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Archive Cards List */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-ink bg-surface shadow-brutalist p-6 sm:p-10 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column (Cols 1-7): Editorial Metadata & Details */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Top Project Index Tag */}
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                    <span className="font-grotesk font-black text-3xl sm:text-4xl text-ink">
                      PROJECT {project.number}
                    </span>
                    <span className="bg-acid-lime text-ink px-2 py-0.5 font-bold border border-ink">
                      {project.category}
                    </span>
                    <span className="text-ink-muted hidden sm:inline">
                      ARCHIVE_ID // 0{project.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-grotesk font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink uppercase">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-ink-muted font-semibold mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-base sm:text-lg text-ink/90 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Labels */}
                  <div className="space-y-2">
                    <div className="font-mono text-[11px] text-ink-muted uppercase font-bold">
                      TECHNOLOGIES EMPLOYED
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-background border border-ink font-mono text-xs font-bold text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics / Key Points */}
                  {project.metrics && (
                    <div className="border-t border-ink/20 pt-4 space-y-2">
                      <div className="font-mono text-[11px] text-ink-muted uppercase font-bold">
                        SYSTEM ATTRIBUTES
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-ink">
                        {project.metrics.map((m, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-acid-lime border border-ink"></span>
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Triggers */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => openProjectModal(project)}
                      data-cursor="INSPECT"
                      className="px-5 py-2.5 bg-ink text-background hover:bg-acid-lime hover:text-ink border-2 border-ink font-mono text-xs font-bold uppercase transition-all shadow-brutalist flex items-center gap-2"
                    >
                      <span>INSPECT ARCHITECTURE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="GITHUB"
                        onClick={() => soundFx.click()}
                        className="px-5 py-2.5 bg-background text-ink hover:bg-ink hover:text-background border-2 border-ink font-mono text-xs font-bold uppercase transition-all shadow-brutalist flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Column (Cols 8-12): Custom Visual Schematic */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  
                  {/* Schematic Frame */}
                  <div className="border-2 border-ink bg-background p-4 relative group overflow-hidden">
                    
                    {/* Top Schematic Tag */}
                    <div className="flex justify-between items-center font-mono text-[10px] pb-2 border-b border-ink/20 mb-3">
                      <span className="font-bold flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-ink" /> SCHEMATIC // FIG 0{project.number}.1
                      </span>
                      <span className="bg-ink text-background px-1.5 py-0.5">
                        {project.isPlaceholderVisual ? 'CUSTOM VISUAL ARCHITECTURE' : 'RENDER'}
                      </span>
                    </div>

                    {/* Project Specific Graphic Diagram */}
                    <div className="aspect-[16/10] bg-surface border border-ink flex items-center justify-center p-4 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20 swiss-grid-bg" />

                      {/* Visual Diagram 001: CNN Sign Language Translation */}
                      {project.visualType === 'cnn-diagram' && (
                        <div className="relative z-10 w-full h-full flex flex-col justify-between font-mono text-[11px]">
                          <div className="flex justify-between text-[10px] text-ink-muted">
                            <span>INPUT: KANNADA SIGN GESTURE</span>
                            <span className="text-acid-lime bg-ink px-1">CONV2D + RELU</span>
                          </div>
                          
                          <div className="flex items-center justify-around my-auto">
                            {/* Input Layer */}
                            <div className="flex flex-col items-center">
                              <div className="w-12 h-16 border-2 border-ink bg-background flex flex-col justify-between p-1">
                                <div className="text-[8px] text-ink-muted font-bold">RAW</div>
                                <div className="w-6 h-6 border border-dashed border-acid-lime mx-auto animate-pulse"></div>
                                <div className="text-[8px] text-center">64x64</div>
                              </div>
                              <span className="text-[9px] mt-1 font-bold">IMAGE</span>
                            </div>

                            <span className="text-xs font-bold">→</span>

                            {/* Conv Feature Maps */}
                            <div className="flex flex-col items-center">
                              <div className="flex -space-x-3">
                                <div className="w-10 h-14 border border-ink bg-surface shadow"></div>
                                <div className="w-10 h-14 border border-ink bg-surface-subtle shadow"></div>
                                <div className="w-10 h-14 border-2 border-ink bg-acid-lime/30 shadow flex items-center justify-center">
                                  <span className="text-[9px] font-bold">CNN</span>
                                </div>
                              </div>
                              <span className="text-[9px] mt-1 font-bold">FEATURE MAPS</span>
                            </div>

                            <span className="text-xs font-bold">→</span>

                            {/* Output Prediction */}
                            <div className="flex flex-col items-center">
                              <div className="w-14 h-16 border-2 border-ink bg-ink text-background p-1 flex flex-col justify-between">
                                <span className="text-[8px] text-acid-lime">OUTPUT</span>
                                <span className="text-[10px] font-bold text-center text-white">ಕ / KHA</span>
                                <span className="text-[7px] text-gray-400">P = 0.98</span>
                              </div>
                              <span className="text-[9px] mt-1 font-bold">GESTURE</span>
                            </div>
                          </div>

                          <div className="text-[9px] text-ink-muted text-center border-t border-ink/10 pt-1">
                            NEURAL INFERENCE PIPELINE // SPATIAL MATRIX TRANSLATOR
                          </div>
                        </div>
                      )}

                      {/* Visual Diagram 002: Fake News Classification */}
                      {project.visualType === 'nlp-matrix' && (
                        <div className="relative z-10 w-full h-full flex flex-col justify-between font-mono text-[11px]">
                          <div className="flex justify-between text-[10px] text-ink-muted">
                            <span>CORPUS TOKENIZATION</span>
                            <span className="bg-ink text-white px-1">TF-IDF MATRIX</span>
                          </div>

                          <div className="grid grid-cols-4 gap-1.5 my-auto">
                            {['TOK_01', 'TOK_02', 'VEC_03', 'SCORE', 'TRUE', 'ANOMALY', 'TF-IDF', '0.94'].map((cell, idx) => (
                              <div
                                key={idx}
                                className={`p-1.5 text-center text-[9px] font-bold border border-ink ${
                                  idx === 5 ? 'bg-acid-lime text-ink' : idx === 4 ? 'bg-ink text-background' : 'bg-background text-ink'
                                }`}
                              >
                                {cell}
                              </div>
                            ))}
                          </div>

                          <div className="text-[9px] text-ink-muted text-center border-t border-ink/10 pt-1">
                            PROBABILISTIC CLASSIFIER // VERIFICATION BOUNDARY
                          </div>
                        </div>
                      )}

                      {/* Visual Diagram 003: Student Performance Analysis */}
                      {project.visualType === 'data-distribution' && (
                        <div className="relative z-10 w-full h-full flex flex-col justify-between font-mono text-[11px]">
                          <div className="flex justify-between text-[10px] text-ink-muted">
                            <span>CORRELATION MATRIX</span>
                            <span className="bg-acid-lime text-ink px-1 font-bold">R² = 0.87</span>
                          </div>

                          {/* Data Bars */}
                          <div className="flex items-end justify-between h-20 px-4 my-auto border-b-2 border-ink">
                            {[35, 60, 45, 85, 70, 92, 55].map((h, i) => (
                              <div key={i} className="flex flex-col items-center gap-1">
                                <div
                                  style={{ height: `${h}%` }}
                                  className={`w-4 border border-ink ${
                                    i === 5 ? 'bg-acid-lime' : i === 3 ? 'bg-ink' : 'bg-surface-subtle'
                                  }`}
                                />
                                <span className="text-[8px] text-ink-muted">Q{i + 1}</span>
                              </div>
                            ))}
                          </div>

                          <div className="text-[9px] text-ink-muted text-center border-t border-ink/10 pt-1">
                            MULTIVARIATE EDA // PERFORMANCE DETERMINANTS
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Visual Caption & Explicit Transparent Disclaimer */}
                    <div className="mt-2 text-[10px] font-mono text-ink-muted flex items-center justify-between">
                      <span>CUSTOM SCHEMATIC GRAPHIC</span>
                      <span>STATUS: REPOSITORY DOCUMENTED</span>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal / Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/75 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-3xl bg-background border-4 border-ink shadow-brutalist-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Modal Top Bar */}
            <div className="flex justify-between items-start border-b-2 border-ink pb-4">
              <div>
                <span className="font-mono text-xs bg-acid-lime text-ink px-2 py-0.5 font-bold border border-ink">
                  PROJECT SPECIFICATION // 0{selectedProject.number}
                </span>
                <h3 className="font-grotesk font-black text-2xl sm:text-3xl text-ink uppercase mt-2">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-1 border border-ink bg-surface hover:bg-ink hover:text-background transition-colors"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Long Description */}
            <div className="space-y-4">
              <div className="font-mono text-xs font-bold text-ink uppercase">
                ARCHITECTURE OVERVIEW & RESEARCH GOAL
              </div>
              <p className="font-sans text-base text-ink leading-relaxed">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-3 bg-surface border border-ink p-4">
              <div className="font-mono text-xs font-bold text-ink uppercase">
                KEY TECHNICAL HIGHLIGHTS
              </div>
              <ul className="space-y-2 font-mono text-xs text-ink">
                {selectedProject.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-acid-lime bg-ink px-1 font-bold">0{i + 1}</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <div className="font-mono text-xs font-bold text-ink uppercase">
                DEVELOPMENT STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 bg-surface border border-ink font-mono text-xs font-bold text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t-2 border-ink pt-4 flex flex-wrap justify-between items-center gap-3">
              <div className="font-mono text-[11px] text-ink-muted">
                CSE PROJECT ARCHIVE // NMAMIT
              </div>
              <div className="flex items-center gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-ink text-background hover:bg-acid-lime hover:text-ink font-mono text-xs font-bold border border-ink flex items-center gap-2 shadow-brutalist"
                  >
                    <Github className="w-4 h-4" /> VISIT REPOSITORY
                  </a>
                )}
                <button
                  onClick={closeProjectModal}
                  className="px-4 py-2 bg-surface text-ink hover:bg-ink hover:text-background font-mono text-xs font-bold border border-ink"
                >
                  CLOSE
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
