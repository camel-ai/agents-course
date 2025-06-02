import React, { useEffect, useRef, useState } from 'react';

const sections = [
  { id: 'summary', label: 'Summary' },
  { id: 'project-objective', label: 'Project Objective' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'foundation-courses', label: 'Foundation Courses' },
  { id: 'advanced-courses', label: 'Advanced Courses' },
  { id: 'collaborate-contribute', label: 'Collaborate with Us' }
];

const Navigation: React.FC = () => {
  const [active, setActive] = useState(sections[0].id);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActive(sections[i].id);
            found = true;
            break;
          }
        }
      }
      if (!found) setActive(sections[0].id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const idx = sections.findIndex(s => s.id === active);
    const btn = btnRefs.current[idx];
    const slider = sliderRef.current;
    if (btn && slider) {
      const rect = btn.getBoundingClientRect();
      const parentRect = btn.parentElement?.getBoundingClientRect();
      if (parentRect) {
        slider.style.transform = `translateY(${rect.top - parentRect.top}px)`;
        slider.style.height = `${rect.height}px`;
      }
    }
  }, [active]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="relative space-y-1" style={{ minHeight: 260 }}>
      <div
        ref={sliderRef}
        className="absolute left-0 w-full flex items-center pointer-events-none transition-transform duration-300"
        style={{ zIndex: 0 }}
      >
        <div className="mx-1 w-3 h-3 bg-primary-500 rounded-md shadow-md transition-all duration-300" style={{ minWidth: 12, minHeight: 12 }} />
      </div>
      {sections.map((section, i) => (
        <button
          key={section.id}
          ref={el => (btnRefs.current[i] = el)}
          onClick={() => scrollToSection(section.id)}
          className={`relative flex items-center w-full px-3 py-2 text-left rounded-md text-gray-700 hover:bg-primary-50 transition-colors duration-200 ${active === section.id ? 'font-bold text-primary-700' : ''}`}
          style={{ zIndex: 1 }}
        >
          <span className="ml-4">{section.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;