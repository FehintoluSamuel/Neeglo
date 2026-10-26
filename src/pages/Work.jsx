import { useState } from "react";
import { caseStudies, images } from "../data/content.js";
import {
  trendySizeWorkLogo,
  wikeepIcon,
  wikeepScreens,
} from "../data/workMedia.js";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);
  const workItems = caseStudies.filter(
    (item) => item.title === "WiKeep" || item.title.startsWith("TrendySize"),
  );
  const filters = ["All", ...new Set(workItems.map((item) => item.category))];

  const visible =
    filter === "All"
      ? workItems
      : workItems.filter((item) => item.category === filter);

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
            {filters.map((f) => (
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
        {visible.map((c, i) => {
          const isWiKeep = c.title === "WiKeep";
          const isTrendySize = c.title.startsWith("TrendySize");
          const cover = isWiKeep
            ? { src: wikeepIcon, alt: "WiKeep app icon" }
            : isTrendySize
              ? { src: trendySizeWorkLogo, alt: "TrendySize logo" }
            : { src: images.dataCenter, alt: `${c.title} infrastructure` };
          return (
            <article
              className="case-card"
              key={c.id}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 0.06}s` }}
            >
              <div
                className={`case-card__media${isWiKeep ? " case-card__media--wikeep" : ""}${isTrendySize ? " case-card__media--trendysize" : ""}`}
              >
                <img src={cover.src} alt={cover.alt} loading="lazy" />
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
                  <div className="spec-table__key">{isWiKeep ? "Release" : "Timeline"}</div>
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
          );
        })}
      </section>

      {open && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <div
            className={`modal modal--case${open.title === "WiKeep" ? " modal--case-wikeep" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
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
              <img
                src={open.title === "WiKeep" ? wikeepIcon : images.dataCenter}
                alt={open.title === "WiKeep" ? "WiKeep app icon" : `${open.title} infrastructure`}
              />
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

              {open.title === "WiKeep" && (
                <div className="wikeep-overview">
                  <section className="wikeep-overview__section">
                    <div className="wikeep-overview__heading">
                      <p className="eyebrow">WiKeep v1.0.0</p>
                      <h3>Wi-Fi diagnostics and recovery, on your Mac.</h3>
                      <p>
                        A macOS utility for issues the menu bar cannot explain,
                        from a radio crash after sleep to a corrupted network
                        configuration.
                      </p>
                    </div>
                    <div className="wikeep-overview__features">
                      {open.features.map((feature) => (
                        <article className="wikeep-feature" key={feature.title}>
                          <h4>{feature.title}</h4>
                          <p>{feature.text}</p>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="wikeep-overview__section">
                    <div className="wikeep-overview__heading">
                      <p className="eyebrow">How it works</p>
                      <h3>Scan. Watch. Repair.</h3>
                    </div>
                    <ol className="wikeep-workflow">
                      {open.workflow.map((step, index) => (
                        <li key={step.title}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <div>
                            <h4>{step.title}</h4>
                            <p>{step.text}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="wikeep-overview__section">
                    <div className="wikeep-overview__heading">
                      <p className="eyebrow">Screens</p>
                      <h3>Five views into your connection.</h3>
                    </div>
                    <div className="wikeep-screens">
                      {wikeepScreens.map((screen, index) => (
                        <figure key={screen.src}>
                          <img
                            src={screen.src}
                            alt={screen.alt}
                            loading="lazy"
                            decoding="async"
                          />
                          <figcaption>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            {screen.alt.replace(/^WiKeep /, "")}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </section>

                  <section className="wikeep-privacy">
                    <h3>Private by design</h3>
                    <p>{open.privacy}</p>
                  </section>
                </div>
              )}

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
                <div className="spec-table__key">
                  {open.title === "WiKeep" ? "Release" : "Timeline"}
                </div>
                <div className="spec-table__val">
                  {open.duration} · {open.teamSize}
                </div>
              </div>

              <p className="case-card__review">
                Reviewed by {open.reviewedBy} · {open.reviewedOn}
              </p>

              <a className="btn btn--primary case-modal__cta" href="/contact">
                Scope something similar
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
