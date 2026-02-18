"use client";

import * as React from "react";
import { motion } from "framer-motion"; // Import motion
import { sendEmail } from "@/app/actions";
import { Mail, MapPin, Clock } from "lucide-react";

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

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <div className="mx-auto max-w-[1400px] px-8 py-20 md:px-20 md:py-32">
        
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* LEFT COLUMN: Added motion */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl leading-[1.1]">
                Let&apos;s Create Something <br />
                <span className="text-white">Amazing</span> Together
              </h1>
              <p className="max-w-md text-lg text-white/70 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Info Card with slight delay */}
            <motion.div 
              className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-bold text-white">Email</p>
                  <p className="text-sm text-white/60">geleadw@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-bold text-white">Location</p>
                  <p className="text-sm text-white/60">Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-bold text-white">Availability</p>
                  <p className="text-sm text-white/60">Available for freelance work</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: The Form with motion */}
          <motion.div 
            className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/90 ml-1">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#141414] px-5 py-4 text-base text-white outline-none transition focus:border-white/40 focus:bg-[#1a1a1a] placeholder:text-white/20"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/90 ml-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#141414] px-5 py-4 text-base text-white outline-none transition focus:border-white/40 focus:bg-[#1a1a1a] placeholder:text-white/20"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/90 ml-1">Subject</label>
                <input
                  name="subject"
                  className="w-full rounded-xl border border-white/10 bg-[#141414] px-5 py-4 text-base text-white outline-none transition focus:border-white/40 focus:bg-[#1a1a1a] placeholder:text-white/20"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/90 ml-1">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#141414] px-5 py-4 text-base text-white outline-none transition focus:border-white/40 focus:bg-[#1a1a1a] placeholder:text-white/20"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl bg-white py-5 text-base font-bold text-black transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}