"use client";

import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/projects";

interface FilterBarProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={activeCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onCategoryChange(null)}
      >
        Alle
      </Button>
      {CATEGORIES.map((cat) => (
        <Button
          key={cat}
          variant={activeCategory === cat ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
