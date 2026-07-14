import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Download, Eye, Github, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import WelcomeLoader from '../components/WelcomeLoader';
import profileImg from '../assets/profile_img.jpg';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Mouse movement tracking values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics configuration (feels weighted like real plastic/card)
  const springConfig = { mass: 1.2, stiffness: 90, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Map spring coordinates to translations and 3D rotations
  const rotateX = useTransform(springY, [-250, 250], [15, -15]);
  const rotateY = useTransform(springX, [-250, 250], [-15, 15]);
  // Z rotation creates a subtle pendulum swing wobble based on horizontal movement
  const rotateZ = useTransform(springX, [-250, 250], [-6, 6]);
  const translateX = useTransform(springX, [-250, 250], [-12, 12]);
  const translateY = useTransform(springY, [-250, 250], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate cursor offset from center of container
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <WelcomeLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen relative overflow-hidden bg-[#0B0B0B] text-white selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        
        {/* Subtle CSS Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Hero Section Container */}
        {!isLoading && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
          >
            {/* The outer container tracks mouse movements */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12"
            >
              
              {/* Left Side: Content */}
              <div className="lg:col-span-7 text-left flex flex-col justify-center order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Subtle Badge */}
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-400 mb-6 tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for freelance & full-time
                  </span>

                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05] text-white">
                    FRONTEND
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                      DEVELOPER
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-neutral-400 mb-8 max-w-xl leading-relaxed">
                    Crafting premium, high-performance web applications with modern interfaces. 
                    Specialized in building seamless user experiences using <span className="text-white font-medium">ReactJS</span>, <span className="text-white font-medium">Nest.js</span>, <span className="text-white font-medium">PHP</span>, and <span className="text-white font-medium">Tailwind CSS</span>.
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 items-center">
                    <Link to="/projects">
                      <motion.button
                        className="relative group overflow-hidden bg-white text-black px-8 py-4 rounded-xl font-semibold text-base hover:bg-neutral-100 transition-all duration-300 flex items-center space-x-2 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye size={18} />
                        <span>View Projects</span>
                      </motion.button>
                    </Link>

                    <motion.button
                      className="border border-neutral-800 bg-neutral-950/40 backdrop-blur-sm text-neutral-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-neutral-900/60 hover:border-neutral-700 transition-all duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = "/Dumindu Dulanjaya_CV___Full_Stack_Developer.pdf";
                        link.download = 'Dumindu_Dulanjaya_CV.pdf';
                        link.click();
                      }}
                    >
                      <Download size={18} />
                      <span>Download CV</span>
                    </motion.button>
                  </div>

                  {/* Social Quick Links */}
                  <div className="flex items-center gap-4 mt-8 pt-8 border-t border-neutral-900">
                    <span className="text-xs uppercase tracking-widest text-neutral-600 font-semibold">Connect:</span>
                    <a href="https://github.com/Dumindu-Dulanjaya" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="mailto:your-email@example.com" className="text-neutral-500 hover:text-white transition-colors">
                      <Mail size={20} />
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Hanging ID Card (Pendulum Physics) */}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                <div className="w-full max-w-[340px] px-4 relative">
                  
                  {/* Floating Idle Wrapper */}
                  <motion.div
                    animate={{ y: [-6, 6] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 4,
                      ease: "easeInOut"
                    }}
                    className="w-full"
                  >
                    {/* Hanger Clip decoration (Pivoting base) */}
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
                      <div className="w-8 h-3 bg-neutral-800 rounded-t-md border border-neutral-700 shadow-inner" />
                      <div className="w-12 h-4 bg-neutral-700 rounded-sm border border-neutral-600 flex items-center justify-center">
                        <div className="w-4 h-1.5 bg-neutral-900 rounded-full" />
                      </div>
                    </div>

                    {/* Mouse-Tracking Physics Card */}
                    <motion.div
                      style={{
                        transformOrigin: 'top center',
                        rotateX,
                        rotateY,
                        rotateZ,
                        x: translateX,
                        y: translateY,
                        transformStyle: 'preserve-3d'
                      }}
                      className="w-full bg-[#121212]/90 backdrop-blur-xl border border-neutral-800 rounded-3xl p-6 shadow-[0_0_50px_rgba(99,102,241,0.15)] hover:shadow-[0_0_50px_rgba(99,102,241,0.3)] transition-shadow duration-500 flex flex-col items-center text-center overflow-hidden cursor-grab active:cursor-grabbing"
                    >
                      {/* Grid overlay inside the card */}
                      <div 
                        className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-3xl"
                        style={{
                          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                          backgroundSize: '16px 16px'
                        }}
                      />

                      {/* Header Logo/Title inside ID */}
                      <div className="w-full flex justify-between items-center border-b border-neutral-800/80 pb-4 mb-6 relative z-10">
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-indigo-500" />
                          <span className="text-[10px] tracking-[0.2em] font-bold text-neutral-400 uppercase">SYSTEM ID</span>
                        </div>
                        <span className="text-[9px] tracking-[0.1em] font-mono text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                          ACTIVE // 2026
                        </span>
                      </div>

                      {/* Portrait Image (Colored version) */}
                      <div className="relative w-44 h-44 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 mb-6 group/image shadow-inner">
                        {profileImg ? (
                          <img
                            src={profileImg}
                            alt="Dumindu Dulanjaya"
                            className="w-full h-full object-cover transition-all duration-500 group-hover/image:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-neutral-600">
                            Portrait Image
                          </div>
                        )}
                        {/* Scan Line effect on photo */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent animate-[pulse_2s_infinite] pointer-events-none" />
                      </div>

                      {/* Member Info */}
                      <div className="w-full relative z-10">
                        <h2 className="text-xl font-bold tracking-tight text-white mb-1">
                          Dumindu Dulanjaya
                        </h2>
                        <p className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-4">
                          Frontend Developer
                        </p>

                        {/* Card metadata / specs */}
                        <div className="grid grid-cols-2 gap-2 text-left bg-neutral-950/60 border border-neutral-900 rounded-xl p-3 text-[10px] font-mono text-neutral-500">
                          <div>
                            <span className="block text-[8px] text-neutral-600 uppercase">Role</span>
                            <span className="text-neutral-300">Creator / Dev</span>
                          </div>
                          <div>
                            <span className="block text-[8px] text-neutral-600 uppercase">Location</span>
                            <span className="text-neutral-300">Sri Lanka</span>
                          </div>
                          <div className="col-span-2 border-t border-neutral-900/60 pt-1.5 mt-1.5">
                            <span className="block text-[8px] text-neutral-600 uppercase">Key Tech Stack</span>
                            <span className="text-indigo-300/90">React • NestJS • Tailwind</span>
                          </div>
                        </div>
                      </div>

                      {/* Barcode representation at bottom */}
                      <div className="w-full flex flex-col items-center mt-6 pt-4 border-t border-neutral-900/80 relative z-10 opacity-70">
                        <div className="h-6 w-full max-w-[200px] flex items-center gap-[2px] justify-center text-neutral-600 font-mono">
                          {/* Simulated Barcode */}
                          {[4, 2, 8, 1, 6, 2, 4, 3, 8, 2, 6, 1, 4, 8, 2, 5, 2, 7, 4, 2, 6, 1, 8].map((w, i) => (
                            <div 
                              key={i} 
                              className="bg-neutral-400 h-full" 
                              style={{ width: `${w * 0.5 + 1}px` }} 
                            />
                          ))}
                        </div>
                        <span className="text-[8px] font-mono text-neutral-600 mt-1">DUMINDU.DULANJAYA.2026</span>
                      </div>
                    </motion.div>
                  </motion.div>

                </div>
              </div>

            </div>

            {/* Scroll Down Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.button
                onClick={scrollToNext}
                className="p-2.5 rounded-full border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors duration-200 shadow-md animate-bounce"
              >
                <ArrowDown className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Services/Quick Preview Section */}
      {!isLoading && (
        <section className="relative z-10 py-24 bg-[#090909] border-t border-neutral-900 text-white transition-colors duration-300">
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '28px 28px'
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              What I Do
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Frontend Development',
                  description: 'Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
                  icon: '🎨'
                },
                {
                  title: 'Backend Development',
                  description: 'Building robust APIs and server-side applications with Node.js, Python, and cloud technologies.',
                  icon: '⚙️'
                },
                {
                  title: 'UI/UX Design',
                  description: 'Designing intuitive user experiences with attention to accessibility and modern design principles.',
                  icon: '✨'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl bg-[#121212]/50 border border-neutral-900 hover:border-neutral-800 hover:bg-[#161616] transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;