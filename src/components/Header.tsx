import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full pb-16 border-b border-gray-200">
      <div className="flex flex-row justify-between mb-8">
        <div className="w-full overflow-hidden" style={{ height: '200px' }}>
          <img
            src="https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg"
            alt="Header"
            className="w-full object-cover object-top"
            style={{ height: '200px' }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-stretch min-h-[220px]">
        {/* Left: Title and subtitle */}
        <div className="flex-1 flex flex-col justify-start">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-body leading-tight mb-4">Agent Course<br /><span className="text-lg font-normal text-gray-700">By CAMEL-AI</span></h1>
        </div>
        {/* Right: Summary */}
        <div className="flex-1 flex flex-col justify-start">
          <p className="text-gray-800 text-base font-body">
            The AI Agent Course Project is a multi‐institutional academic collaboration designed to integrate the latest research in large-language-model (LLM)–powered AI agents into university curricula. By creating modular, peer‐reviewed teaching materials and customizable frameworks, this initiative will empower computer science departments worldwide to adopt and adapt cutting-edge content, thereby narrowing the gap between AI research breakthroughs and classroom instruction.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;