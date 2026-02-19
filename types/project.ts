export type ProjectStatus = "idea" | "todo" | "active" | "paused" | "review" | "archived";
export type ProjectCategory =
  | "AI & Automation"
  | "Creative & Web"
  | "DevOps & Tools"
  | "App Development"
  | "Brand & Commerce";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  category: ProjectCategory;
  techStack: string[];
  links?: {
    github?: string;
    live?: string;
    docs?: string;
  };
  featured?: boolean;
}
