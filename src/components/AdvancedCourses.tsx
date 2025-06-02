import React from 'react';

const AdvancedCourses: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {/* Left: Title */}
        <div className="flex flex-col justify-start pr-12">
          <h2 className="mb-4 font-body text-2xl font-bold text-primary-600">2. Advanced Courses</h2>
        </div>
        {/* Right: Content (overview and two small boxes stacked vertically) */}
        <div className="md:col-span-2 flex flex-col justify-start gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-gray-800 mb-2 font-body">
              The advanced course delves into cutting-edge topics in AI agent design, focusing on the latest advancements in Large Language Models (LLMs), multi-agent collaboration, and real-world deployment. Students will engage in hands-on projects, explore state-of-the-art frameworks, and learn to build robust, scalable AI solutions for complex environments.
            </p>
          </div>
          <div className="flex flex-col px-8 py-4 bg-white">
            <h4 className="text-lg font-bold text-primary-700 font-body">AI Innovator</h4>
            <p className="text-gray-600 font-body">Building with DP Technology</p>
          </div>
          <div className="flex flex-col px-8 py-4 bg-white">
            <h4 className="text-lg font-bold text-primary-700 font-body">More coming soon</h4>
          </div>
          <div className="flex flex-row gap-2">
            <h4 className="text-base font-regular text-primary-700 mb-2">For collaboration, contact us via</h4>
            <a
              href="mailto:camel-ai@camel-ai.org"
              className="text-gray-500 hover:text-primary-00 underline text-base font-body"
              target="_blank"
              rel="noopener noreferrer"
            >
              camel-ai@camel-ai.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedCourses;