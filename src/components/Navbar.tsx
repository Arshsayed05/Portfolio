import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Menu, X } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface NavbarProps {
  onOpenTerminal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, activeSection }) => {
  const [soundActive, setSoundActive] = useState(soundFx.isEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const next = soundFx.toggle();
    setSoundActive(next);
  };

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'DIMENSIONS', href: '#dimensions', id: 'dimensions' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'JOURNEY', href: '#journey', id: 'journey' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    soundFx.click();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b-2 border-ink">
        {/* Top Precision Measurement Bar */}
        <div className="hidden lg:flex justify-between items-center px-6 py-1 bg-surface border-b border-ink/20 font-mono text-[10px] text-ink-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-none bg-acid-lime animate-pulse inline-block border border-ink"></span>
              <span className="text-ink font-semibold">STATUS:</span> ACTIVE // AVAILABLE
            </span>
            <span>BASE: INDIA (NMAMIT)</span>
          </div>
          <div className="flex items-center gap-4">
            <span>SYS // SWISS MODULAR GRID</span>
            <span className="font-bold text-ink">IST: {timeStr || '23:46:43'} [UTC+5:30]</span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            onClick={() => soundFx.click()}
            className="flex items-baseline gap-1 group focus:outline-none"
            data-cursor="TOP"
          >
            <span className="font-grotesk font-black text-2xl tracking-tighter text-ink group-hover:text-ink-muted transition-colors">
              ARSH
            </span>
            <span className="font-mono text-xl font-black text-acid-lime">.</span>
            <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-widest text-ink-muted border-l border-ink/30 pl-2 ml-1">
              PORTFOLIO // 2026
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 font-mono text-xs font-semibold tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => soundFx.hover()}
                  data-cursor="GOTO"
                  className={`px-3 py-1.5 border transition-all ${
                    isActive
                      ? 'border-ink bg-ink text-background shadow-brutalist-lime'
                      : 'border-transparent text-ink hover:border-ink hover:bg-surface'
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-acid-lime"></span>
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Utility Tools: Sound, Terminal, Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Terminal Trigger */}
            <button
              onClick={() => {
                soundFx.click();
                onOpenTerminal();
              }}
              title="Open Terminal Shell (Press '~')"
              data-cursor="CLI"
              className="px-2.5 py-1.5 border border-ink bg-surface hover:bg-acid-lime hover:text-ink transition-colors font-mono text-xs font-bold flex items-center gap-1.5 shadow-brutalist"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CLI</span>
              <span className="text-[10px] bg-ink text-background px-1 py-0.2">~</span>
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={toggleSound}
              title={soundActive ? 'Mute Interface Clicks' : 'Enable Interface Clicks'}
              data-cursor="AUDIO"
              className={`p-1.5 border border-ink transition-colors font-mono text-xs flex items-center justify-center ${
                soundActive ? 'bg-acid-lime text-ink' : 'bg-surface text-ink-muted hover:bg-surface-subtle'
              }`}
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-ink" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                soundFx.click();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-1.5 border border-ink bg-surface hover:bg-acid-lime text-ink"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 z-30 bg-background border-b-4 border-ink flex flex-col p-6 space-y-6 overflow-y-auto animate-fadeIn">
          <div className="border-b border-ink/20 pb-2 font-mono text-xs text-ink-muted flex justify-between">
            <span>INDEX NAVIGATION</span>
            <span className="text-ink font-bold">IST: {timeStr}</span>
          </div>

          <div className="space-y-2 font-grotesk font-black text-3xl">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between py-2 border-b border-ink/10 text-ink hover:text-acid-lime hover:bg-ink px-2 transition-all"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs font-normal text-ink-muted">0{idx + 1} // ↗</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t-2 border-ink space-y-3 font-mono text-xs">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full py-3 bg-ink text-acid-lime font-bold text-center border border-ink flex items-center justify-center gap-2 shadow-brutalist"
            >
              <Terminal className="w-4 h-4" /> LAUNCH INTERACTIVE TERMINAL [CLI]
            </button>

            <div className="p-3 bg-surface border border-ink text-ink-muted text-[11px] space-y-1">
              <div className="font-bold text-ink">ARSH KASIM SAYED</div>
              <div>CSE / NMAM INSTITUTE OF TECHNOLOGY, NITTE</div>
              <div className="text-acid-lime font-semibold bg-ink p-1 mt-1 text-center">
                AVAILABLE FOR OPPORTUNITIES
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
