import React from 'react';

const Timeline: React.FC = () => {
  return (
    <section className="fade-in">
      <div className="prose prose-blue lg:prose-lg mx-auto">
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Project Timeline & Milestones
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-primary-50 text-left font-semibold text-primary-700">Milestone</th>
                <th className="px-4 py-3 bg-primary-50 text-left font-semibold text-primary-700">Target Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3">Drafts of Module 1–4 (History, Evolution, Building Agents)</td>
                <td className="px-4 py-3">June 15, 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Full Course Package (all modules, toolkits, code repository, slide templates)</td>
                <td className="px-4 py-3">July 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Co-Design Workshops with Early Adopter Professors</td>
                <td className="px-4 py-3">July 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-3">First Pilot: Delivery at Peking University CS Undergraduate</td>
                <td className="px-4 py-3">End of July 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Feedback Analysis & Revision for V1.1</td>
                <td className="px-4 py-3">August 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default Timeline;