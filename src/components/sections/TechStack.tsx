"use client";

import { useMemo } from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiFramer,
  SiPostgresql,
  SiPrisma,
  SiVercel,
  SiAmazonwebservices,
  SiDocker,
  SiPython,
} from "react-icons/si";

const TECH: { name: string; Icon: IconType; color: string }[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
  { name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
];

export function TechStack() {
  const items = useMemo(() => [...TECH, ...TECH], []);

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
            Tech Stack
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-text sm:text-xl">
            Tools I work with.
          </h2>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl border border-border-subtle/70 bg-background-elevated/60 py-3 backdrop-blur-md"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="inline-flex min-w-full animate-marquee items-center gap-4 px-4 sm:gap-6 sm:px-6">
          {items.map((item, index) => {
            const { name, Icon, color } = item;
            return (
              <span
                key={`${name}-${index}`}
                className="group flex items-center gap-2 whitespace-nowrap rounded-full border border-border-subtle/70 bg-background-elevated/80 px-4 py-2 text-xs font-medium text-text-muted transition-colors hover:border-border-subtle sm:text-sm"
                style={{ ["--hover-color" as string]: color }}
              >
                <Icon
                  className="h-4 w-4 shrink-0 transition-colors group-hover:text-[var(--hover-color)] sm:h-5 sm:w-5"
                  aria-hidden
                />
                <span className="transition-colors group-hover:text-[var(--hover-color)]">
                  {name}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
