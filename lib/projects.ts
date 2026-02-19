import { Project } from "@/types/project";

export const STATUS_LABELS: Record<string, string> = {
  idea: "Idee",
  todo: "TODO",
  active: "Aktiv",
  paused: "Pausiert",
  review: "In Review",
  archived: "Archiviert",
};

export const STATUS_COLORS: Record<string, string> = {
  idea: "bg-yellow-100 text-yellow-800",
  todo: "bg-blue-100 text-blue-800",
  active: "bg-green-100 text-green-800",
  paused: "bg-orange-100 text-orange-800",
  review: "bg-purple-100 text-purple-800",
  archived: "bg-gray-100 text-gray-600",
};

// Static project data – will be replaced by brain/LABS/ GitHub API in Phase 2
export const PROJECTS: Project[] = [
  {
    id: "lab-dashboard",
    name: "pixelfreund Lab Dashboard",
    description:
      "Zentrales Admin Dashboard für das gesamte lab.pixelfreund Ökosystem – Agents, Bots, APIs, MCPs und öffentliches Portfolio.",
    status: "idea",
    category: "DevOps & Tools",
    techStack: ["Next.js", "Shadcn/ui", "Tailwind", "Vercel"],
    links: {
      github: "https://github.com/pixelfreund-labs/pixelfreund-lab-dashboard",
    },
    featured: true,
  },
  {
    id: "autoblogger",
    name: "Autoblogger",
    description: "KI-gestützter Content-Generator für automatisierte Blog-Posts.",
    status: "idea",
    category: "AI & Automation",
    techStack: ["Dify", "n8n", "Claude"],
  },
  {
    id: "pdt-research-agent",
    name: "PDT Research Agent",
    description: "Research Agent für die HWZ PDT-Ausbildung – Papers, Quellen, Zusammenfassungen.",
    status: "active",
    category: "AI & Automation",
    techStack: ["Claude", "Semantic Scholar", "Next.js"],
    featured: true,
  },
];

export function getProjects(filters?: {
  category?: string;
  status?: string;
}): Project[] {
  let result = PROJECTS;
  if (filters?.category) {
    result = result.filter((p) => p.category === filters.category);
  }
  if (filters?.status) {
    result = result.filter((p) => p.status === filters.status);
  }
  return result;
}

export const CATEGORIES = [
  "AI & Automation",
  "Creative & Web",
  "DevOps & Tools",
  "App Development",
  "Brand & Commerce",
] as const;
