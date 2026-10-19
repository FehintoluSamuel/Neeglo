import { useEffect, useRef, useState } from "react";
import { companyIntro, images, team, teamOrg } from "../data/content.js";
import { Github, Linkedin } from "../../brand/icons.jsx";
import Icon from "../components/Icon.jsx";
import bannerWebp from "../images/Team_images/optimized/team_page_banner.webp";
import bannerJpg from "../images/Team_images/optimized/team_page_banner.jpg";

const facts = [
  { k: "Co-founders", v: "6" },
  { k: "Cities", v: "3" },
];

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
  const modalRef = useRef(null);
  const closeRef = useRef(null);
  const lastFocusedRef = useRef(null);

  function openProfile(m) {
    lastFocusedRef.current = document.activeElement;
    setMember(m);
  }

  function closeProfile() {
    setMember(null);
  }

  // Focus management: trap Tab inside the dialog, close on Escape, and
  // lock background scroll while it is open. Restore focus on close.
  useEffect(() => {
    if (!member) return undefined;

    const previouslyFocused = lastFocusedRef.current;
    closeRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeProfile();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = modalRef.current?.querySelectorAll(FOCUSABLE);
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [member]);

  return (
    <>
      <section className="page-banner">
        <picture aria-hidden="true">
          <source srcSet={bannerWebp} type="image/webp" />
          <img src={bannerJpg} alt="" />
        </picture>
        <div className="page-banner__overlay" aria-hidden="true" />
        <div className="page-banner__inner">
          <div className="page-banner__content">
            <h1 className="page-banner__title">
              <span data-reveal style={{ "--reveal-delay": "0s" }}>
                Built
              </span>
              <span data-reveal style={{ "--reveal-delay": "0.12s" }}>
                to last
              </span>
            </h1>
          </div>
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
        <div className="company-panel company-panel--alt" data-reveal="left">
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
          data-reveal="right"
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
            <article
              className="team-card"
              key={m.id}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 0.06}s` }}
            >
              <div className="team-card__img">
                {m.img ? (
                  <img src={m.img} alt="" aria-hidden="true" loading="lazy" />
                ) : (
                  <span className="team-card__img--mono" aria-hidden="true">
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
                  <div className="team-card__social">
                    {m.links.github && (
                      <a
                        className="team-card__icon"
                        href={`https://${m.links.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on GitHub`}
                      >
                        <Icon as={Github} size="sm" />
                      </a>
                    )}
                    {m.links.linkedin && (
                      <a
                        className="team-card__icon"
                        href={`https://${m.links.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                      >
                        <Icon as={Linkedin} size="sm" />
                      </a>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  className="team-card__open"
                  onClick={() => openProfile(m)}
                  aria-haspopup="dialog"
                  aria-label={`Read the full profile of ${m.name}, ${m.role}`}
                >
                  <span aria-hidden="true">Read full profile</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {member && (
        <div className="modal-overlay" onClick={closeProfile}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal__head">
              <div className="modal__title" id="profile-title">
                {member.name} - {member.role}
              </div>
              <button
                type="button"
                className="modal__close"
                aria-label="Close profile"
                ref={closeRef}
                onClick={closeProfile}
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
                      <Icon as={Github} size="sm" />
                      GitHub
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      className="modal__link"
                      href={`https://${member.links.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon as={Linkedin} size="sm" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>

              <div className="modal__main">
                <h2 className="modal__name">{member.name}</h2>
                <div className="modal__role">{member.role}</div>
                <p className="modal__bio">{member.profile ?? member.bio}</p>

                {member.credentials && (
                  <div className="modal__block">
                    <h3 className="modal__block-label">
                      Education & certification
                    </h3>
                    <ul className="modal__list">
                      {member.credentials.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.experience && (
                  <div className="modal__block">
                    <h3 className="modal__block-label">Experience</h3>
                    <ul className="modal__list">
                      {member.experience.map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.achievements && (
                  <div className="modal__block">
                    <h3 className="modal__block-label">Achievements</h3>
                    <ul className="modal__list">
                      {member.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.articles && (
                  <div className="modal__block">
                    <h3 className="modal__block-label">Writing</h3>
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
