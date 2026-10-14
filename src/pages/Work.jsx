import { useState } from "react";
import { caseStudies, images, workFilters } from "../data/content.js";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);

  const visible =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === filter);

  return (
    <>
      <section className="work-head">
        <div className="work-head__row" data-reveal>
          <div>
            <div className="eyebrow">Work</div>
            <h1>Selected builds</h1>
            <p className="work-head__text">
              A selection of projects the team has built independently. These are not Neeglo client engagements - they are founders' personal projects. Neeglo's focus now is TrendySize, our own product.
            </p>
          </div>

          <div className="filter-bar" role="tablist" aria-label="Filter work">
            {workFilters.map((f) => (
              <button
                type="button"
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`filter-btn${filter === f ? " is-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="work-grid" aria-live="polite">
        {visible.map((c, i) => (
          <article
            className="case-card"
            key={c.id}
            data-reveal
            style={{ "--reveal-delay": `${(i % 4) * 0.06}s` }}
          >
            <div className="case-card__media">
              <img
                src={images.dataCenter}
                alt={`${c.title} infrastructure`}
                loading="lazy"
                style={{
                  objectPosition: `${(i * 20) % 100}% ${50 + ((i * 10) % 50)}%`,
                }}
              />
              <span className="case-card__tag">{c.category}</span>
              <span className="case-card__year">{c.year}</span>
              <div className="case-card__metrics">
                <div className="metric-cell">
                  <div className="metric-cell__label">Impact</div>
                  <div className="metric-cell__value">{c.impact}</div>
                </div>
                <div className="metric-cell">
                  <div className="metric-cell__label">Scale</div>
                  <div className="metric-cell__value">{c.metric}</div>
                </div>
              </div>
            </div>

            <div className="case-card__body">
              <h2 className="case-card__title">{c.title}</h2>
              <p className="case-card__desc">{c.desc}</p>

              <div className="spec-table">
                <div className="spec-table__key">Stack</div>
                <div className="spec-table__val">{c.stack}</div>
                <div className="spec-table__key">Client</div>
                <div className="spec-table__val">{c.client}</div>
                <div className="spec-table__key">Timeline</div>
                <div className="spec-table__val">
                  {c.year} · {c.duration} · {c.teamSize}
                </div>
              </div>

              <p className="case-card__review">
                Reviewed by {c.reviewedBy} · {c.reviewedOn}
              </p>

              <button
                type="button"
                className="btn btn--outline case-card__cta"
                onClick={() => setOpen(c)}
              >
                Read case study
              </button>
            </div>
          </article>
        ))}
      </section>

      {open && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <div className="modal modal--case" onClick={(e) => e.stopPropagation()}>
            <div className="modal__head">
              <div className="modal__title">
                {open.title} - {open.client}
              </div>
              <button
                type="button"
                className="modal__close"
                aria-label="Close case study"
                onClick={() => setOpen(null)}
              >
                Close
              </button>
            </div>

            <div className="case-modal__media">
              <img src={images.dataCenter} alt={`${open.title} infrastructure`} />
              <span className="case-card__tag">{open.category}</span>
            </div>

            <div className="case-modal__body">
              <div className="case-modal__meta">
                <span>{open.client}</span>
                <span aria-hidden="true">·</span>
                <span>{open.region}</span>
                <span aria-hidden="true">·</span>
                <span>{open.year}</span>
              </div>

              <p className="case-modal__desc">{open.desc}</p>

              <blockquote className="quote">
                <p>{open.quote}</p>
                <footer>{open.attrib}</footer>
              </blockquote>

              <div className="spec-table spec-table--wide">
                <div className="spec-table__key">Impact</div>
                <div className="spec-table__val">{open.impact}</div>
                <div className="spec-table__key">Scale</div>
                <div className="spec-table__val">{open.metric}</div>
                <div className="spec-table__key">Stack</div>
                <div className="spec-table__val">{open.stack}</div>
                <div className="spec-table__key">Timeline</div>
                <div className="spec-table__val">
                  {open.duration} · {open.teamSize}
                </div>
              </div>

              <p className="case-card__review">
                Reviewed by {open.reviewedBy} · {open.reviewedOn}
              </p>

              <a className="btn btn--primary case-modal__cta" href="/contact.html">
                Scope something similar
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
