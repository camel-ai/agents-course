import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm font-body">
              © 2025 CAMEL-AI
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://camel-ai.org" className="text-gray-500 hover:text-gray-800 text-sm font-body">
              camel-ai.org
            </a>
            <a href="mailto:camel-ai@camel-ai.org" className="text-gray-500 hover:text-gray-800 text-sm font-body">
              camel-ai@camel-ai.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;