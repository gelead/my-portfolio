"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLink = project.href && project.href !== "#";
  const hasRepo = project.repoHref && project.repoHref !== "#";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-sm border-2 border-black/15 bg-white transition dark:border-white/20 dark:bg-black dark:hover:border-white"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-black/15 dark:border-white/20">
        <div className="absolute inset-0 bg-black/5 dark:bg-white/5" />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-black dark:text-white">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            {hasLink && (
              <Link
                href={project.href!}
                target="_blank"
                rel="noreferrer"
                className="rounded p-1.5 text-black/60 transition hover:bg-black hover:text-white dark:text-white/60 dark:hover:bg-white dark:hover:text-black"
                aria-label="View live project"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            )}
            {hasRepo && (
              <Link
                href={project.repoHref!}
                target="_blank"
                rel="noreferrer"
                className="rounded p-1.5 text-black/60 transition hover:bg-black hover:text-white dark:text-white/60 dark:hover:bg-white dark:hover:text-black"
                aria-label="View repository"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>

        <p className="mt-3 text-base text-black/70 dark:text-white/70 md:text-lg">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-sm border border-black/15 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-black/70 transition group-hover:border-black group-hover:text-black dark:border-white/20 dark:bg-black dark:text-white/70 dark:group-hover:border-white dark:group-hover:text-white"
            >
              <Code2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
