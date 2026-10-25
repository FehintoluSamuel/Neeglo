import { useEffect, useRef, useState } from "react";
import { homeFor, productNote, products } from "../data/content.js";
import { productGalleries } from "../data/productMedia.js";
import dressmakersImage from "../images/products_images/background_images/two-african-dressmaker-woman-designed-new-red-dress-mannequin-tailor-office-black-seamstress-girls.webp";
import phoneImage from "../images/products_images/background_images/closeup-shot-black-female-smiling-her-phone-with-fabrics-front-her.webp";
import hangerImage from "../images/products_images/background_images/young-african-american-customer-woman-smiling-happy-holding-hanger-with-clothes-clothing-store.webp";
import tieImage from "../images/products_images/background_images/man-wearing-white-shirt-black-waistcoat-choosing-tie.webp";
import boutiqueImage from "../images/products_images/background_images/pregnant-client-looking-trendy-shirt-checking-fabric-modern-boutique-looking-buy-maternity-clothes-african-american-shopper-buying-fashionable-merchandise-clothing-store.webp";
import threadsImage from "../images/products_images/background_images/charming-brunette-curly-woman-white-blouse-burgundy-pants-laughs-poses-cozy-room-holds-balls-threads.webp";
import "../styles/products.css";

const heroSlides = [
  {
    id: "trendysize",
    kicker: "Neeglo product",
    title: "TrendySize",
    description: "Digital measurement for fashion businesses.",
    href: "/contact.html",
    action: "Join the pilot",
    image: dressmakersImage,
    position: "center",
  },
  {
    id: "measurements",
    kicker: "Made for made-to-measure",
    title: "Measurements made easier",
    description: "Keep each customer’s measurements close to the order.",
    href: "#product-overview",
    action: "Explore TrendySize",
    image: phoneImage,
    position: "center",
  },
  {
    id: "better-fit",
    kicker: "A clearer order process",
    title: "From customer details to a useful record",
    description: "Collect details once and return to them for the next order.",
    href: "#product-overview",
    action: "See how it works",
    image: hangerImage,
    position: "center",
  },
];

function ProductGallery({ slides, label }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2 || paused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [slides.length, paused]);

  return (
    <div
      className="products-gallery"
      role="group"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {slides.map((slide, slideIndex) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`products-gallery__image${slideIndex === index ? " is-active" : ""}`}
          aria-hidden={slideIndex === index ? undefined : "true"}
          loading={slideIndex === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
      {slides.length > 1 && (
        <div className="products-gallery__dots" aria-hidden="true">
          {slides.map((slide, slideIndex) => (
            <span
              key={slide.src}
              className={`products-gallery__dot${slideIndex === index ? " is-active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Products() {
  const product = products[0];
  const slides = productGalleries[product.id] ?? [];
  const trackRef = useRef(null);
  const pageRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      const track = trackRef.current;
      if (!track || !track.clientWidth) return;
      const current = Math.round(track.scrollLeft / track.clientWidth);
      const next = (current + 1) % heroSlides.length;
      setActiveSlide(next);
      track.scrollTo({
        left: next * track.clientWidth,
        behavior: "smooth",
      });
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;
    const targets = root.querySelectorAll("[data-reveal]");
    const showAll = () => {
      targets.forEach((target) => target.classList.add("is-visible"));
    };
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      showAll();
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  function goToSlide(index) {
    const next = Math.max(0, Math.min(heroSlides.length - 1, index));
    setActiveSlide(next);
    trackRef.current?.scrollTo({
      left: next * trackRef.current.clientWidth,
      behavior: "smooth",
    });
  }

  function syncActiveSlide() {
    const track = trackRef.current;
    if (!track) return;
    setActiveSlide(Math.round(track.scrollLeft / track.clientWidth));
  }

  return (
    <div className="products-page" ref={pageRef}>
      <section className="products-hero" aria-label="Featured products">
        <div
          className="products-hero__track"
          ref={trackRef}
          onScroll={syncActiveSlide}
        >
          {heroSlides.map((slide, index) => (
            <article
              key={slide.id}
              className={`products-hero__slide products-photo-section${index === activeSlide ? " is-active" : ""}`}
              style={{
                "--products-photo": `url(${slide.image})`,
                "--products-photo-position": slide.position,
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${heroSlides.length}`}
              aria-hidden={index === activeSlide ? undefined : "true"}
              inert={index !== activeSlide}
            >
              <div className="products-hero__content">
                <p className="products-eyebrow">{slide.kicker}</p>
                {index === 0 ? (
                  <h1>{slide.title}</h1>
                ) : (
                  <h2>{slide.title}</h2>
                )}
                <p className="products-hero__tagline">{slide.description}</p>
                <a className="btn btn--primary products-button" href={slide.href}>
                  {slide.action}
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="products-hero__nav" aria-label="Featured slides">
          <button
            type="button"
            className="products-hero__arrow"
            onClick={() => goToSlide(activeSlide - 1)}
            aria-label="Previous slide"
            disabled={activeSlide === 0}
          >
            Prev
          </button>
          <div className="products-hero__dots" role="tablist" aria-label="Slides">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === activeSlide}
                aria-label={`Go to slide ${index + 1}`}
                className={`products-hero__dot${index === activeSlide ? " is-active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="products-hero__arrow"
            onClick={() => goToSlide(activeSlide + 1)}
            aria-label="Next slide"
            disabled={activeSlide === heroSlides.length - 1}
          >
            Next
          </button>
        </div>
      </section>

      <section
        className="products-demo products-photo-section"
        style={{ "--products-photo": `url(${phoneImage})` }}
      >
        <div className="products-demo__content" data-reveal>
          <p className="products-eyebrow">Measurements made easier</p>
          <h2>Keep every order moving with a clearer measurement process.</h2>
          <p>{product.summary}</p>
          <a className="btn btn--primary products-button" href="#product-overview">
            Explore TrendySize
          </a>
        </div>
      </section>

      <section className="products-intro" data-reveal>
        <div className="products-intro__copy">
          <p className="products-eyebrow">Shaping better-fit orders</p>
          <h2>Measurement records that work for the whole order.</h2>
          <p>
            TrendySize gives fashion vendors one place to collect customer
            measurements, keep order details, and return to a customer’s record
            when they order again.
          </p>
          <ul className="products-feature-list">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <img
          className="products-intro__image"
          src={threadsImage}
          alt="A fashion designer working with colored threads"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section
        className="products-date products-photo-section"
        style={{ "--products-photo": `url(${tieImage})` }}
      >
        <div className="products-date__content" data-reveal>
          <p className="products-eyebrow">Save the date</p>
          <h2>{product.status}</h2>
          <p className="products-date__theme">
            A simpler way to take, organize, and revisit customer measurements.
          </p>
          <a className="btn btn--primary products-button" href={product.cta.href}>
            {product.cta.label}
          </a>
        </div>
      </section>

      <section
        className="products-quote products-photo-section"
        style={{ "--products-photo": `url(${boutiqueImage})` }}
      >
        <blockquote className="products-quote__content" data-reveal>
          <p>{productNote}</p>
          <cite>TrendySize measurement guidance</cite>
        </blockquote>
      </section>

      <section
        className="products-video products-photo-section"
        style={{ "--products-photo": `url(${dressmakersImage})` }}
      >
        <div className="products-video__content" data-reveal>
          <p className="products-eyebrow">How it works</p>
          <h2>From a shared link to a searchable order record.</h2>
          {slides.length > 0 && (
            <ProductGallery slides={slides} label="TrendySize product screens" />
          )}
        </div>
      </section>

      <section
        className="products-recap products-photo-section"
        style={{ "--products-photo": `url(${hangerImage})` }}
      >
        <div className="products-recap__content" data-reveal>
          <p className="products-eyebrow">TrendySize product overview</p>
          <h2>Tools for fashion vendors who work to order.</h2>
          <p>{homeFor.paras[0]}</p>
          <a className="btn btn--primary products-button" href="#product-overview">
            See the product details
          </a>
        </div>
      </section>

      <section className="products-audience" id="product-overview" data-reveal>
        <div className="products-audience__copy">
          <p className="products-eyebrow">Who it is for</p>
          <h2>{homeFor.title}</h2>
          <p>{homeFor.paras[0]}</p>
          <p>{homeFor.paras[1]}</p>
          <ul className="products-facts">
            {product.facts.map((fact) => (
              <li key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </li>
            ))}
          </ul>
        </div>
        <img
          className="products-audience__image"
          src={hangerImage}
          alt="A customer choosing clothing in a fashion store"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="products-more" data-reveal>
        <p className="products-eyebrow">More from TrendySize</p>
        <h2>See the product in use.</h2>
      </section>

      <section className="products-gallery-section" aria-label="TrendySize screens">
        {slides.map((slide) => (
          <figure key={slide.src}>
            <img src={slide.src} alt={slide.alt} loading="lazy" decoding="async" />
            <figcaption>{slide.alt}</figcaption>
          </figure>
        ))}
      </section>

      <section
        className="products-enquiries products-photo-section"
        style={{ "--products-photo": `url(${phoneImage})` }}
      >
        <div className="products-enquiries__content" data-reveal>
          <p className="products-eyebrow">For enquiries</p>
          <h2>Talk with us about your next order.</h2>
          <a className="btn btn--primary products-button" href="/contact.html">
            Contact Neeglo
          </a>
        </div>
      </section>
    </div>
  );
}
