import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-background text-text">
      <Hero />
      <Services />
      <Stats />
      <Process />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
    </div>
  );
}
