import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/memories';
import { soundManager } from '../audio/soundGenerator';
import { Feather, Moon, Sparkles, Compass, Clock, HeartHandshake } from 'lucide-react';

export const AnniversaryTimeline: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<string>("anniversary-genesis");

  const handleSelect = (id: string) => {
    soundManager.playPageFlip();
    setActiveEventId(id);
  };

  const getSymbol = (sym: string) => {
    switch (sym) {
      case 'feather': return <Feather size={16} className="text-accent" />;
      case 'moon': return <Moon size={16} className="text-moon" />;
      case 'stars': return <Sparkles size={16} className="text-botanical-muted" />;
      case 'compass': return <Compass size={16} className="text-water" />;
      default: return <Clock size={16} className="text-paper-muted" />;
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-accent font-mono block mb-1">
          The Pages of Us
        </span>
        <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
          Timeline & Horizons
        </h2>
        <p className="text-xs text-paper-muted mt-1 leading-relaxed">
          Starting from a quiet September evening, leaving room for everything yet to unfold.
        </p>
      </div>

      {/* Vertical Connected Track */}
      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-px before:bg-gradient-to-b before:from-accent before:via-white/20 before:to-transparent">
        {TIMELINE_EVENTS.map((item) => {
          const isSelected = activeEventId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className="relative cursor-pointer group"
            >
              {/* Timeline Node on the line */}
              <div
                className={`absolute -left-6 top-1.5 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-accent text-dark scale-110 shadow-lamp'
                    : 'bg-dark border border-white/20 text-paper-muted group-hover:border-accent/40'
                }`}
              >
                {getSymbol(item.symbol)}
              </div>

              {/* Event Card */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isSelected
                    ? 'border-accent/50 bg-dark-elevated shadow-md translate-x-1'
                    : 'border-white/10 bg-dark-surface hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-accent tracking-wider">
                    {item.date}
                  </span>
                  {item.category === 'anniversary' && (
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-accent/20 text-accent flex items-center space-x-1">
                      <HeartHandshake size={10} />
                      <span>Anniversary</span>
                    </span>
                  )}
                  {item.category === 'special-memory' && (
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-moon/15 text-moon">
                      Quiet Memory
                    </span>
                  )}
                  {item.isLocked && (
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-paper-muted/60">
                      Unwritten
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-base text-paper-cream mt-1 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-paper-muted mt-2 leading-relaxed font-sans selectable-text">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
