import { useState, useEffect } from 'react';
import { DesktopWrapper } from './components/DesktopWrapper';
import { IntroScreen } from './components/IntroScreen';
import { HeaderBar } from './components/HeaderBar';
import { BottomNav, NavSection } from './components/BottomNav';
import { MainRoom } from './components/MainRoom';
import { ThingsIKnowBooks } from './components/ThingsIKnowBooks';
import { RacingBrainModal } from './components/RacingBrainModal';
import { CareGuideView } from './components/CareGuideView';
import { HealthView } from './components/HealthView';
import { FlowersPondView } from './components/FlowersPondView';
import { FoodKitchenView } from './components/FoodKitchenView';
import { ClassCalendarView } from './components/ClassCalendarView';
import { FearsView } from './components/FearsView';
import { AnniversaryTimeline } from './components/AnniversaryTimeline';
import { BirthdayScene } from './components/BirthdayScene';
import { MemoryBookView } from './components/MemoryBookView';
import { FinalLetterView } from './components/FinalLetterView';
import { soundManager } from './audio/soundGenerator';
import { BookOpen } from 'lucide-react';

export function App() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<NavSection>('room');
  const [isNotebookOpen, setIsNotebookOpen] = useState<boolean>(false);
  const [lampLevel, setLampLevel] = useState<'soft' | 'warm' | 'embers'>('warm');
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [qualityMode, setQualityMode] = useState<'high' | 'balanced' | 'low'>('balanced');

  // Handle visibility change to save battery when tab is hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        soundManager.stopAmbience();
      } else if (!isMuted) {
        soundManager.startAmbience();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [isMuted]);

  // Audio Toggle
  const handleToggleSound = () => {
    const isNowActive = soundManager.toggleMute();
    setIsMuted(!isNowActive);
  };

  // Lamp Mood Cycle
  const handleCycleLamp = () => {
    setLampLevel((prev) => {
      if (prev === 'warm') return 'embers';
      if (prev === 'embers') return 'soft';
      return 'warm';
    });
  };

  // Quality Cycle
  const handleCycleQuality = () => {
    setQualityMode((prev) => {
      if (prev === 'high') return 'balanced';
      if (prev === 'balanced') return 'low';
      return 'high';
    });
  };

  const getLampBgClass = () => {
    if (lampLevel === 'warm') return 'bg-[#0E0E0C]';
    if (lampLevel === 'embers') return 'bg-[#120F0D]';
    return 'bg-[#0B0D0C]';
  };

  if (!hasEntered) {
    return <IntroScreen onEnter={() => setHasEntered(true)} />;
  }

  return (
    <DesktopWrapper>
      <div className={`flex flex-col min-h-full flex-1 transition-colors duration-700 ${getLampBgClass()}`}>
        {/* Sticky Header */}
        <HeaderBar
          isMuted={isMuted}
          onToggleSound={handleToggleSound}
          lampLevel={lampLevel}
          onCycleLamp={handleCycleLamp}
          qualityMode={qualityMode}
          onCycleQuality={handleCycleQuality}
        />

        {/* Main Content Area */}
        <main className="flex-1 px-4 sm:px-5 pt-4 pb-28 w-full max-w-md mx-auto">
          {/* Section 1: Room */}
          {activeSection === 'room' && (
            <div className="animate-fadeIn space-y-6">
              <MainRoom
                lampLevel={lampLevel}
                onToggleLamp={handleCycleLamp}
                onOpenNotebook={() => setIsNotebookOpen(true)}
                onNavigateSection={(sec) => setActiveSection(sec as NavSection)}
              />
            </div>
          )}

          {/* Section 2: Her (Personality & Racing Brain) */}
          {activeSection === 'her' && (
            <div className="animate-fadeIn space-y-8">
              {/* Racing Brain Notebook Quick Banner */}
              <div
                onClick={() => setIsNotebookOpen(true)}
                className="p-4 rounded-xl border border-accent/40 bg-dark-elevated cursor-pointer hover:border-accent transition-all active:scale-98 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm sm:text-base text-paper-cream">
                      The Racing Brain
                    </h3>
                    <p className="text-[11px] text-paper-muted">
                      Tap to open the 2 AM spiral & settling
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase text-accent bg-accent/10 px-2 py-1 rounded">
                  Open
                </span>
              </div>

              {/* Books Stack */}
              <ThingsIKnowBooks />
            </div>
          )}

          {/* Section 3: Care (Care Guide & Health) */}
          {activeSection === 'care' && (
            <div className="animate-fadeIn space-y-10">
              <CareGuideView />
              <div className="h-px bg-white/5 my-6" />
              <HealthView />
            </div>
          )}

          {/* Section 4: World (Flowers, Food, Calendar, Fears) */}
          {activeSection === 'world' && (
            <div className="animate-fadeIn space-y-10">
              <FlowersPondView />
              <div className="h-px bg-white/5 my-6" />
              <FoodKitchenView />
              <div className="h-px bg-white/5 my-6" />
              <ClassCalendarView />
              <div className="h-px bg-white/5 my-6" />
              <FearsView />
            </div>
          )}

          {/* Section 5: Memories (Timeline, Birthday, Keepsake Box) */}
          {activeSection === 'memories' && (
            <div className="animate-fadeIn space-y-10">
              <BirthdayScene />
              <div className="h-px bg-white/5 my-6" />
              <AnniversaryTimeline />
              <div className="h-px bg-white/5 my-6" />
              <MemoryBookView />
            </div>
          )}

          {/* Section 6: For You (Final Letter & Stillness) */}
          {activeSection === 'for-you' && (
            <div className="animate-fadeIn">
              <FinalLetterView />
            </div>
          )}
        </main>

        {/* Global Racing Brain Interactive Modal */}
        <RacingBrainModal
          isOpen={isNotebookOpen}
          onClose={() => setIsNotebookOpen(false)}
        />

        {/* Sticky Bottom Navigation */}
        <BottomNav
          activeSection={activeSection}
          onSelectSection={(sec) => {
            soundManager.playPageFlip();
            setActiveSection(sec);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>
    </DesktopWrapper>
  );
}

export default App;
