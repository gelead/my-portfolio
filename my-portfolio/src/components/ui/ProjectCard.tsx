import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-border-subtle/70 bg-background-elevated/60 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.55)] backdrop-blur-md sm:p-5 ${
        featured ? "md:row-span-2 md:p-6" : ""
      }`}
    >
      <div className="space-y-3">
        <div className="relative mb-3 overflow-hidden rounded-xl border border-border-subtle/60 bg-gradient-to-br from-accent/20 via-background to-accent-soft/20">
          <div className="aspect-[16/9] w-full">
            {/* Placeholder gradient block, ready to wrap next/image later */}
            <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.45),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(79,70,229,0.5),transparent_55%)] opacity-80 transition duration-300 group-hover:opacity-100" />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-accent/0 transition group-hover:ring-accent/60" />
        </div>

        <div className="space-y-1.5">
          <h3 className="text-base font-semibold text-text sm:text-lg">
            {project.title}
          </h3>
          <p className="text-xs text-text-muted sm:text-sm">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border-subtle/70 bg-background/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-text-muted transition group-hover:border-accent/70 group-hover:text-accent"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

