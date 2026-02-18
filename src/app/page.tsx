import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import  Projects  from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { CTA } from "@/components/sections/CTA"; // Import the new section

export default function Home() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Hero: No top padding because Navbar is sticky */}
      <div className="pb-16 pt-12 md:pb-24 md:pt-16">
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

      {/* The New Final Section */}
      <div className="pb-24">
        <CTA />
      </div>
    </div>
  );
}