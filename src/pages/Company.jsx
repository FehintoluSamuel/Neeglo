import {
  brand,
  images,
  labNotes,
  operatingModel,
  principles,
  timeline,
} from "../data/content.js";

export default function Company() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner" data-reveal>
          <div className="eyebrow">Company</div>
          <h1>A software company built for the long run</h1>
          <p className="page-hero__text">
            Neeglo is an independent company founded in {brand.founded} and run
            by its six founders. We research, ship, measure and document - and
            we put our names on the work. Our first product, TrendySize, reaches
            pilot this October.
          </p>
        </div>
      </section>

      <section className="company-grid">
        <div
          className="company-panel company-panel--alt"
          data-reveal="left"
        >
          <h2>Principles</h2>
          <div className="principles">
            {principles.map((p) => (
              <div className="principle" key={p.t}>
                <div className="principle__title">{p.t}</div>
                <p className="principle__desc">{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="company-panel"
          data-reveal="right"
          style={{ "--reveal-delay": "0.1s" }}
        >
          <h2>Operating model</h2>
          <div className="ops-table">
            {operatingModel.map((row) => (
              <div className="ops-row" key={row.k}>
                <div className="ops-row__key">{row.k}</div>
                <div className="ops-row__val">{row.v}</div>
              </div>
            ))}
          </div>

          <div className="company-img">
            <img
              src={images.teamWhiteboard}
              alt="Neeglo team at the company whiteboard"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head" data-reveal>
          <h2>How we got here</h2>
          <p className="section-head__desc">
            From the first meeting in April to pilot - one page, no filler.
          </p>
        </div>

        <ol className="timeline">
          {timeline.map((item, i) => (
            <li
              className="timeline-item"
              key={item.year + item.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.06}s` }}
            >
              <span className="timeline-item__year">{item.year}</span>
              <div className="timeline-item__body">
                <div className="timeline-item__title">{item.title}</div>
                <p className="timeline-item__text">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--alt">
        <div className="section-head" data-reveal>
          <h2>Field notes</h2>
          <p className="section-head__desc">
            What we are working through, written down. Engineering, not
            marketing.
          </p>
        </div>

        <div className="notes-grid">
          {labNotes.map((n, i) => (
            <a
              className="note"
              href="/contact.html"
              key={n.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.06}s` }}
            >
              <div className="note__meta">
                {n.date} · {n.read}
              </div>
              <div className="note__title">{n.title}</div>
              <div className="note__foot">
                <span>{n.author}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
