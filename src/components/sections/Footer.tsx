import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

const telegramHref = "https://t.me/gelead";

export function Footer() {
  const github = SOCIAL_LINKS.find((l) => l.id === "github");
  const linkedin = SOCIAL_LINKS.find((l) => l.id === "linkedin");

  return (
    <footer className="mt-auto bg-[var(--footer-background)]">
      <div className="mx-auto max-w-[1800px] px-8 py-16 md:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-black dark:text-white">
              GELEAD WORKU
            </h3>
            <p className="max-w-xs text-lg leading-relaxed text-black/70 dark:text-white/70">
              Crafting digital experiences with precision and creativity.
              Transforming ideas into elegant solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-lg text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3 text-lg text-black/70 dark:text-white/70">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-black dark:text-white" aria-hidden />
                <a
                  href="mailto:geleadw@gmail.com"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  geleadw@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-black dark:text-white" aria-hidden />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
              Connect
            </h3>
            <div className="flex items-center gap-4">
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border-2 border-black/15 bg-white p-2.5 text-black transition hover:bg-black hover:text-white dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                  aria-label={github.label}
                >
                  <Github className="h-6 w-6" />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border-2 border-black/15 bg-white p-2.5 text-black transition hover:bg-black hover:text-white dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                  aria-label={linkedin.label}
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
              <a
                href={telegramHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border-2 border-black/15 bg-white p-2.5 text-black transition hover:bg-black hover:text-white dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                aria-label="Telegram"
              >
                <Send className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t-2 border-black/15 pt-8 dark:border-white/20">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-lg sm:flex-row sm:text-left">
            <span className="text-black/70 dark:text-white/70">
              © 2026 Gelead Worku. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="font-semibold text-black transition hover:opacity-80 dark:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-semibold text-black transition hover:opacity-80 dark:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
