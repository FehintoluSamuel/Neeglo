import { aboutCta, aboutFacts, aboutHero } from "../data/about.js";
import {
  companyIntro,
  images,
  labNotes,
  operatingModel,
  principles,
  timeline,
} from "../data/content.js";
import aboutImage from "../images/Works_images/Background_images/work-hero-engineering.webp";

export default function About() {
  return (
    <>
      <section className="team-hero about-hero">
        <div className="team-hero__media">
          <img src={aboutImage} alt="" aria-hidden="true" />
        </div>
        <div className="team-hero__overlay" aria-hidden="true" />
        <div className="team-hero__inner">
          <div className="team-hero__content">
            <p className="team-hero__eyebrow">{aboutHero.eyebrow}</p>
            <h1 className="team-hero__title">{aboutHero.title}</h1>
            <p className="team-hero__subtitle">{aboutHero.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section about-intro">
        <div className="about-intro__grid">
          <div className="about-intro__head" data-reveal>
            <p className="eyebrow">Who we are</p>
            <h2>A software company, close to the work.</h2>
          </div>

          <div
            className="about-intro__body"
            data-reveal
            style={{ "--reveal-delay": "0.08s" }}
          >
            {companyIntro.paras.map((para) => (
              <p key={para}>{para}</p>
            ))}

            <div className="about-facts">
              {aboutFacts.map((fact) => (
                <div className="about-fact" key={fact.label}>
                  <span className="about-fact__label">{fact.label}</span>
                  <span className="about-fact__value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="company-grid">
        <div className="company-panel company-panel--alt" data-reveal="left">
          <h2>Principles</h2>
          <div className="principles">
            {principles.map((principle) => (
              <div className="principle" key={principle.t}>
                <div className="principle__title">{principle.t}</div>
                <p className="principle__desc">{principle.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="company-panel"
          id="operating-model"
          data-reveal="right"
          style={{ "--reveal-delay": "0.1s" }}
        >
          <h2>Operating model</h2>
          <div className="ops-table">
            {operatingModel.map((row) => (
              <div className="ops-row" key={row.k}>
                <div className="ops-row__key">{row.k}</div>
                <div className="ops-row__val">{row.v}</div>
              </div>
            ))}
          </div>

          <div className="company-img">
            <img
              src={images.teamWhiteboard}
              alt="Neeglo team at the company whiteboard"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Our story</p>
          <h2>How we got here</h2>
          <p className="section-head__desc">
            From the first meeting in April 2026 to the first product pilot.
          </p>
        </div>

        <ol className="timeline">
          {timeline.map((item, index) => (
            <li
              className="timeline-item"
              key={item.year + item.title}
              data-reveal
              style={{ "--reveal-delay": `${index * 0.06}s` }}
            >
              <span className="timeline-item__year">{item.year}</span>
              <div className="timeline-item__body">
                <div className="timeline-item__title">{item.title}</div>
                <p className="timeline-item__text">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--alt" id="field-notes">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Field notes</p>
          <h2>What we are learning.</h2>
          <p className="section-head__desc">
            Working notes from engineering, design and product as we build.
          </p>
        </div>

        <div className="notes-grid">
          {labNotes.map((note, index) => (
            <a
              className="note"
              href="/contact"
              key={note.title}
              data-reveal
              style={{ "--reveal-delay": `${index * 0.06}s` }}
            >
              <div className="note__meta">
                {note.date} · {note.read}
              </div>
              <div className="note__title">{note.title}</div>
              <div className="note__foot">
                <span>{note.author}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="cta-band about-cta">
        <div className="cta-band__inner" data-reveal>
          <p className="eyebrow">{aboutCta.eyebrow}</p>
          <h2>{aboutCta.title}</h2>
          <p>{aboutCta.text}</p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="/team">
              Meet the team
            </a>
            <a className="btn btn--secondary" href="/careers">
              Explore careers
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
