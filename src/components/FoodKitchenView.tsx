import React, { useState } from 'react';
import { FOOD_DATA, FoodItem } from '../data/food';
import { soundManager } from '../audio/soundGenerator';
import { Flame, Ban, Soup, Sparkles, Check } from 'lucide-react';

export const FoodKitchenView: React.FC = () => {
  const [activeItem, setActiveItem] = useState<FoodItem>(FOOD_DATA[0]);

  const handleSelect = (item: FoodItem) => {
    soundManager.playPageFlip();
    setActiveItem(item);
  };

  const getVisual = (item: FoodItem) => {
    switch (item.iconType) {
      case 'ramen':
        return (
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Ceramic ramen bowl */}
            <div className="w-12 h-9 rounded-b-full bg-gradient-to-b from-[#8B3A3A] to-[#4A1F1F] border-2 border-[#D4AF37] shadow-md relative overflow-hidden flex items-center justify-center">
              <div className="absolute top-1 left-2 right-2 h-2.5 bg-[#C99E5C] rounded-full opacity-80" />
              {/* Chopsticks resting on rim */}
              <div className="absolute -top-1 -right-1 w-14 h-1 bg-[#D8D2BF] rotate-[25deg] shadow-sm" />
            </div>
          </div>
        );
      case 'chili':
        return (
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Fiery red chili pepper */}
            <div className="w-10 h-10 flex items-center justify-center text-red-500 animate-pulse">
              <Flame size={32} />
            </div>
          </div>
        );
      case 'fish':
        return (
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Little fish with gentle veto */}
            <div className="w-11 h-8 rounded-full border border-water/40 bg-water/10 flex items-center justify-center relative">
              <span className="text-[10px] font-mono text-paper-muted">🐟</span>
              <div className="absolute -top-1 -right-1 text-red-400 bg-dark rounded-full">
                <Ban size={14} />
              </div>
            </div>
          </div>
        );
      case 'sweet':
        return (
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Delicate small sweet cake */}
            <div className="w-9 h-7 rounded bg-amber-800/40 border border-amber-600/40 flex items-center justify-center">
              <Sparkles size={16} className="text-amber-300" />
            </div>
          </div>
        );
      case 'water':
      default:
        return (
          <div className="relative w-14 h-14 flex items-center justify-center">
            <Soup size={28} className="text-accent" />
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-accent font-mono block mb-1">
          Kitchen Table
        </span>
        <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
          Feed Her Properly
        </h2>
        <p className="text-xs text-paper-muted mt-1 leading-relaxed">
          Someone remembered what she loves, what she avoids, and the spice level that defies science.
        </p>
      </div>

      {/* Interactive Kitchen Plate / Grid */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-6">
        {FOOD_DATA.map((item) => {
          const isSelected = activeItem.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 active:scale-95 ${
                isSelected
                  ? 'border-accent bg-dark-elevated shadow-lamp'
                  : 'border-white/10 bg-dark-surface hover:border-white/25'
              }`}
            >
              {getVisual(item)}
              <span className="text-[10px] font-serif text-paper-cream mt-1.5 truncate max-w-full text-center">
                {item.name.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Card */}
      <div className="p-5 rounded-2xl border border-accent/30 bg-dark-surface shadow-md animate-fadeIn">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center space-x-2">
            <h3 className="font-serif text-base sm:text-lg text-paper-cream">
              {activeItem.name}
            </h3>
          </div>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-paper-muted">
            {activeItem.category}
          </span>
        </div>

        {/* Dialogue quote */}
        <div className="py-4">
          <p className="font-serif italic text-base sm:text-lg text-paper-cream leading-relaxed">
            {activeItem.dialogue}
          </p>
          <p className="text-xs sm:text-sm text-paper-muted mt-2 leading-relaxed font-sans">
            {activeItem.subtext}
          </p>
        </div>

        {/* Small personal observation footer */}
        <div className="pt-3 border-t border-white/5 flex items-center text-[11px] text-accent/80 space-x-1.5">
          <Check size={13} />
          <span>Understood and stored in memory.</span>
        </div>
      </div>
    </div>
  );
};
