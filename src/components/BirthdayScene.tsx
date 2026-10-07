import React, { useState } from 'react';
import { soundManager } from '../audio/soundGenerator';
import { ShaplaFlower, PadmaFlower } from './FlowerGraphics';
import { Sparkles, Moon, RefreshCw } from 'lucide-react';

export const BirthdayScene: React.FC = () => {
  const [isBlownOut, setIsBlownOut] = useState<boolean>(false);
  const [showSecretCard, setShowSecretCard] = useState<boolean>(false);

  const handleCandleTap = () => {
    if (!isBlownOut) {
      soundManager.playBlowCandle();
      setIsBlownOut(true);
      setTimeout(() => {
        soundManager.playChime(523.25, 0.1);
        setShowSecretCard(true);
      }, 700);
    }
  };

  const handleRelight = () => {
    setIsBlownOut(false);
    setShowSecretCard(false);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-accent font-mono block mb-1">
          September 26
        </span>
        <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
          A Quiet Birthday
        </h2>
        <p className="text-xs text-paper-muted mt-1 leading-relaxed">
          No confetti, no loudspeaker. Just a candle in a calm room under the moon.
        </p>
      </div>

      {/* Atmospheric Night Table Environment */}
      <div
        className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-1000 overflow-hidden shadow-2xl ${
          isBlownOut
            ? 'bg-gradient-to-b from-[#1C1814] to-[#12110E] border-accent/50 shadow-lamp'
            : 'bg-gradient-to-b from-[#141615] to-[#0A0D0C] border-white/10'
        }`}
      >
        {/* Soft Moon in the Corner */}
        <div className="absolute top-4 right-4 flex items-center space-x-1.5 opacity-80">
          <Moon
            size={20}
            className={`transition-colors duration-1000 ${
              isBlownOut ? 'text-amber-200' : 'text-moon'
            }`}
          />
          <span className="text-[10px] font-mono text-paper-muted/60">Sep 26</span>
        </div>

        {/* Floating petals framing the scene */}
        <div className="absolute -left-4 -bottom-4 opacity-40 pointer-events-none">
          <ShaplaFlower size={90} />
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-30 pointer-events-none">
          <PadmaFlower size={90} />
        </div>

        {/* Center: Delicate Cake & Candle */}
        <div className="py-6 flex flex-col items-center justify-center relative z-10">
          <div
            onClick={handleCandleTap}
            className="cursor-pointer group relative flex flex-col items-center"
            title={isBlownOut ? "Candle extinguished" : "Tap flame to make a wish"}
          >
            {/* Flame */}
            {!isBlownOut ? (
              <div className="relative flex flex-col items-center">
                {/* Candle Flame Aura Glow */}
                <div className="w-12 h-12 -mb-8 rounded-full bg-amber-400/25 blur-md animate-pulse shadow-candle" />
                {/* Flame Teardrop */}
                <div className="w-4 h-7 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 animate-float-slow shadow-lg flex items-center justify-center">
                  <div className="w-1.5 h-3 rounded-full bg-white opacity-80" />
                </div>
                {/* Candle Wick */}
                <div className="w-0.5 h-2 bg-stone-700" />
              </div>
            ) : (
              /* Soft Smoke Trace */
              <div className="h-9 flex flex-col items-center justify-end">
                <div className="w-1 h-3 rounded-full bg-white/20 blur-[1px] animate-pulse -translate-y-1" />
                <div className="w-0.5 h-2 bg-stone-700" />
              </div>
            )}

            {/* Candle Stem */}
            <div className="w-2.5 h-10 bg-gradient-to-r from-[#EDE4D5] via-[#FAF6F0] to-[#DDD2C0] rounded-sm shadow-sm" />

            {/* Tiny Artisanal Ceramic Cake */}
            <div className="w-24 h-12 rounded-t-xl bg-gradient-to-b from-[#2E2822] to-[#1E1914] border-t border-x border-[#8A7558]/40 shadow-xl flex items-center justify-center relative overflow-hidden">
              {/* Cream dripping rim */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-paper-cream/20 rounded-b-md" />
              <span className="text-[10px] font-serif text-accent tracking-widest uppercase opacity-75">
                Intie
              </span>
            </div>

            {/* Ceramic plate coaster */}
            <div className="w-32 h-3 rounded-full bg-[#1A1815] border border-white/10 shadow-lg -mt-1" />
          </div>

          {/* Candle Action Hint */}
          <div className="mt-4 text-center">
            {!isBlownOut ? (
              <p className="text-xs font-serif italic text-paper-muted/80 tracking-wide animate-pulse">
                Tap the flame to blow out the candle
              </p>
            ) : (
              <button
                onClick={handleRelight}
                className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-accent/70 hover:text-accent transition-colors mt-1"
              >
                <RefreshCw size={11} />
                <span>Light candle again</span>
              </button>
            )}
          </div>
        </div>

        {/* Revealed Handwritten Birthday Card */}
        {showSecretCard && (
          <div className="mt-4 p-5 rounded-xl paper-texture text-dark shadow-2xl border border-paper-muted/60 transition-all duration-700 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-dark/15 pb-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-dark/60">
                September 26, 2007
              </span>
              <Sparkles size={14} className="text-accent" />
            </div>

            <div className="py-3">
              <h3 className="font-serif italic text-lg sm:text-xl text-dark leading-snug">
                “Another year of becoming more yourself.”
              </h3>
              <p className="text-xs sm:text-sm text-dark/85 mt-2 leading-relaxed font-sans selectable-text">
                Not a princess. Not a polished version of what anyone else wants. Just your sharp, curious, rabbit-hole-hunting, softly guarded self. That is who is celebrated tonight.
              </p>
            </div>

            <div className="pt-2 border-t border-dark/10 text-right">
              <span className="font-handwriting text-base text-dark/80">
                — Samir
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
