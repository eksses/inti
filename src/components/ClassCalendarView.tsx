import React, { useState } from 'react';
import { CALENDAR_DATA, CalendarDay } from '../data/calendar';
import { soundManager } from '../audio/soundGenerator';
import { BookOpen, Calendar as CalendarIcon, CheckCircle2, Coffee } from 'lucide-react';

export const ClassCalendarView: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<CalendarDay>(CALENDAR_DATA.days[0]); // Sunday by default

  const handleDayTap = (day: CalendarDay) => {
    soundManager.playPageFlip();
    setSelectedDay(day);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-botanical-muted font-mono block mb-1">
          Weekly Rhythm
        </span>
        <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
          Class Days & Study Rhythm
        </h2>
        <p className="text-xs text-paper-muted mt-1 leading-relaxed">
          {CALENDAR_DATA.subhead}
        </p>
      </div>

      {/* Week Ribbon */}
      <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-6">
        {CALENDAR_DATA.days.map((day) => {
          const isSelected = selectedDay.dayName === day.dayName;
          return (
            <button
              key={day.dayName}
              onClick={() => handleDayTap(day)}
              className={`py-3 px-1 rounded-xl border flex flex-col items-center justify-between transition-all duration-300 transform active:scale-95 ${
                isSelected
                  ? 'border-accent bg-dark-elevated shadow-lamp -translate-y-1.5'
                  : 'border-white/10 bg-dark-surface hover:border-white/20'
              }`}
            >
              <span className="text-[10px] font-mono uppercase text-paper-muted">
                {day.shortName}
              </span>

              {/* Indicator dot or book for class days */}
              <div className="my-1.5">
                {day.isClassDay ? (
                  <span className="inline-block w-2 h-2 rounded-full bg-accent shadow-sm" />
                ) : (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/20" />
                )}
              </div>

              <span
                className={`text-[9px] font-sans uppercase tracking-tight ${
                  day.isClassDay ? 'text-accent font-semibold' : 'text-paper-muted/60'
                }`}
              >
                {day.isClassDay ? 'Class' : 'Off'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Lifted Day Paper Card */}
      <div className="p-5 sm:p-6 rounded-2xl paper-texture text-dark shadow-2xl border border-paper-muted/50 transform transition-transform animate-fadeIn">
        <div className="flex items-center justify-between border-b border-dark/15 pb-3">
          <div className="flex items-center space-x-2">
            <CalendarIcon size={16} className="text-dark/70" />
            <h3 className="font-serif text-lg font-medium text-dark">
              {selectedDay.dayName}
            </h3>
          </div>

          {selectedDay.isClassDay ? (
            <span className="px-2.5 py-0.5 rounded-full bg-dark text-paper text-[10px] font-mono uppercase tracking-wider flex items-center space-x-1">
              <CheckCircle2 size={11} className="text-accent" />
              <span>Class Day • {CALENDAR_DATA.location}</span>
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full bg-dark/10 text-dark/70 text-[10px] font-mono uppercase tracking-wider flex items-center space-x-1">
              <Coffee size={11} />
              <span>Quiet Day</span>
            </span>
          )}
        </div>

        {/* Details & Tiny Desk Accents */}
        <div className="py-4 space-y-3 font-sans">
          {selectedDay.isClassDay ? (
            <>
              <div className="flex items-center space-x-2 text-xs font-serif italic text-dark/80">
                <BookOpen size={14} className="text-dark/60" />
                <span>{selectedDay.timeNote}</span>
              </div>

              <p className="text-xs sm:text-sm text-dark/90 leading-relaxed selectable-text">
                {selectedDay.subjectNote}
              </p>

              <div className="p-3 rounded-lg bg-dark/5 border-l-2 border-accent text-xs text-dark/80 leading-relaxed font-handwriting text-sm">
                <span className="font-sans text-[10px] uppercase font-mono tracking-wider text-dark/60 block mb-0.5">
                  Gentle reminder:
                </span>
                {selectedDay.gentleReminder}
              </div>
            </>
          ) : (
            <>
              <p className="text-xs sm:text-sm text-dark/85 leading-relaxed">
                {selectedDay.subjectNote}
              </p>
              <div className="p-3 rounded-lg bg-dark/5 border-l-2 border-botanical-muted text-xs text-dark/80 leading-relaxed font-handwriting text-sm">
                <span className="font-sans text-[10px] uppercase font-mono tracking-wider text-dark/60 block mb-0.5">
                  Quiet note:
                </span>
                {selectedDay.gentleReminder}
              </div>
            </>
          )}
        </div>

        {/* Desk stationery footnote */}
        <div className="pt-2 border-t border-dark/10 flex justify-between items-center text-[10px] font-mono text-dark/50">
          <span>Pencil, notebook, bag ready</span>
          <span>Bashabo</span>
        </div>
      </div>
    </div>
  );
};
