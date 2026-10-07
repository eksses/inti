import React, { useState } from 'react';
import { FINAL_LETTER } from '../data/letter';
import { soundManager } from '../audio/soundGenerator';
import { ShaplaFlower } from './FlowerGraphics';
import { Feather, Moon } from 'lucide-react';

interface FinalLetterViewProps {
  onReachStillness?: () => void;
}

export const FinalLetterView: React.FC<FinalLetterViewProps> = ({ onReachStillness }) => {
  const [isStillnessActive, setIsStillnessActive] = useState<boolean>(false);

  const handleEnterStillness = () => {
    soundManager.playChime(392, 0.08);
    setIsStillnessActive(true);
    if (onReachStillness) onReachStillness();
  };

  return (
    <div className="w-full">
      {!isStillnessActive ? (
        <div className="space-y-6 animate-fadeIn">
          {/* Header */}
          <div>
            <span className="text-[11px] uppercase tracking-widest text-accent font-mono block mb-1">
              The Quietest Corner
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
              {FINAL_LETTER.title}
            </h2>
            <p className="text-xs text-paper-muted mt-1 leading-relaxed">
              {FINAL_LETTER.subtitle}
            </p>
          </div>

          {/* Letter on Textured Paper */}
          <div className="p-6 sm:p-8 rounded-2xl paper-texture text-dark shadow-2xl border border-paper-muted/60 relative overflow-hidden">
            {/* Subtle feather watermark */}
            <div className="absolute top-4 right-4 text-dark/10 pointer-events-none">
              <Feather size={64} />
            </div>

            {/* Salutation */}
            <div className="mb-4">
              <h3 className="font-handwriting text-2xl text-dark">
                {FINAL_LETTER.salutation}
              </h3>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-4 font-serif text-sm sm:text-base text-dark/90 leading-relaxed selectable-text">
              {FINAL_LETTER.paragraphs.map((p, idx) => (
                <p key={idx} className="indent-4">
                  {p}
                </p>
              ))}
            </div>

            {/* Signoff */}
            <div className="mt-8 pt-4 border-t border-dark/15 flex flex-col items-end">
              <span className="text-xs font-serif italic text-dark/70">
                {FINAL_LETTER.signoff}
              </span>
              <span className="font-handwriting text-2xl text-dark mt-1">
                {FINAL_LETTER.signature}
              </span>
            </div>
          </div>

          {/* Action to enter final stillness */}
          <div className="pt-2 text-center">
            <button
              onClick={handleEnterStillness}
              className="px-6 py-3 rounded-xl bg-dark-surface border border-accent/30 text-paper-cream text-xs font-serif tracking-widest hover:border-accent/60 transition-all active:scale-98 shadow-sm flex items-center justify-center space-x-2 mx-auto"
            >
              <Moon size={14} className="text-moon" />
              <span>Let the room rest</span>
            </button>
            <p className="text-[11px] text-paper-muted/60 mt-2 font-sans italic">
              Dims the lamp and settles the room
            </p>
          </div>
        </div>
      ) : (
        /* Final Scene: The Stillness */
        <div className="py-12 sm:py-16 px-4 text-center space-y-8 animate-fadeIn">
          {/* Dimmed Moon & Resting Flower */}
          <div className="flex flex-col items-center space-x-0 space-y-4">
            <div className="w-12 h-12 rounded-full bg-moon/10 flex items-center justify-center border border-moon/20 shadow-moon">
              <Moon size={22} className="text-moon/90" />
            </div>

            <div className="opacity-75">
              <ShaplaFlower size={100} />
            </div>
          </div>

          {/* The Poetic Epilogue */}
          <div className="space-y-4 max-w-xs mx-auto">
            {FINAL_LETTER.stillnessEpilogue.map((line, idx) => (
              <p
                key={idx}
                className="font-serif italic text-base sm:text-lg text-paper-cream/90 leading-relaxed"
              >
                {line}
              </p>
            ))}

            <div className="py-2">
              <div className="h-px w-10 mx-auto bg-accent/30" />
            </div>

            <p className="font-serif text-sm tracking-widest text-accent uppercase">
              {FINAL_LETTER.quietEnding}
            </p>
          </div>

          <button
            onClick={() => setIsStillnessActive(false)}
            className="text-[11px] font-mono text-paper-muted/50 hover:text-paper-muted transition-colors pt-4"
          >
            ← return to letter
          </button>
        </div>
      )}
    </div>
  );
};
