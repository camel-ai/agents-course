import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Vision from './components/Vision';
import ProjectObjective from './components/ProjectObjective';
import Timeline from './components/Timeline';
import FoundationCourses from './components/FoundationCourses';
import AdvancedCourses from './components/AdvancedCourses';
import Contribute from './components/Contribute';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="p-2 bg-white rounded-full shadow-md"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col`}
      >
        <div className="px-6 pt-20 pb-6 flex-1 overflow-y-auto">
          <nav className="space-y-4">
            {['abstract', 'methodology', 'results', 'discussion', 'conclusion', 'references'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  const element = document.getElementById(section);
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 capitalize text-lg"
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 h-screen sticky top-0 overflow-y-auto">
          <div className="px-6 py-4">
            <Navigation />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 transition-all duration-300 ease-in-out bg-primary-50">
            <div className="p-12 md:p-8">
              <Header />
            </div>
            <div id="vision" className="p-12 md:p-8">
              <Vision />
            </div>
            <div id="project-objective" className="p-12 md:p-8 ">
              <ProjectObjective />
            </div>
            <div id="timeline" className="p-12 md:p-8">
              <Timeline />
            </div>
            <div id="foundation-courses" className="p-12 md:p-8">
              <FoundationCourses />
            </div>
            <div id="advanced-courses" className="p-12 md:p-8">
              <AdvancedCourses />
            </div>
            <div id="contribute" className="p-12 md:p-8">
              <Contribute />
            </div>
            <div id="apply" className="p-12 md:p-8">
              <iframe 
                src="https://eigent-ai.notion.site/ebd/206511c70ba2813a9b84e67c018198c2" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                allowFullScreen
                title="Notion Form"
              />
            </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;