import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";

export function Experience({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="experience-list">
      {experiences.map((item) => (
        <article className="experience-item" key={item.company}>
          <div className="small-index">{item.period.toUpperCase()}</div>
          <div>
            <h3>
              {item.company}
              {detailed ? null : ` / ${item.role}`}
            </h3>
            <p>{detailed ? item.description : item.summary}</p>
          </div>
          <div className="meta">
            {detailed ? (
              <>
                {item.role}
                <br />
                {item.roleNote}
              </>
            ) : (
              item.roleNote
            )}
          </div>
        </article>
      ))}
      {detailed ? (
        <article className="experience-item">
          <div className="small-index">EDUCATION</div>
          <div>
            <h3>{profile.education.subject}</h3>
            <p>{profile.education.university}.</p>
          </div>
          <div className="meta">{profile.education.status}</div>
        </article>
      ) : null}
    </div>
  );
}
