import { useState } from "react";
import { companyIntro, images, team, teamOrg } from "../data/content.js";

const facts = [
  { k: "Co-founders", v: "6" },
  { k: "Cities", v: "3" },
  { k: "Founded", v: "2026" },
  { k: "Support", v: "Bincom Dev" },
];

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Team() {
  const [member, setMember] = useState(null);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner" data-reveal>
          <div className="eyebrow">Team</div>
          <h1>Six founders, one company</h1>
          <p className="page-hero__text">
            Neeglo is an independent software company run by the six people who
            started it - a project manager, two designers and three engineers,
            working across Lagos, Abakaliki and Enugu. We build under our own
            name, we write our reasoning down, and each of us owns a piece of
            whatever ships.
          </p>
        </div>
      </section>

      <section className="fact-strip" aria-label="Team at a glance">
        {facts.map((f, i) => (
          <div
            className="fact"
            key={f.k}
            data-reveal
            style={{ "--reveal-delay": `${i * 0.06}s` }}
          >
            <div className="fact__value">{f.v}</div>
            <div className="fact__label">{f.k}</div>
          </div>
        ))}
      </section>

      <section className="company-grid">
        <div className="company-panel company-panel--alt" data-reveal>
          <div className="eyebrow">The company</div>
          <h2>{companyIntro.title}</h2>
          {companyIntro.paras.map((para) => (
            <p className="company-panel__text" key={para}>
              {para}
            </p>
          ))}
        </div>

        <div
          className="company-panel"
          data-reveal
          style={{ "--reveal-delay": "0.1s" }}
        >
          <div className="eyebrow">At a glance</div>
          <h2>How we're set up</h2>
          <div className="ops-table">
            {teamOrg.map((row) => (
              <div className="ops-row" key={row.k}>
                <div className="ops-row__key">{row.k}</div>
                <div className="ops-row__val">{row.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="media-band" aria-label="Collaboration">
        <img
          src={images.teamWhiteboard}
          alt="The Neeglo team collaborating at a whiteboard"
        />
        <div className="media-band__overlay" aria-hidden="true" />
        <div className="media-band__content">
          <div className="media-band__inner" data-reveal>
            <div className="media-band__title">Documents before code</div>
            <p className="media-band__text">
              We write the brief before we write the feature. TrendySize shipped
              a 15-page backend specification before the first sprint - and
              everyone on the team could read it.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--flush section--alt">
        <div className="team-grid">
          {team.map((m, i) => (
            <button
              type="button"
              className="team-card"
              key={m.id}
              onClick={() => setMember(m)}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 0.06}s` }}
            >
              <div className="team-card__img">
                {m.img ? (
                  <img
                    src={m.img}
                    alt={`${m.name} headshot`}
                    loading="lazy"
                  />
                ) : (
                  <span
                    className="team-card__img--mono"
                    aria-hidden="true"
                  >
                    {initials(m.name)}
                  </span>
                )}
              </div>
              <div className="team-card__body">
                <div className="team-card__name">{m.name}</div>
                <div className="team-card__role">{m.role}</div>
                <p className="team-card__bio">{m.bio}</p>
                <div className="team-card__foot">
                  <span className="team-card__loc">{m.location}</span>
                  <span className="team-card__cta">Read full profile</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {member && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${member.name}, ${member.role}`}
          onClick={() => setMember(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal__head">
              <div className="modal__title">
                {member.name} - {member.role}
              </div>
              <button
                type="button"
                className="modal__close"
                aria-label="Close profile"
                onClick={() => setMember(null)}
              >
                Close
              </button>
            </div>

            <div className="modal__grid">
              <div className="modal__side">
                <div className="modal__photo">
                  {member.img ? (
                    <img src={member.img} alt={member.name} />
                  ) : (
                    <div
                      className="modal__photo modal__photo--mono"
                      aria-hidden="true"
                    >
                      {initials(member.name)}
                    </div>
                  )}
                </div>
                <div className="modal__links">
                  {member.links.github && (
                    <a
                      className="modal__link"
                      href={`https://${member.links.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.links.github}
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      className="modal__link"
                      href={`https://${member.links.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.links.linkedin}
                    </a>
                  )}
                </div>
              </div>

              <div className="modal__main">
                <div className="modal__name">{member.name}</div>
                <div className="modal__role">{member.role}</div>
                <p className="modal__bio">{member.profile ?? member.bio}</p>

                {member.credentials && (
                  <div className="modal__block">
                    <div className="modal__block-label">
                      Education & certification
                    </div>
                    <ul className="modal__list">
                      {member.credentials.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.experience && (
                  <div className="modal__block">
                    <div className="modal__block-label">Experience</div>
                    <ul className="modal__list">
                      {member.experience.map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.achievements && (
                  <div className="modal__block">
                    <div className="modal__block-label">Achievements</div>
                    <ul className="modal__list">
                      {member.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.articles && (
                  <div className="modal__block">
                    <div className="modal__block-label">Writing</div>
                    <div className="modal__links">
                      {member.articles.map((a) => (
                        <a
                          key={a.url}
                          className="modal__link"
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {a.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal__focus">
                  <div className="modal__focus-label">Focus</div>
                  <div className="modal__focus-value">{member.focus}</div>
                </div>

                <div className="modal__stats">
                  <div className="modal__stat">
                    <div className="modal__stat-label">Based in</div>
                    <div className="modal__stat-value">{member.location}</div>
                  </div>
                  <div className="modal__stat">
                    <div className="modal__stat-label">With Neeglo since</div>
                    <div className="modal__stat-value">{member.since}</div>
                  </div>
                  <div className="modal__stat">
                    <div className="modal__stat-label">Working on</div>
                    <div className="modal__stat-value">TrendySize</div>
                  </div>
                  <div className="modal__stat">
                    <div className="modal__stat-label">Commitment</div>
                    <div className="modal__stat-value">Full-time co-founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
