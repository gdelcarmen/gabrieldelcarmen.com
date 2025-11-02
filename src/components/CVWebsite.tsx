import { useEffect, useState } from 'react';
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import TimelineModal from './layout/TimelineModal';
import EducationSection from './sections/EducationSection';
import AboutSection from './sections/AboutSection';
import PublicationsSection from './sections/PublicationsSection';
import ResearchSection from './sections/ResearchSection';
import ProgrammingSection from './sections/ProgrammingSection';
import ResearchInProgressSection from './sections/ResearchInProgressSection';
import HonorsSection from './sections/HonorsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import FutureProjectModal from './sections/FutureProjectModal';
import { navSections } from '../data/navigation';
import { futureProjectsData } from '../data/futureProjects';

const CVWebsite = () => {
  const [activeSection, setActiveSection] = useState<string>(navSections[0].id);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>(() =>
    navSections.reduce<Record<string, boolean>>((acc, section, index) => {
      acc[section.id] = index === 0;
      return acc;
    }, {})
  );
  const [showTimeline, setShowTimeline] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setVisibleSections(
        navSections.reduce<Record<string, boolean>>((acc, section) => {
          acc[section.id] = true;
          return acc;
        }, {})
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          if (!id) {
            return;
          }

          if (entry.isIntersecting) {
            if (entry.intersectionRatio > 0.5) {
              setActiveSection(id);
            }

            setVisibleSections((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      {
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0.1, 0.5],
      }
    );

    navSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navSections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index);
  };

  const closeProjectModal = () => {
    setSelectedProjectIndex(null);
  };

  const isSectionVisible = (sectionId: string) => Boolean(visibleSections[sectionId]);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      <Header />
      <Navigation sections={navSections} activeSection={activeSection} onNavigate={handleNavClick} />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <EducationSection isVisible={isSectionVisible('education')} />
        <AboutSection isVisible={isSectionVisible('about')} />
        <PublicationsSection isVisible={isSectionVisible('publications')} />
        <ResearchSection isVisible={isSectionVisible('research')} />
        <ProgrammingSection isVisible={isSectionVisible('programming')} />
        <ResearchInProgressSection
          isVisible={isSectionVisible('future')}
          projects={futureProjectsData}
          onProjectClick={handleProjectClick}
        />
        <HonorsSection isVisible={isSectionVisible('honors')} />
        <ExperienceSection isVisible={isSectionVisible('experience')} />
        <SkillsSection isVisible={isSectionVisible('skills')} />
        <ContactSection isVisible={isSectionVisible('contact')} />
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowTimeline(!showTimeline)}
          className="rounded-full p-3 shadow-lg transition-colors bg-white hover:bg-gray-100"
          aria-label="Toggle timeline view"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
          </svg>
        </button>
      </div>

      {showTimeline && <TimelineModal onClose={() => setShowTimeline(false)} />}

      {selectedProjectIndex !== null && (
        <FutureProjectModal
          project={futureProjectsData[selectedProjectIndex]}
          onClose={closeProjectModal}
        />
      )}

      <Footer />
    </div>
  );
};

export default CVWebsite;
