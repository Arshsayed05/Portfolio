import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioContent';
import { soundFx } from '../utils/sound';
import { 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowUp,
  AlertCircle
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'PROJECT COLLABORATION',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'dispatched'>('idle');

  const handleCopyEmail = () => {
    soundFx.success();
    navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.click();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all fields before dispatching.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');

    // Construct genuine mailto link with encoded parameters
    const subjectLine = encodeURIComponent(`[Portfolio Contact] ${formData.subject} - from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via Arsh's Personal Portfolio`
    );

    const mailtoUrl = `mailto:${PORTFOLIO_DATA.socials.email}?subject=${subjectLine}&body=${bodyContent}`;
    
    // Open default email client
    window.location.href = mailtoUrl;

    soundFx.success();
    setSubmittedStatus('dispatched');
  };

  const scrollToTop = () => {
    soundFx.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 bg-background border-t-4 border-ink relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 swiss-grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-baseline justify-between border-b-2 border-ink pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs bg-ink text-background px-2 py-0.5 font-bold">
              07 // TRANSMISSION
            </span>
            <span className="font-mono text-xs text-ink-muted">OPEN COMMUNICATION CHANNEL</span>
          </div>
          <div className="font-mono text-xs text-ink-muted">
            RESPONSE TIME: &lt; 24 HOURS
          </div>
        </div>

        {/* Section Title & Supporting Copy */}
        <div className="mb-14 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1">
            INITIALIZE CONTACT
          </div>
          <h2 className="font-grotesk font-black text-5xl sm:text-7xl lg:text-8xl tracking-tightest uppercase text-ink">
            HAVE SOMETHING INTERESTING IN MIND<span className="text-acid-lime">?</span>
          </h2>
          <p className="font-sans text-lg sm:text-xl text-ink/90 mt-4 leading-relaxed font-normal">
            An opportunity, an idea, a collaboration or just a good conversation. My inbox is open.
          </p>
        </div>

        {/* Editorial Form & Channel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Cols 1-7): Functional Contact Form */}
          <div className="lg:col-span-7 bg-surface border-2 border-ink p-6 sm:p-10 shadow-brutalist space-y-6">
            <div className="flex justify-between items-center border-b border-ink/20 pb-3 font-mono text-xs">
              <span className="font-bold flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 text-ink" /> DIRECT TRANSMISSION FORM
              </span>
              <span className="bg-acid-lime text-ink px-1.5 py-0.5 font-bold border border-ink">
                MAIL CLIENT DISPATCH
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-100 border border-red-500 text-red-800 font-mono text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {submittedStatus === 'dispatched' && (
                <div className="p-4 bg-acid-lime/30 border-2 border-ink text-ink font-mono text-xs space-y-1">
                  <div className="font-bold">✓ DISPATCH TRIGGERED</div>
                  <p className="text-[11px]">
                    Your system mail client has been opened with your message pre-formatted to <span className="font-bold">{PORTFOLIO_DATA.socials.email}</span>. Click send in your mail app to finalize delivery.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-mono text-[11px] font-bold text-ink uppercase">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-ink font-mono text-xs focus:outline-none focus:ring-2 focus:ring-ink"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-mono text-[11px] font-bold text-ink uppercase">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-ink font-mono text-xs focus:outline-none focus:ring-2 focus:ring-ink"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-[11px] font-bold text-ink uppercase">
                  SUBJECT TOPIC *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-ink font-mono text-xs focus:outline-none focus:ring-2 focus:ring-ink"
                >
                  <option value="PROJECT COLLABORATION">PROJECT COLLABORATION</option>
                  <option value="ENGINEERING INTERNSHIP">SOFTWARE INTERNSHIP / ROLE</option>
                  <option value="ESPORTS & COMMUNITY">ESPORTS / AFTER HOURS INQUIRY</option>
                  <option value="GENERAL CONVERSATION">GENERAL INQUIRY / HELLO</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-[11px] font-bold text-ink uppercase">
                  MESSAGE BODY *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about what you're working on or want to talk about..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-ink font-mono text-xs focus:outline-none focus:ring-2 focus:ring-ink"
                />
              </div>

              <button
                type="submit"
                data-cursor="TRANSMIT"
                className="w-full py-3.5 bg-ink text-background hover:bg-acid-lime hover:text-ink font-mono text-xs font-bold uppercase transition-all shadow-brutalist flex items-center justify-center gap-2 border-2 border-ink"
              >
                <Send className="w-4 h-4" />
                <span>DISPATCH MESSAGE VIA MAIL CLIENT</span>
              </button>

              <div className="font-mono text-[10px] text-ink-muted text-center pt-1">
                * Uses direct mailto protocol. No third-party spam tracking or data harvesting.
              </div>
            </form>
          </div>

          {/* Right Column (Cols 8-12): Channels, Direct Email, Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Box */}
            <div className="bg-surface border-2 border-ink p-6 shadow-brutalist space-y-4">
              <div className="font-mono text-xs font-bold uppercase text-ink flex items-center gap-2">
                <Mail className="w-4 h-4" /> DIRECT INBOX ADDRESS
              </div>

              <div className="p-3 bg-background border border-ink flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-ink truncate">
                  {PORTFOLIO_DATA.socials.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  className="px-2.5 py-1 bg-ink text-background hover:bg-acid-lime hover:text-ink font-mono text-[11px] font-bold flex items-center gap-1 transition-colors shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-acid-lime" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>

              <p className="font-mono text-[11px] text-ink-muted leading-tight">
                Feel free to email me directly regarding tech projects, esports inquiries, or collaborations.
              </p>
            </div>

            {/* Social Channels Matrix */}
            <div className="bg-surface border-2 border-ink p-6 shadow-brutalist space-y-4">
              <div className="font-mono text-xs font-bold uppercase text-ink border-b border-ink/20 pb-2">
                DIGITAL FOOTPRINT
              </div>

              <div className="space-y-2">
                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="GITHUB"
                  className="p-3 bg-background border border-ink hover:border-acid-lime hover:bg-ink hover:text-background transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs font-bold">
                    <Github className="w-4 h-4" />
                    <span>GITHUB // Simsayed</span>
                  </div>
                  <span className="font-mono text-xs text-acid-lime">↗</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LINKEDIN"
                  className="p-3 bg-background border border-ink hover:border-acid-lime hover:bg-ink hover:text-background transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs font-bold">
                    <Linkedin className="w-4 h-4" />
                    <span>LINKEDIN // Arsh Kasim Sayed</span>
                  </div>
                  <span className="font-mono text-[10px] text-ink-muted group-hover:text-acid-lime">[EDITABLE LINK] ↗</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="INSTA"
                  className="p-3 bg-background border border-ink hover:border-acid-lime hover:bg-ink hover:text-background transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs font-bold">
                    <Instagram className="w-4 h-4" />
                    <span>INSTAGRAM // @arshsayed</span>
                  </div>
                  <span className="font-mono text-[10px] text-ink-muted group-hover:text-acid-lime">[EDITABLE LINK] ↗</span>
                </a>
              </div>
            </div>

            {/* Location & Institute Stamp */}
            <div className="border border-ink bg-background p-4 font-mono text-xs space-y-1">
              <div className="font-bold text-ink">CAMPUS COORDINATES</div>
              <div className="text-ink-muted">Dept. of Computer Science & Engineering</div>
              <div className="text-ink font-semibold">NMAM Institute of Technology, Nitte, Karnataka, India</div>
            </div>

          </div>

        </div>

        {/* Closing Monumental Typography */}
        <div className="mt-20 pt-12 border-t-2 border-ink flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-1">
            <div className="font-mono text-xs text-ink-muted uppercase tracking-widest">
              CLOSING PHILOSOPHY
            </div>
            <div className="font-grotesk font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-ink uppercase leading-none">
              STAY CURIOUS.<br />
              KEEP BUILDING<span className="text-acid-lime">.</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 font-mono text-xs text-ink-muted">
            <button
              onClick={scrollToTop}
              data-cursor="TOP"
              className="px-4 py-2 bg-surface hover:bg-acid-lime hover:text-ink text-ink font-bold border-2 border-ink flex items-center gap-2 shadow-brutalist transition-all"
            >
              <ArrowUp className="w-4 h-4" /> BACK TO APEX
            </button>

            <div className="text-left md:text-right">
              <div className="font-bold text-ink text-sm">ARSH. © 2026</div>
              <div>SWISS INTERNATIONAL TYPOGRAPHIC STYLE</div>
              <div className="text-[10px]">DESIGNED & ENGINEERED FOR ARSH KASIM SAYED</div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
