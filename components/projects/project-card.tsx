import Link from "next/link";
import type { Project } from "@/data/projects";
import { Arrow, Eyebrow, Tags } from "@/components/ui";
import { ProjectPreview } from "./project-preview";

export function ProjectCard({ project }: { project: Project }) {
  if (!project.featuredTitle)
    return (
      <article className="small-project">
        <Eyebrow tone="muted">
          {project.number} / {project.featuredEyebrow}
        </Eyebrow>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <Tags items={project.tags} />
        <Link href={`/work#${project.slug}`}>
          See project overview <Arrow />
        </Link>
      </article>
    );
  return (
    <article className={`project-feature ${project.tone}`}>
      <div className="feature-copy">
        <Eyebrow>
          {project.number} / {project.featuredEyebrow}
        </Eyebrow>
        <h3>
          {project.featuredTitle[0]}
          <br />
          {project.featuredTitle[1]}
        </h3>
        <p>{project.summary}</p>
        <Tags items={project.tags} />
        <Link className="bottom-link" href={`/work/${project.slug}`}>
          Explore case study <Arrow />
        </Link>
      </div>
      <div className="feature-visual">
        <ProjectPreview project={project} />
      </div>
    </article>
  );
}
