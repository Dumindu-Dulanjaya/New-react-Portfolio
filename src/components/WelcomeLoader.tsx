import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, User, Globe } from 'lucide-react';

interface WelcomeLoaderProps {
  onComplete: () => void;
}

const WelcomeLoader: React.FC<WelcomeLoaderProps> = ({ onComplete }) => {
  useEffect(() => {
    // Automatically trigger onComplete after 2.8 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Framer Motion variants
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const iconContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const iconVariants = {
    initial: { scale: 0, opacity: 0, y: 20 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.8,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        exit="exit"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0B] text-white select-none overflow-hidden"
      >
        {/* Subtle CSS Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Minimalist Icons Row */}
          <motion.div
            variants={iconContainerVariants}
            initial="initial"
            animate="animate"
            className="flex items-center gap-6"
          >
            <motion.div variants={iconVariants} className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <Code className="w-8 h-8 text-neutral-300" />
            </motion.div>
            
            <motion.div variants={iconVariants} className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <User className="w-8 h-8 text-neutral-300" />
            </motion.div>

            <motion.div variants={iconVariants} className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <Globe className="w-8 h-8 text-neutral-300" />
            </motion.div>
          </motion.div>

          {/* Reveal Text */}
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center gap-2 mt-4"
          >
            <h1 className="text-lg md:text-xl font-light tracking-[0.25em] text-neutral-400 uppercase">
              Welcome to my
            </h1>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Portfolio Website
            </p>
          </motion.div>

          {/* Bottom pulse bar */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 120, opacity: 0.3 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="h-[2px] bg-white rounded-full mt-6"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeLoader;
