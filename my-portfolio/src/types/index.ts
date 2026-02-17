export interface Project {
  id: string;
  title: string;
  description: string;
  /**
   * Short bullet points you might surface in the UI.
   */
  highlights?: string[];
  /**
   * Tech stack tags to drive badges, filters, etc.
   */
  techStack: string[];
  /**
   * Public live URL for the project, if any.
   */
  href?: string;
  /**
   * Repository URL for the project source.
   */
  repoHref?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  /**
   * ISO string or human-readable date label.
   * e.g. "2023-06" or "Jun 2023".
   */
  start: string;
  /**
   * If omitted and `current` is true, treat as ongoing.
   */
  end?: string;
  current?: boolean;
  location?: string;
  description: string;
  techStack?: string[];
}

export interface SocialLink {
  /**
   * Machine-friendly identifier, e.g. "github" or "linkedin".
   */
  id: string;
  label: string;
  href: string;
}

