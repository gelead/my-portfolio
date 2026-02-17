import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  if (!PROJECTS.length) return null;

  const [first, ...rest] = PROJECTS;

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 pb-16 pt-4 sm:px-6 md:pb-20 lg:px-8"
    >
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-text sm:text-xl">
            Projects
          </h2>
          <p className="mt-1 text-xs text-text-muted sm:text-sm">
            A selection of work spanning product, UI, and full‑stack builds.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3 md:auto-rows-[minmax(210px,auto)]">
        <div className="md:col-span-2">
          <ProjectCard project={first} featured />
        </div>
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

