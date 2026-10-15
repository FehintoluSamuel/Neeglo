import { process, services, team, whyNeeglo } from "../data/content.js";
import productsBannerWebp from "../images/products_images/optimized/products_banner.webp";
import productsBannerJpg from "../images/products_images/optimized/products_banner.jpg";
import productWebp from "../images/products_images/optimized/trendy_size_product.webp";
import productJpg from "../images/products_images/optimized/trendy_size_product.jpg";
import bgSystemsIntegration from "../images/products_images/optimized/backgrounds/bg-systems-integration.webp";
import bgDataCenter from "../images/products_images/optimized/backgrounds/bg-data-center.webp";
import bgBuildingCulture from "../images/products_images/optimized/backgrounds/bg-building-culture.webp";
import bgDeveloper from "../images/products_images/optimized/backgrounds/bg-developer.webp";

export default function Home() {
  return (
    <>
      <section className="page-banner">
        <picture aria-hidden="true">
          <source srcSet={productsBannerWebp} type="image/webp" />
          <img src={productsBannerJpg} alt="" />
        </picture>
        <div className="page-banner__overlay" aria-hidden="true" />
        <div className="page-banner__inner">
          <h1 className="page-banner__title">
            <span data-reveal style={{ "--reveal-delay": "0s" }}>
              The
            </span>
            <span data-reveal style={{ "--reveal-delay": "0.12s" }}>
              Future <span aria-hidden="true">...</span>
            </span>
          </h1>
        </div>
      </section>

      <section
        className="section section--intro section--bg"
        style={{ "--section-bg": `url(${bgBuildingCulture})` }}
      >
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

      <section
        className="section section--bg"
        id="what-we-do"
        style={{ "--section-bg": `url(${bgSystemsIntegration})` }}
      >
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
          {services.slice(0, 6).map((s, i) => (
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

      <section
        className="section section--product-peek section--bg"
        style={{ "--section-bg": `url(${bgDataCenter})` }}
      >
        <div className="section-head" data-reveal>
          <div className="eyebrow">One of our products</div>
        </div>

        <div className="hero-split">
          <div
            className="hero-copy"
            data-reveal="left"
            style={{ "--reveal-delay": "0.08s" }}
          >
            <div className="hero-badge">
              <span className="hero-badge__dot" aria-hidden="true" />
              <span className="hero-badge__text">In development</span>
            </div>

            <h2 className="hero-title">TrendySize</h2>

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

          <div
            className="hero-media"
            data-reveal="right"
            style={{ "--reveal-delay": "0.16s" }}
          >
            <picture>
              <source srcSet={productWebp} type="image/webp" />
              <img
                className="hero-media__product"
                src={productJpg}
                alt="TrendySize interface for capturing garment measurements"
                loading="lazy"
                decoding="async"
              />
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

      <section
        className="section section--bg"
        id="why-neeglo"
        style={{ "--section-bg": `url(${bgDeveloper})` }}
      >
        <div className="section-head" data-reveal>
          <div className="eyebrow">Why Neeglo</div>
          <h2>How we work with you</h2>
          <p className="section-head__desc">
            Good software comes from a clear process and an honest
            relationship. These are the standards we hold ourselves to.
          </p>
        </div>

        <div className="grid-tiles grid-tiles--four">
          {whyNeeglo.slice(0, 4).map((w, i) => (
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

      <section
        className="section section--bg"
        id="process"
        style={{ "--section-bg": `url(${bgBuildingCulture})` }}
      >
        <div className="section-head" data-reveal>
          <div className="eyebrow">Our process</div>
          <h2>From first conversation to day-one support</h2>
          <p className="section-head__desc">
            A practical path that keeps you involved at every step.
          </p>
        </div>

        <ol className="grid-tiles grid-tiles--steps grid-tiles--four">
          {process.slice(0, 4).map((s, i) => (
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

      <section
        className="section section--bg"
        id="team"
        style={{ "--section-bg": `url(${bgSystemsIntegration})` }}
      >
        <div className="section-head" data-reveal>
          <div className="eyebrow">The team</div>
          <h2>Built by six founders</h2>
          <p className="section-head__desc">
            Neeglo is six co-founders across product, engineering and design -
            and every one of them works on TrendySize.
          </p>
        </div>

        <div className="founder-strip">
          {team.map((m, i) => (
            <div
              className="founder"
              key={m.id}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.05}s` }}
            >
              <div className="founder__media">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                />
              </div>
              <div className="founder__name">{m.name}</div>
              <div className="founder__role">{m.role}</div>
            </div>
          ))}
        </div>

        <div className="hero-actions" data-reveal>
          <a className="btn btn--secondary" href="/team.html">
            Meet the team
          </a>
        </div>
      </section>

      <section
        className="cta-band cta-band--bg"
        style={{ "--section-bg": `url(${bgDataCenter})` }}
      >
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
