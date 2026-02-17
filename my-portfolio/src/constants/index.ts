import type { Experience, Project, SocialLink } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "A modern, dark-mode portfolio built with Next.js, TypeScript, and Tailwind CSS v4, showcasing full‑stack projects and writing.",
    highlights: [
      "Modern dark UI with electric indigo accents",
      "App Router architecture with server components",
      "Ready for server actions and route handlers",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Server Actions"],
    href: "#", // replace with your deployed URL
    repoHref: "https://github.com/gelead/my-portfolio",
  },
  {
    id: "fullstack-dashboard",
    title: "Full‑Stack Analytics Dashboard",
    description:
      "Interactive dashboard experience with authenticated views, server-rendered charts, and responsive layouts.",
    highlights: [
      "Composable UI primitives with a focus on accessibility",
      "Optimised data fetching patterns using server components",
      "Dark‑first design with subtle motion and hover states",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
    repoHref: "#",
  },
  {
    id: "design-system",
    title: "Design System & Component Library",
    description:
      "A reusable set of UI components and tokens designed for rapid iteration across multiple projects.",
    highlights: [
      "Token‑driven theming with CSS custom properties",
      "Composable typography and spacing scale",
      "Built for both marketing and application surfaces",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    href: "#",
    repoHref: "#",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "experience-current",
    role: "Full‑Stack Next.js Engineer",
    company: "Your Company",
    location: "Remote",
    start: "2024-01",
    current: true,
    description:
      "Owning end‑to‑end delivery of modern web experiences using the Next.js App Router, server components, and Tailwind CSS.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "experience-prev",
    role: "Frontend Engineer",
    company: "Previous Company",
    location: "Hybrid",
    start: "2021-06",
    end: "2023-12",
    description:
      "Shipped production interfaces with a focus on performance, accessibility, and design systems.",
    techStack: ["React", "TypeScript"],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/gelead",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gelead",
  },
  {
    id: "x",
    label: "X (Twitter)",
    href: "https://x.com/gelead",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@gelead.dev",
  },
];

