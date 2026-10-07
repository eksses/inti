import React, { useState } from 'react';
import { ShaplaFlower, PadmaFlower } from './FlowerGraphics';
import { soundManager } from '../audio/soundGenerator';
import { PROFILE_DATA } from '../data/profile';
import { Droplets } from 'lucide-react';

export const FlowersPondView: React.FC = () => {
  const [activeFlower, setActiveFlower] = useState<'shapla' | 'padma'>('shapla');
  const [ripples, setRipples] = useState<number[]>([]);

  const handleFlowerClick = (flower: 'shapla' | 'padma') => {
    soundManager.playWaterPour();
    setActiveFlower(flower);
    setRipples((prev) => [...prev, Date.now()]);
    setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 1500);
  };

  const currentFlowerData =
    activeFlower === 'shapla'
      ? PROFILE_DATA.favoriteFlowers[0]
      : PROFILE_DATA.favoriteFlowers[1];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-water font-mono block mb-1">
          Water Garden
        </span>
        <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
          Shapla & Padma
        </h2>
        <p className="text-xs text-paper-muted mt-1 leading-relaxed">
          Her favorite blooms. Native waters, floating calmly above the deep quiet.
        </p>
      </div>

      {/* Flower Selector Toggle */}
      <div className="flex rounded-xl bg-dark-surface p-1 border border-white/10 mb-6">
        <button
          onClick={() => handleFlowerClick('shapla')}
          className={`flex-1 py-2 rounded-lg text-xs font-serif transition-all duration-300 ${
            activeFlower === 'shapla'
              ? 'bg-dark-elevated text-paper-cream shadow-sm border border-accent/40'
              : 'text-paper-muted hover:text-paper'
          }`}
        >
          শাপলা • White Shapla
        </button>
        <button
          onClick={() => handleFlowerClick('padma')}
          className={`flex-1 py-2 rounded-lg text-xs font-serif transition-all duration-300 ${
            activeFlower === 'padma'
              ? 'bg-dark-elevated text-paper-cream shadow-sm border border-accent/40'
              : 'text-paper-muted hover:text-paper'
          }`}
        >
          পদ্ম • Rose Padma
        </button>
      </div>

      {/* Visual Pond Environment */}
      <div className="relative rounded-2xl border border-water/30 bg-gradient-to-b from-[#112022] via-[#0B1517] to-[#0A0D0E] p-6 sm:p-8 overflow-hidden shadow-2xl flex flex-col items-center justify-center">
        {/* Animated Water Ripple Rings */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-water/10 animate-ping opacity-25" />
          {ripples.map((id) => (
            <div
              key={id}
              className="absolute w-44 h-44 rounded-full border border-water-surface/30 animate-ping"
            />
          ))}
        </div>

        {/* Centerpiece Flower Display */}
        <div
          onClick={() => handleFlowerClick(activeFlower)}
          className="relative z-10 cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-500 my-4"
        >
          {activeFlower === 'shapla' ? (
            <ShaplaFlower size={140} />
          ) : (
            <PadmaFlower size={140} />
          )}
        </div>

        {/* Flower Description Card */}
        <div className="relative z-10 text-center max-w-xs mt-4">
          <div className="flex items-center justify-center space-x-2">
            <h3 className="font-serif text-xl text-paper-cream">
              {currentFlowerData.name}
            </h3>
            <span className="font-serif text-base text-accent">
              ({currentFlowerData.bengaliName})
            </span>
          </div>

          <p className="text-xs sm:text-sm text-paper-muted mt-2 leading-relaxed font-sans">
            {currentFlowerData.description}
          </p>

          <div className="mt-4 inline-flex items-center space-x-1.5 text-[11px] font-mono text-water-surface/80 bg-water-deep/40 px-3 py-1 rounded-full border border-water/20">
            <Droplets size={12} />
            <span>Tap to send a gentle water ripple</span>
          </div>
        </div>
      </div>
    </div>
  );
};
