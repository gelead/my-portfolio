"use client";

import * as React from "react";
import { sendEmail } from "@/app/actions";
import { SOCIAL_LINKS } from "@/constants";
import { Mail, MapPin } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
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
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* Full-width "Get in Touch" header */}
      <section className="border-b-2 border-black dark:border-white">
        <div className="mx-auto max-w-[1800px] px-8 py-20 md:px-20 md:py-28">
          <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70 md:text-lg">
            Whether you&apos;re exploring a new project, looking for a
            full‑stack partner, or just want to say hi, I&apos;m always open to
            thoughtful conversations about design and engineering.
          </p>
        </div>
      </section>

      {/* Contact form and details */}
      <section className="mx-auto max-w-[1800px] px-8 py-16 md:px-20 md:py-24">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left: Contact details */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-4xl font-extrabold text-black dark:text-white md:text-5xl">
                Contact Details
              </h2>
              <ul className="space-y-4 text-lg text-black/70 dark:text-white/70">
                <li className="flex items-center gap-4 text-base md:text-lg">
                  <Mail className="h-6 w-6 shrink-0 text-black dark:text-white" />
                  <a
                    href="mailto:geleadw@gmail.com"
                    className="transition hover:text-black dark:hover:text-white"
                  >
                    geleadw@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 shrink-0 text-black dark:text-white" />
                  <span>Addis Ababa, Ethiopia</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Connect
              </h3>
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
          </div>

          {/* Right: Contact form */}
          <div className="rounded-sm border-2 border-black/15 bg-white p-8 dark:border-white/20 dark:bg-black sm:p-10">
            <h2 className="mb-6 text-2xl font-extrabold text-black dark:text-white sm:text-3xl">
              Send a Message
            </h2>
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
                  rows={5}
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
    </div>
  );
}
