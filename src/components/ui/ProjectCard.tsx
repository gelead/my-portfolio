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
      className="group flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-background-elevated p-0 transition-colors hover:border-accent"
    >
      {/* Uniform 4:3 aspect ratio image area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(79,70,229,0.4),transparent_55%)] opacity-90 transition duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-text sm:text-lg">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5">
            {hasLink && (
              <Link
                href={project.href!}
                target="_blank"
                rel="noreferrer"
                className="rounded p-1 text-text-muted transition hover:text-accent"
                aria-label="View live project"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
            {hasRepo && (
              <Link
                href={project.repoHref!}
                target="_blank"
                rel="noreferrer"
                className="rounded p-1 text-text-muted transition hover:text-accent"
                aria-label="View repository"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        <p className="mt-2 text-xs text-text-muted sm:text-sm">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 rounded-full border border-border-subtle bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-text-muted transition group-hover:border-accent/50 group-hover:text-accent"
            >
              <Code2 className="h-3 w-3 shrink-0" aria-hidden />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
