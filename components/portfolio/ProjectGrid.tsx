"use client";

import { useState } from "react";
import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { FilterBar } from "./FilterBar";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  return (
    <div className="space-y-6">
      <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          Keine Projekte in dieser Kategorie.
        </p>
      )}
    </div>
  );
}
