import { Project } from "@/types/project";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { STATUS_LABELS, STATUS_COLORS } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base leading-tight">{project.name}</CardTitle>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${STATUS_COLORS[project.status]}`}
          >
            {STATUS_LABELS[project.status]}
          </span>
        </div>
        <Badge variant="outline" className="w-fit text-xs">
          {project.category}
        </Badge>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {project.links && (
        <CardFooter className="pt-2 gap-2">
          {project.links.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
          {project.links.live && (
            <Button size="sm" asChild>
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          {project.links.docs && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.links.docs} target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
