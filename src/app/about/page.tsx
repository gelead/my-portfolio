"use client";

import { motion } from "framer-motion";

const stats = [
  { id: "experience", label: "Years Experience", value: "4+" },
  { id: "projects", label: "Projects Completed", value: "4+" },
  { id: "clients", label: "Clients", value: "10+" },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <section className="mx-auto max-w-[1800px] px-8 pb-16 pt-24 md:px-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
            About
          </p>
          <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-black dark:text-white sm:text-7xl lg:text-8xl">
            My Story
          </h1>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                My Story
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-black/70 dark:text-white/70">
                <p>
                  I&apos;m a full‑stack developer and UI designer passionate about
                  crafting digital experiences that balance form and function. My
                  journey began with curiosity about how things work, which led me
                  to explore both the technical and creative sides of web
                  development.
                </p>
                <p>
                  Over the years, I&apos;ve worked across the stack—from designing
                  interfaces to building scalable APIs—always with a focus on
                  creating solutions that are both beautiful and maintainable.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                Philosophy
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-black/70 dark:text-white/70">
                <p>
                  I believe great software comes from understanding both the user
                  and the system. Every decision—from the color of a button to
                  the architecture of a database—should serve a clear purpose.
                </p>
                <p>
                  My approach combines thoughtful design with pragmatic engineering.
                  I aim to build products that feel effortless to use and robust
                  under the hood.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                Journey
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-black/70 dark:text-white/70">
                <p>
                  Starting with frontend development, I quickly realized the
                  importance of understanding the full stack. This led me to dive
                  into backend systems, databases, and infrastructure.
                </p>
                <p>
                  Today, I work across the entire development lifecycle—from
                  initial concept and design to deployment and iteration. Each
                  project teaches me something new, and I bring those lessons to
                  the next challenge.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-sm border-2 border-black/15 bg-white p-10 text-center dark:border-white/20 dark:bg-black"
            >
              <div className="grid gap-8">
                {stats.map((stat) => (
                  <div key={stat.id} className="space-y-2">
                    <p className="text-5xl font-extrabold tracking-tight text-black dark:text-white sm:text-6xl">
                      {stat.value}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/60 dark:text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
