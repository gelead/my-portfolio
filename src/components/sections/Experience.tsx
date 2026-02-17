"use client";

import { EXPERIENCES } from "@/constants";
import { motion } from "framer-motion";

export function Experience() {
  if (!EXPERIENCES.length) return null;

  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-4 pb-20 pt-4 sm:px-6 lg:px-8"
    >
      <div className="mb-8">
        <h2 className="text-lg font-semibold tracking-tight text-text sm:text-xl">
          Experience
        </h2>
        <p className="mt-1 text-xs text-text-muted sm:text-sm">
          Roles and teams where I&apos;ve shipped meaningful work.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-accent/80 via-border-subtle/70 to-transparent sm:left-4" />

        <ol className="space-y-8">
          {EXPERIENCES.map((exp, index) => {
            const dateLabel = exp.current
              ? `${exp.start} — Present`
              : `${exp.start} — ${exp.end}`;

            return (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative flex gap-4 pl-8 sm:pl-10"
              >
                <div className="absolute left-0 top-2 flex h-5 w-5 -translate-x-1/2 items-center justify-center sm:left-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
                  <span className="absolute h-2.5 w-2.5 rounded-full bg-accent blur-sm" />
                </div>

                <div className="flex-1 rounded-2xl border border-border-subtle/70 bg-background-elevated/60 p-4 backdrop-blur-md sm:p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-text sm:text-base">
                        {exp.company}
                      </h3>
                      <p className="text-xs font-medium text-text-muted sm:text-sm">
                        {exp.role}
                      </p>
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-text-muted sm:text-xs">
                      {dateLabel}
                    </p>
                  </div>

                  <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-text-muted sm:text-sm">
                    <li>{exp.description}</li>
                  </ul>

                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border-subtle/70 bg-background/60 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

