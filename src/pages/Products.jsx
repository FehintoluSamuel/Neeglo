import { useEffect, useRef, useState } from "react";
import { products } from "../data/content.js";
import { productGalleries } from "../data/productMedia.js";
import bannerWebp from "../images/Solutions_images/optimized/solutions_banner.webp";
import bgCollaboration from "../images/Solutions_images/optimized/bg-collaboration.webp";
import bgAiProject from "../images/Solutions_images/optimized/bg-ai-project.webp";

function MockupCarousel({ slides, aspect, interval = 2000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2 || paused) return undefined;
    // Respect reduced-motion: hold on the first frame.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [slides.length, interval, paused]);

  return (
    <div
      className="mockup-carousel"
      role="group"
      aria-label="Product screenshots"
      style={aspect ? { "--carousel-aspect": aspect } : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={i === index ? undefined : "true"}
          className={`mockup-carousel__img${i === index ? " is-active" : ""}`}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
      {slides.length > 1 && (
        <div className="mockup-carousel__dots" aria-hidden="true">
          {slides.map((slide, i) => (
            <span
              key={slide.src}
              className={`mockup-carousel__dot${i === index ? " is-active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function fromHash() {
  if (typeof window === "undefined") return products[0];
  const id = window.location.hash.replace("#", "");
  return products.find((p) => p.id === id) ?? products[0];
}

export default function Products() {
  const [selected, setSelected] = useState(fromHash);
  const tabRefs = useRef([]);
  const slides = productGalleries[selected.id] ?? [];

  function choose(p) {
    setSelected(p);
    if (typeof window === "undefined") return;

    const target = `#${p.id}`;
    if (window.location.hash !== target) {
      window.history.pushState(null, "", target);
    }

    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => {
        document
          .querySelector(".product-main")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  // Keep the view in sync when the hash changes via Back/Forward.
  useEffect(() => {
    function onHashChange() {
      const id = window.location.hash.replace("#", "");
      const found = products.find((p) => p.id === id);
      if (found) setSelected(found);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Honour a deep link (e.g. #how) once React has rendered the target.
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return undefined;
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  function onTablistKeyDown(e) {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
    if (!keys.includes(e.key) || products.length === 0) return;

    const count = products.length;
    const current = products.findIndex((p) => p.id === selected.id);
    let next = current;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (current + 1) % count;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (current - 1 + count) % count;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = count - 1;

    e.preventDefault();
    choose(products[next]);
    tabRefs.current[next]?.focus();
  }

  return (
    <>
      <section className="page-banner">
        <picture aria-hidden="true">
          <source srcSet={bannerWebp} type="image/webp" />
          <img src={bannerWebp} alt="" />
        </picture>
        <div className="page-banner__overlay" aria-hidden="true" />
        <div className="page-banner__inner">
          <div className="page-banner__content">
            <h1 className="page-banner__title">
              <span data-reveal style={{ "--reveal-delay": "0s" }}>
                Our
              </span>
              <span data-reveal style={{ "--reveal-delay": "0.12s" }}>
                products <span aria-hidden="true">...</span>
              </span>
            </h1>
            <p
              className="page-banner__sub"
              data-reveal
              style={{ "--reveal-delay": "0.24s" }}
            >
              Software we design, build and run ourselves.
            </p>
          </div>
        </div>
      </section>

      <div
        className="products-layout section--bg"
        style={{ "--section-bg": `url(${bgCollaboration})` }}
      >
        <aside className="side-nav" data-reveal>
          <div className="side-nav__head">
            <div className="side-nav__label">Products</div>
            <div className="side-nav__title">Neeglo</div>
          </div>

          <nav
            className="side-nav__list"
            role="tablist"
            aria-label="Products"
            onKeyDown={onTablistKeyDown}
          >
            {products.map((p, i) => {
              const isActive = selected.id === p.id;
              return (
                <a
                  key={p.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  id={`tab-${p.id}`}
                  href={`#${p.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="product-panel"
                  tabIndex={isActive ? 0 : -1}
                  className={`side-item${isActive ? " is-active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    choose(p);
                  }}
                >
                  <span className="side-item__title">{p.name}</span>
                  <span className="side-item__desc">{p.tagline}</span>
                </a>
              );
            })}
          </nav>

          <div className="side-nav__foot">
            <div className="side-nav__foot-title">Have a product in mind?</div>
            <a className="side-nav__foot-btn btn" href="/contact.html">
              Get in touch
            </a>
          </div>
        </aside>

        <section
          className="product-main"
          role="tabpanel"
          id="product-panel"
          aria-labelledby={`tab-${selected.id}`}
        >
          <div className="product-head" id={selected.id} data-reveal>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/products.html">Products</a>
              <span className="breadcrumb__current">{selected.name}</span>
            </nav>

            <div className="product-head__meta">
              <span className="product-head__eyebrow">{selected.category}</span>
              <span className="product-head__status">{selected.status}</span>
            </div>

            <h2 className="product-head__title">{selected.name}</h2>
            <p className="product-head__tagline">{selected.tagline}</p>
            <p className="product-head__summary">{selected.summary}</p>

            <div className="hero-actions">
              <a className="btn btn--primary" href={selected.cta.href}>
                {selected.cta.label}
              </a>
              <a className="btn btn--secondary" href="#how">
                How it works
              </a>
            </div>
          </div>

          <div className="product-body">
            <div>
              <h3 className="detail-head">
                What it does
              </h3>
              <div className="detail-list">
                {selected.features.map((f, i) => (
                  <div
                    className="detail-item"
                    key={f}
                    data-reveal
                    style={{ "--reveal-delay": `${(i % 6) * 0.05}s` }}
                  >
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <h3 className="detail-head detail-head--spaced" id="how">
                How it works
              </h3>
              <div className="step-grid">
                {selected.steps.map((s, i) => (
                  <div
                    className="step-card"
                    key={s.title}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 0.06}s` }}
                  >
                    <div className="step-card__num">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h4 className="step-card__title">{s.title}</h4>
                    <p className="step-card__text">{s.text}</p>
                  </div>
                ))}
              </div>

              <h3 className="detail-head detail-head--spaced">
                What you get
              </h3>
              <div className="detail-list detail-list--artifacts">
                {selected.deliverables.map((d, i) => (
                  <div
                    className="detail-item"
                    key={d}
                    data-reveal
                    style={{ "--reveal-delay": `${(i % 6) * 0.05}s` }}
                  >
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              <h3 className="detail-head detail-head--spaced">
                Under the hood
              </h3>
              <div className="under-grid">
                {selected.underTheHood.map((u, i) => (
                  <div
                    className="under-card"
                    key={u.title}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 0.06}s` }}
                  >
                    <h4 className="under-card__title">{u.title}</h4>
                    <p className="under-card__body">{u.body}</p>
                    <ul className="under-card__list">
                      {u.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-aside">
              {slides.length > 0 && (
                <div className="aside-card" data-reveal>
                  <h3 className="aside-card__title">{selected.gallery.title}</h3>
                  <div className="ref-arch">
                    <MockupCarousel
                      slides={slides}
                      aspect={selected.gallery.aspect}
                    />
                    <p className="ref-arch__caption">
                      {selected.gallery.caption}
                    </p>
                  </div>
                </div>
              )}

              <div
                className="aside-card"
                data-reveal
                style={{ "--reveal-delay": "0.06s" }}
              >
                <h3 className="aside-card__title">Built with</h3>
                <div className="tech-chips">
                  {selected.tech.map((t) => (
                    <span className="tech-chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="aside-card"
                data-reveal
                style={{ "--reveal-delay": "0.12s" }}
              >
                <h3 className="aside-card__title">At a glance</h3>
                <div className="spec-grid">
                  {selected.facts.map((f) => (
                    <div className="spec-cell" key={f.label}>
                      <div className="spec-cell__label">{f.label}</div>
                      <div className="spec-cell__value">{f.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="aside-card aside-card--white"
                data-reveal
                style={{ "--reveal-delay": "0.18s" }}
              >
                <h3 className="aside-card__title">Documentation</h3>
                <div className="doc-list">
                  {selected.docs.map((d) => (
                    <a className="doc-link" href={d.href} key={d.name}>
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

      <section
        className="cta-band cta-band--bg"
        style={{ "--section-bg": `url(${bgAiProject})` }}
      >
        <div className="cta-band__inner" data-reveal>
          <div className="eyebrow">Start a conversation</div>
          <h2>Want to take part in the pilot?</h2>
          <p>
            Tell us what you sell and how you measure today - we'll show you how
            TrendySize would fit your workflow.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="/contact.html">
              Talk to the team
            </a>
            <a className="btn btn--secondary" href="/work.html">
              See our work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
