import React, { useState, useEffect } from 'react';
import { ShaplaFlower } from './FlowerGraphics';
import { soundManager } from '../audio/soundGenerator';
import { Moon, ArrowRight } from 'lucide-react';

interface IntroScreenProps {
  onEnter: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingText, setLoadingText] = useState<string>("watering the little garden…");

  useEffect(() => {
    // Ultra-short atmospheric entrance (under 1.2s total)
    const t1 = setTimeout(() => {
      setLoadingText("lighting the desk lamp…");
    }, 600);

    const t2 = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleEnterWorld = () => {
    soundManager.playChime(440, 0.1);
    onEnter();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between items-center bg-[#090B0A] text-paper px-6 py-12 overflow-hidden select-none">
      {/* Background Subtle Moonlight Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-moon/5 blur-3xl pointer-events-none" />

      {/* Top: Discreet Moon Header */}
      <div className="relative z-10 flex flex-col items-center space-y-2 opacity-80 pt-4">
        <div className="w-8 h-8 rounded-full bg-moon/10 border border-moon/20 flex items-center justify-center shadow-moon">
          <Moon size={15} className="text-moon" />
        </div>
        <span className="text-[10px] font-mono tracking-widest uppercase text-paper-muted/60">
          Quiet Room • Midnight
        </span>
      </div>

      {/* Centerpiece: Floating Shapla Flower */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto">
        <div className="animate-float-slow transform transition-all duration-1000">
          <ShaplaFlower size={130} />
        </div>

        {/* Loading text vs Ready title */}
        {isLoading ? (
          <div className="mt-6 text-center animate-fadeIn">
            <p className="text-xs font-serif italic text-paper-muted tracking-wider">
              {loadingText}
            </p>
          </div>
        ) : (
          <div className="mt-8 text-center space-y-2.5 animate-fadeIn">
            <h1 className="text-2xl sm:text-3xl font-serif text-paper-cream tracking-wide">
              a little place for you
            </h1>
            <p className="text-xs sm:text-sm font-serif italic text-paper-muted/80 max-w-xs mx-auto leading-relaxed">
              made with attention, not perfection.
            </p>
          </div>
        )}
      </div>

      {/* Bottom: Enter Action Button */}
      {!isLoading && (
        <div className="relative z-10 w-full max-w-xs animate-fadeIn pb-4">
          <button
            onClick={handleEnterWorld}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#1E1B15] to-[#25221B] hover:from-[#2A261E] hover:to-[#302B21] border border-accent/40 text-paper-cream font-serif tracking-widest text-sm shadow-lamp active:scale-98 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>enter</span>
            <ArrowRight size={15} className="text-accent group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-[10px] font-mono text-center text-paper-muted/40 mt-3">
            built for Inti by Samir
          </p>
        </div>
      )}
    </div>
  );
};
