"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Layers, Layout } from "lucide-react";

const PILLARS = [
  {
    icon: Layout,
    title: "Frontend Engineering",
    desc: "Building highly interactive, semantic, and pixel-perfect user interfaces with React and Tailwind CSS.",
  },
  {
    icon: Cpu,
    title: "Backend Architecture",
    desc: "Designing robust server architectures, secure RESTful APIs, and scalable databases using NestJS and Spring Boot.",
  },
  {
    icon: Terminal,
    title: "DevOps & Integration",
    desc: "Automating workflows with GitHub Actions CI/CD and managing reliable cloud deployments on DigitalOcean.",
  },
];

const SKILLS = [
  { name: "React.js", level: "Core" },
  { name: "Next.js", level: "Core" },
  { name: "TypeScript", level: "Core" },
  { name: "Tailwind CSS", level: "Core" },
  { name: "NestJS", level: "Advanced" },
  { name: "Spring Boot", level: "Advanced" },
  { name: "MySQL", level: "Database" },
  { name: "MongoDB", level: "Database" },
  { name: "Socket.IO", level: "Real-time" },
  { name: "GitHub Actions", level: "DevOps" },
  { name: "DigitalOcean", level: "Cloud" },
  { name: "Figma", level: "Design" }
];

export function TechArchitecture() {
  return (
    <div className="w-full text-white bg-[#0A0A0A]/40 p-6 md:p-10 rounded-[2rem] border border-neutral-900/60 backdrop-blur-sm shadow-2xl">
      
      {/* 🛠️ SECTION 1: CORE CAPABILITIES */}
      <div className="flex flex-col gap-6 mb-10">
        {PILLARS.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex gap-4 group items-start p-3 rounded-xl hover:bg-neutral-900/30 transition-all duration-300"
          >
            <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-400 group-hover:text-yellow-500 group-hover:border-yellow-500/30 transition-all duration-300 shrink-0">
              <pillar.icon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider uppercase text-neutral-200 group-hover:text-white transition-colors font-sans">
                {pillar.title}
              </h4>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <hr className="border-neutral-900/80 my-8" />

      {/* 🌐 SECTION 2: THE TECH STACK CLOUD */}
      <div>
        <div className="flex items-center gap-2 mb-6 px-2">
          <Layers className="w-3.5 h-3.5 text-yellow-500" />
          <h3 className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase font-mono">
            Verified Stack
          </h3>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {SKILLS.map((tech, idx) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(234,179,8,0.4)", color: "#FFF" }}
              className="px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-900/80 text-xs font-bold tracking-wider uppercase font-mono text-neutral-400 transition-all cursor-default flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-yellow-500 transition-colors" />
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default TechArchitecture;
