"use client";

import { PROJECTS } from "@/constants";
// Try changing this import style to the other one if the error persists
import { ProjectCard } from "@/components/ui/ProjectCard"; 
import { motion } from "framer-motion";

export default function ProjectsPage() {
  // Guard clause to ensure PROJECTS is an array and not undefined
  if (!PROJECTS || PROJECTS.length === 0) return null;

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[1800px] py-20 px-8 md:px-20">
        
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A selection of work spanning product, UI, and full‑stack builds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            // Ensure ProjectCard is actually a valid component here
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}