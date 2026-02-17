"use client";

import { motion } from "framer-motion";

const stats = [
  {
    id: "experience",
    label: "Years Experience",
    value: "4+",
  },
  {
    id: "projects",
    label: "Projects Completed",
    value: "4+",
  },
  {
    id: "clients",
    label: "Clients",
    value: "10+",
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

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Stats() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 md:pb-20 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid gap-6 rounded-3xl border border-border-subtle/70 bg-background-elevated/60 px-6 py-6 text-center shadow-[0_24px_80px_rgba(15,23,42,0.75)] backdrop-blur-md sm:grid-cols-3 sm:px-8 sm:py-7 md:gap-8"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            className="space-y-1 sm:space-y-2"
          >
            <p className="bg-gradient-to-r from-brand-primary via-accent-soft to-brand-primary bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
              {stat.value}
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted sm:text-xs">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

