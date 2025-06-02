import React from 'react';

const AdvancedCourses: React.FC = () => {
  return (
    <section className="fade-in">
      <div className="prose prose-blue lg:prose-lg mx-auto">
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Conclusion
        </h2>
        
        <p>
          This project proposal outlines an ambitious yet achievable research agenda for developing the next generation of intelligent agents. By focusing on contextual understanding, adaptive learning mechanisms, and transparent decision-making, we aim to create agent systems that better serve human needs while maintaining appropriate boundaries and building user trust.
        </p>
        
        <p>
          Our research methodology combines theoretical development with practical implementation and rigorous evaluation. This approach ensures that our contributions will be both academically significant and practically valuable across multiple domains.
        </p>
        
        <h3 className="font-serif text-xl font-bold text-gray-800 mt-8 mb-4">
          Expected Contributions
        </h3>
        
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 my-6">
          <h4 className="font-medium text-gray-900 mb-3">Summary of Key Contributions</h4>
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Contribution Area</th>
                <th className="py-2 px-4 bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 px-4 text-sm text-gray-900">Theoretical</td>
                <td className="py-2 px-4 text-sm text-gray-600">Novel agent architecture integrating contextual understanding with adaptive behavior</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-900">Technical</td>
                <td className="py-2 px-4 text-sm text-gray-600">Implementation of modular, extensible agent components with strong performance characteristics</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-900">Methodological</td>
                <td className="py-2 px-4 text-sm text-gray-600">Evaluation framework for assessing agent effectiveness across multiple dimensions</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-900">Practical</td>
                <td className="py-2 px-4 text-sm text-gray-600">Deployable agent systems for educational and professional applications</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="font-serif text-xl font-bold text-gray-800 mt-8 mb-4">
          Timeline and Next Steps
        </h3>
        
        <p>
          The proposed research will proceed according to the following timeline:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Months 1-3:</strong> Literature review and architecture design</li>
          <li><strong>Months 4-9:</strong> Implementation of core agent components</li>
          <li><strong>Months 10-15:</strong> Initial testing and refinement</li>
          <li><strong>Months 16-21:</strong> Field evaluations and data collection</li>
          <li><strong>Months 22-24:</strong> Analysis, documentation, and dissemination</li>
        </ol>
        
        <p className="mt-6">
          Immediate next steps include securing necessary resources, establishing collaborations with domain experts, and finalizing the detailed experimental protocols for the evaluation phase.
        </p>
        
        <p className="font-medium mt-6">
          This research represents an important step forward in our understanding of intelligent agents and their potential to enhance human capabilities across a range of contexts. We are excited about the possibilities this work opens up and look forward to contributing to the advancement of this important field.
        </p>
        
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

export default AdvancedCourses;