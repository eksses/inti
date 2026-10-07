import React, { useState } from 'react';
import { MEMORY_ARTIFACTS, MemoryArtifact } from '../data/memories';
import { soundManager } from '../audio/soundGenerator';
import { ShaplaFlower, PadmaFlower } from './FlowerGraphics';
import { Bookmark, FileText, Ticket, Star, Sparkles, X } from 'lucide-react';

export const MemoryBookView: React.FC = () => {
  const [selectedArtifact, setSelectedArtifact] = useState<MemoryArtifact | null>(null);

  const handleOpenArtifact = (item: MemoryArtifact) => {
    soundManager.playPageFlip();
    setSelectedArtifact(item);
  };

  const handleClose = () => {
    soundManager.playPageFlip();
    setSelectedArtifact(null);
  };

  const renderThumbnail = (item: MemoryArtifact) => {
    switch (item.type) {
      case 'flower':
        return item.id.includes('shapla') ? (
          <div className="w-10 h-10 flex items-center justify-center">
            <ShaplaFlower size={38} />
          </div>
        ) : (
          <div className="w-10 h-10 flex items-center justify-center">
            <PadmaFlower size={38} />
          </div>
        );
      case 'ticket':
        return (
          <div className="w-10 h-10 rounded border border-dashed border-paper-muted/40 bg-amber-950/20 flex items-center justify-center text-accent">
            <Ticket size={20} />
          </div>
        );
      case 'sketch':
        return (
          <div className="w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center text-accent/60">
            <div className="w-6 h-6 rounded-full border border-dashed border-accent/30" />
          </div>
        );
      case 'empty':
        return (
          <div className="w-10 h-10 rounded border border-dashed border-white/20 flex items-center justify-center text-white/30">
            <Star size={18} />
          </div>
        );
      case 'note':
      default:
        return (
          <div className="w-10 h-10 rounded bg-dark/40 border border-white/10 flex items-center justify-center text-paper-cream">
            <FileText size={18} />
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-botanical-muted font-mono block mb-1">
          Memory Box
        </span>
        <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
          Artifacts & Remnants
        </h2>
        <p className="text-xs text-paper-muted mt-1 leading-relaxed">
          Tangible traces preserved inside the book. Real moments, and intentional blank pages for what’s ahead.
        </p>
      </div>

      {/* Grid of Memory Keepsakes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {MEMORY_ARTIFACTS.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpenArtifact(item)}
            className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 transform active:scale-[0.98] flex items-center space-x-3.5 ${
              item.type === 'empty'
                ? 'border-dashed border-white/15 bg-dark/30 hover:border-white/30'
                : 'border-white/10 bg-dark-surface hover:border-accent/40 hover:bg-dark-elevated'
            }`}
          >
            {renderThumbnail(item)}

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-[9px] font-mono uppercase tracking-wider text-accent/80">
                  {item.subtitle || item.type}
                </span>
                {item.dateStr && (
                  <span className="text-[9px] font-mono text-paper-muted/50">
                    • {item.dateStr}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-sm sm:text-base text-paper-cream truncate mt-0.5">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Keepsake Reading Modal */}
      {selectedArtifact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className={`relative w-full max-w-sm rounded-xl p-6 sm:p-7 shadow-2xl border transition-all animate-scaleUp ${
              selectedArtifact.type === 'empty'
                ? 'bg-dark-surface border-dashed border-accent/40 text-paper-cream'
                : 'paper-texture text-dark border-paper-muted/50'
            }`}
          >
            <button
              onClick={handleClose}
              className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
                selectedArtifact.type === 'empty'
                  ? 'text-paper-muted hover:text-paper hover:bg-white/10'
                  : 'text-dark/60 hover:text-dark hover:bg-dark/10'
              }`}
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div
              className={`pb-3 border-b ${
                selectedArtifact.type === 'empty'
                  ? 'border-white/10'
                  : 'border-dark/15'
              }`}
            >
              <div className="flex items-center space-x-2">
                {selectedArtifact.type === 'empty' ? (
                  <Sparkles size={16} className="text-accent" />
                ) : (
                  <Bookmark size={16} className="text-accent" />
                )}
                <span className="text-[10px] uppercase font-mono tracking-widest opacity-60">
                  {selectedArtifact.subtitle || 'Memory Box'}
                </span>
              </div>
              <h3 className="font-serif text-xl font-medium mt-1">
                {selectedArtifact.title}
              </h3>
              {selectedArtifact.dateStr && (
                <span className="text-xs font-mono opacity-60 block mt-0.5">
                  {selectedArtifact.dateStr}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="py-5 space-y-3">
              {selectedArtifact.type === 'flower' && (
                <div className="flex justify-center my-2">
                  {selectedArtifact.id.includes('shapla') ? (
                    <ShaplaFlower size={90} />
                  ) : (
                    <PadmaFlower size={90} />
                  )}
                </div>
              )}

              <p
                className={`text-sm sm:text-base leading-relaxed selectable-text ${
                  selectedArtifact.type === 'empty'
                    ? 'font-serif italic text-paper-cream/90 text-center py-4'
                    : 'font-handwriting text-lg text-dark/90'
                }`}
              >
                {selectedArtifact.content}
              </p>
            </div>

            {/* Footer */}
            <div
              className={`pt-3 flex justify-between items-center text-xs border-t ${
                selectedArtifact.type === 'empty'
                  ? 'border-white/10 text-paper-muted'
                  : 'border-dark/10 text-dark/60'
              }`}
            >
              <span className="font-mono text-[10px]">Box archive</span>
              <button
                onClick={handleClose}
                className={`px-3 py-1 rounded text-xs transition-colors ${
                  selectedArtifact.type === 'empty'
                    ? 'bg-accent/20 text-accent hover:bg-accent/30'
                    : 'bg-dark text-paper hover:bg-dark-warm'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
