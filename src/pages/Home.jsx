import { useEffect, useRef, useState } from "react";
import {
  brand,
  caseStudies,
  companyIntro,
  labNotes,
  process,
  services,
  team,
  timeline,
  whyNeeglo,
} from "../data/content.js";
import { productGalleries } from "../data/productMedia.js";
import productsBannerWebp from "../images/products_images/optimized/products_banner.webp";
import productHeroWebp from "../images/products_images/optimized/trendysize_product_hero.webp";
import teamBanner from "../images/Team_images/optimized/team_page_banner.webp";
import heroLongRun from "../images/home/hero-long-run.webp";
import heroTeam from "../images/home/hero-team.webp";
import heroWhatWeDo from "../images/home/hero-what-we-do.webp";
import heroStandard from "../images/home/hero-standard.webp";
import heroFootprint from "../images/home/hero-footprint.webp";
import bgAbout from "../images/home/bg-about.webp";
import bgWork from "../images/home/bg-work.webp";
import bgTrendySize from "../images/home/bg-trendysize.webp";
import bgProcess from "../images/home/bg-process.webp";
import bgJoin from "../images/home/bg-join.webp";
import media1 from "../images/home/media-1.webp";
import media2 from "../images/home/media-2.webp";
import media3 from "../images/home/media-3.webp";
import media4 from "../images/home/media-4.webp";
import media5 from "../images/home/media-5.webp";
import media6 from "../images/home/media-6.webp";
import media7 from "../images/home/media-7.webp";
import media8 from "../images/home/media-8.webp";
import media9 from "../images/home/media-9.webp";
import blogFitting from "../images/home/blog-fitting.webp";
import "../styles/home.css";

const [mockupOne] = productGalleries.trendysize;

const heroSlides = [
  {
    id: "trendysize",
    kicker: "Our first product",
    title: "Digital measurement for fashion businesses",
    cta: "See TrendySize",
    href: "/products.html#trendysize",
    image: mockupOne.src,
    layout: "center",
    tone: "media",
    level: 1,
  },
  {
    id: "long-run",
    kicker: brand.descriptor,
    title: "Build for the long run",
    cta: "Start a project",
    href: "/contact.html",
    image: heroLongRun,
    layout: "left",
    tone: "dark",
  },
  {
    id: "team",
    kicker: "Who we are",
    title: companyIntro.title,
    cta: "About Neeglo",
    href: "/company.html",
    image: heroTeam,
    layout: "left",
    tone: "dark",
  },
  {
    id: "what-we-do",
    kicker: "What we do",
    title: "Technology built around your next step",
    cta: "Explore our work",
    href: "/work.html",
    image: heroWhatWeDo,
    layout: "left",
    tone: "dark",
  },
  {
    id: "standard",
    kicker: "Our standard",
    title: "Custom software, built around real workflows",
    cta: "See our services",
    href: "/products.html",
    image: heroStandard,
    layout: "left",
    tone: "dark",
  },
  {
    id: "footprint",
    kicker: "Our footprint",
    title: "We are an African technology company",
    cta: "Meet the team",
    href: "/team.html",
    image: heroFootprint,
    layout: "split",
    tone: "dark",
  },
];

const stats = [
  { label: "Co-founders", value: team.length },
  { label: "Cities", value: 3 },
  { label: "Services", value: services.length },
  { label: "Disciplines", value: 3 },
];

const countries = ["Lagos", "Abakaliki", "Enugu", "Nigeria"];

const caseStudyShots = [media1, media2, media3, media4, media5, media6];
const labNoteShots = [media7, media8, media9];

const mediaItems = [
  ...caseStudies.slice(0, 6).map((c, i) => ({
    title: c.title,
    tag: c.category,
    image: caseStudyShots[i],
  })),
  ...labNotes.map((n, i) => ({
    title: n.title,
    tag: n.read,
    image: labNoteShots[i],
  })),
  ...timeline.slice(-3).map((t, i) => ({
    title: t.title,
    tag: t.year,
    image: [productsBannerWebp, productHeroWebp, teamBanner][i],
  })),
];

const posts = [
  {
    title: labNotes[0].title,
    meta: `${labNotes[0].date} · ${labNotes[0].read}`,
    excerpt:
      "Most of the customers we surveyed had received clothes that did not fit. The survey note behind the product.",
    image: blogFitting,
  },
];

function Counter({ value, suffix = "", label, size = "md" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let frame = 0;
    let started = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      setDisplay(value);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;

        const start = performance.now();
        const duration = 1400;

        const tick = (now) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div ref={ref} className={`mh-counter mh-counter--${size}`}>
      <div className="mh-counter__value">
        {display}
        {suffix}
      </div>
      <div className="mh-counter__label">{label}</div>
    </div>
  );
}

export default function Home() {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const bizRef = useRef(null);
  const [active, setActive] = useState(0);
  const [activeMedia, setActiveMedia] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = root.querySelectorAll("[data-reveal]");

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const timer = window.setInterval(() => {
      if (document.hidden) return;

      setActive((current) => {
        const next = (current + 1) % heroSlides.length;
        const track = trackRef.current;
        if (track) {
          track.scrollTo({
            left: next * track.clientWidth,
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const go = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.min(heroSlides.length - 1, Math.max(0, active + dir));
    setActive(next);
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  const scrollBusinesses = (dir) => {
    const el = bizRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <div className="mh" ref={rootRef}>
      <section className="mh-hero" aria-label="Featured">
        <div className="mh-hero__track" ref={trackRef} onScroll={onScroll}>
          {heroSlides.map((slide, i) => (
            <article
              key={slide.id}
              className={`mh-slide mh-slide--${slide.layout} mh-slide--${slide.tone}${
                i === active ? " is-active" : ""
              }`}
              style={{ "--slide-image": `url(${slide.image})` }}
            >
              <div className="mh-slide__scrim" aria-hidden="true" />
              <div className="mh-slide__inner">
                {slide.tone === "media" ? (
                  <img
                    className="mh-slide__media"
                    src={slide.image}
                    alt=""
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                ) : null}

                <div className="mh-slide__content">
                  <p className="mh-kicker">{slide.kicker}</p>
                  {slide.level === 1 ? (
                    <h1 className="mh-slide__title">{slide.title}</h1>
                  ) : (
                    <h2 className="mh-slide__title">{slide.title}</h2>
                  )}

                  {slide.layout === "split" ? (
                    <ul className="mh-slide__countries">
                      {countries.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  ) : null}

                  <a className="mh-btn mh-btn--light" href={slide.href}>
                    {slide.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mh-hero__nav">
          <button
            type="button"
            className="mh-hero__arrow"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            disabled={active === 0}
          >
            Prev
          </button>
          <div className="mh-hero__dots" role="tablist" aria-label="Slides">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to slide ${i + 1}`}
                className={`mh-hero__dot${i === active ? " is-active" : ""}`}
                onClick={() => go(i - active)}
              />
            ))}
          </div>
          <button
            type="button"
            className="mh-hero__arrow"
            onClick={() => go(1)}
            aria-label="Next slide"
            disabled={active === heroSlides.length - 1}
          >
            Next
          </button>
        </div>
      </section>

      <section className="mh-stats" aria-label="Neeglo at a glance">
        <div className="mh-boxed mh-stats__row" data-reveal>
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      <section
        className="mh-about"
        aria-labelledby="home-about-title"
        style={{ backgroundImage: `url(${bgAbout})` }}
      >
        <div className="mh-about__inner">
          <div
            className="mh-panel mh-panel--primary mh-about__card"
            data-reveal
          >
            <h2 id="home-about-title" className="mh-heading">
              {companyIntro.title}
            </h2>
            <p className="mh-text">{companyIntro.paras[0]}</p>
            <a className="mh-btn mh-btn--light" href="/company.html">
              About Neeglo
            </a>
          </div>
        </div>
      </section>

      <section className="mh-businesses" aria-labelledby="home-services-title">
        <div className="mh-businesses__row">
          <div className="mh-businesses__stage">
            <div className="mh-businesses__carousel" ref={bizRef}>
              {services.slice(0, 6).map((s, i) => (
                <article
                  key={s.t}
                  className="mh-panel mh-panel--primary mh-biz-card"
                  data-reveal
                  style={{ "--reveal-delay": `${i * 80}ms` }}
                >
                  <span className="mh-biz-card__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mh-biz-card__name">{s.t}</h3>
                  <p className="mh-text">{s.d}</p>
                  <a
                    className="mh-btn mh-btn--light"
                    href="/contact.html"
                    aria-label={`Discuss ${s.t}`}
                  >
                    Talk to us
                  </a>
                </article>
              ))}
            </div>
            <div className="mh-carousel-nav">
              <button
                type="button"
                className="mh-carousel-nav__btn"
                onClick={() => scrollBusinesses(-1)}
              >
                Prev
              </button>
              <button
                type="button"
                className="mh-carousel-nav__btn"
                onClick={() => scrollBusinesses(1)}
              >
                Next
              </button>
            </div>
          </div>

          <div className="mh-services-mobile" data-reveal>
            {services.slice(0, 6).map((s, i) => (
              <details className="mh-service" name="services" key={s.t}>
                <summary className="mh-service__summary">
                  <span className="mh-service__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mh-service__name">{s.t}</span>
                  <span className="mh-service__icon" aria-hidden="true" />
                </summary>
                <div className="mh-service__body">
                  <p className="mh-text">{s.d}</p>
                  <a
                    className="mh-service__link"
                    href="/contact.html"
                    aria-label={`Discuss ${s.t}`}
                  >
                    Talk to us
                  </a>
                </div>
              </details>
            ))}
          </div>

          <div className="mh-businesses__intro" data-reveal>
            <h2 id="home-services-title" className="mh-heading mh-heading--tight">
              Our Services
            </h2>
            <p className="mh-text">
              We design, build and support digital products - from custom
              software and automation to AI and team training.
            </p>
            <div className="mh-stat-pair">
              <Counter value={services.length} label="Services" size="sm" />
              <Counter value={process.length} label="Process Steps" size="sm" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="mh-feature"
        aria-labelledby="home-work-title"
        style={{ backgroundImage: `url(${bgWork})` }}
      >
        <div className="mh-feature__top" data-reveal>
          <Counter value={caseStudies.length} label="Case Studies" size="lg" />
          <h3 className="mh-feature__sub">
            We work with a growing list of start-ups and established companies
            in the tech industry
          </h3>
        </div>
        <div className="mh-feature__main">
          <div className="mh-feature__intro" data-reveal>
            <h2 id="home-work-title" className="mh-heading mh-heading--tight">
              Our Work
            </h2>
            <a className="mh-btn mh-btn--light" href="/work.html">
              See all case studies
            </a>
          </div>
          <div className="mh-feature__media" data-reveal>
            <ul className="mh-logo-wall">
              {caseStudies.map((c) => (
                <li key={c.id} className="mh-logo">
                  {c.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="mh-feature mh-feature--clients"
        aria-labelledby="home-product-title"
        style={{ backgroundImage: `url(${bgTrendySize})` }}
      >
        <div className="mh-feature__top" data-reveal>
          <Counter value={15} label="Customers Surveyed" size="lg" />
          <h3 className="mh-feature__sub">
            12 of 15 had received clothes that did not fit. TrendySize starts
            from that problem.
          </h3>
        </div>
        <div className="mh-feature__main">
          <div className="mh-feature__intro" data-reveal>
            <h2 id="home-product-title" className="mh-heading mh-heading--tight">
              TrendySize
            </h2>
            <a className="mh-btn mh-btn--light" href="/products.html#trendysize">
              See how it works
            </a>
          </div>
          <div
            className="mh-feature__media mh-feature__media--grid"
            data-reveal
          >
            {productGalleries.trendysize.map((shot) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="mh-foundation"
        aria-labelledby="home-process-title"
        style={{ backgroundImage: `url(${bgProcess})` }}
      >
        <div className="mh-foundation__card mh-panel--primary" data-reveal>
          <h2 id="home-process-title" className="mh-heading">
            Our Process
          </h2>
          <p className="mh-text">
            A clear path from the first conversation to day-one support, with
            you involved at every step.
          </p>
          <a className="mh-btn mh-btn--light" href="/company.html#operating-model">
            See how we work
          </a>
        </div>
        <div className="mh-foundation__stats" data-reveal>
          <Counter value={process.length} label="Process Steps" size="sm" />
          <Counter value={whyNeeglo.length} label="Standards" size="sm" />
          <Counter value={1} label="First Product" size="sm" />
        </div>
      </section>

      <section className="mh-media" aria-labelledby="home-media-title">
        <div className="mh-media__head mh-panel--primary" data-reveal>
          <h2 id="home-media-title" className="mh-heading">
            Studio Gallery
          </h2>
          <p className="mh-text">
            A look at the work, the team and the product in progress.
          </p>
          <a className="mh-btn mh-btn--light" href="/work.html">
            View our work
          </a>
        </div>

        <div className="mh-videos">
          <div className="mh-videos__head" data-reveal>
            <h3 className="mh-videos__title">In the studio</h3>
            <span className="mh-videos__count">
              {String(mediaItems.length).padStart(2, "0")} clips
            </span>
          </div>

          <div className="mh-playlist" data-reveal>
            <div className="mh-playlist__player">
              <img
                key={activeMedia}
                src={mediaItems[activeMedia].image}
                alt=""
                loading="lazy"
              />
              <div className="mh-playlist__meta">
                <span className="mh-playlist__tag">
                  {mediaItems[activeMedia].tag}
                </span>
                <h4 className="mh-playlist__title">
                  {mediaItems[activeMedia].title}
                </h4>
              </div>
            </div>

            <ul className="mh-playlist__list">
              {mediaItems.map((v, i) => (
                <li key={`${v.title}-${i}`}>
                  <button
                    type="button"
                    className={`mh-playlist__item${
                      i === activeMedia ? " is-active" : ""
                    }`}
                    onClick={() => setActiveMedia(i)}
                  >
                    <img
                      className="mh-playlist__thumb"
                      src={v.image}
                      alt=""
                      loading="lazy"
                    />
                    <span className="mh-playlist__text">
                      <span className="mh-playlist__num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mh-playlist__name">{v.title}</span>
                      <span className="mh-playlist__label">{v.tag}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mh-blog" aria-labelledby="home-blog-title">
        <div className="mh-blog__head mh-panel--primary" data-reveal>
          <h2 id="home-blog-title" className="mh-heading">
            Field Notes
          </h2>
          <p className="mh-text">
            What we are testing, learning and building - written down as we go.
          </p>
          <a className="mh-btn mh-btn--light" href="/company.html#field-notes">
            Browse field notes
          </a>
        </div>
        <div className="mh-blog__grid mh-blog__grid--single">
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="mh-post"
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` }}
            >
              <div className="mh-post__media">
                <img src={p.image} alt="" loading="lazy" />
              </div>
              <p className="mh-post__meta">{p.meta}</p>
              <h3 className="mh-post__title">{p.title}</h3>
              <p className="mh-text">{p.excerpt}</p>
              <a className="mh-link" href="/company.html#field-notes">
                Browse field notes
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mh-join"
        aria-labelledby="home-join-title"
        style={{ backgroundImage: `url(${bgJoin})` }}
      >
        <div className="mh-join__card mh-panel--primary" data-reveal>
          <h2 id="home-join-title" className="mh-heading">
            Join the team
          </h2>
          <p className="mh-text">
            We look for people who want to build technology that lasts.
          </p>
          <a className="mh-btn mh-btn--light" href="/team.html">
            Meet the team
          </a>
        </div>
        <div className="mh-join__stats" data-reveal>
          <Counter value={team.length} label="Co-founders" size="sm" />
          <Counter value={3} label="Cities" size="sm" />
        </div>
      </section>

      <section className="mh-contact" aria-labelledby="home-contact-title">
        <div className="mh-contact__card" data-reveal>
          <h2 id="home-contact-title" className="mh-heading mh-heading--center">
            Get in touch
          </h2>
          <p className="mh-text mh-text--center">
            Tell us about your business and where you want to go next. Our team
            will get back to you {brand.responseTime}.
          </p>
          <a className="mh-btn mh-btn--light" href="/contact.html">
            Start a project
          </a>
        </div>
      </section>
    </div>
  );
}
