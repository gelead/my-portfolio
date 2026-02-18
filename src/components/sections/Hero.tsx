"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[70vh] max-w-[1800px] flex-col items-center gap-12 px-8 md:flex-row md:items-center md:justify-between md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 space-y-8 text-center md:text-left"
      >
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-black/60 dark:text-white/60">
          Portfolio
        </p>
        <h1 className="text-balance text-5xl font-extrabold tracking-tight text-black dark:text-white md:text-7xl">
          Hi, I&apos;m <span className="text-black dark:text-white">Gelead</span>
          .
        </h1>
        <p className="text-base font-semibold text-black/70 dark:text-white/70 md:text-lg">
          Full Stack Developer &amp; UI Designer
        </p>
        <p className="max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70 md:text-lg">
          I design and build thoughtful digital experiences with a focus on
          clean interfaces, performance, and maintainable full‑stack systems.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-sm bg-black px-6 py-3 text-base font-bold text-white transition hover:opacity-90 dark:bg-white dark:text-black dark:hover:opacity-90"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm border-2 border-black bg-transparent px-6 py-3 text-base font-bold text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="flex-1"
      >
        <div className="relative mx-auto aspect-square w-64 border-2 border-black dark:border-white sm:w-80 md:w-96">
          <div className="absolute inset-0 bg-black/5 dark:bg-white/5" />
          <Image
            src="/next.svg"
            alt="Abstract accent graphic"
            fill
            priority
            className="object-contain p-8 opacity-80 dark:invert"
          />
        </div>
      </motion.div>
    </section>
  );
}
