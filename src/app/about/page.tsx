"use client";

import { motion } from "framer-motion";
import { History, Lightbulb, TrendingUp } from "lucide-react";

const stats = [
  { id: "experience", label: "Years Experience", value: "4+" },
  { id: "projects", label: "Projects Completed", value: "10+" },
  { id: "technologies", label: "Technologies", value: "15+" },
];

const pillars = [
  {
    title: "My Journey",
    icon: History,
    text: "From my first 'Hello World' to architecting complex full-stack systems, my path has been defined by a relentless drive to understand how the digital world is built.",
  },
  {
    title: "My Philosophy",
    icon: Lightbulb,
    text: "I believe software should be as beautiful on the inside as it is on the outside. Clean architecture and user-centric design are the non-negotiable foundations of my work.",
  },
  {
    title: "The Growth",
    icon: TrendingUp,
    text: "The tech world evolves daily. I prioritize continuous learning, constantly refining my workflow with modern frameworks like Next.js and specialized backend tools.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
      <section className="mx-auto max-w-[1800px] px-8 py-20 md:px-20 md:py-28">
        
        {/* --- TOP SECTION: Story & Image --- */}
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] items-start mb-24">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
                About Me
              </p>
              <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-[1.1]">
                Crafting Digital <br /> 
                <span className="text-blue-600">Experiences.</span>
              </h1>
              <div className="mt-8 space-y-6 text-lg text-black/70 dark:text-white/70 max-w-2xl">
                <p>
                  I'm a Full Stack Developer with 4+ years of professional experience, 
                  specializing in building robust and scalable web applications. My 
                  approach blends technical precision with a deep understanding of user behavior.
                </p>
              </div>
            </motion.div>

            {/* Stats: Structured Row */}
            <div className="flex flex-wrap gap-8 md:gap-16 border-t-2 border-black/10 dark:border-white/10 pt-10">
              {stats.map((stat) => (
                <div key={stat.id} className="space-y-1">
                  <p className="text-4xl font-extrabold tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Styled Placeholder Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] w-full rounded-sm border-2 border-black/15 bg-gray-50 dark:border-white/20 dark:bg-white/5 flex items-center justify-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-20">Profile Image Holder</span>
          </motion.div>
        </div>

        {/* --- THREE COLUMN PILLARS: Matching Services Grid --- */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-sm border-2 border-black/15 bg-white dark:border-white/20 dark:bg-black hover:border-black dark:hover:border-white transition-colors"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm border-2 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-base leading-relaxed text-black/70 dark:text-white/70">
                  {pillar.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </section>
    </div>
  );
}