import { useState } from "react";
import { companyIntro, team, teamOrg } from "../data/content.js";
import bannerImg from "../images/products_images/new_images/engineer-data-center-managing-optimizing-large-scale-it-infrastructure.webp";

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Team() {
  const [active, setActive] = useState(team[0]);

  return (
    <>
      <section className="team-hero">
        <div className="team-hero__media">
          <img src={bannerImg} alt="" aria-hidden="true" />
        </div>
        <div className="team-hero__overlay" aria-hidden="true" />
        <div className="team-hero__inner">
          <div className="team-hero__content">
            <p className="team-hero__eyebrow">About Neeglo</p>
            <h1 className="team-hero__title">Building technology with purpose</h1>
            <p className="team-hero__subtitle">
              Practical solutions designed and engineered across Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="team-sath team-sath--intro">
        <div className="team-sath__container">
          <div className="team-sath__header" data-reveal>
            <h2 className="team-sath__title">About Neeglo</h2>
            <p className="team-sath__subtitle">
              The Tech Team behind Neeglo, building practical technology for real problems across Africa.
            </p>
          </div>
          <div className="team-sath__intro-text" data-reveal style={{ "--reveal-delay": "0.08s" }}>
            {companyIntro.paras.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="team-sath team-sath--featured" id="profiles">
        <div className="team-sath__container">
          <div className="team-sath__featured-card" data-reveal>
            <div className="team-sath__featured-media">
              {active.img ? (
                <img src={active.img} alt={active.name} loading="lazy" />
              ) : (
                <div className="team-sath__featured-placeholder">
                  {initials(active.name)}
                </div>
              )}
            </div>
            <div className="team-sath__featured-body">
              <p className="team-sath__eyebrow-text">Leadership</p>
              <h2 className="team-sath__featured-name">
                {active.name.split(" ")[0]}{" "}
                <strong>{active.name.split(" ").slice(1).join(" ")}</strong>
              </h2>
              <p className="team-sath__featured-role">{active.role}</p>
              <div className="team-sath__divider" aria-hidden="true" />
              <div className="team-sath__featured-bio">
                <p>{active.profile ?? active.bio}</p>
                {active.focus ? <p><strong>Focus:</strong> {active.focus}</p> : null}
              </div>
              <div className="team-sath__meta-grid">
                <div>
                  <span className="team-sath__meta-label">Based in</span>
                  <span className="team-sath__meta-value">{active.location}</span>
                </div>
                <div>
                  <span className="team-sath__meta-label">With Neeglo since</span>
                  <span className="team-sath__meta-value">{active.since}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-sath team-sath--board">
        <div className="team-sath__container">
          <div className="team-sath__section-header" data-reveal>
            <h2>Our Team</h2>
            <p>Co-founders driving Neeglo forward</p>
          </div>
          <div className="team-sath__board-grid">
            {team.map((m) => {
              const isActive = active.id === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  className={`team-sath__board-card${isActive ? " is-active" : ""}`}
                  onClick={() => setActive(m)}
                  data-reveal
                >
                  <div className="team-sath__board-media">
                    {m.img ? (
                      <img src={m.img} alt="" aria-hidden="true" loading="lazy" />
                    ) : (
                      <div className="team-sath__board-placeholder">{initials(m.name)}</div>
                    )}
                  </div>
                  <div className="team-sath__board-info">
                    <h3>{m.name}</h3>
                    <p>{m.role}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="team-sath__org" data-reveal style={{ "--reveal-delay": "0.08s" }}>
            <div className="team-sath__org-card">
              <h3>Company Profile</h3>
              <div className="team-sath__org-grid">
                {teamOrg.map((row) => (
                  <div className="team-sath__org-row" key={row.k}>
                    <span className="team-sath__org-key">{row.k}</span>
                    <span className="team-sath__org-val">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
