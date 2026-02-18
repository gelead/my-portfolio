"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions";
import { SOCIAL_LINKS } from "@/constants";
import { Mail, Github, Linkedin } from "lucide-react";

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
      className="mx-auto max-w-[1800px] px-8 py-20 md:px-20 md:py-32"
    >
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] items-start">
        
        {/* Left Column: Contact Details */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/50 dark:text-white/50">
              Get in Touch
            </p>
            <h2 className="text-3xl font-black uppercase tracking-[0.1em] md:text-4xl">
              Let&apos;s build <br /> something new.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-black/70 dark:text-white/70">
              Whether you&apos;re exploring a new project or looking for a
              full‑stack partner, I&apos;m always open to discussing 
              technical architecture and design.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-8">
             <div className="group flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-black dark:border-white">
                   <Mail className="h-4 w-4" />
                </div>
                <div>
                   <p className="text-[9px] font-bold uppercase tracking-widest opacity-50">Email Me</p>
                   <p className="text-sm font-bold">your-email@example.com</p>
                </div>
             </div>

             <div className="flex gap-4">
                {primarySocial.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center border-2 border-black transition-all hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                  >
                    {link.id === 'github' ? <Github className="h-5 w-5" /> : <Linkedin className="h-5 w-5" />}
                  </a>
                ))}
             </div>
          </div>
        </motion.div>

        {/* Right Column: The Form */}
        <motion.div 
          className="border-2 border-black p-8 dark:border-white md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Name</label>
                <input
                  name="name"
                  required
                  className="w-full border-b-2 border-black/10 bg-transparent py-2 text-sm outline-none transition focus:border-black dark:border-white/10 dark:focus:border-white"
                  placeholder="Full Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border-b-2 border-black/10 bg-transparent py-2 text-sm outline-none transition focus:border-black dark:border-white/10 dark:focus:border-white"
                  placeholder="email@address.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full resize-none border-b-2 border-black/10 bg-transparent py-2 text-sm outline-none transition focus:border-black dark:border-white/10 dark:focus:border-white"
                placeholder="Briefly describe your project..."
              />
            </div>

            <div className="flex flex-col gap-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center bg-black py-4 text-[12px] font-bold uppercase tracking-[0.3em] text-white transition hover:opacity-90 disabled:opacity-50 dark:bg-white dark:text-black"
              >
                {status === "loading" ? "Processing..." : "Submit Inquiry"}
              </button>

              {status === "success" && (
                <p className="text-center text-xs font-bold uppercase tracking-widest">Message Sent Successfully</p>
              )}
              {status === "error" && (
                <p className="text-center text-xs font-bold uppercase tracking-widest text-red-500">Error: Please try again</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}