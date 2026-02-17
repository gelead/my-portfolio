import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="bg-background text-text">
      <Hero />
      <Projects />
    </div>
  );
}
