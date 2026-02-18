import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Experience />
      <Process />
      <TechStack />
    </div>
  );
}
