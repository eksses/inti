import React from 'react';
import { Volume2, VolumeX, Lamp, BatteryMedium, Sparkles } from 'lucide-react';

interface HeaderBarProps {
  isMuted: boolean;
  onToggleSound: () => void;
  lampLevel: 'soft' | 'warm' | 'embers';
  onCycleLamp: () => void;
  qualityMode: 'high' | 'balanced' | 'low';
  onCycleQuality: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  isMuted,
  onToggleSound,
  lampLevel,
  onCycleLamp,
  qualityMode,
  onCycleQuality,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-dark/85 backdrop-blur-md border-b border-white/5 px-4 py-2.5 flex items-center justify-between transition-colors pt-[max(env(safe-area-inset-top),10px)]">
      {/* Title / Identity */}
      <div className="flex items-center space-x-2">
        <span className="font-serif italic text-sm text-paper-cream tracking-wide">
          Intie
        </span>
        <span className="text-[10px] font-mono text-paper-muted/50">•</span>
        <span className="text-[10px] font-mono text-paper-muted/60 uppercase tracking-widest">
          A little place
        </span>
      </div>

      {/* Discreet Interactive Controls */}
      <div className="flex items-center space-x-2">
        {/* Quality / Battery Saver Mode */}
        <button
          onClick={onCycleQuality}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 active:scale-95 text-paper-muted hover:text-paper transition-all flex items-center space-x-1"
          title={`Graphics mode: ${qualityMode}. Tap to cycle.`}
          aria-label="Quality Mode"
        >
          {qualityMode === 'low' ? (
            <BatteryMedium size={15} className="text-accent" />
          ) : (
            <Sparkles size={15} className={qualityMode === 'high' ? 'text-accent' : 'text-paper-muted'} />
          )}
          <span className="text-[9px] font-mono uppercase hidden xs:inline">
            {qualityMode}
          </span>
        </button>

        {/* Lamp Ambience Toggle */}
        <button
          onClick={onCycleLamp}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 active:scale-95 text-paper-muted hover:text-accent transition-all flex items-center space-x-1"
          title={`Lamp mood: ${lampLevel}. Tap to change.`}
          aria-label="Desk Lamp"
        >
          <Lamp size={15} className="text-accent" />
          <span className="text-[9px] font-mono uppercase hidden xs:inline">
            {lampLevel}
          </span>
        </button>

        {/* Sound Toggle (Ambient Rain / Procedural Sound) */}
        <button
          onClick={onToggleSound}
          className={`p-2 rounded-lg transition-all active:scale-95 flex items-center space-x-1 ${
            isMuted
              ? 'bg-white/5 text-paper-muted hover:text-paper'
              : 'bg-accent/20 text-accent border border-accent/40 shadow-sm'
          }`}
          title={isMuted ? "Turn on soft night rain sound" : "Mute audio"}
          aria-label="Audio Toggle"
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          <span className="text-[9px] font-mono uppercase hidden xs:inline">
            {isMuted ? "off" : "rain"}
          </span>
        </button>
      </div>
    </header>
  );
};
