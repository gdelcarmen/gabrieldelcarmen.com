import { useEffect, useRef, useState } from 'react';
import { runningSections } from '../../data/navigation';
import { profile } from '../../data/profile';

// Height of the reading line below the top of the viewport: the section that
// crosses it is the one named in the running head.
const readingLine = () => Math.max(120, window.innerHeight * 0.3);

const RunningHead = () => {
  const [label, setLabel] = useState('');
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const page = document.documentElement;
      const scrollable = page.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;

      const line = readingLine();
      const atEnd = window.scrollY > 0 && window.scrollY + window.innerHeight >= page.scrollHeight - 4;
      const crossing: string[] = [];
      let lastPassed = '';
      for (const section of runningSections) {
        const rect = document.getElementById(section.id)?.getBoundingClientRect();
        if (!rect || rect.top > line) continue;
        lastPassed = section.running;
        if (rect.bottom > line && !crossing.includes(section.running)) crossing.push(section.running);
      }
      // Side-by-side columns put two sections on the reading line at once.
      const current = atEnd
        ? runningSections[runningSections.length - 1].running
        : crossing.length > 0
          ? crossing.slice(0, 2).join(' · ')
          : lastPassed;
      setLabel(current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <div className="sticky top-0 z-30 flex justify-between gap-x-4 border-b border-ink bg-white pb-2.5 pt-3.5 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-muted sm:gap-x-6 sm:pb-3 sm:pt-4 sm:text-[12.5px] print:static print:border-b-0">
      <span className={label ? 'hidden sm:inline' : ''}>Curriculum vitae</span>
      <span key={label} className={`running-label ${label ? 'text-ink' : 'hidden sm:inline'}`} aria-live="off">
        {label || profile.runningName}
      </span>
      <span>Updated {profile.updated}</span>
      <span
        ref={progressRef}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-crimson print:hidden"
      />
    </div>
  );
};

export default RunningHead;
