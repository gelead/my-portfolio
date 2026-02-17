import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <div className="bg-background text-text">
      <Hero />
      <Projects />
      <Experience />
    </div>
  );
}
