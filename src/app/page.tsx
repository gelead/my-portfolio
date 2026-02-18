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
      <div className="py-16 md:py-24">
        <Hero />
      </div>
      <div className="py-16 md:py-24">
        <Services />
      </div>
      <div className="py-16 md:py-24">
        <Stats />
      </div>
      <div className="py-16 md:py-24">
        <Projects />
      </div>
      <div className="py-16 md:py-24">
        <Experience />
      </div>
      <div className="py-16 md:py-24">
        <Process />
      </div>
      <div className="py-16 md:py-24">
        <TechStack />
      </div>
    </div>
  );
}
