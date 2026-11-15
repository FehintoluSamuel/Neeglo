import { brand } from "../data/content.js";
import {
  academy,
  careersFaqs,
  careersHero,
  careersMailto,
  generalApplication,
  hiringProcess,
  openRoles,
} from "../data/careers.js";
import careersImage from "../images/Works_images/Background_images/software-engineer-coding-laptop-focusing-deep-learning.webp";

export default function Careers() {
  const generalMailto = careersMailto(generalApplication.subject);
  const academyMailto = careersMailto(academy.cta.subject);

  return (
    <>
      <section className="team-hero">
        <div className="team-hero__media">
          <img src={careersImage} alt="" aria-hidden="true" />
        </div>
        <div className="team-hero__overlay" aria-hidden="true" />
        <div className="team-hero__inner">
          <div className="team-hero__content">
            <p className="team-hero__eyebrow">{careersHero.eyebrow}</p>
            <h1 className="team-hero__title">{careersHero.title}</h1>
            <p className="team-hero__subtitle">{careersHero.subtitle}</p>
          </div>
        </div>
      </section>

      <section
        className="team-sath team-sath--intro careers-academy"
        id="academy"
      >
        <div className="team-sath__container">
          <div className="team-sath__header" data-reveal>
            <h2 className="team-sath__title">{academy.title}</h2>
            <p className="team-sath__subtitle">
              {academy.status}. {academy.intro}
            </p>
          </div>

          <div className="team-sath__intro-text" data-reveal>
            <h3>How the programme works</h3>
            <ol className="careers-steps">
              {academy.steps.map((step) => (
                <li key={step.title}>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="team-sath__meta-grid" data-reveal>
            {academy.facts.map((fact) => (
              <div key={fact.label}>
                <span className="team-sath__meta-label">{fact.label}</span>
                <span className="team-sath__meta-value">{fact.value}</span>
              </div>
            ))}
          </div>

          <div className="team-sath__intro-text" data-reveal>
            {academy.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>

          <div className="careers-action" data-reveal>
            <a className="btn btn--primary" href={academyMailto}>
              {academy.cta.label}
            </a>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="open-roles">
        <div className="section-head" data-reveal>
          <h2>Open roles</h2>
          <p className="section-head__desc">
            Internships and professional roles are posted here when they open.
            Each role will state the location, working pattern and what the work
            involves.
          </p>
        </div>

        {openRoles.length ? (
          <ul className="careers-roles">
            {openRoles.map((role) => (
              <li key={role.id}>
                <div>
                  <h3>{role.title}</h3>
                  <p>
                    {role.summary} · {role.department} · {role.location}
                  </p>
                </div>
                <a
                  className="btn btn--outline"
                  href={careersMailto(`Application — ${role.title}`)}
                >
                  Apply by email
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="careers-empty" data-reveal>
            <h3>No open roles right now.</h3>
            <p>
              When something opens, it will be listed here. In the meantime,
              send your CV and a short note. We'll keep it on file and reach out
              if there's a fit.
            </p>
            <a className="btn btn--primary" href={generalMailto}>
              Send us your CV
            </a>
          </div>
        )}
      </section>

      <section className="section" id="apply">
        <div className="section-head" data-reveal>
          <h2>{generalApplication.title}</h2>
          <p className="section-head__desc">{generalApplication.text}</p>
        </div>

        <div className="careers-columns">
          <div data-reveal>
            <h3>Email us directly</h3>
            <p>
              <a href={generalMailto}>{brand.emailCareers}</a>
            </p>
            <p>
              Attach your CV, tell us what you want to do, and send it to the
              address above. We read every email and reply when there's a fit.
            </p>
            <div className="careers-action">
              <a className="btn btn--primary" href={generalMailto}>
                Email your application
              </a>
            </div>
          </div>

          <div data-reveal>
            <h3>What to include</h3>
            <ul className="careers-list">
              {generalApplication.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="section-head__desc">
              Want your CV removed later? Email the same address and we'll
              delete it.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="process">
        <div className="section-head" data-reveal>
          <h2>What happens next.</h2>
          <p className="section-head__desc">
            We keep the process direct. For academy applicants, the foundation
            assessment is part of the selection process.
          </p>
        </div>

        <div className="careers-columns">
          <div data-reveal>
            <h3>Process</h3>
            <ol className="careers-steps">
              {hiringProcess.map((step) => (
                <li key={step.title}>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="careers-faq" data-reveal>
            <h3>Questions</h3>
            {careersFaqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner" data-reveal>
          <h2>Tell us what you want to build.</h2>
          <p>
            A short note is enough. Tell us what you've made, what you're
            learning and what you want to do next.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href={generalMailto}>
              Email {brand.emailCareers}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
