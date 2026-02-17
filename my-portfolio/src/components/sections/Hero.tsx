"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TITLES = [
  "Full Stack Developer & UI Designer",
  "Full Stack Developer",
  "UI Designer",
];

function useTypewriter(titles: string[], typingSpeed = 80, pause = 1400) {
  const [index, setIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const fullText = titles[index];

    if (displayed.length < fullText.length) {
      timeout = setTimeout(
        () => setDisplayed(fullText.slice(0, displayed.length + 1)),
        typingSpeed,
      );
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setIndex((prev) => (prev + 1) % titles.length);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [displayed, index, titles, typingSpeed, pause]);

  return displayed;
}

export function Hero() {
  const typedTitle = useTypewriter(TITLES);

  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center gap-10 px-4 pb-12 pt-10 sm:px-6 md:flex-row md:items-center md:justify-between md:pt-16 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-text-muted">
          Portfolio
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-brand-primary to-accent-soft bg-clip-text text-transparent">
            Gelead
          </span>
          .
        </h1>
        <div className="h-7 text-base font-medium text-text-muted sm:text-lg">
          <span className="mr-1.5 text-text-muted/80">Full Stack Developer &amp;</span>
          <span className="inline-flex items-center font-semibold text-brand-primary">
            {typedTitle}
            <span className="ml-1 inline-block h-5 w-[1px] animate-pulse bg-brand-primary/80 align-middle" />
          </span>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
          I design and build thoughtful digital experiences with a focus on
          clean interfaces, performance, and maintainable full‑stack systems.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-background shadow-md shadow-brand-primary/30 transition hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-lg hover:shadow-accent-soft/30"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-background/60 px-6 py-2.5 text-sm font-medium text-text transition hover:border-brand-primary hover:text-brand-primary"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="flex-1"
      >
        <div className="relative mx-auto h-52 w-52 max-w-[280px] rounded-full border border-border-subtle/70 bg-gradient-to-br from-accent/40 via-background-elevated to-background shadow-[0_18px_60px_rgba(15,23,42,0.65)] backdrop-blur-md sm:h-64 sm:w-64 md:h-72 md:w-72">
          <div className="pointer-events-none absolute -left-4 top-8 h-16 w-16 rounded-full bg-accent-soft/60 blur-3xl" />
          <div className="pointer-events-none absolute -right-6 bottom-4 h-20 w-20 rounded-full bg-brand-primary/60 blur-3xl" />
          <Image
            src="/next.svg"
            alt="Abstract accent graphic"
            fill
            priority
            className="rounded-full object-contain p-8 opacity-80 mix-blend-screen"
          />
        </div>
      </motion.div>
    </section>
  );
}

