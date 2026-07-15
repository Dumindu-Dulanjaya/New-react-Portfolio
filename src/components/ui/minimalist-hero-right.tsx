import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MinimalistHeroRightProps {
  imageSrc: string;
  imageAlt: string;
}

export const MinimalistHeroRight = ({ imageSrc, imageAlt }: MinimalistHeroRightProps) => {
  // 1. Mouse එක තියෙන තැන track කරන්න container එකට ref එකක් ගන්නවා
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. Motion values initialize කරනවා (මුලින්ම 0 තියෙන්නේ)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3. Mouse එක ගැස්සෙන්නේ නැතුව smoothly move වෙන්න Spring Physics දානවා
  const springConfig = { stiffness: 100, damping: 25, mass: 1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 4. Layers 2ට වෙන වෙනම depths (වේගයන්) හදනවා (Parallax range)
  // White dots ලාවට හෙලවෙන්න (-15px සිට 15px දක්වා)
  const dotsX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const dotsY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  // Yellow circle එක ඊට වඩා වැඩි පරාසයකින් හෙලවෙන්න (-40px සිට 40px දක්වා)
  const circleX = useTransform(springX, [-0.5, 0.5], [-40, 40]);
  const circleY = useTransform(springY, [-0.5, 0.5], [-40, 40]);

  // 5. Mouse එක container එක ඇතුළේ move වෙද්දී ක්රියාත්මක වන function එක
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // මැද ලක්ෂ්යයේ සිට mouse එකට තියෙන දුර (-0.5 සිට 0.5 දක්වා අගයකට ගන්නවා)
    const relativeX = (clientX - left) / width - 0.5;
    const relativeY = (clientY - top) / height - 0.5;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  // මවුස් එක ඉවතට ගියහම ආපහු මැදටම එන්න (Reset)
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="md:col-span-6 relative flex justify-center items-center h-[500px] lg:h-full w-full cursor-pointer z-10 overflow-visible"
    >
      
      {/* 🔴 LAYER 1: Animate වන White Dots Grid (Subtle Move) */}
      <motion.div 
        style={{ x: dotsX, y: dotsY }}
        className="absolute z-0 w-64 h-64 opacity-40 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.2)_2px,transparent_2px)] [background-size:16px_16px]" />
      </motion.div>

      {/* 🟡 LAYER 2: Animate වන Solid Yellow Circle (Moderate Move + Floating Idle Effect) */}
      <motion.div
        style={{ x: circleX, y: circleY }}
        animate={{ 
          y: [-6, 6], // මවුස් එක නැතත් නිකන්ම උඩ පල්ලෙහා පාවෙන idle animation එක
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 4,
            ease: "easeInOut"
          }
        }}
        className="absolute z-10 h-[280px] w-[280px] lg:h-[380px] lg:w-[380px] rounded-full bg-[#EAB308] shadow-[0_0_50px_rgba(234,179,8,0.2)]"
      />

      {/* 👤 LAYER 3: සම්පූර්ණයෙන්ම STATIC (Fixed) පින්තූරය - කිසිම සෙලවීමක් නැත! */}
      {/* මුලින්ම load වෙද්දී විතරක් smoothly පෙනී ඉන්න fade-in එකක් විතරක් දාලา තියෙන්නේ */}
      <motion.img
        src={imageSrc}
        alt={imageAlt}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 16 }} // translate-y-4 ට සමානයි
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 h-[380px] lg:h-[500px] w-auto object-contain select-none filter grayscale contrast-125 brightness-105"
      />

    </div>
  );
};
