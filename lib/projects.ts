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

// Static project data – synced from brain/LABS/ folder structure
// 010-INCOMING → idea | 020-TODO → todo | 030-IN_PROGRESS → active
// 080-DONE → review | 090-ARCHIVE → archived
export const PROJECTS: Project[] = [

  // ── 010-INCOMING → idea ──────────────────────────────────────────────────

  {
    id: "lab-dashboard",
    name: "pixelfreund Lab Dashboard",
    description:
      "Zentrales Portfolio & Admin Dashboard für das lab.pixelfreund Ökosystem – Agents, Bots, APIs, MCPs und öffentliches Projekt-Showcase.",
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
    description:
      "Automatisiertes Blogging-System mit KI-gestütztem Research, Multi-Format Content-Generierung und Multi-Channel Publishing für vollautomatische Content-Produktions-Pipeline.",
    status: "idea",
    category: "AI & Automation",
    techStack: ["Dify", "n8n", "Claude API", "Supabase", "WordPress API", "Replicate API"],
  },
  {
    id: "chatgpt-app-sdk",
    name: "ChatGPT App SDK",
    description:
      "Widget/App für ChatGPT mit dem offiziellen Apps SDK (MCP-basiert) für interaktive UI-Komponenten direkt in der ChatGPT-Konversation.",
    status: "idea",
    category: "AI & Automation",
    techStack: ["Node.js", "TypeScript", "React", "Tailwind CSS", "MCP SDK"],
    links: {
      github: "https://github.com/pixelfreund-labs/chatgpt-app-sdk",
    },
  },
  {
    id: "journalist",
    name: "Journalist",
    description:
      "Automatisierter Tech-News Briefing Agent – täglich um 06:30 Uhr werden die wichtigsten Headlines aus 42 kuratierten Quellen gesammelt und ein strukturiertes Briefing erstellt.",
    status: "idea",
    category: "AI & Automation",
    techStack: ["Claude Code", "n8n", "Slack", "WebFetch"],
  },
  {
    id: "mcp-discord",
    name: "MCP Discord",
    description:
      "MCP Server für Discord – ermöglicht Claude Code den direkten Zugriff auf Discord-Server, Channels und Nachrichten für Server-Verwaltung und Agent-Integration.",
    status: "idea",
    category: "AI & Automation",
    techStack: ["Python", "FastMCP", "Discord REST API", "MCP SDK"],
    links: {
      github: "https://github.com/pixelfreund-labs/mcp-discord",
    },
    featured: true,
  },
  {
    id: "future-foresight-agent-platform",
    name: "Future Foresight Agent Platform",
    description:
      "Strukturierter 4-Phasen-Prozess (Discover, Frame, Synthesize, Shape) für Studierende – von Trendanalyse zu validierbaren Produktkonzepten mit Foresight-Frameworks.",
    status: "idea",
    category: "AI & Automation",
    techStack: ["Claude Code", "AI Agents", "STEEP+V Framework"],
  },
  {
    id: "spec-kit",
    name: "GitHub Spec Kit",
    description:
      "Spec-Driven Development Toolkit – Projekt-Setup und initiale Struktur für spec-driven Workflows mit Claude Code und Shell-Skripten.",
    status: "idea",
    category: "DevOps & Tools",
    techStack: ["Shell Script", "Claude API", "Git"],
  },
  {
    id: "restaurant-map",
    name: "Restaurant Map HWZ",
    description:
      "ChatGPT App (via OpenAI Apps SDK/MCP) die Restaurants im Umfeld der HWZ auf einer interaktiven Karte anzeigt mit Tag-basierter Filterung.",
    status: "idea",
    category: "App Development",
    techStack: ["OpenAI Apps SDK", "MCP Server", "TypeScript", "React", "Mapbox GL JS", "Google Places API"],
    links: {
      github: "https://github.com/pixelfreund-labs/restaurant-map",
    },
  },
  {
    id: "research-agent",
    name: "Research Agent",
    description:
      "Multi-Agent-System für automatisierte Recherche mit orchestrierten KI-Agenten zur systematischen Themenerfassung, Quellen-Aggregation und strukturierten Report-Generierung.",
    status: "idea",
    category: "AI & Automation",
    techStack: ["Dify", "OpenAI Agents SDK", "RAG", "n8n", "DigitalOcean"],
  },
  {
    id: "lingua-link",
    name: "LinguaLink",
    description:
      "Web-App für Business-Vokabular-Übersetzung (Deutsch ↔ Englisch) mit persönlichem Wörterbuch und KI-gestützter Meeting-Vorbereitung.",
    status: "idea",
    category: "App Development",
    techStack: ["React", "Claude API", "DeepL API"],
  },
  {
    id: "md-to-latex",
    name: "Markdown to LaTeX Converter",
    description:
      "Konvertierungs-Tool für Markdown-Dateien zu professionell gebrandeten PDFs mit Pandoc und Custom LaTeX-Templates für Corporate Design.",
    status: "idea",
    category: "DevOps & Tools",
    techStack: ["Pandoc", "LaTeX", "XeLaTeX", "Claude Code"],
  },
  {
    id: "recipe-mcp-local-server",
    name: "Recipe MCP Local Server",
    description:
      "Lokaler MCP Server für Claude Desktop mit durchsuchbarer Wissensbasis der 600+ Markdown-Rezepte aus dem foodies.pixelfreund.ch Repository.",
    status: "idea",
    category: "AI & Automation",
    techStack: ["Python", "FastMCP", "Claude Desktop"],
  },
  {
    id: "6th-grader-tutor",
    name: "Quest Tutor – 6th Grader Companion",
    description:
      "AI-powered Learning Companion für 6. Klässler mit interaktivem Scaffolding, Socratic Feedback und narrativem Design für personalisierte Lernunterstützung.",
    status: "idea",
    category: "App Development",
    techStack: ["Custom GPT", "Claude API", "React"],
  },
  {
    id: "exercise-agent-builder",
    name: "Exercise Agent Builder",
    description:
      "Übungsszenarien für HWZ-Studierende zur Demonstration von Multi-Agent-Workflows mit OpenAI Agent Builder und n8n.",
    status: "idea",
    category: "AI & Automation",
    techStack: ["OpenAI Custom GPTs", "n8n", "Google Drive"],
  },

  // ── 020-TODO → todo ──────────────────────────────────────────────────────

  {
    id: "brainbot",
    name: "Brainbot",
    description:
      "Slack-Bot der Claude Code mit Slack verbindet – ermöglicht Quote-Publishing, Agent-Invocation und Chat-Funktionalität direkt aus Slack.",
    status: "todo",
    category: "AI & Automation",
    techStack: ["Node.js", "Slack Bolt SDK", "Claude API", "DigitalOcean"],
  },
  {
    id: "neverending-story",
    name: "Neverending Story",
    description:
      "Generative Art Projekt: KI-Agenten führen öffentliche Konversationen, die automatisch multimodale Artefakte (Text, Bild, Audio, Video) generieren.",
    status: "todo",
    category: "Creative & Web",
    techStack: ["Supabase", "Groq", "n8n", "HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/pixelfreund-labs/neverending-story",
    },
    featured: true,
  },
  {
    id: "recipes",
    name: "Recipes Foodblog",
    description:
      "Foodblog aufgebaut aus 500+ strukturierten Markdown-Rezepten mit WordPress CMS für Content-Management und SEO-optimierte Präsentation.",
    status: "todo",
    category: "Creative & Web",
    techStack: ["WordPress", "Markdown", "MySQL", "DigitalOcean"],
  },
  {
    id: "student-badges",
    name: "Student Badges",
    description:
      "Systematische Evaluation und Vergleich digitaler Kurs-Badge- und Micro-Credential-Anbieter (Credly, Accredible, Badgr) für den Einsatz in der Lehre.",
    status: "todo",
    category: "App Development",
    techStack: ["Credly", "Accredible", "Badgr"],
  },

  // ── 030-IN_PROGRESS → active ──────────────────────────────────────────────

  {
    id: "agent-memory",
    name: "Agent Memory System",
    description:
      "Filesystem-basiertes persistentes Memory-System für Claude Code Agents – speichert prozedurales, semantisches und episodisches Wissen über Sessions hinweg.",
    status: "active",
    category: "AI & Automation",
    techStack: ["Filesystem", "Markdown", "JSON", "Python"],
  },
  {
    id: "glitch-studio",
    name: "Glitch Studio",
    description:
      "Browser-basierte Digital-Art-Applikation zum Erstellen von Glitch-Effekten – Bilder hochladen, modulare Effekte anwenden und als PNG exportieren.",
    status: "active",
    category: "Creative & Web",
    techStack: ["Svelte 5", "SvelteKit", "TypeScript", "Canvas API", "Vite"],
    links: {
      github: "https://github.com/pixelfreund-labs/glitch_studio",
    },
    featured: true,
  },
  {
    id: "pdt-admin-dashboard",
    name: "PDT Admin Dashboard",
    description:
      "Zentrales Admin- und Studierenden-Portal für das Product Design Toolkit, gebaut mit Budibase und Supabase auf DigitalOcean-Stack.",
    status: "active",
    category: "App Development",
    techStack: ["Budibase", "Supabase", "Dify", "DigitalOcean", "n8n"],
  },
  {
    id: "pdt-claude-plugin",
    name: "PDT Claude Code Plugin",
    description:
      "74 Templates in 5 Spaces mit intelligenter AI-Orchestrierung für Product Design – direkt als Claude Code Plugin nutzbar.",
    status: "active",
    category: "AI & Automation",
    techStack: ["Claude Code", "Markdown"],
    links: {
      github: "https://github.com/productdesigntoolkit/pdt-claude_plugin",
      live: "https://productdesigntoolkit.net",
    },
  },
  {
    id: "pdt-on-claude",
    name: "PDT on Claude",
    description:
      "Claude Code-Variante des Product Design Toolkit mit 8 spezialisierten Agenten – transformiert Produktideen in implementierungsreife Konzepte.",
    status: "active",
    category: "AI & Automation",
    techStack: ["Claude Code", "Git", "Markdown"],
    links: {
      github: "https://github.com/pixelfreund-labs/pdt-on-claude",
    },
    featured: true,
  },
  {
    id: "pdt-researcher",
    name: "PDT Research Agent",
    description:
      "Automatisierter wissenschaftlicher Literatur-Recherche-Assistent – sucht, bewertet und synthetisiert Papers aus mehreren Datenbanken und erstellt publikationsreife Reports.",
    status: "active",
    category: "AI & Automation",
    techStack: ["Claude Code", "TypeScript", "Semantic Scholar API", "OpenAlex", "Supabase", "n8n"],
    links: {
      github: "https://github.com/productdesigntoolkit/pdt-researcher",
    },
    featured: true,
  },
  {
    id: "prompt-engineering-2026",
    name: "Prompt Engineering 2026",
    description:
      "Lehr-Curriculum für Advanced Prompt Engineering – Custom GPT Actions, OpenAI Platform, Agent Builders und Product Design Toolkit.",
    status: "active",
    category: "AI & Automation",
    techStack: ["Markdown", "GitBook", "Python"],
  },

  // ── 080-DONE → review ────────────────────────────────────────────────────

  {
    id: "bluesky",
    name: "Bluesky Social Publisher",
    description:
      "Claude Code Skill zum direkten Publizieren von Inhalten auf Bluesky und Threads via AT Protocol API.",
    status: "review",
    category: "AI & Automation",
    techStack: ["Python", "atproto SDK", "Bluesky API", "Threads API"],
  },
  {
    id: "cover-magazine-agent",
    name: "Cover Magazine Agent",
    description:
      "Multi-Agent-Workflow (OpenAI Agents SDK) der professionelle Magazine-Cover aus strukturierten Inputs via NanoBanana Pro API auf Replicate generiert.",
    status: "review",
    category: "Creative & Web",
    techStack: ["Python", "OpenAI Agents SDK", "Replicate", "Google Drive API"],
  },
  {
    id: "secure-setup-digitalocean",
    name: "Secure Setup DigitalOcean",
    description:
      "Security-Hardening-Automatisierung für DigitalOcean-Infrastruktur – Droplets, Docker, Supabase, n8n und Vercel-Integration mit UFW, Fail2ban und Let's Encrypt.",
    status: "review",
    category: "DevOps & Tools",
    techStack: ["Bash", "Python", "DigitalOcean", "Docker", "UFW", "Fail2ban", "Let's Encrypt"],
  },
  {
    id: "snackcheck",
    name: "Snackcheck",
    description:
      "App zum Scannen und Bewerten von Snack-Produkten – Nährwert-Analyse und persönliche Bewertungshistorie.",
    status: "review",
    category: "App Development",
    techStack: ["Vite", "Node.js"],
  },

  // ── 090-ARCHIVE → archived ────────────────────────────────────────────────

  {
    id: "2nd-brain",
    name: "2nd Brain",
    description:
      "Externes Wissenssystem zum Erfassen, Organisieren und Verknüpfen von Gedanken und Informationen mit Claude AI und Semantic Scholar.",
    status: "archived",
    category: "AI & Automation",
    techStack: ["Obsidian", "Claude API", "Semantic Scholar API", "n8n", "Supabase"],
  },
  {
    id: "personal-os",
    name: "Personal OS",
    description:
      "Template-Struktur für Claude Code Agents, Skills, Workflows und Feature-Specs mit persistentem Memory und automatisiertem Dispatching.",
    status: "archived",
    category: "DevOps & Tools",
    techStack: ["Claude Code", "Markdown", "Bash"],
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
