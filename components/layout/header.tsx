import Link from "next/link";
import { Navigation } from "./navigation";
import { profile } from "@/data/profile";

export function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="logo" aria-label={`${profile.name} home`}>
          AJ<span>.</span>
        </Link>
        <Navigation />
        <div className="header-side">
          <span className="status-dot" aria-hidden="true" />
          {profile.location}
        </div>
      </div>
    </header>
  );
}
