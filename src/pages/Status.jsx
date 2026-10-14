import { statusIncidents, statusServices } from "../data/content.js";

function stateClass(state) {
  const s = state.toLowerCase();
  if (s === "operational" || s === "resolved" || s === "completed")
    return "ok";
  if (s === "degraded" || s === "scheduled" || s === "in development")
    return "warn";
  return "down";
}

export default function Status() {
  const degraded = statusServices.some((s) => s.state !== "Operational");

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner" data-reveal>
          <div className="eyebrow">Status</div>
          <h1>Service status</h1>
          <p className="page-hero__text">
            TrendySize services go live with the pilot in late October 2026;
            uptime starts being reported here from then. This website itself is
            live now.
          </p>
        </div>
      </section>

      <section className="section">
        <div
          className={`status-banner status-banner--${degraded ? "warn" : "ok"}`}
          role="status"
          data-reveal
        >
          <span className="status-dot" aria-hidden="true" />
          {degraded
            ? "Pre-launch - TrendySize services go live with the October pilot."
            : "All systems operational."}
        </div>

        <div className="status-table" role="table" aria-label="Component status" data-reveal>
          <div className="status-row status-row--head" role="row">
            <span role="columnheader">Component</span>
            <span role="columnheader">Status</span>
            <span role="columnheader">Uptime</span>
          </div>
          {statusServices.map((s) => (
            <div className="status-row" role="row" key={s.name}>
              <span role="cell" className="status-row__name">
                {s.name}
              </span>
              <span role="cell">
                <span className={`status-pill status-pill--${stateClass(s.state)}`}>
                  {s.state}
                </span>
              </span>
              <span role="cell" className="status-row__uptime">
                {s.uptime}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-head" data-reveal>
          <h2>Incident history</h2>
          <p className="section-head__desc">
            Milestones first, incidents after the pilot goes live.
          </p>
        </div>

        <div className="incidents">
          {statusIncidents.map((i, idx) => (
            <div
              className="incident"
              key={i.title}
              data-reveal
              style={{ "--reveal-delay": `${idx * 0.06}s` }}
            >
              <div className="incident__meta">
                <span className="incident__date">{i.date}</span>
                <span className={`status-pill status-pill--${stateClass(i.state)}`}>
                  {i.state}
                </span>
                <span className="incident__duration">{i.duration}</span>
              </div>
              <div className="incident__title">{i.title}</div>
              <p className="incident__text">{i.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
