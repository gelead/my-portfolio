"use client";

import { motion } from "framer-motion";

const stats = [
  { id: "experience", label: "Years Experience", value: "4+" },
  { id: "projects", label: "Projects Completed", value: "4+" },
  { id: "clients", label: "Clients", value: "10+" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Stats() {
  return (
    <section className="mx-auto max-w-[1800px] px-8 md:px-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid gap-6 rounded-sm border-2 border-black/15 bg-white py-8 text-center dark:border-white/20 dark:bg-black sm:grid-cols-3 md:gap-8 md:py-10"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            className="space-y-1"
          >
            <p className="text-3xl font-extrabold tracking-tight text-black dark:text-white md:text-4xl">
              {stat.value}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/60 dark:text-white/60">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
