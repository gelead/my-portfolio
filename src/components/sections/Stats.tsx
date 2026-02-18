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
    <section className="mx-auto max-w-[1800px] px-8 pb-20 md:px-20 md:pb-28">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid gap-8 rounded-sm border-2 border-black/15 bg-white py-10 text-center dark:border-white/20 dark:bg-black sm:grid-cols-3 md:gap-12 md:py-14"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            className="space-y-2"
          >
            <p className="text-4xl font-extrabold tracking-tight text-black dark:text-white sm:text-5xl">
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
