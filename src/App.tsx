import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ThreeDimensionsSection } from './components/ThreeDimensionsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { BrutalistCursor } from './components/BrutalistCursor';
import { TerminalDrawer } from './components/TerminalDrawer';

export function App() {
  const [loading, setLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Listen for '~' key to open terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && terminalOpen) {
        setTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen]);

  // Active section spy for navigation
  useEffect(() => {
    const sections = ['hero', 'about', 'dimensions', 'work', 'journey', 'skills', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-ink font-sans selection:bg-acid-lime selection:text-ink relative">
      {/* Custom Brutalist Cursor for Desktop */}
      <BrutalistCursor />

      {/* Initial Minimal Swiss Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Top Header / Minimal Sticky Navbar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ThreeDimensionsSection />
        <ProjectsSection />
        <TimelineSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Interactive Terminal Easter Egg Shell */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
