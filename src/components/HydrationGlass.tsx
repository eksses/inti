import React, { useState } from 'react';
import { soundManager } from '../audio/soundGenerator';
import { Droplet } from 'lucide-react';

interface HydrationGlassProps {
  onTap?: () => void;
  compact?: boolean;
}

export const HydrationGlass: React.FC<HydrationGlassProps> = ({ onTap, compact = false }) => {
  const [fillLevel, setFillLevel] = useState<number>(65); // starts partially filled
  const [isPouring, setIsPouring] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [sipCount, setSipCount] = useState<number>(0);

  const handleTouch = () => {
    soundManager.playWaterPour();
    setIsPouring(true);
    setShowMessage(true);

    // Gently refill or simulate fresh cold water
    setFillLevel((prev) => (prev >= 85 ? 40 : prev + 25));
    setSipCount((prev) => prev + 1);

    if (onTap) onTap();

    setTimeout(() => {
      setIsPouring(false);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Interactive Glass Container */}
      <div
        onClick={handleTouch}
        className={`relative cursor-pointer transition-transform duration-300 active:scale-95 group ${
          compact ? 'w-20 h-28' : 'w-28 h-36'
        }`}
        title="Tap to refresh the water glass"
      >
        {/* Shadow on wooden desk */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-3 bg-black/40 rounded-full blur-sm" />

        {/* Outer Glass Body */}
        <div className="relative w-full h-full rounded-b-2xl rounded-t-sm border border-white/20 bg-gradient-to-b from-white/10 via-white/5 to-white/15 backdrop-blur-[2px] overflow-hidden shadow-inner">
          {/* Vertical Glass Highlights */}
          <div className="absolute left-2 top-0 bottom-2 w-1.5 bg-gradient-to-b from-white/40 via-white/15 to-transparent rounded-full" />
          <div className="absolute right-2 top-2 bottom-3 w-0.5 bg-white/25 rounded-full" />

          {/* Water Fill Layer */}
          <div
            className="absolute bottom-0 left-0 right-0 transition-all duration-700 ease-out overflow-hidden"
            style={{
              height: `${fillLevel}%`,
              background: 'linear-gradient(180deg, rgba(162, 194, 197, 0.45) 0%, rgba(125, 158, 161, 0.75) 100%)',
            }}
          >
            {/* Water Surface Wave line */}
            <div
              className={`absolute top-0 left-0 right-0 h-1.5 bg-white/40 ${
                isPouring ? 'animate-pulse' : ''
              }`}
            />
            {/* Rising Bubbles */}
            <div className="absolute bottom-1 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-bounce" />
            <div className="absolute bottom-3 right-1/4 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.3s]" />
          </div>

          {/* Rim light */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 rounded-t-sm" />

          {/* Condensation droplet */}
          <div className="absolute top-1/2 left-3 w-1 h-1.5 bg-white/40 rounded-full opacity-60" />
        </div>

        {/* Gentle touch ripple indicator */}
        <div className="absolute -top-1 -right-1 text-water opacity-70 group-hover:opacity-100 transition-opacity">
          <Droplet size={14} className={isPouring ? 'animate-ping' : ''} />
        </div>
      </div>

      {/* Gentle Affectionate Note */}
      {showMessage && (
        <div className="mt-3 text-center transition-all duration-500 animate-fadeIn">
          <p className="font-serif italic text-paper-cream text-sm tracking-wide">
            “Drink some water, Inti.”
          </p>
          <p className="text-[11px] text-paper-muted/80 mt-0.5 font-sans">
            {sipCount === 1
              ? 'Just a quiet sip. No ceremony.'
              : sipCount % 2 === 0
              ? 'Cold, clean, right by the desk.'
              : 'Hydration before another rabbit hole.'}
          </p>
        </div>
      )}
    </div>
  );
};
