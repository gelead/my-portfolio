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
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text">
              GELEAD WORKU
            </h3>
            <p className="max-w-xs text-xs leading-relaxed text-text-muted">
              Crafting digital experiences with precision and creativity.
              Transforming ideas into elegant solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-text-muted transition hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-text-muted">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent/80" aria-hidden />
                <a
                  href="mailto:geleadw@gmail.com"
                  className="transition hover:text-accent"
                >
                  geleadw@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-accent/80" aria-hidden />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 text-text-muted transition hover:bg-background-elevated hover:text-accent"
                  aria-label={github.label}
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 text-text-muted transition hover:bg-background-elevated hover:text-accent"
                  aria-label={linkedin.label}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              <a
                href={telegramHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-2 text-text-muted transition hover:bg-background-elevated hover:text-accent"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border-subtle pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-text-muted sm:flex-row sm:text-left">
            <span>© 2026 Gelead Worku. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="transition hover:text-accent"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition hover:text-accent"
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
