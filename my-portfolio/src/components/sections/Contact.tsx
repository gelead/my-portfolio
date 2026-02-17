"use client";

import * as React from "react";
import { sendEmail } from "@/app/actions";
import { SOCIAL_LINKS } from "@/constants";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setStatus("loading");
      const result = await sendEmail(formData);

      if (result?.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const primarySocial = SOCIAL_LINKS.filter((link) =>
    ["github", "linkedin"].includes(link.id),
  );

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 pb-20 pt-4 sm:px-6 lg:px-8"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        {/* Left column: intro + social */}
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
            Contact
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-text sm:text-3xl">
            Let&apos;s connect.
          </h2>
          <p className="text-sm text-text-muted sm:text-base">
            Whether you&apos;re exploring a new project, looking for a
            full‑stack partner, or just want to say hi, I&apos;m always open to
            thoughtful conversations about design and engineering.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {primarySocial.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle/70 bg-background-elevated/60 px-4 py-2 text-xs font-medium text-text-muted transition hover:border-accent-soft hover:text-accent"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background/70 text-[11px] font-semibold uppercase text-text">
                  {link.label.charAt(0)}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right column: form */}
        <div className="rounded-2xl border border-border-subtle/70 bg-background-elevated/60 p-5 backdrop-blur-md sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-text sm:text-sm"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-border-subtle/70 bg-background/60 px-3 py-2 text-sm text-text outline-none ring-0 transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-text sm:text-sm"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-border-subtle/70 bg-background/60 px-3 py-2 text-sm text-text outline-none ring-0 transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-text sm:text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-lg border border-border-subtle/70 bg-background/60 px-3 py-2 text-sm text-text outline-none ring-0 transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Tell me a bit about what you have in mind..."
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-w-[120px] items-center justify-center rounded-full bg-brand-primary px-5 py-2 text-xs font-semibold text-background shadow-md shadow-brand-primary/30 transition hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-lg hover:shadow-accent-soft/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              <div className="min-h-[1.25rem] text-xs">
                {status === "success" && (
                  <span className="text-[11px] font-medium text-emerald-400">
                    Success! I&apos;ve received your message.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-[11px] font-medium text-red-400">
                    Something went wrong. Please try again.
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

