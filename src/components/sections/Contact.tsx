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
      className="mx-auto max-w-[1800px] px-8 pb-24 pt-8 md:px-20 md:pb-32"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
            Contact
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
            Let&apos;s connect.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-black/70 dark:text-white/70 md:text-lg">
            Whether you&apos;re exploring a new project, looking for a
            full‑stack partner, or just want to say hi, I&apos;m always open to
            thoughtful conversations about design and engineering.
          </p>

          <div className="flex flex-wrap gap-4">
            {primarySocial.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-black bg-white px-6 py-3 text-base font-bold text-black transition hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-sm border-2 border-black/15 bg-white p-8 dark:border-white/20 dark:bg-black sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-bold text-black dark:text-white"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-sm border-2 border-black/15 bg-white px-4 py-3 text-lg text-black outline-none transition placeholder:text-black/40 focus:border-black dark:border-white/20 dark:bg-black dark:text-white dark:placeholder:text-white/40 dark:focus:border-white"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-bold text-black dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-sm border-2 border-black/15 bg-white px-4 py-3 text-lg text-black outline-none transition placeholder:text-black/40 focus:border-black dark:border-white/20 dark:bg-black dark:text-white dark:placeholder:text-white/40 dark:focus:border-white"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-bold text-black dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-sm border-2 border-black/15 bg-white px-4 py-3 text-lg text-black outline-none transition placeholder:text-black/40 focus:border-black dark:border-white/20 dark:bg-black dark:text-white dark:placeholder:text-white/40 dark:focus:border-white"
                placeholder="Tell me a bit about what you have in mind..."
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-w-[160px] items-center justify-center rounded-sm bg-black px-6 py-3 text-base font-bold text-white transition hover:opacity-90 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:opacity-90"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              <div className="min-h-[1.5rem] text-sm">
                {status === "success" && (
                  <span className="font-medium text-black dark:text-white">
                    Success! I&apos;ve received your message.
                  </span>
                )}
                {status === "error" && (
                  <span className="font-medium text-black/70 dark:text-white/70">
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

