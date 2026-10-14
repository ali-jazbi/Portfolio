"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navigation } from "@/data/profile";

export function Navigation() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const button = useRef<HTMLButtonElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const open = openPath === pathname;
  const close = () => setOpenPath(null);

  const links = navigation.map(({ href, label }) => {
    const active = href === "/" ? pathname === href : pathname.startsWith(href);
    return (
      <Link
        key={href}
        href={href}
        className={active ? "active" : undefined}
        aria-current={active ? "page" : undefined}
        onClick={close}
      >
        {label}
      </Link>
    );
  });

  return (
    <div
      ref={root}
      className="navigation"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          close();
          button.current?.focus();
        }
      }}
    >
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links}
      </nav>
      <button
        ref={button}
        className="mobile-menu"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpenPath(open ? null : pathname)}
      >
        <span
          aria-hidden="true"
          className={open ? "menu-glyph is-open" : "menu-glyph"}
        >
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links}
      </nav>
    </div>
  );
}
