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
      <div className="pb-12 pt-20 md:pb-20 md:pt-24">
        <Hero />
      </div>
      <div className="py-12 md:py-20">
        <Services />
      </div>
      <div className="py-12 md:py-20">
        <Stats />
      </div>
      <div className="py-12 md:py-20">
        <Projects />
      </div>
      <div className="py-12 md:py-20">
        <Experience />
      </div>
      <div className="py-12 md:py-20">
        <Process />
      </div>
      <div className="py-12 md:py-20">
        <TechStack />
      </div>
    </div>
  );
}
