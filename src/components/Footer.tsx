import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full border-t border-neutral-900 bg-[#050505] py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex items-center gap-2 font-mono">
          <span className="text-yellow-500 font-bold">&lt;/&gt;</span>
          <span className="text-white font-bold tracking-wider uppercase">DUMINDU DULANJAYA</span>
          <span className="text-neutral-600">|</span>
          <span>© 2026 ALL RIGHTS RESERVED.</span>
        </div>

        {/* Right Side: Clean Minimalist Credits */}
        <div className="font-mono text-xs tracking-wide">
          DESIGNED & ARCHITECTED BY <span className="text-neutral-300 hover:text-yellow-500 transition cursor-pointer">DUMINDU</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;