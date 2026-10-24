import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  ShieldCheck,
  XTwitter,
} from "../../brand/icons.jsx";
import Icon from "../components/Icon.jsx";
import "../styles/home.css";

const heroSlides = [
  {
    id: "web1",
    kicker: "Signal Alliance Technology Holding",
    title: "Technology that moves African business forward",
    cta: "Watch Video",
    image: "/images/mimic/hero-mobile.webp",
    layout: "center",
    tone: "media",
  },
  {
    id: "web1-video",
    kicker: "Signal Alliance Technology Holding",
    title: "Technology that moves African business forward",
    cta: "Watch Video",
    image: "/images/mimic/web1.webp",
    layout: "center",
    tone: "media",
  },
  {
    id: "anniversary",
    kicker: "28th Anniversary",
    title: "Signal Alliance at 28",
    cta: "Watch Recap Video",
    image: "/images/mimic/anniversary.webp",
    layout: "center",
    tone: "media",
  },
  {
    id: "iso",
    kicker: "Certification",
    title: "ISO-aligned delivery, audited end to end",
    cta: "Learn More",
    image: "/images/team-whiteboard.webp",
    layout: "left",
    tone: "dark",
  },
  {
    id: "sustainability",
    kicker: "Our approach",
    title: "Business Sustainability Practices",
    cta: "Watch Video",
    image: "/images/data-center.webp",
    layout: "left",
    tone: "dark",
    level: 1,
  },
  {
    id: "future",
    kicker: "Who we are",
    title: "Helping Businesses become Future Ready.",
    cta: "Learn More",
    image: "/images/hero-lab.webp",
    layout: "left",
    tone: "dark",
  },
  {
    id: "africa",
    kicker: "Our footprint",
    title: "We are an African Technology Company",
    cta: "Learn More",
    image: "/images/mimic/footprints.webp",
    layout: "split",
    tone: "dark",
  },
];

const stats = [
  { label: "Direct Staff", value: 24 },
  { label: "Indirect Staff", value: 60 },
  { label: "Years Experience", value: 28 },
  { label: "Satisfied Clients", value: 180, suffix: "+" },
];

const businesses = [
  {
    icon: Cloud,
    name: "SATH Cloud",
    text: "SATH Cloud is an indigenous African cloud solution company and a subsidiary of Signal Alliance Technology Holding.",
    href: "#cloud",
  },
  {
    icon: Globe,
    name: "Signal Alliance",
    text: "Signal Alliance is a leading technology consulting firm helping enterprises across Africa become future ready.",
    href: "#consulting",
  },
  {
    icon: Code2,
    name: "SATH Software",
    text: "SATH Software designs and builds enterprise products for the African market, from platforms to integrations.",
    href: "#software",
  },
  {
    icon: ShieldCheck,
    name: "SATH Kenya",
    text: "SATH Kenya extends our technology services and support across East Africa from Nairobi.",
    href: "#kenya",
  },
];

const countries = [
  "Nigeria",
  "Ghana",
  "Ethiopia",
  "Kenya",
  "Uganda",
  "Malawi",
  "Zimbabwe",
  "Botswana",
  "Belgium",
  "France",
  "United States",
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
  { icon: XTwitter, label: "X", href: "https://x.com/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/" },
  { icon: Mail, label: "Email", href: "mailto:hello@glenur.tech" },
];

const videos = [
  { title: "Signal Alliance Technologies Holding Rebrands Cloud & Consulting business For Pan African Expansion", time: "2:56" },
  { title: "Transforming the Future of Work in Banking with AI - Fidelity Bank", time: "2:51" },
  { title: "SATH Soccer Tournament Highlights | You Can't Miss!", time: "1:21" },
  { title: "Empowering Banking with Microsoft AI Co-pilot | Access Bank Excitement Day", time: "4:06" },
  { title: "SATH in Numbers - 28th Anniversary", time: "1:55" },
  { title: "SATH Anniversary Soccer Tournament", time: "2:18" },
  { title: "SATH 28th Anniversary Official Video", time: "2:40" },
  { title: "SATH Sustainable Business Practices", time: "2:39" },
  { title: "Women In Tech - A Short Message", time: "1:50" },
  { title: "Signal Alliance Marks 25 Years of Technology Integration", time: "2:37" },
  { title: "Microsoft Copilot Adoption at Wema Bank", time: "4:11" },
  { title: "SATH MS Copilot Abuja EBS", time: "1:09" },
  { title: "Collins Onuegbu on the #ALA Experience", time: "3:16" },
  { title: "Adanma Onuegbu on the #ALA Experience", time: "3:15" },
].map((v, i) => ({ ...v, image: `/images/mimic/video-${(i % 7) + 1}.webp` }));

const posts = [
  {
    title: "Why Technology Advocacy Matters for National Development",
    excerpt:
      "Across the world, the nations pulling ahead are not simply adopting technology faster — they are shaping the rules around it.",
    image: "/images/mimic/video-1.webp",
  },
  {
    title: "The Future of Responsible AI in Africa",
    excerpt:
      "As artificial intelligence adoption accelerates across the continent, Africa's ability to govern it responsibly becomes urgent.",
    image: "/images/mimic/video-2.webp",
  },
  {
    title: "SATH Foundation Opens New Pathways for Young Innovators in Nigeria",
    excerpt:
      "Across Nigeria, thousands of young people are eager to participate in the digital economy. Access is the first barrier.",
    image: "/images/mimic/video-3.webp",
  },
];

function Counter({ value, suffix = "", label, size = "md" }) {
  return (
    <div className={`mh-counter mh-counter--${size}`}>
      <div className="mh-counter__value">
        {value}
        {suffix}
      </div>
      <div className="mh-counter__label">{label}</div>
    </div>
  );
}

export default function MimicHome() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const go = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.min(
      heroSlides.length - 1,
      Math.max(0, active + dir)
    );
    setActive(next);
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div className="mh">
      <section className="mh-hero" aria-label="Featured">
        <div className="mh-hero__track" ref={trackRef} onScroll={onScroll}>
          {heroSlides.map((slide) => (
            <article
              key={slide.id}
              className={`mh-slide mh-slide--${slide.layout} mh-slide--${slide.tone}`}
              style={{ "--slide-image": `url(${slide.image})` }}
            >
              <div className="mh-slide__scrim" aria-hidden="true" />
              <div className="mh-slide__inner">
                {slide.layout === "media" ? (
                  <img
                    className="mh-slide__media"
                    src={slide.image}
                    alt=""
                    loading="lazy"
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

                  <a className="mh-btn mh-btn--light" href="#contact">
                    {slide.cta}
                    <Icon as={ArrowRight} size="sm" />
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
            <Icon as={ArrowRight} size="sm" className="mh-flip" />
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
            <Icon as={ArrowRight} size="sm" />
          </button>
        </div>
      </section>

      <section className="mh-stats" aria-label="Company at a glance">
        <div className="mh-boxed mh-stats__row">
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      <section className="mh-about" aria-labelledby="mh-about-title">
        <div className="mh-about__inner">
          <div className="mh-panel mh-panel--primary mh-about__card">
            <h2 id="mh-about-title" className="mh-heading">About Us</h2>
            <p className="mh-text">
              Signal Alliance Technology Holding is an African technology
              company building cloud, consulting and software businesses for
              organisations across the continent — and beyond.
            </p>
            <a className="mh-btn mh-btn--light" href="#about">
              Learn More
              <Icon as={ArrowRight} size="sm" />
            </a>
          </div>
        </div>
      </section>

      <section className="mh-businesses" aria-labelledby="mh-biz-title">
        <div className="mh-businesses__row">
          <div className="mh-businesses__carousel">
            {businesses.map((b) => (
              <article key={b.name} className="mh-panel mh-panel--primary mh-biz-card">
                <span className="mh-biz-card__icon" aria-hidden="true">
                  <Icon as={b.icon} size="xl" />
                </span>
                <h3 className="mh-biz-card__name">{b.name}</h3>
                <p className="mh-text">{b.text}</p>
                <a className="mh-btn mh-btn--light" href={b.href}>
                  Learn More
                  <Icon as={ArrowRight} size="sm" />
                </a>
              </article>
            ))}
          </div>

          <div className="mh-businesses__intro">
            <h2 id="mh-biz-title" className="mh-heading mh-heading--tight">
              Our Businesses
            </h2>
            <p className="mh-text">
              At SATH and within our lines of business, we're always seeking
              what's next for our technologies and our customers.
            </p>
            <div className="mh-stat-pair">
              <Counter value={120} suffix="+" label="Solutions Deployed" size="sm" />
              <Counter value={90} suffix="+" label="Projects Completed" size="sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="mh-feature" aria-labelledby="mh-aff-title">
        <div className="mh-feature__top">
          <Counter value={12} label="Affiliate Companies" size="lg" />
          <h3 className="mh-feature__sub">
            We work with a growing list of start-ups and established companies
            in the tech industry
          </h3>
        </div>
        <div className="mh-feature__main">
          <div className="mh-feature__intro">
            <h2 id="mh-aff-title" className="mh-heading mh-heading--tight">
              Our Affiliate Companies
            </h2>
            <a className="mh-btn mh-btn--light" href="#affiliates">
              Learn More
              <Icon as={ArrowRight} size="sm" />
            </a>
          </div>
          <div className="mh-feature__media">
            <img src="/images/mimic/affiliates.webp" alt="Affiliate company logos" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="mh-feature mh-feature--partners" aria-labelledby="mh-partners-title">
        <div className="mh-feature__top">
          <Counter value={20} label="Strategic Partners" size="lg" />
          <h3 className="mh-feature__sub">
            We hold strategic partnerships with global technology providers
          </h3>
        </div>
        <div className="mh-feature__main">
          <div className="mh-feature__intro">
            <h2 id="mh-partners-title" className="mh-heading mh-heading--tight">
              Our Partners
            </h2>
            <a className="mh-btn mh-btn--light" href="#partners">
              Learn More
              <Icon as={ArrowRight} size="sm" />
            </a>
          </div>
          <div className="mh-feature__media">
            <img src="/images/mimic/partners.webp" alt="Partner logos" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="mh-feature mh-feature--clients" aria-labelledby="mh-clients-title">
        <div className="mh-feature__top">
          <Counter value={180} suffix="+" label="Satisfied Clients" size="lg" />
          <h3 className="mh-feature__sub">
            We provide cutting edge tech solutions to a growing list of clients
            in the private and public sector.
          </h3>
        </div>
        <div className="mh-feature__main">
          <div className="mh-feature__intro">
            <h2 id="mh-clients-title" className="mh-heading mh-heading--tight">
              Our Clients
            </h2>
            <a className="mh-btn mh-btn--light" href="#clients">
              See All Our Clients
              <Icon as={ArrowRight} size="sm" />
            </a>
          </div>
          <div className="mh-feature__media mh-feature__media--grid">
            {[1, 2, 3].map((n) => (
              <img
                key={n}
                src={`/images/mimic/client-${n}.webp`}
                alt={`Client logo ${n}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mh-foundation" aria-labelledby="mh-foundation-title">
        <div className="mh-foundation__card mh-panel--primary">
          <Icon as={ShieldCheck} size="xl" className="mh-foundation__icon" />
          <h2 id="mh-foundation-title" className="mh-heading">Foundation</h2>
          <p className="mh-text">
            The SATH Foundation opens pathways for young innovators through
            scholarships, start-up funding and community programmes.
          </p>
          <a className="mh-btn mh-btn--light" href="#foundation">
            Learn More
            <Icon as={ArrowRight} size="sm" />
          </a>
        </div>
        <div className="mh-foundation__stats">
          <Counter value={120} suffix="+" label="Scholarships Offered" size="sm" />
          <Counter value={40} suffix="+" label="Start-Ups Funded" size="sm" />
          <Counter value={60} suffix="+" label="Communities Touched" size="sm" />
        </div>
      </section>

      <section className="mh-media" aria-labelledby="mh-media-title">
        <div className="mh-media__head mh-panel--primary">
          <h2 id="mh-media-title" className="mh-heading">Media</h2>
          <p className="mh-text">
            Find out what we have been up to lately. Follow us on all our social
            media channels.
          </p>
          <a className="mh-btn mh-btn--light" href="#media">
            View Our Media Library
            <Icon as={ArrowRight} size="sm" />
          </a>
          <div className="mh-socials">
            {socials.map((s) => (
              <a key={s.label} className="mh-socials__item" href={s.href} aria-label={s.label}>
                <Icon as={s.icon} size="sm" />
              </a>
            ))}
          </div>
        </div>

        <div className="mh-videos">
          <div className="mh-videos__head">
            <h3 className="mh-videos__title">Our Videos</h3>
            <span className="mh-videos__count">{videos.length} Videos</span>
          </div>
          <ul className="mh-videos__list">
            {videos.map((v) => (
              <li key={v.title} className="mh-video">
                <div className="mh-video__thumb">
                  <img src={v.image} alt="" loading="lazy" />
                  <span className="mh-video__play" aria-hidden="true">
                    <Icon as={ArrowUpRight} size="sm" />
                  </span>
                  <span className="mh-video__time">{v.time}</span>
                </div>
                <h4 className="mh-video__title">{v.title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mh-blog" aria-labelledby="mh-blog-title">
        <div className="mh-blog__head mh-panel--primary">
          <h2 id="mh-blog-title" className="mh-heading">Blog</h2>
          <p className="mh-text">
            Be the first to know what is happening within the tech industry.
            Subscribe to our newsletter.
          </p>
          <a className="mh-btn mh-btn--light" href="#blog">
            See All Posts
            <Icon as={ArrowRight} size="sm" />
          </a>
        </div>
        <div className="mh-blog__grid">
          {posts.map((p) => (
            <article key={p.title} className="mh-post">
              <div className="mh-post__media">
                <img src={p.image} alt="" loading="lazy" />
              </div>
              <h3 className="mh-post__title">{p.title}</h3>
              <p className="mh-text">{p.excerpt}</p>
              <a className="mh-link" href="#post">
                Read More
                <Icon as={ArrowRight} size="sm" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mh-join" aria-labelledby="mh-join-title">
        <div className="mh-join__card mh-panel--primary">
          <h2 id="mh-join-title" className="mh-heading">Join Our Team</h2>
          <p className="mh-text">
            We are always looking for people who want to build technology that
            lasts. Explore open roles across our businesses.
          </p>
          <a className="mh-btn mh-btn--light" href="#careers">
            Learn More
            <Icon as={ArrowRight} size="sm" />
          </a>
        </div>
        <div className="mh-join__stats">
          <Counter value={24} label="Direct Staff" size="sm" />
          <Counter value={60} label="Indirect Staff" size="sm" />
        </div>
      </section>

      <section className="mh-contact" aria-labelledby="mh-contact-title">
        <div className="mh-contact__card">
          <h2 id="mh-contact-title" className="mh-heading mh-heading--center">
            Get in Touch with Us
          </h2>
          <p className="mh-text mh-text--center">
            Tell us about your business and where you want to go next. Our team
            will get back to you within one working day.
          </p>
          <a className="mh-btn mh-btn--light" href="#contact">
            Engage Us
            <Icon as={ArrowRight} size="sm" />
          </a>
        </div>
      </section>
    </div>
  );
}
