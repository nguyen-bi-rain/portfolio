import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import AboutSection from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import ContactSection from "./components/Contact";
import ExperienceSection from "./components/Experience";
import HeroSection from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/Projects";
import Skill from "./components/Skill";

const SECTIONS = [
  { id: 'hero', number: '01', nameKey: 'nav.home' },
  { id: 'about', number: '02', nameKey: 'nav.about' },
  { id: 'skills', number: '03', nameKey: 'nav.skills' },
  { id: 'projects', number: '04', nameKey: 'nav.projects' },
  { id: 'experience', number: '05', nameKey: 'nav.experience' },
  { id: 'contact', number: '06', nameKey: 'nav.contact' },
];

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up IntersectionObserver to detect which section is snap-scrolled into view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      threshold: 0.55,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = SECTIONS.findIndex((sec) => sec.id === entry.target.id);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSectionIndex = (index: number) => {
    if (index < 0 || index >= SECTIONS.length) return;
    const targetEl = document.getElementById(SECTIONS[index].id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard navigation support (ArrowUp, ArrowDown, PageUp, PageDown)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSectionIndex(activeIndex + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSectionIndex(activeIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const progressPercentage = ((activeIndex + 1) / SECTIONS.length) * 100;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0B0F17] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <AnimatedBackground />
      <NavBar activeSectionId={SECTIONS[activeIndex].id} onNavigate={scrollToSectionIndex} sections={SECTIONS} />

      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-800/60 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 shadow-[0_0_12px_#00F0FF]"
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Right Side Vertical Scroll Jacking Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4">
        {SECTIONS.map((sec, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSectionIndex(idx)}
              className="group relative flex items-center justify-end p-2 cursor-pointer focus:outline-none"
              aria-label={`Scroll to ${t(sec.nameKey)}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-10 px-2.5 py-1 text-xs font-mono rounded bg-slate-900/90 text-cyan-400 border border-slate-700/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {sec.number} // {t(sec.nameKey)}
              </span>

              {/* Indicator Dot */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-8 bg-gradient-to-b from-cyan-400 to-emerald-400 shadow-[0_0_12px_rgba(0,240,255,0.8)]'
                    : 'w-3 h-3 bg-slate-700 hover:bg-cyan-400/60 hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Main Scroll-Jacking Snap Container */}
      <div ref={containerRef} className="scroll-snap-container relative z-10 w-full h-screen">
        <section id="hero" className="scroll-snap-section flex items-center justify-center">
          <HeroSection onExplore={() => scrollToSectionIndex(1)} onContact={() => scrollToSectionIndex(5)} />
        </section>

        <section id="about" className="scroll-snap-section flex items-center justify-center">
          <AboutSection />
        </section>

        <section id="skills" className="scroll-snap-section flex items-center justify-center">
          <Skill />
        </section>

        <section id="projects" className="scroll-snap-section flex items-center justify-center">
          <ProjectsSection />
        </section>

        <section id="experience" className="scroll-snap-section flex items-center justify-center">
          <ExperienceSection />
        </section>

        <section id="contact" className="scroll-snap-section flex flex-col justify-between">
          <div className="w-full flex-1 flex items-center justify-center pt-20 sm:pt-24 pb-4">
            <ContactSection />
          </div>
          <footer className="py-4 px-6 text-center border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-md z-20">
            <p className="text-slate-400 font-mono text-xs">
              {t('footer.copyright')}
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
