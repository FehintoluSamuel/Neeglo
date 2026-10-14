import { process, services, whyNeeglo } from "../data/content.js";
import productsBannerWebp from "../images/products_images/optimized/products_banner.webp";
import productsBannerJpg from "../images/products_images/optimized/products_banner.jpg";
import productHeroWebp from "../images/products_images/optimized/trendysize_product_hero.webp";
import productHeroJpg from "../images/products_images/optimized/trendysize_product_hero.jpg";

export default function Products() {
  return (
    <>
      <section className="page-banner">
        <picture>
          <source srcSet={productsBannerWebp} type="image/webp" />
          <img
            src={productsBannerJpg}
            alt="Neeglo - technology solutions"
          />
        </picture>
        <div className="page-banner__overlay" aria-hidden="true" />
        <div className="page-banner__inner">
          <h1 className="page-banner__title">
            <span data-reveal style={{ "--reveal-delay": "0s" }}>
              The
            </span>
            <span data-reveal style={{ "--reveal-delay": "0.12s" }}>
              Future...
            </span>
          </h1>
        </div>
      </section>

      <section className="section section--intro">
        <div className="section-head" data-reveal>
          <div className="eyebrow">Who we are</div>
          <h2>Technology built around your next step.</h2>
          <p className="section-head__desc">
            Neeglo helps businesses turn ideas into useful digital products,
            improve the way they work, and keep their technology moving forward.
            From custom software and web applications to mobile experiences,
            automation, and AI solutions, we build with purpose, work
            transparently, and keep our clients involved throughout the journey.
          </p>
        </div>

        <div className="hero-actions" data-reveal>
          <a className="btn btn--primary" href="/contact.html">
            Discuss Your Project
          </a>
          <a className="btn btn--secondary" href="/work.html">
            Explore Our Work
          </a>
        </div>
      </section>

      <section className="section" id="what-we-do">
        <div className="section-head" data-reveal>
          <div className="eyebrow">What we do</div>
          <h2>Services built around real needs</h2>
          <p className="section-head__desc">
            From custom software and web applications to automation, AI and
            training, we help businesses turn ideas into working products and
            keep them moving forward.
          </p>
        </div>

        <div className="grid-tiles">
          {services.map((s, i) => (
            <div
              className="tile"
              key={s.t}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 0.06}s` }}
            >
              <h3 className="tile__title">{s.t}</h3>
              <p className="tile__desc">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="hero-actions" data-reveal>
          <a className="btn btn--secondary" href="/solutions.html">
            Explore our solutions
          </a>
        </div>
      </section>

      <section className="section section--product-peek">
        <div className="section-head" data-reveal>
          <div className="eyebrow">One of our products</div>
          <h2>A glimpse at what we build</h2>
        </div>

        <div
          className="hero-split hero-split--peek"
          data-reveal
          style={{ "--reveal-delay": "0.08s" }}
        >
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="hero-badge__dot" aria-hidden="true" />
              <span className="hero-badge__text">In development</span>
            </div>

            <h3 className="hero-title">TrendySize</h3>

            <p className="hero-text">
              A fashion tech product being built to help tailors and fashion
              vendors collect accurate measurements more reliably, so fewer
              orders come back for alterations. Our first pilot starts late
              October 2026.
            </p>

            <div className="hero-actions">
              <a className="btn btn--secondary" href="/solutions.html#products">
                See how TrendySize works
              </a>
            </div>
          </div>

          <div className="hero-media">
            <picture>
              <source srcSet={productHeroWebp} type="image/webp" />
              <img src={productHeroJpg} alt="TrendySize product" />
            </picture>
            <div className="hero-media__badges">
              <div className="badge-block">
                <div className="badge-block__label">First product</div>
                <div className="badge-block__value">TrendySize</div>
              </div>
              <div className="badge-block badge-block--right">
                <div className="badge-block__label">Built with</div>
                <div className="badge-block__value">
                  React · Laravel · FastAPI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="why-neeglo">
        <div className="section-head" data-reveal>
          <div className="eyebrow">Why Neeglo</div>
          <h2>How we work with you</h2>
          <p className="section-head__desc">
            Good software comes from a clear process and an honest
            relationship. These are the standards we hold ourselves to.
          </p>
        </div>

        <div className="grid-tiles">
          {whyNeeglo.map((w, i) => (
            <div
              className="tile"
              key={w.t}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 0.06}s` }}
            >
              <h3 className="tile__title">{w.t}</h3>
              <p className="tile__desc">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-head" data-reveal>
          <div className="eyebrow">Our process</div>
          <h2>From first conversation to day-one support</h2>
          <p className="section-head__desc">
            A practical path that keeps you involved at every step.
          </p>
        </div>

        <ol className="grid-tiles grid-tiles--steps">
          {process.map((s, i) => (
            <li
              className="tile"
              key={s.t}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.06}s` }}
            >
              <div className="eyebrow">Step {i + 1}</div>
              <h3 className="tile__title">{s.t}</h3>
              <p className="tile__desc">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner" data-reveal>
          <div className="eyebrow">Start a conversation</div>
          <h2>Let's build something that lasts</h2>
          <p>
            Tell us what you are working on. We'll help you find a practical way
            forward, from the first idea to something you can rely on.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="/contact.html">
              Discuss your project
            </a>
            <a className="btn btn--secondary" href="/company.html">
              About Neeglo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
