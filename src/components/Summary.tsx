import React from 'react';

const Summary: React.FC = () => {
  return (
    <section className="fade-in">
      <div className="prose prose-blue lg:prose-lg mx-auto">
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Summary
        </h2>
        
        <p> The AI Agent Course Project is a multi‐institutional academic collaboration designed to integrate the latest research in large-language-model (LLM)–powered AI agents into university curricula. By creating modular, peer‐reviewed teaching materials and customizable frameworks, this initiative will empower computer science departments worldwide to adopt and adapt cutting-edge content, thereby narrowing the gap between AI research breakthroughs and classroom instruction.
        </p>
        
        <h3 className="font-serif text-xl font-bold text-gray-800 mt-8 mb-4">
        Vision & Rationale
        </h3>

        <p className="mb-6">
        To establish a global standard for university-level education in AI agent development—one that is simultaneously academically rigorous, industry‐aligned, and readily adaptable by diverse teaching environments.
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Rapid Technological Evolution: The emergence of sophisticated LLMs has profoundly shifted the capabilities of autonomous agents (e.g., task planning, human-like dialogue, adaptive behavior). However, most degree programs lag behind these advancements.</li>
          <li>Curricular Agility: Instructors need modular, well-documented resources that they can reconfigure to suit their institutional goals, class sizes, and student backgrounds.</li>
          <li>Global Reach: By offering materials under an open-access license, we democratize access to advanced AI education, particularly benefiting institutions in emerging economies.</li>
        </ul>
        
        <div className="mt-8 flex justify-end">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
          >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Summary;