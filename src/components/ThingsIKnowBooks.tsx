import React, { useState } from 'react';
import { BOOKS_DATA, BookEntry } from '../data/books';
import { soundManager } from '../audio/soundGenerator';
import { Bookmark, ChevronRight, X } from 'lucide-react';

export const ThingsIKnowBooks: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<BookEntry | null>(null);

  const handleSelectBook = (book: BookEntry) => {
    soundManager.playPageFlip();
    setSelectedBook(book);
  };

  const handleClose = () => {
    soundManager.playPageFlip();
    setSelectedBook(null);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-accent font-mono block mb-1">
          The Desk Stack
        </span>
        <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
          Things I Know About You
        </h2>
        <p className="text-xs text-paper-muted mt-1 leading-relaxed">
          Noticed along the way. Tap any volume to open its pages.
        </p>
      </div>

      {/* Stacked Physical Books on Desk */}
      <div className="flex flex-col space-y-2.5 perspective-container">
        {BOOKS_DATA.map((book, idx) => {
          const isSelected = selectedBook?.id === book.id;
          return (
            <div
              key={book.id}
              onClick={() => handleSelectBook(book)}
              className={`relative group cursor-pointer p-3.5 rounded-lg border transition-all duration-300 transform active:scale-[0.98] ${
                isSelected
                  ? 'border-accent bg-dark-elevated shadow-lamp translate-x-2'
                  : 'border-white/10 hover:border-accent/40 bg-dark-surface hover:translate-x-1'
              }`}
              style={{
                borderLeftWidth: '8px',
                borderLeftColor: book.spineColor,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 pr-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono text-paper-muted/60">
                      Vol. {idx + 1}
                    </span>
                    <span className="text-xs font-handwriting text-accent/80">
                      {book.subtitle}
                    </span>
                  </div>
                  <h3 className="font-serif text-base text-paper-cream mt-0.5 tracking-wide">
                    {book.title}
                  </h3>
                </div>

                <div className="flex items-center text-paper-muted/50 group-hover:text-accent transition-colors">
                  <ChevronRight size={18} />
                </div>
              </div>

              {/* Book Page Texture Ridge */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-[#222] to-transparent rounded-r opacity-50" />
            </div>
          );
        })}
      </div>

      {/* Opened Book Card Modal / Overlay */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-sm rounded-xl paper-texture p-6 sm:p-7 shadow-2xl border border-paper-muted/40 transform transition-transform animate-scaleUp">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-2 rounded-full text-dark/60 hover:text-dark hover:bg-dark/10 transition-colors"
              aria-label="Close page"
            >
              <X size={18} />
            </button>

            {/* Bookmark ribbon */}
            <div className="absolute -top-3 left-6 text-accent">
              <Bookmark size={20} fill="currentColor" />
            </div>

            {/* Header */}
            <div className="pt-2 pb-3 border-b border-dark/15">
              <span className="text-[10px] uppercase font-mono tracking-widest text-dark/50 block">
                Field Observation
              </span>
              <h3 className="font-serif text-xl text-dark font-medium mt-0.5">
                {selectedBook.title}
              </h3>
              <p className="text-xs font-serif italic text-dark/70">
                {selectedBook.subtitle}
              </p>
            </div>

            {/* Reading Content */}
            <div className="py-4 space-y-3">
              <div className="p-2.5 rounded bg-dark/5 border-l-2 border-accent text-dark/90 font-serif italic text-sm leading-relaxed">
                {selectedBook.quote}
              </div>

              <p className="text-xs sm:text-sm text-dark/85 leading-relaxed font-sans selectable-text">
                {selectedBook.pageContent}
              </p>

              <div className="pt-2 text-[11px] font-sans text-dark/60 border-t border-dark/10">
                <span className="font-semibold text-dark/70">Noticed: </span>
                {selectedBook.detail}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleClose}
                className="px-4 py-1.5 rounded bg-dark text-paper text-xs font-sans hover:bg-dark-warm transition-colors"
              >
                Close page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
