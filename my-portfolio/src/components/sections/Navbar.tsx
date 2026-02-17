"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/60 bg-background/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="relative flex items-center gap-2">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
            Gelead
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-text md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-accent"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent-soft/70 transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border-subtle/60 bg-background-elevated/70 px-3 py-1.5 text-xs font-medium text-text shadow-sm transition hover:border-accent-soft hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="mr-2">Menu</span>
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span
              className={`absolute h-[1.5px] w-3 bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-3 bg-current transition-transform duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-3 bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-1"
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-b border-border-subtle/60 bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 pb-4 pt-1.5 text-sm font-medium text-text sm:px-6 lg:px-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 transition-colors hover:bg-background-elevated/70 hover:text-accent"
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

