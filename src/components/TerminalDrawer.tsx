import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioContent';
import { soundFx } from '../utils/sound';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'init',
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-acid-lime font-bold">ARSH BRUTALIST SHELL v2.6 [NMAMIT / CSE]</p>
          <p className="text-ink-muted">Type <span className="text-acid-lime font-semibold underline">help</span> to list available commands or click the shortcut chips below.</p>
        </div>
      ),
      time: '00:00:01'
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    soundFx.click(750);
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString();
    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-acid-lime font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-2 gap-2 text-ink-muted font-mono">
              <div><span className="text-white font-semibold">about</span> : Summary & identity</div>
              <div><span className="text-white font-semibold">projects</span> : Project repository overview</div>
              <div><span className="text-white font-semibold">skills</span> : Technical & leadership toolkit</div>
              <div><span className="text-white font-semibold">esports</span> : BGMI, XTREME PHOENIX & AFTER HOURS</div>
              <div><span className="text-white font-semibold">contact</span> : Transmission endpoints</div>
              <div><span className="text-white font-semibold">clear</span> : Clear console buffer</div>
              <div><span className="text-white font-semibold">date</span> : Live Indian Standard Time</div>
              <div><span className="text-white font-semibold">exit</span> : Close terminal window</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-acid-lime font-bold">ARSH KASIM SAYED</p>
            <p className="text-gray-300">{PORTFOLIO_DATA.personal.aboutParagraphs[0]}</p>
            <p className="text-gray-300">{PORTFOLIO_DATA.personal.aboutParagraphs[1]}</p>
            <div className="p-2 border border-acid-lime bg-white/5 text-acid-lime font-mono">
              &quot;{PORTFOLIO_DATA.personal.headline}&quot;
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-acid-lime font-bold">ACTIVE PROJECT ARCHIVE:</p>
            {PORTFOLIO_DATA.projects.map(p => (
              <div key={p.id} className="border-l-2 border-acid-lime pl-2 py-1">
                <div className="font-bold text-white">[{p.number}] {p.title}</div>
                <div className="text-gray-400">{p.description}</div>
                <div className="text-acid-lime text-[11px] font-mono mt-0.5">
                  STACK: {p.technologies.join(', ')}
                </div>
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-xs text-yellow-400 underline hover:text-white inline-block mt-0.5">
                    View GitHub Repository ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-acid-lime font-bold">CURATED TECHNICAL INDEX:</p>
            {PORTFOLIO_DATA.skills.map(s => (
              <div key={s.category}>
                <span className="text-white font-semibold font-mono">[{s.category}]:</span>{' '}
                <span className="text-gray-300">{s.skills.map(x => x.name).join(' • ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'esports':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-acid-lime font-bold">COMPETITIVE ESFORTS & COMMUNITY DOSSIER:</p>
            <p className="text-gray-300">• BGMI competitive gaming since 2018 (competitive circuits from 2020).</p>
            <p className="text-gray-300">• Owner & Team Leader: <span className="text-white font-semibold">XTREME PHOENIX</span>.</p>
            <p className="text-gray-300">• Founder: <span className="text-white font-semibold">AFTER HOURS Collegiate Esports Club</span> at NMAMIT Nitte.</p>
            <p className="text-acid-lime font-mono">• Achievements: LAN Tournament Runner-up, Champions League Runner-up.</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-acid-lime font-bold">COMMUNICATION ENDPOINTS:</p>
            <p className="text-gray-300">Email: <span className="text-white font-mono">{PORTFOLIO_DATA.socials.email}</span></p>
            <p className="text-gray-300">GitHub: <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noreferrer" className="text-acid-lime underline">{PORTFOLIO_DATA.socials.github}</a></p>
            <p className="text-gray-300">Institution: <span className="text-white">{PORTFOLIO_DATA.personal.institution}</span></p>
            <p className="text-gray-400 mt-1">Scroll down to the footer to use the instant mailer interface.</p>
          </div>
        );
        break;

      case 'date':
        output = (
          <div className="text-xs text-acid-lime font-mono">
            CURRENT TIMESTAMP: {new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST (India)
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-xs text-red-400">
            command not found: &apos;{trimmed}&apos;. Type <span className="text-acid-lime font-bold underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for available commands.
          </p>
        );
    }

    setHistory(prev => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: trimmed,
        output,
        time,
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/75 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#0c0c0c] border-2 border-acid-lime shadow-brutalist-lime-lg text-white font-mono flex flex-col h-[520px] max-h-[90vh]">
        
        {/* Terminal Header Bar */}
        <div className="bg-ink border-b border-acid-lime/40 px-3 py-2 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-acid-lime" />
            <span className="text-xs font-bold tracking-wider text-acid-lime">ARSH.CLI // TERMINAL_SESSION</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-400 hidden sm:inline">PRESS ESC OR &apos;~&apos; TO EXIT</span>
            <button
              onClick={onClose}
              className="p-1 hover:bg-acid-lime hover:text-ink text-gray-300 transition-colors"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="bg-[#141414] border-b border-white/10 px-3 py-1.5 flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-gray-400 shrink-0 font-bold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-acid-lime" /> RUN:
          </span>
          {['about', 'projects', 'esports', 'skills', 'contact', 'clear'].map(cmd => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 border border-white/20 bg-white/5 hover:bg-acid-lime hover:text-ink hover:border-acid-lime transition-all shrink-0 uppercase tracking-wider text-[10px]"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Console Log Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs scrollbar-thin">
          {history.map(item => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-ink-muted">
                <span className="text-acid-lime font-bold">arsh@nmamit:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
                <span className="text-[10px] text-gray-500 ml-auto">{item.time}</span>
              </div>
              <div className="pl-4 border-l border-white/10 py-1">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Line */}
        <div className="bg-ink border-t border-acid-lime/40 p-2 flex items-center gap-2">
          <span className="text-acid-lime font-bold text-xs pl-2 shrink-0">arsh@nmamit:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-gray-600"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="px-2 py-1 bg-acid-lime text-ink font-bold text-xs flex items-center gap-1 hover:bg-white transition-colors"
          >
            EXEC <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
