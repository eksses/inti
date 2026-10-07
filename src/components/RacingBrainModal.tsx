import React, { useState, useEffect } from 'react';
import { soundManager } from '../audio/soundGenerator';
import { BookOpen, Sparkles, X } from 'lucide-react';

interface RacingBrainModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSettleCalm?: () => void;
}

const THOUGHT_FRAGMENTS = [
  "wait…",
  "but what if…",
  "then…",
  "okay but…",
  "what about…",
  "hold on…",
  "did I remember to check…",
  "they probably meant something else…",
  "what if tomorrow…",
  "I should research that right now…",
  "wait, hear me out…",
  "if scenario A happens, then scenario D…",
];

export const RacingBrainModal: React.FC<RacingBrainModalProps> = ({
  isOpen,
  onClose,
  onSettleCalm,
}) => {
  const [activeThoughts, setActiveThoughts] = useState<
    { id: number; text: string; top: number; left: number; rotation: number; delay: number }[]
  >([]);
  const [isCalmed, setIsCalmed] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) {
      setActiveThoughts([]);
      setIsCalmed(false);
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      if (index >= THOUGHT_FRAGMENTS.length) {
        clearInterval(interval);
        return;
      }

      const thought = THOUGHT_FRAGMENTS[index];
      // Subtle randomized coordinates that stay neatly inside mobile view bounds
      const randomTop = 15 + (index * 6) % 55;
      const randomLeft = 10 + (index * 13) % 65;
      const randomRot = (Math.random() - 0.5) * 8;

      setActiveThoughts((prev) => [
        ...prev,
        {
          id: Date.now() + index,
          text: thought,
          top: randomTop,
          left: randomLeft,
          rotation: randomRot,
          delay: index * 0.1,
        },
      ]);
      index++;
    }, 450); // Steady gentle escalation

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleSlowDown = () => {
    soundManager.playChime(392, 0.12);
    setIsCalmed(true);
    if (onSettleCalm) onSettleCalm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-700">
      <div
        className={`relative w-full max-w-sm rounded-2xl border transition-all duration-700 overflow-hidden shadow-2xl ${
          isCalmed
            ? 'bg-[#181612] border-accent/40 shadow-lamp'
            : 'bg-[#121413] border-white/10'
        }`}
        style={{ minHeight: '440px' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 rounded-full text-paper-muted hover:text-paper hover:bg-white/10 transition-colors"
          aria-label="Close notebook"
        >
          <X size={18} />
        </button>

        {/* Header Ribbon */}
        <div className="pt-5 px-6 pb-2 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen size={16} className={isCalmed ? 'text-accent' : 'text-paper-muted'} />
            <span className="text-xs uppercase tracking-widest font-sans text-paper-muted">
              {isCalmed ? "The Quiet Room" : "Her Open Notebook"}
            </span>
          </div>
          <span className="text-[11px] font-mono text-paper-muted/60">2:41 AM</span>
        </div>

        {/* Dynamic Thought Canvas / Calmed Scene */}
        <div className="relative h-80 px-6 py-4 flex flex-col justify-center items-center overflow-hidden">
          {!isCalmed ? (
            <>
              {/* Scattered Racing Thought Fragments */}
              <div className="absolute inset-0 pointer-events-none">
                {activeThoughts.map((t) => (
                  <div
                    key={t.id}
                    className="absolute text-xs sm:text-sm font-handwriting px-3 py-1.5 rounded-md bg-paper-cream/10 border border-white/10 text-paper-cream shadow-sm backdrop-blur-[1px] transition-all duration-500 animate-fadeIn"
                    style={{
                      top: `${t.top}%`,
                      left: `${t.left}%`,
                      transform: `rotate(${t.rotation}deg)`,
                      opacity: 0.9,
                    }}
                  >
                    {t.text}
                  </div>
                ))}
              </div>

              {/* Central Trigger Action */}
              <div className="relative z-20 mt-auto text-center w-full pb-2">
                <button
                  onClick={handleSlowDown}
                  className="w-full py-3 px-5 rounded-xl bg-accent/20 hover:bg-accent/30 active:scale-98 border border-accent/40 text-paper-cream font-serif tracking-wider text-sm shadow-md transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Sparkles size={15} className="text-accent" />
                  <span>Slow down.</span>
                </button>
                <p className="text-[11px] text-paper-muted/70 mt-2 font-sans italic">
                  Tap to bring the room to stillness
                </p>
              </div>
            </>
          ) : (
            /* Calmed State */
            <div className="text-center px-4 py-6 transition-all duration-1000 ease-out animate-fadeIn">
              {/* Warm Soft Desk Lamp Aura */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/15 flex items-center justify-center border border-accent/30 shadow-lamp animate-pulse-subtle">
                <div className="w-6 h-6 rounded-full bg-accent/40" />
              </div>

              <h4 className="font-serif italic text-lg sm:text-xl text-paper-cream tracking-wide leading-relaxed">
                “Not every thought needs an answer tonight.”
              </h4>

              <div className="my-4 h-px w-16 mx-auto bg-accent/30" />

              <p className="text-xs sm:text-sm text-paper-muted leading-relaxed font-sans">
                The notebook is closed. The scenarios can wait. The bed is warm, the night is quiet, and nobody is keeping score.
              </p>

              <button
                onClick={onClose}
                className="mt-6 px-6 py-2 rounded-lg bg-dark-surface border border-accent/20 text-paper text-xs hover:border-accent/40 transition-colors"
              >
                Close notebook
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
