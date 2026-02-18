"use client";

import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

export function Projects() {
  if (!PROJECTS.length) return null;

  return (
    <section className="mx-auto max-w-[1800px] px-8 md:px-20">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
          Projects
        </h2>
        <p className="mt-2 text-base text-black/70 dark:text-white/70 md:text-lg">
          A selection of work spanning product, UI, and full‑stack builds.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
