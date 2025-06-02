import React from 'react';

const FoundationCourses: React.FC = () => {
  return (
    <section className="w-full border-t border-gray-200 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {/* Left: Overview */}
        <div className="flex flex-col justify-start pr-12">
          <h2 className="mb-4 font-body text-2xl font-bold text-primary-600">1. Foundation Courses</h2>
        </div>
        {/* Right: Two small boxes stacked vertically */}
        <div className="md:col-span-2 flex flex-col justify-start gap-8">
          <div className="flex flex-col gap-4">
          <p className="text-gray-800 mb-2 font-body">
            This undergraduate-level course introduces students to the fundamentals of intelligent agents, with a focus on modern Large Language Model (LLM)-powered systems. The course combines conceptual foundations with practical implementation, aiming to build both theoretical understanding and hands-on experience.
          </p>
          <p className="text-gray-800 mb-2 font-body">
            Students will explore the evolution of AI agents, core components such as perception, reasoning, planning, and memory, and how these are applied in LLM-based architectures. The course also covers multi-agent systems, tool use, and responsible AI development.
          </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-primary-700 mb-2 font-body">Course components include:</h4>
            <ul className="list-disc ml-5 text-gray-700 space-y-1 font-body">
              <li><span className="font-bold">Course Book:</span> A digital course book and course material</li>
              <li><span className="font-bold">Package:</span> Lecture slides, Code labs, Quizzes and interactive activities for each module</li>
              <li><span className="font-bold">Open Challenge:</span> A capstone project where students build and deploy their own agent</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-primary-700 mb-2 font-body">Related material</h4>
            <ul className="list-disc ml-5 text-gray-700 space-y-1 font-body">
              <li><a href="https://camel-ai.github.io/camel_asset/course/course_book.pdf" target="_blank" rel="noopener noreferrer">Course Book Preview</a></li>
              <li><a href="https://camel-ai.github.io/camel_asset/course/camel_framework_education.pdf" target="_blank" rel="noopener noreferrer">CAMEL Framework Education Slides</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationCourses;