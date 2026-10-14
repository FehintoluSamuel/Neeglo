import { useState } from "react";
import {
  documentation,
  engagement,
  images,
  solutions,
} from "../data/content.js";

function fromHash() {
  if (typeof window === "undefined") return solutions[0];
  const id = window.location.hash.replace("#", "");
  return solutions.find((s) => s.id === id) ?? solutions[0];
}

export default function Solutions() {
  const [selected, setSelected] = useState(fromHash);

  function choose(s) {
    setSelected(s);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${s.id}`);
    }
  }

  return (
    <div className="solutions-layout">
      <aside className="side-nav" data-reveal>
        <div className="side-nav__head">
          <div className="side-nav__label">What we do</div>
          <div className="side-nav__title">Neeglo</div>
        </div>

        <nav className="side-nav__list" aria-label="Capabilities">
          {solutions.map((s) => {
            const isActive = selected.id === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`side-item${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  choose(s);
                }}
              >
                <span>
                  <span className="side-item__title">{s.title}</span>
                  <span className="side-item__desc">{s.desc}</span>
                </span>
              </a>
            );
          })}
        </nav>

        <div className="side-nav__foot">
          <div className="side-nav__foot-title">Want to take part in the pilot?</div>
          <a className="side-nav__foot-btn btn" href="/contact.html">
            Talk to the team
          </a>
        </div>
      </aside>

      <section className="solution-main">
        <div className="solution-head" data-reveal>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/solutions.html">Solutions</a>
            <span className="breadcrumb__current">{selected.title}</span>
          </nav>

          <div className="solution-head__row">
            <div>
              <h1 className="solution-head__title">{selected.title}</h1>
              <p className="solution-head__desc">{selected.detail}</p>
            </div>
          </div>
        </div>

        <div className="solution-body">
          <div>
            <h2 className="deliver-head">What we deliver</h2>
            <div className="deliver-list">
              {selected.bullets.map((b, i) => (
                <div
                  className="deliver-item"
                  key={b}
                  data-reveal
                  style={{ "--reveal-delay": `${(i % 6) * 0.05}s` }}
                >
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <h2 className="deliver-head deliver-head--spaced">What you get</h2>
            <div className="deliver-list deliver-list--artifacts">
              {selected.deliverables.map((d, i) => (
                <div
                  className="deliver-item"
                  key={d}
                  data-reveal
                  style={{ "--reveal-delay": `${(i % 6) * 0.05}s` }}
                >
                  <span>{d}</span>
                </div>
              ))}
            </div>

            <div className="engagement-grid">
              {engagement.map((e, i) => (
                <div
                  className="engagement-cell"
                  key={e.label}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 0.06}s` }}
                >
                  <div className="engagement-cell__label">{e.label}</div>
                  <div className="engagement-cell__value">{e.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="solution-aside">
            <div className="aside-card" data-reveal>
              <div className="aside-card__title">How TrendySize works</div>
              <div className="ref-arch">
                <div className="ref-arch__frame">
                  <img src={images.dataCenter} alt="TrendySize architecture" />
                  <div className="ref-arch__badge">
                    <span>React · Laravel · FastAPI · C#</span>
                  </div>
                </div>
                <p className="ref-arch__caption">
                  Vendor link → customer form → measurement estimates → searchable
                  record. NDPR-aligned from day one.
                </p>
              </div>
            </div>

            <div
              className="aside-card aside-card--white"
              data-reveal
              style={{ "--reveal-delay": "0.08s" }}
            >
              <div className="aside-card__title">Documentation</div>
              <div className="doc-list">
                {documentation.map((d) => (
                  <a className="doc-link" href="/contact.html" key={d.name}>
                    <span>
                      {d.name}
                      <span className="doc-link__meta">{d.meta}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
