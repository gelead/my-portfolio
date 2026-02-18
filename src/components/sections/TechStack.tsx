"use client";

import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiGit,
  SiAmazonwebservices,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const TECH: { name: string; Icon: IconType; color: string }[] = [
  // Frontend
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },

  // Backend
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#000000" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },

  // Tools
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Vercel", Icon: SiVercel, color: "#000000" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
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

type TechItem = (typeof TECH)[number];

function ToolboxCard({
  item,
  isDark,
}: {
  item: TechItem;
  isDark: boolean;
}) {
  const { name, Icon, color } = item;

  const effectiveColor =
    (name === "Next.js" || name === "Express" || name === "Vercel") && isDark
      ? "#ffffff"
      : color;

  const rgb = hexToRgb(effectiveColor);
  const hoverBg = rgb
    ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.10)`
    : "rgba(0,0,0,0.04)";
  const hoverGlow = rgb
    ? `0 18px 50px rgba(0,0,0,0.18), 0 0 28px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.30)`
    : "0 18px 50px rgba(0,0,0,0.18)";

  const isDarkBrand = effectiveColor.toLowerCase() === "#2d3748";

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-30, 30], [10, -10]);
  const rotateY = useTransform(x, [-30, 30], [-10, 10]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(px * 30);
    y.set(py * 30);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 900 }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{
          y: -10,
          backgroundColor: hoverBg,
          boxShadow: hoverGlow,
          borderColor: effectiveColor,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex min-h-[160px] flex-col items-center justify-center gap-3 rounded-xl border border-black/10 bg-white/60 px-4 py-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.10)] backdrop-blur-md dark:border-white/10 dark:bg-white/5"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
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
    </div>
  );
}

export function TechStack() {
  const items = TECH;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <section className="mx-auto max-w-[1800px] px-8 md:px-20">
      <motion.div
        className="mb-8 py-4"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Tech Stack
        </p>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
          Technologies mastered
        </h2>
        <p className="mt-2 max-w-2xl text-base text-black/70 dark:text-white/70 md:text-lg">
          A focused set of tools I use to design, build, ship, and scale modern
          web products.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-6 lg:grid-cols-6"
      >
        {items.map((item) => (
          <ToolboxCard key={item.name} item={item} isDark={isDark} />
        ))}
      </motion.div>
    </section>
  );
}
