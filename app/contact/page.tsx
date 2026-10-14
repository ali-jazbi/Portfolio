import { Arrow, Eyebrow } from "@/components/ui";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact",
  "Contact Ali Jazbi about frontend and full-stack roles or projects. Direct email, LinkedIn and GitHub links.",
  "/contact",
);

export default function Contact() {
  const contacts = [
    {
      type: "01 / Email",
      name: profile.email,
      href: `mailto:${profile.email}`,
    },
    { type: "02 / Network", name: "LinkedIn", href: profile.linkedin },
    { type: "03 / Code", name: "GitHub", href: profile.github },
  ];
  return (
    <section className="contact-hero">
      <div className="container">
        <Eyebrow tone="blue">Contact / 05</Eyebrow>
        <h1>
          Have a project
          <br />
          or role in mind?
          <br />
          <span className="dim">Let&apos;s talk.</span>
        </h1>
        <p>
          I&apos;m interested in thoughtful frontend and full-stack web
          development opportunities. Reach out if you&apos;d like to discuss a
          role, a project or how I work.
        </p>
        <div className="contact-links">
          {contacts.map((contact) => (
            <a className="contact-row" href={contact.href} key={contact.type}>
              <div className="left">
                <span className="type">{contact.type}</span>
                <span className="name">{contact.name}</span>
              </div>
              <span className="arrow">
                <Arrow />
              </span>
            </a>
          ))}
        </div>
        <p className="contact-location">
          Based in {profile.location}. Reach me directly through the links
          above.
        </p>
      </div>
    </section>
  );
}
