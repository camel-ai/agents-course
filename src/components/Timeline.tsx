import React from 'react';

const Timeline: React.FC = () => {
  return (
    <section className="fade-in">
      <div className="prose prose-blue lg:prose-lg mx-auto">
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full rounded-lg text-sm">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-primary-50 font-body text-left font-semibold text-primary-700">Timeline</th>
                <th className="px-4 py-3 bg-primary-50 font-body text-left font-semibold text-primary-700">Target Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-body">Drafts of Module 1–4 (History, Evolution, Building Agents)</td>
                <td className="px-4 py-3 font-body">June 15, 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-body">Full Course Package (all modules, toolkits, code repository, slide templates)</td>
                <td className="px-4 py-3 font-body">July 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-body">Co-Design Workshops with Early Adopter Professors</td>
                <td className="px-4 py-3 font-body">July 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-body">First Pilot: Delivery at Peking University CS Undergraduate</td>
                <td className="px-4 py-3 font-body">End of July 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-body">Feedback Analysis & Revision for V1.1</td>
                <td className="px-4 py-3 font-body">August 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Timeline;