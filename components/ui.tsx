import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function ButtonLink({
  href,
  children,
  variant = "",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "" | "outline" | "white";
  className?: string;
}) {
  return (
    <Link href={href} className={`button ${variant} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "",
}: {
  children: ReactNode;
  tone?: "" | "blue" | "muted";
}) {
  return <div className={`eyebrow ${tone}`}>{children}</div>;
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="label-row" aria-label="Project technologies and scope">
      {items.map((item) => (
        <li className="tag" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: ReactNode;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {href ? (
        <Link className="inline-link" href={href}>
          {linkLabel} <Arrow />
        </Link>
      ) : null}
    </div>
  );
}
