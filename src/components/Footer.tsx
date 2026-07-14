import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090909] border-t border-neutral-900 text-neutral-400 py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-5 w-5 text-yellow-500" />
            <span className="font-bold text-white text-sm">Dumindu Dulanjaya</span>
          </div>
          
          <div className="flex items-center space-x-1.5 text-xs font-mono text-neutral-500">
            <span>© {currentYear} Made with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-current" />
            <span>by Dumindu dulanjaya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;