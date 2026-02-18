"use client";

import { motion } from "framer-motion";
import { History, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";

// 1. DATA ARRAYS (These must be inside the file)
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
        
        {/* TOP SECTION */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center mb-32">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/50 dark:text-white/50">
                Professional Profile
              </p>
              
              {/* Scaled down heading */}
              <h1 className="mt-6 text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
                Crafting Digital <br /> Experiences
                
              </h1>
              
              <div className="mt-8 space-y-6 text-base md:text-lg text-black/70 dark:text-white/70 max-w-xl leading-relaxed">
                <p>
                  I&apos;m a Full Stack Developer specializing in robust, scalable systems. 
                  My approach blends technical precision with a deep understanding of user behavior.
                </p>
              </div>
            </motion.div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-12 border-t border-black/10 dark:border-white/10 pt-10">
              {stats.map((stat) => (
                <div key={stat.id} className="space-y-1">
                  <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="relative mx-auto aspect-square w-full max-w-[400px]">
            <div className="absolute -inset-4 -z-10 rounded-full bg-black/5 blur-3xl dark:bg-white/5" />
            
            <div className="relative h-full w-full overflow-hidden border-2 border-black dark:border-white bg-white dark:bg-[#111]">
              <Image
                src="/monkey.png"
                alt="Profile Graphic"
                fill
                priority
                sizes="(max-width: 768px) 300px, 500px"
                className="object-cover" 
              />
            </div>
          </div>
        </div>

        {/* PILLARS GRID */}
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-10 border border-black/10 dark:border-white/10 bg-transparent hover:border-black dark:hover:border-white transition-all duration-300"
              >
                <Icon className="h-6 w-6 mb-6 text-black dark:text-white" />
                <h3 className="text-lg font-black uppercase tracking-widest mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}