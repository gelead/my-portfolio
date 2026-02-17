"use client";

import { useMemo } from "react";

const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "PostgreSQL",
  "Prisma",
  "Vercel",
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
          {items.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="whitespace-nowrap rounded-full border border-border-subtle/70 bg-background-elevated/80 px-4 py-1.5 text-xs font-medium text-text-muted sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

