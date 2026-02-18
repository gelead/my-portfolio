"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Github, Linkedin } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
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
          className="text-[13px] font-semibold uppercase tracking-[0.28em] text-black dark:text-white"
        >
          Gelead
        </Link>

        <div className="hidden items-center gap-8 text-[15px] font-bold tracking-tight md:flex">
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition hover:opacity-70 ${
                    isActive
                      ? "font-extrabold underline underline-offset-4"
                      : "font-bold"
                  } text-black dark:text-white`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            {primarySocial.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15 bg-white text-black transition dark:border-white/20 dark:bg-black dark:text-white ${
                  link.id === "linkedin"
                    ? "hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white dark:hover:border-[#0077B5] dark:hover:bg-[#0077B5] dark:hover:text-white"
                    : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                }`}
                aria-label={link.label}
              >
                {link.id === "github" ? (
                  <Github className="h-5 w-5" aria-hidden />
                ) : (
                  <Linkedin className="h-5 w-5" aria-hidden />
                )}
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
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-2 py-3 text-[15px] font-bold tracking-tight transition hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white ${
                      isActive
                        ? "font-extrabold underline underline-offset-4 text-black dark:text-white"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 flex flex-wrap gap-2">
                {primarySocial.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15 bg-white text-black transition dark:border-white/20 dark:bg-black dark:text-white ${
                      link.id === "linkedin"
                        ? "hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white dark:hover:border-[#0077B5] dark:hover:bg-[#0077B5] dark:hover:text-white"
                        : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                    }`}
                    aria-label={link.label}
                  >
                    {link.id === "github" ? (
                      <Github className="h-5 w-5" aria-hidden />
                    ) : (
                      <Linkedin className="h-5 w-5" aria-hidden />
                    )}
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
