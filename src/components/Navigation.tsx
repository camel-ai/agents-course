import React, { useEffect, useRef, useState } from 'react';

const sections = [
  { id: 'summary', label: 'Introduction' },
  { id: 'vision', label: 'Vision' },
  { id: 'project-objective', label: 'Project Objective' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'foundation-courses', label: 'Foundation Courses' },
  { id: 'advanced-courses', label: 'Advanced Courses' },
  { id: 'contribute', label: 'Collaborate with Us' },
  { id: 'apply', label: 'Apply Now' }
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
        slider.style.transform = `translateY(${rect.top - parentRect.top + rect.height / 2 - 8}px)`;
      }
    }
  }, [active]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="relative space-y-1" style={{ minHeight: 260 }}>
      <div className="flex flex-row items-center mb-2">
        <img src="https://camel-ai.github.io/camel_asset/logo/camel_logo.svg" alt="CAMEL-AI" className=" h-10" />
      </div>
      <div className="absolute left-0 top-0 h-full flex flex-col items-center pointer-events-none" style={{ zIndex: 10, width: 24 }}>
        <div
          ref={sliderRef}
          className="absolute left-4 w-1 h-6 bg-primary-500 transition-transform duration-300 mt-10"
          style={{ minWidth: 4, minHeight: 16 }}
        />
      </div>
      <div className="relative z-0">
        {sections.map((section, i) => (
          <button
            key={section.id}
            ref={el => (btnRefs.current[i] = el)}
            onClick={() => scrollToSection(section.id)}
            className={`relative flex items-center w-full pl-4 pr-3 py-2 text-left text-gray-600 hover:bg-primary-50 transition-colors duration-200 ${active === section.id ? 'font-regular text-base font-body text-primary-700' : 'text-base font-body font-regular'}`}
            style={{ zIndex: 1 }}
          >
            <span className="ml-4">{section.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;