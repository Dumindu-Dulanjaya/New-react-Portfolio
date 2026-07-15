import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Simple local class name merger to replace shadcn/tailwind-merge
const cn = (...inputs: any[]) => {
  return inputs.filter(Boolean).join(' ');
};

// CV එකේ තියෙන Real Projects සහ Links ටික මෙතනට දැම්මා
const PROJECTS = [
  {
    num: "01",
    title: "Anawuma",
    subtitle: "Digital Restaurant & Hotel Management Application",
    description: "Developed a full-stack restaurant and hotel management system with QR-based customer ordering and real-time kitchen order tracking. Built secure admin dashboards for billing, inventory management, reservations, and sales reporting. Integrated Socket.IO for real-time order updates.",
    tech: ["React.js", "Next.js", "NestJS", "MySQL", "Socket.IO"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000", // Premium digital restaurant/billing device image
    github: "https://github.com/Knoweb/Anawuma-Resturant-App-.git",
    live: "http://152.42.179.36/",
  },
  {
    num: "02",
    title: "Sanota",
    subtitle: "Industrial Engineering & Automation Platform",
    description: "Developed a responsive industrial automation platform with a modern React frontend and Spring Boot backend. Designed and implemented RESTful APIs with secure authentication and MySQL database integration. Integrated interactive maps and dynamic project showcases to enhance user engagement.",
    tech: ["React.js", "Spring Boot", "MySQL", "Vite", "Framer Motion", "Leaflet API"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000", // High-tech automation factory layout
    github: "https://github.com/Knoweb/sanota-site.git",
    live: "http://188.166.182.111",
  },
  {
    num: "03",
    title: "VMS Super Mart",
    subtitle: "Supermarket Management System (Ongoing)",
    description: "Developing a full-stack supermarket management system featuring inventory, billing, logistics, and customer storefront modules. Built an administrative dashboard for product, inventory, and order management with real-time monitoring and Socket.IO-based live rider tracking.",
    tech: ["React.js", "Next.js", "TypeScript", "MySQL", "Socket.IO", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000", // Grocery checkout or modern logistical retail image
    github: "https://github.com/Dumindu-Dulanjaya/vms-super-mart.git",
    live: "https://vms-super-mart.vercel.app/",
  },
  {
    num: "04",
    title: "Knoweb Official Website",
    subtitle: "Corporate Website for Knoweb Solutions",
    description: "Designed and developed the official corporate website for Knoweb Solutions using Next.js and React. Improved website performance, responsiveness, and SEO through server-side rendering and modern frontend practices. Deployed and maintained the production cloud platform.",
    tech: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Git"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000", // High-end tech agency office/design setup
    github: "https://github.com/Knoweb/Knoweb-site.git",
    live: "http://167.71.217.97",
  },
];

export function ProjectsExhibit() {
  return (
    <section id="projects" className="w-full bg-[#0B0B0B] py-24 px-6 md:px-12 text-white selection:bg-yellow-400 selection:text-black border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20 border-b border-neutral-900 pb-8">
          <div>
            <span className="text-xs font-bold tracking-[0.4em] text-yellow-500 uppercase block mb-3 font-mono">
              PORTFOLIO
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase font-sans">
              PROJECTS EXHIBIT<span className="text-yellow-500">.</span>
            </h2>
          </div>
          <span className="text-xs font-bold tracking-[0.30em] text-neutral-500 uppercase font-mono">
            CRAFTED WITH PRECISION
          </span>
        </div>

        {/* Projects List with Alternating Layouts */}
        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between",
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                
                {/* 📸 Left/Right Interactive Grayscale Image */}
                <div className="w-full lg:w-[50%] relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-900 aspect-[16/10] bg-neutral-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* 📝 Content Description */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  
                  {/* Large background number */}
                  <span className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tighter font-mono leading-none mb-4 block">
                    {project.num}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1 text-white">
                    {project.title}
                  </h3>
                  
                  <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest block mb-6 font-mono">
                    {project.subtitle}
                  </span>

                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8 font-light">
                    {project.description}
                  </p>

                  {/* Dynamic Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-neutral-950 text-neutral-300 border border-neutral-900 px-3 py-1 rounded border-neutral-800 text-[10px] font-bold tracking-wider uppercase font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links (Code & Live) */}
                  <div className="flex items-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold tracking-widest text-neutral-400 hover:text-white uppercase border-b border-transparent hover:border-white pb-1 transition-all"
                    >
                      <Github className="w-4 h-4" /> Github Code
                    </a>
                    
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold tracking-widest text-yellow-500 hover:text-yellow-400 uppercase border-b border-transparent hover:border-yellow-400 pb-1 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ProjectsExhibit;
