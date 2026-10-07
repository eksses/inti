import React, { useState } from 'react';
import { CARE_GUIDE_DATA } from '../data/careGuide';
import { Moon, Wind, Shield, Coffee, Compass, ChevronDown } from 'lucide-react';
import { soundManager } from '../audio/soundGenerator';

export const CareGuideView: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>("when-quiet");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'moon': return <Moon size={18} className="text-accent" />;
      case 'wind': return <Wind size={18} className="text-water" />;
      case 'shield': return <Shield size={18} className="text-flower-padma" />;
      case 'coffee': return <Coffee size={18} className="text-accent-warm" />;
      case 'compass': return <Compass size={18} className="text-botanical-muted" />;
      default: return <Moon size={18} className="text-accent" />;
    }
  };

  const handleToggle = (id: string) => {
    soundManager.playPageFlip();
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-botanical-muted font-mono block mb-1">
          Personal Field Guide
        </span>
        <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
          How to Take Care of Her
        </h2>
        <p className="text-xs text-paper-muted mt-1 leading-relaxed">
          Not instructions for a stranger. Notes from someone paying quiet attention.
        </p>
      </div>

      {/* Guide Entries Accordion / Cards */}
      <div className="space-y-3">
        {CARE_GUIDE_DATA.map((entry) => {
          const isOpen = expandedId === entry.id;
          return (
            <div
              key={entry.id}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-accent/40 bg-dark-elevated shadow-md'
                  : 'border-white/10 bg-dark-surface hover:border-white/20'
              }`}
            >
              {/* Header Bar */}
              <button
                onClick={() => handleToggle(entry.id)}
                className="w-full text-left p-4 flex items-center justify-between"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-dark/40 border border-white/5">
                    {getIcon(entry.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-paper-cream tracking-wide">
                      {entry.title}
                    </h3>
                    <p className="text-xs text-paper-muted/70 font-serif italic mt-0.5">
                      {entry.tagline}
                    </p>
                  </div>
                </div>

                <div
                  className={`text-paper-muted/50 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-accent' : ''
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              {/* Collapsible Content */}
              {isOpen && (
                <div className="px-4 pb-5 pt-1 border-t border-white/5 space-y-3.5 animate-fadeIn">
                  {/* Observational Advice Points */}
                  <ul className="space-y-2 mt-2">
                    {entry.advice.map((line, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-paper/90 leading-relaxed font-sans">
                        <span className="text-accent text-sm leading-none mt-0.5">•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Field Note in Handwritten Tone */}
                  <div className="p-3 rounded-lg bg-dark/60 border-l-2 border-accent text-paper-cream/80 text-xs sm:text-[13px] font-handwriting leading-relaxed">
                    <span className="font-sans text-[10px] uppercase font-mono tracking-wider text-accent block mb-1">
                      Samir's note:
                    </span>
                    {entry.fieldNote}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
