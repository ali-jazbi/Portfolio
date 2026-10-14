import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Eyebrow, SectionHeading } from "@/components/ui";
import { ProjectPreview } from "@/components/projects/project-preview";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(
    (project) => project.slug === slug && project.caseStudy,
  );
  if (!project?.caseStudy) notFound();
  return pageMetadata(
    `${project.title} case study`,
    project.caseStudy.introduction,
    `/work/${slug}`,
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(
    (project) => project.slug === slug && project.caseStudy,
  );
  if (!project?.caseStudy) notFound();
  const study = project.caseStudy;
  const next = projects.find((project) => project.slug === study.nextSlug)!;
  const warm = project.tone === "warm";

  return (
    <>
      <section className="case-head">
        <div className="container">
          <Eyebrow tone="blue">{study.eyebrow}</Eyebrow>
          <h1>
            {study.title[0]}
            <br />
            {study.title[1]}
          </h1>
          <p className="lede">{study.introduction}</p>
          <dl className="case-facts">
            {study.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className={`case-cover ${warm ? "warm" : ""}`}>
            <div className="small-copy">
              <Eyebrow>Project / {project.number}</Eyebrow>
              <h2>
                {study.coverTitle[0]}
                <br />
                {study.coverTitle[1]}
              </h2>
              <p>{study.coverDescription}</p>
            </div>
            <ProjectPreview project={project} priority />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container case-grid">
          <div>
            <Eyebrow tone="blue">{study.context.label}</Eyebrow>
            <h2>{study.context.title}</h2>
          </div>
          <div>
            {study.context.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className={`section responsibilities ${warm ? "warm" : ""}`}>
        <div className="container">
          <SectionHeading
            eyebrow={study.responsibilities.label}
            title={study.responsibilities.title}
          />
          <div className="case-grid">
            <ul className="case-list">
              {study.responsibilities.items.map((item) => (
                <li key={item}>
                  <Arrow />
                  {item}
                </li>
              ))}
            </ul>
            <div className={`case-visual ${warm ? "warm" : ""}`}>
              <ProjectPreview project={project} />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="case-grid">
            <div>
              <Eyebrow tone="blue">{study.engineering.label}</Eyebrow>
              <h2>{study.engineering.title}</h2>
            </div>
            <div>
              {study.engineering.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="notice">{study.engineering.note}</div>
            </div>
          </div>
          <div className="next-project">
            <div>
              <Eyebrow tone="muted">Next project</Eyebrow>
              <h2>{next.featuredTitle?.join(" ") ?? next.title}</h2>
            </div>
            <Link className="inline-link" href={`/work/${next.slug}`}>
              View case study <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
