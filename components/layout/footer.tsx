import { profile } from "@/data/profile";
import { Arrow, Eyebrow } from "@/components/ui";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Eyebrow tone="muted">Have something in mind?</Eyebrow>
            <h2 className="footer-title">Let&apos;s talk.</h2>
          </div>
          <a className="footer-action" href={`mailto:${profile.email}`}>
            Send an email <Arrow />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {profile.name} · Built with care.</span>
          <div className="footer-links">
            <a href={profile.github}>
              GitHub <Arrow />
            </a>
            <a href={profile.linkedin}>
              LinkedIn <Arrow />
            </a>
            <a href={`mailto:${profile.email}`}>
              Email <Arrow />
            </a>
          </div>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
