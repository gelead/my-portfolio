"use client";

import { EXPERIENCES } from "@/constants";
import { motion } from "framer-motion";

export function Experience() {
  if (!EXPERIENCES.length) return null;

  return (
    <section
      id="experience"
      className="mx-auto max-w-[1800px] px-8 pb-20 pt-8 md:px-20 md:pb-28"
    >
      <div className="mb-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-black dark:text-white sm:text-3xl">
          Experience
        </h2>
        <p className="mt-2 text-lg text-black/70 dark:text-white/70">
          Roles and teams where I&apos;ve shipped meaningful work.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-black/30 via-black/15 to-transparent dark:from-white/30 dark:via-white/15 sm:left-5" />

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
                className="relative flex gap-6 pl-10 sm:pl-12"
              >
                <div className="absolute left-0 top-3 flex h-4 w-4 -translate-x-1/2 items-center justify-center sm:left-1">
                  <span className="h-2 w-2 rounded-full bg-black dark:bg-white" />
                </div>

                <div className="flex-1 rounded-sm border-2 border-black/15 bg-white p-6 dark:border-white/20 dark:bg-black sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-black dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-base font-medium text-black/70 dark:text-white/70">
                        {exp.role}
                      </p>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wide text-black/60 dark:text-white/60">
                      {dateLabel}
                    </p>
                  </div>

                  <ul className="mt-4 list-disc space-y-1 pl-5 text-lg text-black/70 dark:text-white/70">
                    <li>{exp.description}</li>
                  </ul>

                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-sm border border-black/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black/70 dark:border-white/20 dark:bg-black dark:text-white/70"
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

