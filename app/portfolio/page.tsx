import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { PROJECTS } from "@/lib/projects";

export const metadata = {
  title: "Lab Projects – pixelfreund",
  description: "Lab-Projekte von Ralph Hutter – Learning by Doing.",
};

export default function PortfolioPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Lab Projects</h2>
        <p className="text-muted-foreground mt-1">
          {PROJECTS.length} Projekte in verschiedenen Phasen.
        </p>
      </div>
      <ProjectGrid projects={PROJECTS} />
    </div>
  );
}
