import Image from "next/image";
import type { Project } from "@/data/projects";

// Deliberately illustrative UI from the supplied design brief. Never client data.
// Only populate approvedImage after the owner grants publication permission.
export function ProjectPreview({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  if (project.approvedImage) {
    const { src, alt, width, height } = project.approvedImage;
    return (
      <Image
        className="approved-project-image"
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 700px) 90vw, 65vw"
        priority={priority}
      />
    );
  }
  if (project.preview === "healthcare")
    return (
      <div
        className="ui-shell"
        role="img"
        aria-label="Illustrative healthcare dashboard concept. No actual hospital or patient data."
      >
        <div className="app-top">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="brand">HIS / DEMO</span>
          <span className="app-top-note">Illustrative concept</span>
        </div>
        <div className="app-body">
          <div className="app-sidebar">
            {[80, 66, 76, 58, 83, 68, 70].map((width, index) => (
              <div
                className={`app-side-line ${index === 0 ? "active" : ""}`}
                key={index}
                style={{ width: `${width}%` }}
              />
            ))}
          </div>
          <div className="app-content">
            <div className="app-heading">Dashboard overview</div>
            <div className="app-desc">
              Illustrative interface / No real project data
            </div>
            <div className="app-stat-row">
              {["Total records", "Reports", "Processed"].map((label) => (
                <div className="app-stat" key={label}>
                  <div className="num-label">{label}</div>
                  <div className="number">-</div>
                </div>
              ))}
            </div>
            <div className="chart-area">
              {[72, 47, 63, 87, 54, 100, 75, 66, 91, 58, 77, 97].map(
                (height, index) => (
                  <span
                    className="chart-bar"
                    key={index}
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
            <div className="app-footer">
              <span className="app-foot-line" />
              <span className="app-foot-line" />
              <span className="app-foot-line" />
            </div>
          </div>
        </div>
      </div>
    );
  if (project.preview === "storefront")
    return (
      <div
        className="store-shell"
        role="img"
        aria-label={`Illustrative storefront concept. Not a screenshot of ${project.title}.`}
      >
        <div className="store-top">
          <span className="store-brand">STORE / CONCEPT</span>
          <span className="store-nav">Illustrative concept</span>
        </div>
        <div className="store-hero">
          <div>
            <div className="store-headline">
              Made for
              <br />
              everyday use.
            </div>
            <p>
              Simple shopping experience with a consistent component system.
            </p>
          </div>
          <div className="store-object" />
        </div>
        <div className="store-catalog">
          {[0, 1, 2, 3].map((index) => (
            <div className="store-product" key={index}>
              <i />
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <div
      className="survey-art"
      role="img"
      aria-label="Illustrative form builder concept. Not a real project screenshot."
    >
      <div className="eyebrow muted mb-4">Survey / Concept</div>
      <div className="survey-title">Create a new form</div>
      <div className="survey-fields">
        <i />
        <i />
        <i className="wide" />
        <i />
        <i />
      </div>
      <div className="survey-button" />
    </div>
  );
}
