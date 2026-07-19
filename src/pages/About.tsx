import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profileImg from '../assets/profile_img.jpg';
import { SplineScene } from '../components/ui/splite';
import { Card } from '../components/ui/card';
import { Spotlight } from '../components/ui/spotlight';
import { TechArchitecture } from '../components/ui/tech-architecture';
import {
  Code,
  Database,
  Smartphone,
  Palette,
  GitBranch,
  Server,
  Zap
} from 'lucide-react';

const About = () => {
  // Mouse movement tracking values for the ID Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics configuration
  const springConfig = { mass: 1.2, stiffness: 90, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Map spring coordinates to translations and 3D rotations
  const rotateX = useTransform(springY, [-250, 250], [15, -15]);
  const rotateY = useTransform(springX, [-250, 250], [-15, 15]);
  const rotateZ = useTransform(springX, [-250, 250], [-6, 6]);
  const translateX = useTransform(springX, [-250, 250], [-12, 12]);
  const translateY = useTransform(springY, [-250, 250], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const skills = [
    { name: 'React', icon: <Code className="w-8 h-8" />, level: 95 },
    { name: 'TypeScript', icon: <Code className="w-8 h-8" />, level: 90 },
    { name: 'Node.js', icon: <Server className="w-8 h-8" />, level: 88 },
    { name: 'Python', icon: <Zap className="w-8 h-8" />, level: 85 },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, level: 82 },
    { name: 'UI/UX Design', icon: <Palette className="w-8 h-8" />, level: 88 },
    { name: 'Mobile Dev', icon: <Smartphone className="w-8 h-8" />, level: 30 },
    { name: 'Git', icon: <GitBranch className="w-8 h-8" />, level: 92 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-[#0B0B0B] text-white transition-colors duration-300">
      {/* Subtle Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-yellow-500 font-semibold block mb-2">ABOUT</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ME.</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            I'm a passionate Full Stack Developer with a love for creating dynamic, user-friendly web applications. With expertise in both frontend and backend technologies, I strive to build seamless digital experiences that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-center">
          {/* Bio Section */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">My Journey</h2>
            <div className="space-y-6 text-neutral-400 text-base sm:text-lg leading-relaxed font-light">
              <p>
                My journey in tech started with a fascination for how things work behind the scenes, and it has evolved into a passion for creating high-performance digital environments.
              </p>
              <p>
                I’m a dedicated undergraduate student currently pursuing my studies at the <span className="text-white font-medium">Institute of Technology, University of Moratuwa (ITUM)</span>. I specialize in web technologies, software architecture, and interactive client layouts.
              </p>
              <p>
                As I continue my academic journey, I actively seek opportunities to expand my skills through hands-on projects, collaborations, and continuous learning. I enjoy contributing to open-source systems, learning from tech communities, and staying updated with advancements in the dev ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Interactive ID Badge Section (Right Side) */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 flex justify-center items-center py-6"
          >
            <div className="w-full max-w-[320px] relative">
              
              {/* Floating idle wrapper */}
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
                {/* Hanger clip */}
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
                  <div className="w-8 h-3 bg-neutral-850 rounded-t-md border border-neutral-700 shadow-inner" />
                  <div className="w-12 h-4 bg-neutral-800 rounded-sm border border-neutral-750 flex items-center justify-center">
                    <div className="w-4 h-1.5 bg-neutral-950 rounded-full" />
                  </div>
                </div>

                {/* ID Badge Card Body */}
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
                  className="w-full bg-[#121212]/95 backdrop-blur-xl border border-neutral-800 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:shadow-[0_0_50px_rgba(234,179,8,0.15)] transition-shadow duration-500 flex flex-col items-center text-center overflow-hidden cursor-grab active:cursor-grabbing"
                >
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-3xl"
                    style={{
                      backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                      backgroundSize: '16px 16px'
                    }}
                  />

                  {/* Top identifier */}
                  <div className="w-full flex justify-between items-center border-b border-neutral-850 pb-4 mb-6 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <span className="text-[9px] tracking-[0.2em] font-bold text-neutral-400 uppercase">SYSTEM ID</span>
                    </div>
                    <span className="text-[8px] tracking-[0.1em] font-mono text-yellow-500 bg-yellow-500/5 px-2 py-0.5 rounded border border-yellow-500/10">
                      MEMBER // ITUM
                    </span>
                  </div>

                  {/* Profile image (Grayscale version inside ID) */}
                  <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 mb-6 shadow-inner">
                    {profileImg ? (
                      <img
                        src={profileImg}
                        alt="Dumindu Dulanjaya"
                        className="w-full h-full object-cover filter grayscale contrast-125"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-600">
                        Portrait Image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent pointer-events-none" />
                  </div>

                  {/* Member details */}
                  <div className="w-full relative z-10">
                    <h2 className="text-lg font-bold tracking-tight text-white mb-0.5">
                      Dumindu Dulanjaya
                    </h2>
                    <p className="text-[10px] font-semibold tracking-wider text-yellow-500 uppercase mb-4">
                      Frontend Developer
                    </p>

                    {/* Metadata fields */}
                    <div className="grid grid-cols-2 gap-2 text-left bg-neutral-950/80 border border-neutral-900 rounded-xl p-3 text-[9px] font-mono text-neutral-500">
                      <div>
                        <span className="block text-[7px] text-neutral-600 uppercase">Role</span>
                        <span className="text-neutral-300">Creator / Dev</span>
                      </div>
                      <div>
                        <span className="block text-[7px] text-neutral-600 uppercase">Location</span>
                        <span className="text-neutral-300">Sri Lanka</span>
                      </div>
                      <div className="col-span-2 border-t border-neutral-900/60 pt-1.5 mt-1.5">
                        <span className="block text-[7px] text-neutral-600 uppercase">Key Tech Stack</span>
                        <span className="text-yellow-400/90">React • NestJS • Tailwind</span>
                      </div>
                    </div>
                  </div>

                  {/* Simulated barcode */}
                  <div className="w-full flex flex-col items-center mt-6 pt-4 border-t border-neutral-850 relative z-10 opacity-60">
                    <div className="h-6 w-full max-w-[180px] flex items-center gap-[2px] justify-center text-neutral-600 font-mono">
                      {[3, 2, 6, 1, 8, 2, 4, 3, 5, 2, 6, 1, 4, 8, 2, 4, 2, 7, 3, 2, 6, 1, 8].map((w, i) => (
                        <div 
                          key={i} 
                          className="bg-neutral-400 h-full" 
                          style={{ width: `${w * 0.5 + 1}px` }} 
                        />
                      ))}
                    </div>
                    <span className="text-[7px] font-mono text-neutral-600 mt-1">DUMINDU.DULANJAYA.2026</span>
                  </div>

                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Skills Section (Restructured 2-Column Spotlight Spline Layout) */}
        <motion.div
          className="mt-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl font-extrabold text-white text-center mb-16 uppercase tracking-tight"
            variants={itemVariants}
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Spotlight 3D Card wrapper (Spline Scene with overflow-visible) */}
            <div className="lg:col-span-6 flex overflow-visible">
              <Card className="w-full bg-[#121212] border border-neutral-900 rounded-3xl overflow-visible flex flex-col justify-between p-6 relative min-h-[500px] lg:h-full">
                <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  size={320}
                />
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-yellow-500 font-semibold block mb-2">Interactive 3D Art</span>
                    <h3 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 uppercase tracking-tight">
                      Interactive Spline Scene
                    </h3>
                    <p className="mt-2 text-neutral-400 text-xs font-light leading-relaxed">
                      Hover and interact with this real-time 3D spline scene. Designed to highlight high-fidelity interface design paradigms.
                    </p>
                  </div>
                  
                  {/* Spline Canvas element */}
                  <div className="flex-1 relative mt-2 rounded-2xl overflow-hidden bg-neutral-950/40 border border-neutral-900/50 min-h-[300px]">
                    <SplineScene 
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column: Premium Tech Architecture (Pillars & Stack tags) */}
            <div className="lg:col-span-6 flex">
              <TechArchitecture />
            </div>

          </div>
        </motion.div>

        {/* Education & Experience */}
        <motion.div
          className="mt-32 grid md:grid-cols-2 gap-12 border-t border-neutral-900 pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">Education</h3>
            <div className="space-y-8">
              <div className="border-l-2 border-yellow-500 pl-4">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                  2023 - Present
                </span>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide">
                  National Diploma in Technology (IT)
                </h4>
                <p className="text-yellow-500 font-mono text-xs mt-1">
                  Institute of Technology, University of Moratuwa
                </p>
                <p className="text-neutral-400 text-xs mt-3 font-light leading-relaxed">
                  Focusing on software engineering systems, modern database schemas, web architectures, and algorithms.
                </p>
              </div>

              <div className="border-l-2 border-neutral-800 pl-4">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                  Certifications
                </span>
                <h4 className="text-sm font-bold text-neutral-200 uppercase tracking-wide">
                  Technical Certifications
                </h4>
                <p className="text-neutral-400 text-xs mt-2 font-light leading-relaxed">
                  • Java OOP (Udemy) & Front-End Development (UoM)
                  <br />
                  • Python & Web Design (UoM)
                  <br />
                  • National Certificate in IT and MS Office (NVQ 3)
                </p>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-yellow-500 pl-4">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                  Feb 2026 — Present
                </span>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide">
                  Software Engineering Intern
                </h4>
                <p className="text-yellow-500 font-mono text-xs mt-1">
                  Knoweb Solutions (Pvt) Ltd
                </p>
                
                <ul className="text-neutral-400 text-xs mt-4 font-light space-y-2.5 leading-relaxed list-disc list-inside">
                  <li>Contributed to responsive web apps using React.js and Tailwind CSS.</li>
                  <li>Developed scalable RESTful APIs and backend microservices with NestJS and Spring Boot frameworks with MySQL.</li>
                  <li>Implemented robust CI/CD pipelines using GitHub Actions and deployed on DigitalOcean cloud infrastructure.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;