import React from 'react';

const objectives = [
  {
    title: 'Curriculum Development',
    items: [
      'Author and peer-review foundational modules covering theory, system design, implementation, and evaluation of LLM-driven agents.',
      'Produce comprehensive "course in a box" packages: lecture slides, reading lists, code labs, and assessment quiz.',
    ],
  },
  {
    title: 'Instructor Empowerment',
    items: [
      'Provide a flexible module architecture—each unit can be taught standalone, sequentially, or integrated into existing AI courses.',
      'Host live "co-design" workshops where faculty collaborate with project authors to tailor materials to specific program outcomes.',
    ],
  },
  {
    title: 'Scalable Customization',
    items: [
      'Pilot the course at two flagship institutions (e.g., Peking University) and gather quantitative and qualitative feedback.',
      'Establish a community forum and regular webinar series for continuous improvement, versioning, and cross‐institutional exchange.',
    ],
  },
];

const ProjectObjective: React.FC = () => {
  return (
    <section className="w-full">
      <img 
            src="https://images.pexels.com/photos/17484901/pexels-photo-17484901/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-boundaries-set-in-place-to-secure-safe-accountable-biotechnology-it-was-created-by-artist-khyati-treha.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="CAMEL-AI" 
            className="w-full object-cover object-center mb-8" 
            style={{ height: '150px' }} 
          />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left: Title and intro */}
        <div className="flex-1 flex-col justify-start pr-12">
          <h2 className="mb-4 font-body text-2xl font-bold text-primary-600">Project Objectives</h2>
          <div className="text-gray-800 text-base font-body">
            Our project aims to provide a comprehensive, modular curriculum and community for LLM-driven agent education, empowering instructors and scaling impact globally.
          </div>
        </div>
        {/* Right: Objectives */}
        <div className="flex-1 flex flex-col gap-6 justify-start">
          {objectives.map((obj) => (
            <div key={obj.title} className="flex flex-col mb-2">
              <div className="flex items-center mb-3">
                <span className="font-bold text-lg text-grey-700 font-body">{obj.title}</span>
              </div>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 font-body">
                {obj.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectObjective;