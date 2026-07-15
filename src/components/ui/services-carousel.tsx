import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Layers, Cloud } from "lucide-react";

// Simple local class name merger to replace shadcn/tailwind-merge
const cn = (...inputs: any[]) => {
  return inputs.filter(Boolean).join(' ');
};

// CV එකේ සහ Screenshot එකේ තියෙන විස්තර මෙතනට ගැලපුවා
const SERVICES = [
  {
    id: "frontend",
    num: "01",
    label: "Frontend Development",
    icon: Code, 
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200", // Clean UI coding stock image
    description: "Crafting responsive, high-fidelity user interfaces. Specialized in semantic layouts, component architectures, and responsive flow using React, TypeScript, and Tailwind CSS.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
    featuredProject: { name: "Sanota Platform", href: "/projects" },
  },
  {
    id: "backend",
    num: "02",
    label: "Backend Development",
    icon: Database, 
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200", // Backend server logic code image
    description: "Engineering robust and scalable API services and databases. Proficient in structure design, authorization, data caching, and server flows using Nest.js, Node, and PHP.",
    tags: ["Nest.js", "Spring Boot", "MySQL", "MongoDB", "Node.js"],
    featuredProject: { name: "Anawuma Management System", href: "/projects" },
  },
  {
    id: "uiux",
    num: "03",
    label: "UI/UX Design",
    icon: Layers, 
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200", // Figma/Design layout wireframe image
    description: "Designing elegant user journeys with attention to modern layouts, accessibility, typography hierarchy, and wireframing for digital application interfaces.",
    tags: ["Figma", "User Flows", "Wireframing", "Prototyping"],
    featuredProject: { name: "Sanota Design (Figma)", href: "https://www.figma.com/design/vfJtYSMRwsXnUjvGkBbAWl/Dumindu-Dulanjaya-s-team-library?node-id=0-1&t=qNYQW4MrkPbddkaf-1" },
  },
  {
    id: "devops",
    num: "04",
    label: "DevOps & Cloud",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200", // Server rack / cloud terminal image
    description: "Deploying and maintaining scalable cloud environments. Experienced in setting up automated CI/CD pipelines using GitHub Actions, managing cloud hosting, and optimizing server performance.",
    tags: ["GitHub Actions", "CI/CD", "DigitalOcean", "Vercel", "Git"],
    featuredProject: { name: "Knoweb Deployment", href: "/projects" },
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 75;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ServicesCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % SERVICES.length) + SERVICES.length) % SERVICES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + SERVICES.length) % SERVICES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = SERVICES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 md:p-12 text-white bg-[#0B0B0B] selection:bg-yellow-400 selection:text-black">
      
      {/* 1. Header Section (Screenshot එකේ විදිහටම) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-neutral-900 pb-8">
        <div>
          <span className="text-xs font-bold tracking-[0.4em] text-yellow-500 uppercase block mb-3 font-mono">
            SERVICES
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase font-sans">
            WHAT I DO<span className="text-yellow-500">.</span>
          </h2>
        </div>
        <p className="max-w-xl text-neutral-400 text-sm md:text-base font-light leading-relaxed">
          Delivering high-performance, modular frontend environments and robust service infrastructures backed by user-focused design aesthetics.
        </p>
      </div>

      {/* 2. Interactive Interactive Content Area */}
      <div className="relative overflow-hidden rounded-[2rem] flex flex-col lg:flex-row min-h-[550px] border border-neutral-900 bg-[#0F0F0F]">
        
        {/* Left Interactive List (Vertical Tabs) */}
        <div className="w-full lg:w-[45%] min-h-[300px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 md:px-12 py-12 border-b lg:border-b-0 lg:border-r border-neutral-950">
          <div className="relative w-full h-[250px] flex items-center justify-start z-20">
            {SERVICES.map((service, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(-(SERVICES.length / 2), SERVICES.length / 2, distance);
              const IconComponent = service.icon;

              return (
                <motion.div
                  key={service.id}
                  style={{ height: ITEM_HEIGHT, width: "100%" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.35,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="absolute flex items-center justify-start w-full"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "w-full relative flex items-center gap-5 px-6 py-4 rounded-xl transition-all duration-500 text-left group border",
                      isActive
                        ? "bg-white text-black border-white z-10 shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
                        : "bg-transparent text-neutral-500 border-transparent hover:border-neutral-800 hover:text-neutral-200"
                    )}
                  >
                    <span className={cn("text-xs font-bold font-mono", isActive ? "text-yellow-600" : "text-neutral-600")}>
                      {service.num}
                    </span>
                    
                    <IconComponent
                      size={20}
                      className={cn("w-5 h-5", isActive ? "text-black" : "text-neutral-600 group-hover:text-neutral-400")}
                    />

                    <span className="font-extrabold text-base md:text-lg tracking-tight uppercase truncate">
                      {service.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Preview Card (Mockup Displays & Descriptions) */}
        <div className="flex-1 min-h-[450px] lg:h-full relative flex items-center justify-center p-8 md:p-12 overflow-hidden bg-[#0A0A0A]">
          <div className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[4/5]">
            {SERVICES.map((service, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={service.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.75,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.25 : 0,
                    rotate: isPrev ? -2 : isNext ? 2 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden border border-neutral-900 bg-[#121212] shadow-2xl origin-center"
                >
                  <img
                    src={service.image}
                    alt={service.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700 opacity-30",
                      isActive ? "grayscale-0 blur-0 brightness-75" : "grayscale blur-[2px] brightness-50"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-auto"
                      >
                        {/* Tags (Tech Stack) Configuration */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {service.tags.map((tag) => (
                            <span key={tag} className="bg-white/10 text-white/90 px-2.5 py-1 rounded border border-white/5 text-[9px] font-bold tracking-wider uppercase font-mono backdrop-blur-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-neutral-300 font-light text-xs md:text-sm leading-relaxed tracking-tight mb-4">
                          {service.description}
                        </p>

                        {service.featuredProject && (
                          <a 
                            href={service.featuredProject.href}
                            target={service.featuredProject.href.startsWith("http") ? "_blank" : undefined}
                            rel={service.featuredProject.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-500 hover:text-yellow-400 transition-colors group/link mt-1"
                          >
                            <span>⚡ Featured Work:</span>
                            <span className="underline decoration-yellow-500/50 underline-offset-4 group-hover/link:decoration-yellow-400 transition-all">
                              {service.featuredProject.name}
                            </span>
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ServicesCarousel;
