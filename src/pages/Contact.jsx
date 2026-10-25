import { useState } from "react";
import { brand, images } from "../data/content.js";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const e = {};
  if (!v.firstName.trim()) e.firstName = "Enter your first name.";
  if (!v.lastName.trim()) e.lastName = "Enter your last name.";
  if (!v.email.trim()) e.email = "Enter your work email.";
  else if (!EMAIL.test(v.email))
    e.email = "That email address looks incomplete.";
  if (!v.building.trim())
    e.building = "Tell us what you are building - one or two lines is fine.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    building: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function update(key) {
    return (e) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setValues((v) => ({ ...v, [key]: value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };
  }

  function onSubmit(e) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    setSent(true);
  }

  function fieldProps(key) {
    return {
      id: key,
      name: key,
      value: values[key],
      onChange: update(key),
      "aria-invalid": errors[key] ? "true" : undefined,
      "aria-describedby": errors[key] ? `${key}-error` : undefined,
    };
  }

  return (
    <div className="contact-grid">
      <section className="contact-form-col" data-reveal>
        <div className="eyebrow">Contact</div>
        <h1>Talk to the team</h1>
        <p className="contact-form-col__text">
          Interested in the TrendySize pilot, partnering, or joining the waitlist?
          You reach a co-founder directly and we reply {brand.responseTime}.
          Prefer email? {brand.email}
        </p>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="form-row">
            <div className="field">
              <label htmlFor="firstName">First name *</label>
              <input
                type="text"
                autoComplete="given-name"
                {...fieldProps("firstName")}
              />
              {errors.firstName && (
                <span className="field__error" id="firstName-error">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="field">
              <label htmlFor="lastName">Last name *</label>
              <input
                type="text"
                autoComplete="family-name"
                {...fieldProps("lastName")}
              />
              {errors.lastName && (
                <span className="field__error" id="lastName-error">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">Work email *</label>
            <input
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              {...fieldProps("email")}
            />
            {errors.email && (
              <span className="field__error" id="email-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="company">Company</label>
            <input type="text" autoComplete="organization" {...fieldProps("company")} />
          </div>

          <div className="field">
            <label htmlFor="building">What are you building?</label>
            <textarea
              rows={4}
              placeholder="Pilot, partnership, or something we should read..."
              {...fieldProps("building")}
            />
            <span className="field__hint">
              The more specific, the faster we can point you to the right
              co-founder.
            </span>
            {errors.building && (
              <span className="field__error" id="building-error">
                {errors.building}
              </span>
            )}
          </div>

          <label className="checkbox-row">
            <input type="checkbox" checked={values.consent} onChange={update("consent")} />
            <span>
              I agree to be contacted about Neeglo services. No marketing spam.
            </span>
          </label>

          <button className="btn btn--primary" type="submit">
            Send message
          </button>

          {sent && (
            <div className="form-success" role="status">
              Message queued locally. In production this routes to{" "}
              {brand.email}
            </div>
          )}
        </form>
      </section>

      <section
        className="contact-aside"
        data-reveal
        style={{ "--reveal-delay": "0.08s" }}
      >
        <div className="contact-aside__card">
          <div className="contact-aside__title">Direct channels</div>

          <div className="channels">
            <div className="channel">
              <span>{brand.email}</span>
            </div>
            <div className="channel">
              <span>TrendySize pilot · late Oct 2026</span>
            </div>
            <div className="channel">
              <span>NDPR-aligned data handling</span>
            </div>
          </div>

          <div className="contact-aside__img">
            <img
              src={images.heroLab}
              alt="Neeglo engineering workspace"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
