import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-row justify-between mb-8"></div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left: Title */}
        <div className="flex-1 flex-col justify-start pr-12">
          <h3 className=" mb-4 font-body text-2xl font-bold text-primary-600">Vision & Rationale</h3>
          <div className=" text-gray-800 text-base font-body">
            To establish a global standard for university-level education in AI agent development—one that is simultaneously academically rigorous, industry‐aligned, and readily adaptable by diverse teaching environments.
          </div>
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex-col justify-start">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start pb-4">
              <span className="text-gray-700 text-lg font-bold font-body mb-2">Rapid Technological Evolution</span>
              <span className="text-gray-700 text-base font-body">The emergence of sophisticated LLMs has profoundly shifted the capabilities of autonomous agents (e.g., task planning, human-like dialogue, adaptive behavior). However, most degree programs lag behind these advancements.</span>
            </div>
            <div className="flex flex-col items-start pb-4">
              <span className="text-gray-700 text-lg font-bold font-body mb-2">Curricular Agility</span>
              <span className="text-gray-700 text-base font-body">Instructors need modular, well-documented resources that they can reconfigure to suit their institutional goals, class sizes, and student backgrounds.</span>
            </div>
            <div className="flex flex-col items-start pb-4">
              <span className="text-gray-700 text-lg font-bold font-body mb-2">Global Reach</span>
              <span className="text-gray-700 text-base font-body">By offering materials under an open-access license, we democratize access to advanced AI education, particularly benefiting institutions in emerging economies.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;