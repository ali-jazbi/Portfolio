"use client";

import { useState, type ReactNode } from "react";
import { projectFilters, type ProjectCategory } from "@/data/projects";

export function ProjectFilter({
  entries,
}: {
  entries: { slug: string; category: ProjectCategory; content: ReactNode }[];
}) {
  const [filter, setFilter] =
    useState<(typeof projectFilters)[number]["value"]>("all");
  const visible = entries.filter(
    (entry) => filter === "all" || entry.category === filter,
  );
  return (
    <>
      <div className="filter-bar" role="group" aria-label="Project filters">
        {projectFilters.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className={`filter ${filter === value ? "active" : ""}`}
            aria-pressed={filter === value}
            aria-controls="project-results"
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visible.length} {visible.length === 1 ? "project" : "projects"} shown
      </p>
      <div id="project-results">
        {entries.map((entry) => (
          <div
            key={entry.slug}
            hidden={filter !== "all" && entry.category !== filter}
          >
            {entry.content}
          </div>
        ))}
      </div>
    </>
  );
}
