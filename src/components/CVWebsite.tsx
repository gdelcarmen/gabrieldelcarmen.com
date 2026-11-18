import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import type { SupplementId } from '../data/supplement';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import RunningHead from './layout/RunningHead';
import AbstractSection from './sections/AbstractSection';
import AuthorNoteSection from './sections/AuthorNoteSection';
import FiguresSection from './sections/FiguresSection';
import ReferencesSection from './sections/ReferencesSection';
import ResearchInProgressSection from './sections/ResearchInProgressSection';
import ResearchSection from './sections/ResearchSection';
import SoftwareSection from './sections/SoftwareSection';
import SupplementSection from './sections/SupplementSection';
import TrainingSection from './sections/TrainingSection';
import { TooltipProvider } from './Tooltip';

// Which supplementary section holds a given link target, if any.
const supplementFor = (id: string): SupplementId | null => {
  if (id === 's1' || /^(talk|poster)-\d+$/.test(id)) return 's1';
  if (id === 's2' || id === 's3') return id;
  return null;
};

const CVWebsite = () => {
  const [openSupplement, setOpenSupplement] = useState<Record<SupplementId, boolean>>({
    s1: false,
    s2: false,
    s3: false,
  });

  const toggleSupplement = useCallback((id: SupplementId) => {
    setOpenSupplement((previous) => ({ ...previous, [id]: !previous[id] }));
  }, []);

  // Open a supplementary section, then bring one of its entries into view and mark it.
  const revealInSupplement = useCallback((part: SupplementId, targetId: string) => {
    flushSync(() => setOpenSupplement((previous) => ({ ...previous, [part]: true })));
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ block: 'center' });
    target.classList.remove('flash');
    void target.offsetWidth;
    target.classList.add('flash');
  }, []);

  // Links that point into a closed supplementary section open it first.
  useEffect(() => {
    const openForHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const part = supplementFor(id);
      if (!part) return;
      if (id === part) setOpenSupplement((previous) => ({ ...previous, [part]: true }));
      else revealInSupplement(part, id);
    };
    openForHash();
    window.addEventListener('hashchange', openForHash);
    return () => window.removeEventListener('hashchange', openForHash);
  }, [revealInSupplement]);

  return (
    <TooltipProvider className="mx-auto w-full max-w-[1040px] px-5 pb-10 sm:px-8 sm:pb-12">
      <RunningHead />
      <Navigation />
      <Header />
      <main>
        <AbstractSection />
        <div className="mt-7 flex flex-wrap gap-x-10 gap-y-7 text-base md:mt-9">
          <div className="min-w-0 flex-[1_1_380px]">
            <TrainingSection />
            <ResearchSection />
          </div>
          <div className="min-w-0 flex-[1_1_380px]">
            <SoftwareSection />
            <ResearchInProgressSection />
          </div>
        </div>
        <FiguresSection onReveal={revealInSupplement} />
        <ReferencesSection />
        <SupplementSection open={openSupplement} onToggle={toggleSupplement} />
        <AuthorNoteSection />
      </main>
      <Footer />
    </TooltipProvider>
  );
};

export default CVWebsite;
