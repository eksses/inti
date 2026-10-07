import React, { useState } from 'react';
import { ShaplaFlower, PadmaFlower } from './FlowerGraphics';
import { HydrationGlass } from './HydrationGlass';
import { soundManager } from '../audio/soundGenerator';
import { Lamp, BookOpen } from 'lucide-react';

interface MainRoomProps {
  lampLevel: 'soft' | 'warm' | 'embers';
  onToggleLamp: () => void;
  onOpenNotebook: () => void;
  onNavigateSection: (section: string) => void;
}

export const MainRoom: React.FC<MainRoomProps> = ({
  lampLevel,
  onToggleLamp,
  onOpenNotebook,
  onNavigateSection,
}) => {
  const [moonNote, setMoonNote] = useState<string | null>(null);
  const [flowerMessage, setFlowerMessage] = useState<string | null>(null);
  const [constellationActive, setConstellationActive] = useState<boolean>(false);

  const handleMoonTap = () => {
    soundManager.playChime(659.25, 0.08);
    setMoonNote((prev) =>
      prev
        ? null
        : "“The moon looks quiet tonight. It doesn't ask the dark to be any different than it is.”"
    );
  };

  const handleFlowerTap = (flowerName: string) => {
    soundManager.playWaterPour();
    setFlowerMessage(
      flowerName === 'shapla'
        ? "A floating Shapla: Still water, no rush."
        : "A rose Padma: Blooming quietly despite everything."
    );
    setTimeout(() => setFlowerMessage(null), 3500);
  };

  const handleConstellationTap = () => {
    soundManager.playChime(587.33, 0.08);
    setConstellationActive((prev) => !prev);
  };

  const getLampShadow = () => {
    if (lampLevel === 'warm') return 'shadow-[0_0_80px_25px_rgba(229,195,132,0.22)]';
    if (lampLevel === 'embers') return 'shadow-[0_0_40px_10px_rgba(184,120,70,0.15)]';
    return 'shadow-[0_0_60px_15px_rgba(216,210,191,0.12)]';
  };

  return (
    <div className="w-full space-y-6">
      {/* Visual Room Metaphor Canvas */}
      <div
        className={`relative w-full rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 p-5 sm:p-6 bg-[#0E100F] ${getLampShadow()}`}
      >
        {/* Night Window & Moon Backdrop */}
        <div className="relative rounded-xl border border-white/15 bg-gradient-to-b from-[#090C0F] via-[#0D1214] to-[#121A1A] p-4 sm:p-5 overflow-hidden mb-6 shadow-inner">
          {/* Subtle Constellation Stars */}
          <div
            onClick={handleConstellationTap}
            className="absolute inset-0 cursor-pointer"
            title="Tap stars to reveal constellation lines"
          >
            {/* Stars */}
            <div className="absolute top-4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-80" />
            <div className="absolute top-8 left-1/2 w-1.5 h-1.5 bg-amber-100 rounded-full opacity-90 shadow-sm" />
            <div className="absolute top-12 right-1/3 w-1 h-1 bg-white rounded-full opacity-70" />
            <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-white rounded-full opacity-85" />
            <div className="absolute top-16 left-12 w-1 h-1 bg-white rounded-full opacity-60" />

            {/* Constellation line connector */}
            {constellationActive && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <line x1="25%" y1="16" x2="50%" y2="32" stroke="#E5C384" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="50%" y1="32" x2="66%" y2="48" stroke="#E5C384" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="66%" y1="48" x2="85%" y2="24" stroke="#E5C384" strokeWidth="0.8" strokeDasharray="3 3" />
              </svg>
            )}
          </div>

          {/* Window Header Row: Moon and Tree Silhouette */}
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-moon/60">
                Outside the Window
              </span>
              <p className="text-xs font-serif italic text-paper-cream/80">
                A quiet garden under the night sky
              </p>
            </div>

            {/* The Tap-able Moon */}
            <div
              onClick={handleMoonTap}
              className="relative cursor-pointer p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all group"
              title="Tap moon for a hidden thought"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D8D2BF] via-[#F0EAD6] to-[#FFFDF7] shadow-moon flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B8B09A]/40 -ml-2 -mt-1" />
              </div>
            </div>
          </div>

          {/* Secret Moon Note */}
          {moonNote && (
            <div className="mt-3 p-3 rounded-lg bg-dark/80 border border-moon/20 text-xs font-serif italic text-paper-cream/90 animate-fadeIn">
              {moonNote}
            </div>
          )}

          {/* Constellation note */}
          {constellationActive && (
            <div className="mt-2 text-[11px] font-sans text-accent/80 text-center animate-fadeIn">
              ✧ Orion’s quiet hours. Two thoughts connected across midnight.
            </div>
          )}
        </div>

        {/* The Desk Surface Metaphor */}
        <div className="rounded-xl border border-white/10 bg-[#161410] p-4 sm:p-5 relative shadow-xl">
          {/* Desk Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase font-mono tracking-widest text-accent">
                The Quiet Desk
              </span>
            </div>

            {/* Lamp Toggle Control */}
            <button
              onClick={onToggleLamp}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-dark/60 border border-accent/30 text-accent text-[11px] font-mono hover:bg-dark transition-colors active:scale-95"
              title="Cycle desk lamp warm levels"
            >
              <Lamp size={13} />
              <span className="capitalize">{lampLevel}</span>
            </button>
          </div>

          {/* Desk Interactive Items Grid */}
          <div className="grid grid-cols-2 gap-4 py-4">
            {/* 1. Open Notebook (Racing Brain) */}
            <div
              onClick={onOpenNotebook}
              className="p-3.5 rounded-xl border border-white/10 bg-dark-surface hover:border-accent/50 cursor-pointer transition-all duration-300 active:scale-98 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-accent">
                <BookOpen size={18} />
                <span className="text-[10px] font-mono uppercase bg-accent/15 px-1.5 py-0.5 rounded text-accent">
                  Spiral
                </span>
              </div>
              <div className="mt-3">
                <h4 className="font-serif text-sm text-paper-cream group-hover:text-accent transition-colors">
                  Open Notebook
                </h4>
                <p className="text-[11px] text-paper-muted mt-0.5 font-sans">
                  Racing thoughts & settling
                </p>
              </div>
            </div>

            {/* 2. Hydration Glass */}
            <div className="p-3.5 rounded-xl border border-white/10 bg-dark-surface flex flex-col items-center justify-center">
              <HydrationGlass compact={true} />
            </div>

            {/* 3. Stack of Books */}
            <div
              onClick={() => onNavigateSection('her')}
              className="p-3.5 rounded-xl border border-white/10 bg-dark-surface hover:border-accent/50 cursor-pointer transition-all duration-300 active:scale-98 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-accent-warm">
                <span className="text-base">📚</span>
                <span className="text-[10px] font-mono uppercase bg-white/5 px-1.5 py-0.5 rounded text-paper-muted">
                  6 Vol.
                </span>
              </div>
              <div className="mt-3">
                <h4 className="font-serif text-sm text-paper-cream group-hover:text-accent transition-colors">
                  Book Stack
                </h4>
                <p className="text-[11px] text-paper-muted mt-0.5 font-sans">
                  Things I Know About You
                </p>
              </div>
            </div>

            {/* 4. Weekly Study Schedule */}
            <div
              onClick={() => onNavigateSection('care')}
              className="p-3.5 rounded-xl border border-white/10 bg-dark-surface hover:border-accent/50 cursor-pointer transition-all duration-300 active:scale-98 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-botanical-muted">
                <span className="text-base">🗓️</span>
                <span className="text-[10px] font-mono uppercase bg-white/5 px-1.5 py-0.5 rounded text-accent">
                  Sun • Tue • Thu
                </span>
              </div>
              <div className="mt-3">
                <h4 className="font-serif text-sm text-paper-cream group-hover:text-accent transition-colors">
                  Weekly Routine
                </h4>
                <p className="text-[11px] text-paper-muted mt-0.5 font-sans">
                  Study days & field guide
                </p>
              </div>
            </div>
          </div>

          {/* Shallow Ceramic Pond with Shapla & Padma */}
          <div className="mt-2 pt-4 border-t border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-water-surface">
                Water Garden • Shapla & Padma
              </span>
              <span className="text-[10px] font-sans italic text-paper-muted/60">
                Tap flowers for gentle ripples
              </span>
            </div>

            <div className="rounded-xl border border-water/20 bg-gradient-to-r from-water-deep/60 via-dark to-water-deep/60 p-3 flex items-center justify-around shadow-inner">
              <div
                onClick={() => handleFlowerTap('shapla')}
                className="cursor-pointer transition-transform hover:scale-105 active:scale-95"
                title="Tap Shapla (White Water Lily)"
              >
                <ShaplaFlower size={72} />
                <span className="text-[10px] font-serif block text-center text-paper-cream/80 mt-1">
                  শাপলা (Shapla)
                </span>
              </div>

              <div className="h-12 w-px bg-white/10" />

              <div
                onClick={() => handleFlowerTap('padma')}
                className="cursor-pointer transition-transform hover:scale-105 active:scale-95"
                title="Tap Padma (Rose Lotus)"
              >
                <PadmaFlower size={72} />
                <span className="text-[10px] font-serif block text-center text-paper-cream/80 mt-1">
                  পদ্ম (Padma)
                </span>
              </div>
            </div>

            {flowerMessage && (
              <p className="text-[11px] font-serif italic text-center text-paper-cream mt-2 animate-fadeIn">
                {flowerMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
