import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © 2025 Agent Course Project Proposal
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
              Terms of Use
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          <p>
            This project proposal is presented for educational purposes only. Any similarity to actual research projects is coincidental.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;