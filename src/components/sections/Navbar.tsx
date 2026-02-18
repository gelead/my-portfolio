"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const primarySocial = SOCIAL_LINKS.filter((link) =>
  ["github", "linkedin"].includes(link.id),
);

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/15 bg-white/90 backdrop-blur-md dark:border-white/20 dark:bg-black/90">
      <nav className="mx-auto flex max-w-[1800px] items-center justify-between px-8 py-4 md:px-20">
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-[0.2em] text-black dark:text-white"
        >
          Gelead
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black transition hover:opacity-70 dark:text-white dark:hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {primarySocial.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-black/15 bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-black hover:text-white dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15 bg-white text-black dark:border-white/20 dark:bg-black dark:text-white"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="relative flex h-4 w-4 flex-col justify-center gap-0.5">
              <span
                className={`absolute h-0.5 w-4 bg-current transition ${
                  isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-current transition ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-4 bg-current transition ${
                  isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-b border-black/15 bg-white dark:border-white/20 dark:bg-black md:hidden"
          >
            <div className="mx-auto max-w-[1800px] flex flex-col gap-1 px-8 py-4 md:px-20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-3 font-medium text-black transition hover:bg-black/10 hover:text-black dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-wrap gap-2">
                {primarySocial.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-black/15 bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-black hover:text-white dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
