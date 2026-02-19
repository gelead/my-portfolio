import type { Experience, Project, SocialLink } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "giv-society",
    title: "GIV Society Ethiopia",
    description:
      "An impact-driven platform for a registered non-profit focused on healthcare accessibility and mental health support for underserved Ethiopian communities.",
    highlights: [
      "Developed a volunteer management and life-transformation portal",
      "Focused on high-performance accessibility for low-bandwidth users",
      "Integrated secure donation pathways and community outreach tools",
    ],
    techStack: ["React", "Tailwind CSS", "Community-Centric UI"],
    href: "https://giv-society.org",
    repoHref: "#",
  },
  {
    id: "01",
    title: "CDCP: Distributed Messaging",
    description:
      "A high-concurrency Campus Digital Communication Platform. Engineered a distributed system for real-time announcements and event management using TypeScript, focused on low-latency notification delivery and system scalability.",
    techStack: ["TypeScript", "Distributed Systems", "Node.js"],
    repoHref: "https://github.com/yourusername/campus-digital-messaging",
  },
  {
    id: "02",
    title: "Secure Archive Management",
    description:
      "An enterprise-grade archival system featuring RBAC (Role-Based Access Control), Multi-Factor Authentication (MFA), and AES-256 encrypted audit logging to ensure data integrity and compliance.",
    techStack: ["Node.js", "Express", "Security", "Cryptography"],
    repoHref: "https://github.com/yourusername/secure-archive-managment",
  },
  {
    id: "03",
    title: "Next-Gen ML Firewall",
    description:
      "Currently developing a machine learning-based network security layer that uses AI models to detect and block anomalous traffic patterns and zero-day threats in real-time.",
    techStack: ["Machine Learning", "Python", "Network Security", "AI"],
    repoHref: "#",
  },
  {
    id: "04",
    title: "EthioEstate Modern Engine",
    description:
      "A premium real estate engine featuring dynamic property filtering and high-performance UI. Integrated Prisma ORM for efficient relational data fetching and responsive component architecture.",
    techStack: ["React", "Prisma", "PostgreSQL", "Tailwind"],
    repoHref: "https://github.com/yourusername/EthioEstate",
  },
  {
    id: "05",
    title: "Full-Stack E-Shop",
    description:
      "A cross-platform e-commerce solution integrating a PHP/React hybrid architecture with MongoDB. Features seamless cart persistence, product cataloging, and a modern storefront UI.",
    techStack: ["PHP", "React", "MongoDB", "E-commerce"],
    repoHref: "#",
  },
  {
    id: "06",
    title: "AI Annotation Platform",
    description:
      "A specialized local AI marketplace platform designed for data labeling and training set generation. Features granular task distribution for machine learning dataset preparation.",
    techStack: ["AI/ML", "React", "Node.js", "Marketplace"],
    repoHref: "https://github.com/yourusername/EthioAiAnnotation",
  },
  {
    id: "07",
    title: "Prescripto: Health Systems",
    description:
      "A full-stack medical appointment scheduling system built on the MERN stack. Features doctor-patient synchronization, slot management, and automated booking workflows.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    repoHref: "https://github.com/yourusername/prescripto",
  },
  {
    id: "08",
    title: "EthioTourism Portal",
    description:
      "A discovery engine for Ethiopian tourism attractions. Developed with a focus on SEO, image optimization, and localized content delivery using PHP and modern frontend principles.",
    techStack: ["PHP", "SQL", "UI/UX", "SEO"],
    repoHref: "https://github.com/yourusername/EthioTurism",
  },
  {
    id: "09",
    title: "Logic-Based TicTacToe",
    description:
      "A technical implementation of the classic game focusing on state machine logic, minimax algorithm exploration, and optimized React rendering cycles.",
    techStack: ["React", "Algorithms", "State Management"],
    repoHref: "#",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "nile-tech",
    role: "Software Engineering Intern",
    company: "Nile Technology Solutions",
    location: "Addis Ababa, Ethiopia",
    start: "2024-06",
    current: true,
    description:
      "Contributing to enterprise-level software solutions with a focus on backend architecture and security. Optimized data archival processes and assisted in the development of distributed messaging patterns.",
    techStack: ["Node.js", "Express", "Distributed Systems", "SQL"],
  },
  {
    id: "giv-society-exp",
    role: "Full-Stack Developer (Volunteer)",
    company: "GIV Society Ethiopia",
    location: "Remote",
    start: "2023-10",
    end: "2024-05",
    description:
      "Architected and deployed a community-focused platform for healthcare outreach. Optimized frontend performance for low-bandwidth environments and managed secure volunteer data pipelines.",
    techStack: ["React", "Tailwind CSS", "Firebase", "UI/UX"],
  },
  {
    id: "aastu-project",
    role: "Project Lead / Researcher",
    company: "AASTU (Addis Ababa Science & Technology University)",
    location: "Addis Ababa",
    start: "2023-01",
    end: "2023-09",
    description:
      "Led the development of the Campus Digital Communication Platform (CDCP). Conducted research on distributed systems to handle high-concurrency event management for university-wide notifications.",
    techStack: ["TypeScript", "System Design", "Research"],
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

