"use client";

import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  if (!PROJECTS.length) return null;

  return (
    <section className="mx-auto max-w-[1800px] px-8 pb-20 pt-24 md:px-20 md:pb-28 md:pt-32">
      <div className="mb-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
          Projects
        </h2>
        <p className="mt-2 text-base text-black/70 dark:text-white/70 md:text-lg">
          A selection of work spanning product, UI, and full‑stack builds.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
