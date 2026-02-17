"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Server } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Crafting fast, accessible, and responsive web applications using the modern Next.js stack.",
    icon: Code2,
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Designing interfaces that balance visual polish with clarity, usability, and brand consistency.",
    icon: Palette,
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Building reliable APIs, data flows, and server-side features that scale with your product.",
    icon: Server,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-5xl px-4 pb-12 pt-4 sm:px-6 md:pb-16 lg:px-8"
    >
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
            Services
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-text sm:text-xl">
            How I can help.
          </h2>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="grid gap-4 md:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group flex flex-col rounded-2xl border border-border-subtle/70 bg-background-elevated/60 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.45)] backdrop-blur-md transition hover:border-accent hover:shadow-[0_24px_60px_rgba(88,80,236,0.45)] sm:p-5"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background/70 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-text sm:text-base">
                {service.title}
              </h3>
              <p className="mt-2 text-xs text-text-muted sm:text-sm">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

