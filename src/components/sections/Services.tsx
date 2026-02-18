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
    transition: { staggerChildren: 0.12 },
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
      className="mx-auto max-w-[1800px] px-8 pb-16 pt-8 md:px-20 md:pb-24"
    >
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Services
        </p>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
          How I can help.
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="grid gap-5 md:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group flex flex-col rounded-sm border-2 border-black/15 bg-white p-6 transition dark:border-white/20 dark:bg-black dark:hover:border-white md:p-8"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 text-base text-black/70 dark:text-white/70 md:text-lg">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
