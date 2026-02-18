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
    <header className="sticky top-0 z-50 border-b-2 border-black/10 bg-white dark:border-white/10 dark:bg-black">
      <nav className="mx-auto flex max-w-[1800px] h-24 items-center justify-between px-8 md:px-20">
        
        {/* Logo - Matching the image reference */}
        <Link
          href="/"
          className="text-[18px] font-black uppercase tracking-[0.4em] text-black dark:text-white"
        >
          Gelead
        </Link>

        {/* Desktop Navigation - Large, Wide Spacing, No Dimming */}
        <div className="hidden items-center gap-16 md:flex">
          <div className="flex items-center gap-12">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[14px] font-bold uppercase tracking-[0.25em] transition-all duration-200 ${
                    isActive 
                      ? "text-black dark:text-white" 
                      : "text-black dark:text-white hover:opacity-70"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-3 left-0 h-[2px] w-full bg-black dark:bg-white"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Icons with industrial borders */}
          <div className="flex items-center gap-4 border-l-2 border-black/10 pl-12 dark:border-white/10">
            {primarySocial.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black dark:border-white transition-all hover:bg-black dark:hover:bg-white"
              >
                {link.id === "github" ? (
                  <Github className="h-5 w-5 transition-colors group-hover:text-white dark:text-white dark:group-hover:text-black" />
                ) : (
                  <Linkedin className="h-5 w-5 transition-colors group-hover:text-white dark:text-white dark:group-hover:text-black" />
                )}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-sm border-2 border-black bg-transparent text-black dark:border-white dark:text-white"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-current transition ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b-2 border-black bg-white dark:border-white dark:bg-black md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-8 px-8 py-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-3xl font-black uppercase tracking-[0.2em] text-black dark:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}