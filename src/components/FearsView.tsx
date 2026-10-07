import React, { useState } from 'react';
import { FEARS_DATA, FearItem } from '../data/fears';
import { soundManager } from '../audio/soundGenerator';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const FearsView: React.FC = () => {
  const [selectedFear, setSelectedFear] = useState<FearItem>(FEARS_DATA[0]);

  const handleSelect = (fear: FearItem) => {
    soundManager.playChime(330, 0.08);
    setSelectedFear(fear);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-water font-mono block mb-1">
          Quiet Horizons
        </span>
        <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
          Things That Feel Bigger Than They Should
        </h2>
        <p className="text-xs text-paper-muted mt-1 leading-relaxed">
          Symbolic representations of things that trigger racing pulses. Observed without judgment.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto pb-2 space-x-2 scrollbar-none mb-4">
        {FEARS_DATA.map((fear) => {
          const isSelected = selectedFear.id === fear.id;
          return (
            <button
              key={fear.id}
              onClick={() => handleSelect(fear)}
              className={`px-3.5 py-2 rounded-lg text-xs font-serif whitespace-nowrap border transition-all duration-300 ${
                isSelected
                  ? 'border-accent bg-dark-elevated text-paper-cream shadow-sm'
                  : 'border-white/10 bg-dark-surface text-paper-muted hover:border-white/20'
              }`}
            >
              {fear.name}
            </button>
          );
        })}
      </div>

      {/* Symbolic Atmosphere Scene */}
      <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-[#151410] to-[#0D0E0D] shadow-xl space-y-4">
        {/* Visual Metaphor representation */}
        <div className="h-36 sm:h-44 w-full rounded-xl bg-dark border border-white/10 overflow-hidden relative flex items-center justify-center p-4">
          {/* Subtle Depth Backdrops */}
          {selectedFear.id === 'heights' && (
            <div className="absolute inset-0 bg-gradient-to-b from-sky-950/40 via-dark to-dark flex flex-col justify-between p-4">
              <div className="text-[10px] font-mono text-paper-muted/40 text-right">Terrace Railing</div>
              <div className="flex justify-around items-end h-16 opacity-30">
                <div className="w-1.5 h-12 bg-amber-200/30 blur-[1px]" />
                <div className="w-1.5 h-8 bg-amber-200/20 blur-[1px]" />
                <div className="w-1.5 h-14 bg-amber-200/40 blur-[1px]" />
                <div className="w-1.5 h-6 bg-amber-200/20 blur-[1px]" />
              </div>
              <div className="border-t-2 border-white/20 pt-1 text-[11px] text-paper-cream/70 font-serif">
                Solid balcony floor under your feet. The railings hold.
              </div>
            </div>
          )}

          {selectedFear.id === 'deep-water' && (
            <div className="absolute inset-0 bg-gradient-to-b from-teal-950/30 via-water-deep/70 to-dark flex flex-col justify-center items-center">
              <div className="w-32 h-32 rounded-full border border-water/20 animate-ping opacity-20" />
              <div className="absolute text-center px-4">
                <div className="w-2.5 h-2.5 rounded-full bg-water-surface mx-auto mb-2 opacity-60" />
                <span className="text-xs font-serif text-water-surface tracking-widest italic">
                  Calm, still surface. No currents pulling you down.
                </span>
              </div>
            </div>
          )}

          {selectedFear.id === 'ghosts' && (
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-amber-950/20 to-dark flex items-center justify-center">
              <div className="w-16 h-28 rounded-t-full border border-amber-500/20 bg-amber-900/10 flex items-center justify-center shadow-candle">
                <div className="w-2 h-2 rounded-full bg-amber-300 animate-pulse shadow-candle" />
              </div>
              <div className="absolute bottom-3 text-center text-[11px] font-serif text-paper-muted/70">
                A warm light stays on. The hallway is peaceful.
              </div>
            </div>
          )}

          {selectedFear.id === 'being-loved' && (
            <div className="absolute inset-0 flex items-center justify-center p-6 bg-dark">
              <div className="w-32 h-24 border border-accent/30 rounded flex items-center justify-center relative overflow-hidden bg-accent/5">
                <div className="absolute left-1/3 top-0 bottom-0 w-px bg-accent/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
                <span className="text-xs font-serif italic text-paper-cream">Door ajar</span>
              </div>
            </div>
          )}

          {selectedFear.id === 'losing-control' && (
            <div className="absolute inset-0 flex items-center justify-center bg-dark">
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent relative">
                <div className="absolute -top-1 left-1/4 w-2 h-2 rounded-full bg-accent animate-pulse" />
                <div className="absolute -top-1 right-1/4 w-2 h-2 rounded-full bg-paper-cream" />
              </div>
              <span className="absolute bottom-3 text-[11px] font-serif text-paper-muted/80">
                An unbroken thread between two quiet points.
              </span>
            </div>
          )}

          {selectedFear.id === 'feeling-dismissed' && (
            <div className="absolute inset-0 flex items-center justify-center bg-dark">
              <div className="p-3 rounded-full bg-accent/10 border border-accent/30 animate-pulse">
                <Sparkles size={24} className="text-accent" />
              </div>
              <span className="absolute bottom-3 text-[11px] font-serif text-paper-muted/80">
                Cupped hands shielding the flame.
              </span>
            </div>
          )}
        </div>

        {/* Reassurance text */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center space-x-1.5 text-accent text-xs font-serif">
            <ShieldCheck size={14} />
            <span className="uppercase tracking-wider font-mono text-[10px]">What is true</span>
          </div>
          <p className="font-serif italic text-base text-paper-cream leading-relaxed">
            {selectedFear.reassurance}
          </p>
          <div className="p-3 rounded-lg bg-dark/60 border-l-2 border-accent text-xs font-sans text-paper-muted leading-relaxed">
            <span className="font-mono text-[10px] uppercase text-accent/80 block mb-0.5">Quiet anchor:</span>
            {selectedFear.samirNote}
          </div>
        </div>
      </div>
    </div>
  );
};
