import Link from "next/link";
import { Arrow, Eyebrow } from "@/components/ui";
import { ProjectPreview } from "@/components/projects/project-preview";
import { ProjectFilter } from "@/components/projects/project-filter";
import { mediaNotice, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Selected work",
  "Healthcare dashboards at Dotr, Parin Sanat's complete frontend redesign, Behbod Shop and a survey platform. Explore Ali Jazbi's projects and responsibilities.",
  "/work",
);

export default function Work() {
  const entries = projects.map((project) => ({
    slug: project.slug,
    category: project.category,
    content: (
      <article className="work-entry" id={project.slug}>
        <div className="work-info">
          <Eyebrow tone="blue">
            {project.number} / {project.eyebrow}
          </Eyebrow>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="work-tools">{project.tools.join(", ")}</div>
          {project.caseStudy ? (
            <Link className="inline-link" href={`/work/${project.slug}`}>
              Read case study <Arrow />
            </Link>
          ) : project.demoUrl ? (
            <a className="inline-link" href={project.demoUrl}>
              Visit live project <Arrow />
            </a>
          ) : (
            <span className="footnote">Full case study coming soon</span>
          )}
        </div>
        <div className={`work-cover cover-${project.tone}`}>
          <ProjectPreview project={project} />
        </div>
      </article>
    ),
  }));

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Eyebrow tone="blue">Selected projects / 2026</Eyebrow>
          <h1 className="large-title">
            A collection of
            <br />
            <span className="dim">real-world work.</span>
          </h1>
          <div className="work-intro">
            <p className="body-lede">
              Projects from enterprise healthcare, e-commerce and application
              development. Each one reflects a different set of constraints and
              responsibilities.
            </p>
            <div className="small-index">04 SELECTED PROJECTS</div>
          </div>
        </div>
      </section>
      <section className="section work-section">
        <div className="container">
          <ProjectFilter entries={entries} />
          <div className="notice mt-6">{mediaNotice}</div>
        </div>
      </section>
    </>
  );
}
