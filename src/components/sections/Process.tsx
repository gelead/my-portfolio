"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    id: "discovery",
    label: "01",
    title: "Discovery",
    description:
      "We align on goals, constraints, and what success looks like for your product.",
  },
  {
    id: "planning",
    label: "02",
    title: "Planning",
    description:
      "I translate ideas into a pragmatic roadmap, wireframes, and technical approach.",
  },
  {
    id: "development",
    label: "03",
    title: "Development",
    description:
      "Design and engineering come together with tight feedback loops and clear milestones.",
  },
  {
    id: "delivery",
    label: "04",
    title: "Delivery",
    description:
      "We launch, measure, and iterate — ensuring the experience feels polished in the real world.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      className="mx-auto max-w-[1800px] px-8 pb-20 pt-8 md:px-20 md:pb-28"
    >
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Process
        </p>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
          How projects move from idea to launch.
        </h2>
      </div>

      <div ref={ref} className="relative">
        <div className="pointer-events-none absolute inset-x-8 top-12 hidden h-px border-t-2 border-dashed border-black/20 dark:border-white/20 md:block" />
        <motion.div
          style={{ scaleX: lineScaleX }}
          className="pointer-events-none absolute inset-x-8 top-12 hidden h-0.5 origin-left bg-black dark:bg-white md:block"
        />

        <div className="grid gap-6 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-sm border-2 border-black/15 bg-white p-6 dark:border-white/20 dark:bg-black md:p-8"
            >
              <span className="pointer-events-none select-none text-4xl font-extrabold text-black/10 dark:text-white/10">
                {step.label}
              </span>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="text-base text-black/70 dark:text-white/70 md:text-lg">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
