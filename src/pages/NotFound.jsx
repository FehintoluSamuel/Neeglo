import { nav } from "../data/content.js";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__inner" data-reveal>
        <div className="eyebrow eyebrow--muted">Error 404</div>
        <div className="notfound__code">404</div>
        <h1 className="notfound__title">We could not find that page</h1>
        <p className="notfound__text">
          The link may be old, or the page may have moved. Nothing broke on our
          side - try one of these instead.
        </p>

        <nav className="notfound__links" aria-label="Suggested pages">
          {nav.slice(0, 5).map((item) => (
            <a className="notfound__link" href={item.href} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary notfound__home" href="/index.html">
          Back to homepage
        </a>
      </div>
    </section>
  );
}
