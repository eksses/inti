import React from 'react';
import { Home, BookHeart, ShieldCheck, Compass, Sparkles, Feather } from 'lucide-react';

export type NavSection = 'room' | 'her' | 'care' | 'world' | 'memories' | 'for-you';

interface BottomNavProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeSection,
  onSelectSection,
}) => {
  const navItems: { id: NavSection; label: string; icon: React.ReactNode }[] = [
    {
      id: 'room',
      label: 'Room',
      icon: <Home size={19} />,
    },
    {
      id: 'her',
      label: 'Her',
      icon: <BookHeart size={19} />,
    },
    {
      id: 'care',
      label: 'Care',
      icon: <ShieldCheck size={19} />,
    },
    {
      id: 'world',
      label: 'World',
      icon: <Compass size={19} />,
    },
    {
      id: 'memories',
      label: 'Memories',
      icon: <Sparkles size={19} />,
    },
    {
      id: 'for-you',
      label: 'For You',
      icon: <Feather size={19} />,
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0C0E0D]/95 backdrop-blur-md border-t border-white/5 pb-[max(env(safe-area-inset-bottom),12px)] pt-2 px-2 transition-all"
      aria-label="Bottom Navigation"
    >
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`min-h-[48px] min-w-[48px] flex flex-col items-center justify-center rounded-xl px-2 py-1 transition-all duration-300 active:scale-95 ${
                isActive
                  ? 'text-accent font-medium'
                  : 'text-paper-muted/60 hover:text-paper-muted'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <div
                className={`p-1 rounded-lg transition-all ${
                  isActive ? 'bg-accent/15 text-accent scale-105' : ''
                }`}
              >
                {item.icon}
              </div>
              <span className="text-[10px] font-sans tracking-tight mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
