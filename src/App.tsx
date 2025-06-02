import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Summary from './components/Summary';
import ProjectObjective from './components/ProjectObjective';
import Timeline from './components/Timeline';
import FoundationCourses from './components/FoundationCourses';
import AdvancedCourses from './components/AdvancedCourses';
import Footer from './components/Footer';
import { Download, Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
          
          <div className="mt-8 border-t border-gray-200 pt-6">
            <a 
              href="#" 
              className="flex items-center px-4 py-3 text-primary-600 hover:bg-primary-50 rounded-lg"
            >
              <Download size={20} className="mr-3" />
              <span>Download Full PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-primary-700 mb-6">Agent Course</h2>
            <Navigation />
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a 
                href="#" 
                className="flex items-center px-4 py-3 text-primary-600 hover:bg-primary-50 rounded-lg"
              >
                <Download size={18} className="mr-2" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 transition-all duration-300 ease-in-out">
          <Header />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div id="summary">
              <Summary />
            </div>
            <div id="project-objective">
              <ProjectObjective />
            </div>
            <div id="timeline">
              <Timeline />
            </div>
            <div id="foundation-courses">
              <FoundationCourses />
            </div>
            <div id="advanced-courses">
              <AdvancedCourses />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;