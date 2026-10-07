import React from 'react';
import { HEALTH_DATA } from '../data/health';
import { AlertCircle, Heart, Thermometer, Droplet, Moon } from 'lucide-react';

export const HealthView: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      {/* Section Header */}
      <div>
        <span className="text-[11px] uppercase tracking-widest text-flower-padma font-mono block mb-1">
          Health & Care
        </span>
        <h2 className="text-xl sm:text-2xl font-serif text-paper-cream tracking-wide">
          When She Isn’t Feeling Okay
        </h2>
        <p className="text-xs text-paper-muted mt-1 leading-relaxed">
          Quiet protocols for difficult hours. Dignity and stillness first.
        </p>
      </div>

      {/* Critical Medical Note (Calm, dignified, unmistakable) */}
      <div className="p-4 sm:p-5 rounded-xl border border-accent/40 bg-[#191512] shadow-sm">
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-lg bg-accent/15 text-accent mt-0.5">
            <AlertCircle size={20} />
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-mono tracking-widest uppercase text-accent font-semibold block">
              {HEALTH_DATA.criticalAllergy.title}
            </span>
            <h3 className="font-serif text-base sm:text-lg text-paper-cream font-medium mt-0.5">
              {HEALTH_DATA.criticalAllergy.condition}
            </h3>
            <p className="text-xs text-paper-muted mt-1.5 leading-relaxed font-sans">
              {HEALTH_DATA.criticalAllergy.directive}
            </p>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer Banner */}
      <div className="p-3 rounded-lg bg-dark-surface/60 border border-white/5 text-[11px] text-paper-muted/80 leading-relaxed italic text-center">
        {HEALTH_DATA.disclaimer}
      </div>

      {/* Care Protocols */}
      <div className="space-y-4">
        {HEALTH_DATA.items.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl border border-white/10 bg-dark-surface space-y-3"
          >
            <div className="flex items-center space-x-2.5">
              {item.id === 'migraines' && <Moon size={16} className="text-water" />}
              {item.id === 'stomach-pain' && <Thermometer size={16} className="text-accent-warm" />}
              {item.id === 'hydration' && <Droplet size={16} className="text-water-surface" />}
              {item.id === 'cycle-care' && <Heart size={16} className="text-flower-padma" />}
              <h4 className="font-serif text-base text-paper-cream tracking-wide">
                {item.title}
              </h4>
            </div>

            <p className="text-xs text-paper-muted leading-relaxed font-sans">
              {item.primaryText}
            </p>

            {/* Steps */}
            <div className="p-3 rounded-lg bg-dark-warm/60 border border-white/5 space-y-1.5">
              {item.careSteps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-paper/90 leading-relaxed font-sans">
                  <span className="text-accent text-sm leading-none">•</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* Quiet footnote */}
            <p className="text-[11px] font-handwriting text-accent/90 italic pl-1">
              {item.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
