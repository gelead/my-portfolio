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
      className="mx-auto max-w-5xl px-4 pb-16 pt-4 sm:px-6 md:pb-20 lg:px-8"
    >
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
            Process
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-text sm:text-xl">
            How projects move from idea to launch.
          </h2>
        </div>
      </div>

      <div ref={ref} className="relative">
        {/* Desktop connecting line */}
        <div className="pointer-events-none absolute inset-x-4 top-10 hidden h-px border-t border-dashed border-border-subtle/70 md:block" />
        <motion.div
          style={{ scaleX: lineScaleX }}
          className="pointer-events-none absolute inset-x-4 top-10 hidden h-px origin-left bg-accent md:block"
        />

        <div className="grid gap-6 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-border-subtle/70 bg-background-elevated/60 p-4 backdrop-blur-md sm:p-5"
            >
              {/* Large muted number */}
              <span className="pointer-events-none select-none text-4xl font-semibold text-text-muted/10 sm:text-5xl">
                {step.label}
              </span>

              <div className="mt-6 space-y-1.5">
                <h3 className="text-sm font-semibold text-text sm:text-base">
                  {step.title}
                </h3>
                <p className="text-xs text-text-muted sm:text-sm">
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

