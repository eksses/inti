import React from 'react';
import { Smartphone, Moon } from 'lucide-react';

interface DesktopWrapperProps {
  children: React.ReactNode;
}

export const DesktopWrapper: React.FC<DesktopWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#070808] text-paper flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Background Ambient Atmospheric Lighting for Desktop */}
      <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-botanical-deep/10 blur-[140px]" />

        {/* Quiet desktop context notice in the top corner */}
        <div className="absolute top-6 left-8 flex items-center space-x-2 text-paper-muted/50 text-xs font-serif italic">
          <Moon size={14} className="text-moon/60" />
          <span>a quiet room made for Inti</span>
        </div>

        {/* Gentle desktop footnote */}
        <div className="absolute bottom-6 right-8 flex items-center space-x-2 text-paper-muted/40 text-[11px] font-mono">
          <Smartphone size={13} />
          <span>Best experienced in hand on a phone</span>
        </div>
      </div>

      {/* Mobile Shell Container (Fixed Width 414px max, Full Height) */}
      <div className="w-full max-w-[430px] min-h-screen sm:min-h-[844px] sm:max-h-[920px] bg-dark sm:rounded-[36px] sm:border sm:border-white/10 sm:shadow-[0_0_80px_rgba(0,0,0,0.8)] relative flex flex-col overflow-y-auto overflow-x-hidden sm:my-6">
        {/* Mobile Device Speaker Notch Indicator (shown on desktop frame only) */}
        <div className="hidden sm:flex justify-center pt-2.5 pb-1 relative z-50">
          <div className="w-20 h-4 bg-black/60 rounded-full flex items-center justify-center space-x-1.5 border border-white/5">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-8 h-1 bg-white/10 rounded-full" />
          </div>
        </div>

        {/* Inner App Content */}
        <div className="flex-1 flex flex-col relative w-full">
          {children}
        </div>
      </div>
    </div>
  );
};
