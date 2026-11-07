import React, { useEffect, useState } from 'react';

export const BrutalistCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, [data-cursor]');
      if (interactive) {
        setIsPointer(true);
        const customText = interactive.getAttribute('data-cursor');
        setCursorText(customText || '');
      } else {
        setIsPointer(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out select-none"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        left: 0,
        top: 0,
      }}
    >
      {/* Central Crosshair Dot */}
      <div
        className={`relative -left-1/2 -top-1/2 transition-all duration-150 flex items-center justify-center ${
          isPointer
            ? 'w-10 h-10 rounded-none bg-acid-lime text-ink border-2 border-ink shadow-brutalist'
            : isMouseDown
            ? 'w-6 h-6 rounded-none bg-ink text-background border border-acid-lime'
            : 'w-4 h-4 rounded-none bg-ink text-acid-lime border border-background'
        }`}
      >
        {isPointer && cursorText ? (
          <span className="font-mono text-[9px] font-bold tracking-tighter uppercase px-1">
            {cursorText}
          </span>
        ) : isPointer ? (
          <span className="font-mono text-[10px] font-bold">↗</span>
        ) : (
          <span className="w-1 h-1 bg-acid-lime block"></span>
        )}
      </div>

      {/* Coordinate Readout */}
      {!isPointer && (
        <div className="absolute left-3 top-3 bg-ink text-background font-mono text-[9px] px-1 py-0.5 border border-acid-lime whitespace-nowrap opacity-80">
          X:{Math.round(pos.x)} Y:{Math.round(pos.y)}
        </div>
      )}
    </div>
  );
};
