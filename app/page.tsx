import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectPreview } from "@/components/projects/project-preview";
import { Experience } from "@/components/experience";
import { projects } from "@/data/projects";
import { coreTechnologies } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Home",
  "Ali Jazbi builds responsive web interfaces and backend APIs. Explore selected healthcare dashboards, e-commerce redesigns and full-stack projects.",
  "/",
);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <div>
              <Eyebrow tone="blue">Ali Jazbi / Web developer</Eyebrow>
              <h1>
                Frontend first.
                <br />
                <span className="dim">Full-stack</span>
                <br />
                in practice.
              </h1>
              <p className="body-lede">
                I build web applications for real workflows, from responsive
                interfaces to backend APIs. Currently working on healthcare
                software and dashboards.
              </p>
              <div className="controls">
                <ButtonLink href="/work">Explore selected work</ButtonLink>
                <ButtonLink href="/about" variant="outline">
                  About me
                </ButtonLink>
              </div>
            </div>
            <div className="hero-right">
              <span className="ghost-a" aria-hidden="true">
                AJ
              </span>
              <ProjectPreview project={projects[0]} priority />
              <div className="labelled">
                <span className="status-dot" aria-hidden="true" />
                Illustrative concept / Healthcare dashboard
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <div>Selected technologies</div>
            <ul className="hero-tech">
              {coreTechnologies.map((tech) => (
                <li key={tech}>
                  <i className="tech-mini" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
            <a href="#selected-work" className="scroll-link">
              Scroll <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>
      <section className="section selected-work" id="selected-work">
        <div className="container">
          <SectionHeading
            eyebrow="01 / Selected work"
            title={
              <>
                Work that speaks
                <br />
                for itself.
              </>
            }
            href="/work"
            linkLabel="All projects"
          />
          {projects
            .filter((project) => project.featuredTitle)
            .map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          <div className="small-project-grid">
            {projects
              .filter((project) => !project.featuredTitle)
              .map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
          </div>
        </div>
      </section>
      <section className="black-panel">
        <div className="container black-grid">
          <div>
            <Eyebrow>02 / About</Eyebrow>
            <h2>
              Practical
              <br />
              thinking.
              <br />
              <span className="faded">Clear interfaces.</span>
            </h2>
          </div>
          <div>
            <p className="panel-description">
              My strongest background is frontend engineering. I also build
              Node.js and Express.js APIs, collaborate across disciplines, and
              care about how real users experience complex software.
            </p>
            <div className="quiet-stats">
              <div>
                <strong>Frontend</strong>
                <span>REACT / NEXT.JS / TYPESCRIPT</span>
              </div>
              <div>
                <strong>Backend</strong>
                <span>NODE.JS / EXPRESS.JS / APIS</span>
              </div>
            </div>
            <ButtonLink className="mt-10" href="/about" variant="white">
              More about me
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="03 / Experience"
            title="Where I've worked."
            href="/about"
            linkLabel="My background"
          />
          <Experience />
        </div>
      </section>
    </>
  );
}
