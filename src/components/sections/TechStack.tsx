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
    <section className="mx-auto max-w-[1800px] px-8 pb-20 pt-8 md:px-20 md:pb-28">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Tech Stack
        </p>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
          Tools I work with.
        </h2>
      </div>

      <div
        className="relative overflow-hidden rounded-sm border-2 border-black/15 bg-white py-4 dark:border-white/20 dark:bg-black"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="inline-flex min-w-full animate-marquee items-center gap-6 px-8 sm:gap-8 sm:px-10">
          {items.map((item, index) => {
            const { name, Icon, color } = item;
            // Determine if this is a dark color that needs visibility enhancement in dark mode
            const isDarkColor = color === "#2D3748" || color === "#339933"; // Prisma, Node.js
            
            return (
              <span
                key={`${name}-${index}`}
                className="group flex items-center gap-4 whitespace-nowrap rounded-sm border-2 border-black/15 bg-white px-8 py-4 text-xl font-bold text-black/70 transition dark:border-white/20 dark:bg-black dark:text-white/70 sm:text-2xl"
                style={{ ["--hover-color" as string]: color }}
              >
                <Icon
                  className={`h-7 w-7 shrink-0 transition-colors sm:h-8 sm:w-8 ${
                    isDarkColor ? "dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.4)]" : ""
                  }`}
                  style={{ color: color }}
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
