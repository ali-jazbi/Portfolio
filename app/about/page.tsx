import Image from "next/image";
import Link from "next/link";
import { Arrow, Eyebrow, SectionHeading } from "@/components/ui";
import { Experience } from "@/components/experience";
import { profile, skillGroups } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About",
  "Meet Ali Jazbi, a frontend-focused full-stack developer based in Tehran. Explore his approach, React and Node.js skills, experience and education.",
  "/about",
);

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="about-hero">
            <div>
              <Eyebrow tone="blue">01 / About me</Eyebrow>
              <h1>
                I started with interfaces.
                <br />
                <span className="muted">Now I build across the stack.</span>
              </h1>
              <p>
                I&apos;m {profile.name}, a frontend-focused full-stack developer
                based in Tehran. I work with React, Next.js, TypeScript, Node.js
                and Express.js, turning complex requirements into usable web
                applications.
              </p>
              <p>
                My professional work at Dotr includes healthcare dashboards for
                projects associated with Shahid Beheshti University of Medical
                Sciences, alongside a full storefront and admin dashboard
                frontend redesign for Parin Sanat.
              </p>
              <Link className="inline-link" href="/contact">
                Get in touch <Arrow />
              </Link>
            </div>
            <div className="portrait-slot">
              {profile.portrait ? (
                <Image
                  src={profile.portrait.src}
                  alt={profile.portrait.alt}
                  width={profile.portrait.width}
                  height={profile.portrait.height}
                  sizes="(max-width: 700px) 90vw, 40vw"
                  priority
                />
              ) : (
                <>
                  <span className="portrait-initials" aria-hidden="true" />
                  <span className="portrait-notice">
                    PORTRAIT PLACEHOLDER
                    <br />A real photo will be added with permission
                  </span>
                </>
              )}
            </div>
          </div>
          <dl className="info-strip">
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Frontend &amp; full-stack web</dd>
            </div>
            <div>
              <dt>Work</dt>
              <dd>Dashboards / E-commerce / APIs</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="rule" />
      <section className="section">
        <div className="container two-col-copy">
          <div>
            <Eyebrow tone="blue">02 / Approach</Eyebrow>
            <h2>Good software is useful first.</h2>
          </div>
          <div>
            <p>
              I enjoy the parts of web development where interface decisions
              meet real product requirements: dense information, complex forms,
              reusable components, and API-driven features.
            </p>
            <p>
              I work across the stack when a project needs it, but frontend
              architecture, interaction quality, and clear user experiences
              remain my strongest interests.
            </p>
            <p>
              I prefer maintainable solutions that teams can understand,
              improve, and ship with confidence.
            </p>
          </div>
        </div>
      </section>
      <section className="section skills-section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>03 / Skills</Eyebrow>
              <h2>Tools of the trade.</h2>
            </div>
            <p>
              Technologies grouped by how I use them, rather than a wall of
              badges.
            </p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="04 / Journey" title="Experience." />
          <Experience detailed />
        </div>
      </section>
    </>
  );
}
