import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-lg">John Doe</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by John Doe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;