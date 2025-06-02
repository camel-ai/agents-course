import React from 'react';

const ProjectObjective: React.FC = () => {
  return (
    <section className="fade-in">
      <div className="prose prose-blue lg:prose-lg mx-auto">
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Methodology
        </h2>
        
        <p>
          This research employs a mixed-methods approach combining quantitative and qualitative techniques to develop and evaluate intelligent agent systems. Our methodology is structured around three primary phases: design, implementation, and evaluation.
        </p>
        
        <h3 className="font-serif text-xl font-bold text-gray-800 mt-8 mb-4">
          Phase 1: Agent Architecture Design
        </h3>
        
        <p>
          The initial phase focuses on developing the theoretical framework and architecture for our intelligent agents. This includes:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Comprehensive literature review of existing agent models</li>
          <li>Development of core agent components: perception, reasoning, learning, and action modules</li>
          <li>Design of interaction protocols for human-agent communication</li>
          <li>Specification of agent knowledge representation structures</li>
        </ul>
        
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 my-6">
          <h4 className="font-medium text-gray-900 mb-3">Research Design Framework</h4>
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Component</th>
                <th className="py-2 px-4 bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Methodology</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 px-4 text-sm text-gray-900">User Modeling</td>
                <td className="py-2 px-4 text-sm text-gray-600">Bayesian inference, preference elicitation</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-900">Decision Making</td>
                <td className="py-2 px-4 text-sm text-gray-600">MCTS, utility-based reasoning</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-900">Learning</td>
                <td className="py-2 px-4 text-sm text-gray-600">Reinforcement learning, imitation learning</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-gray-900">Communication</td>
                <td className="py-2 px-4 text-sm text-gray-600">NLP with pragmatic reasoning models</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="font-serif text-xl font-bold text-gray-800 mt-8 mb-4">
          Phase 2: Implementation and Prototyping
        </h3>
        
        <p>
          The second phase involves implementing the designed architecture and developing functional prototypes:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Development of core agent algorithms in modular, extensible code</li>
          <li>Creation of simulation environments for initial testing</li>
          <li>Implementation of learning mechanisms for adaptive behavior</li>
          <li>Integration with natural language understanding components</li>
          <li>Development of explainability mechanisms for agent decisions</li>
        </ul>
        
        <p>
          Prototypes will be developed iteratively, with each iteration incorporating feedback and refinements from preliminary testing. We will employ agile development practices to ensure flexibility and responsiveness to emerging insights.
        </p>
        
        <h3 className="font-serif text-xl font-bold text-gray-800 mt-8 mb-4">
          Phase 3: Evaluation
        </h3>
        
        <p>
          The final phase consists of comprehensive evaluation through:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Controlled laboratory studies with specific task scenarios</li>
          <li>Field tests in realistic environments with diverse users</li>
          <li>Comparative analysis against baseline agent systems</li>
          <li>Long-term interaction studies to assess adaptation over time</li>
        </ul>
        
        <p>
          Evaluation metrics will include both objective performance measures (task completion, accuracy, efficiency) and subjective user experience measures (satisfaction, trust, perceived intelligence).
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

export default ProjectObjective;