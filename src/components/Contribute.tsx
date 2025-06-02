import React from 'react';
import { GraduationCap, School, Users } from 'lucide-react';

const roles = [
  {
    title: 'Peer-Review Contributors (PhD, CS Background – Selected Participants)',
    icon: GraduationCap,
    items: [
      'Actively contribute to the design, development, and refinement of course modules.',
      'Critically evaluate drafts for technical accuracy, pedagogical clarity, and alignment with current research.',
      'Provide structured feedback on instructional design, suggest improvements, and recommend additional resources or alternative project ideas.',
      'Collaborate closely with core authors during module iteration cycles to ensure quality and relevance.',
    ],
  },
  {
    title: 'Adopter Institutions & Professors',
    icon: School,
    items: [
      'Integrate modules into existing or new courses; report on student outcomes.',
      'Co-facilitate workshops to share insights and local adaptations with the broader community.',
      'Serve as case studies for best practices in real-world academic deployment.',
    ],
  },
  {
    title: 'Community Participants',
    icon: Users,
    items: [
      'Join an open-access community group to stay updated on project developments.',
      'Provide informal feedback on posted materials and participate in discussion threads.',
      'Help surface usability and clarity issues from a broader, diverse perspective.',
    ],
  },
];

const Contribute: React.FC = () => {
  return (
    <section className="w-full border-t border-gray-200 pt-8">
      <div className="flex flex-col gap-0 w-full">
        {/* Left: Title */}
        <div className="flex flex-col justify-start">
          <h2 className="mb-8 font-body text-2xl font-bold text-primary-600">Contribute</h2>
        </div>
        {/* Right: Three role boxes stacked vertically */}
        <div className="flex flex-col justify-start gap-8">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div key={role.title} className="flex-1 flex-col px-8 py-6 bg-white">
                <div className="flex flex-row items-center gap-2 mb-4">
                  <Icon className="w-6 h-6 text-primary-700" />
                  <h4 className="text-xl font-bold font-body text-primary-700"> {role.title}</h4>
                </div>
                <ul className="font-body text-base list-disc ml-5 text-gray-700 space-y-1">
                  {role.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contribute;