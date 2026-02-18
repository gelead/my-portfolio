"use client";

import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiFramer,
  SiPostgresql,
  SiPrisma,
  SiVercel,
  SiAmazonwebservices,
  SiDocker,
  SiPython,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const TECH: { name: string; Icon: IconType; color: string }[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
  { name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
];

function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "");
  if (normalized.length !== 6) return null;
  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null;
  return { r, g, b };
}

export function TechStack() {
  const items = TECH;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <section className="mx-auto max-w-[1800px] px-8 md:px-20">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Tech Stack
        </p>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
          Toolboxes.
        </h2>
        <p className="mt-2 max-w-2xl text-base text-black/70 dark:text-white/70 md:text-lg">
          A focused set of tools I use to design, build, ship, and scale modern
          web products.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-6 lg:grid-cols-6">
        {items.map((item) => {
          const { name, Icon, color } = item;
          const isMono = name === "Next.js" || name === "Vercel";
          const effectiveColor = isMono ? (isDark ? "#ffffff" : "#000000") : color;
          const rgb = hexToRgb(effectiveColor);

          const hoverBg =
            rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.10)` : "transparent";
          const hoverGlow = rgb
            ? `0 18px 50px rgba(0,0,0,0.12), 0 0 28px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.28)`
            : "0 18px 50px rgba(0,0,0,0.12)";

          const isDarkBrand = effectiveColor.toLowerCase() === "#2d3748";

          return (
            <motion.div
              key={name}
              whileHover={{
                y: -10,
                backgroundColor: hoverBg,
                boxShadow: hoverGlow,
                borderColor: effectiveColor,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex min-h-[140px] flex-col items-center justify-center gap-3 rounded-sm border-2 border-black/15 bg-white px-4 py-6 text-center transition-colors dark:border-white/20 dark:bg-black"
            >
              <Icon
                className={`h-10 w-10 ${
                  isDarkBrand ? "dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.45)]" : ""
                }`}
                style={{ color: effectiveColor }}
                aria-hidden
              />
              <span className="text-sm font-semibold text-black/80 dark:text-white/80">
                {name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
