import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-background text-text">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
