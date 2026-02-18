"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto max-w-[1800px] px-8 md:px-20">
      {/* Top Thick Line */}
      <div className="h-[0.2px] w-full bg-black dark:bg-white" />
      
      <div className="flex flex-col items-center text-center py-24 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.3em] leading-tight text-black dark:text-white">
            Let&apos;s Work <br className="md:hidden" /> Together
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg font-medium leading-relaxed text-black dark:text-white tracking-wide">
            Have a project in mind? I&apos;m always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center rounded-sm border-2 border-black bg-black px-12 py-4 text-[13px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Bottom Thick Line */}
      <div className="h-[0.2px] w-full bg-black dark:bg-white" />
    </section>
  );
}