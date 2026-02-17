import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-background text-text">
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
