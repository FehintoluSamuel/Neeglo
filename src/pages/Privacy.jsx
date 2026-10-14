import { brand } from "../data/content.js";

const sections = [
  {
    id: "who-we-are",
    h: "1. Who we are",
    p: [
      `${brand.legalName} ("Neeglo", "we", "us") is a founding team operating across ${brand.address.line2}. We are the data controller for personal data collected through this website. Our registered company details will be published here once incorporated.`,
      `Questions about this policy can be sent to ${brand.emailGeneral}.`,
    ],
  },
  {
    id: "data-we-collect",
    h: "2. Data we collect",
    p: [
      "Information you give us: your name, work email, company, and the message you send through the contact form. If you engage us, we may also process project-related data under a separate agreement.",
      "Information collected automatically: standard server logs (IP address, browser type, pages requested, timestamps) used to operate and secure the site. We do not run advertising trackers.",
    ],
  },
  {
    id: "how-we-use",
    h: "3. How we use your data",
    p: [
      "To respond to your enquiry, to provide services you request, to keep records required by law, and to protect the site against abuse. We rely on legitimate interests and, where required, your consent.",
    ],
  },
  {
    id: "cookies",
    h: "4. Cookies",
    p: [
      "This website sets no advertising or analytics cookies. We may set a strictly necessary cookie to remember interface preferences. You can block cookies in your browser without losing access to the site.",
    ],
  },
  {
    id: "sharing",
    h: "5. Sharing and processors",
    p: [
      "We share data only with processors that help us operate: cloud hosting, email, and developer tooling. Each is bound by a data processing agreement. We do not sell personal data.",
    ],
  },
  {
    id: "retention",
    h: "6. Retention",
    p: [
      "Enquiry data is kept for 24 months unless it becomes a client record, in which case it is kept for the duration of the engagement plus the period required by accounting and tax law (currently six years).",
    ],
  },
  {
    id: "security",
    h: "7. Security",
    p: [
      "Access is least-privilege, encrypted in transit, and logged. TrendySize data handling follows the Nigeria Data Protection Regulation (NDPR); a full compliance statement will be published with the product pilot.",
    ],
  },
  {
    id: "your-rights",
    h: "8. Your rights",
    p: [
      "Under UK GDPR you may request access, correction, erasure, restriction, portability, and objection. Write to us and we will respond within one month. You may also complain to the Information Commissioner's Office (ico.org.uk).",
    ],
  },
  {
    id: "transfers",
    h: "9. International transfers",
    p: [
      "We are remote-first across Nigeria (Lagos, Abakaliki, Enugu). Where data is transferred across borders it is handled in line with applicable protection rules and adequate safeguards.",
    ],
  },
  {
    id: "contact",
    h: "10. Contact",
    p: [
      `For any privacy request, email ${brand.emailGeneral}. Please include enough detail for us to identify your data.`,
    ],
  },
];

export default function Privacy() {
  return (
    <div className="legal-layout">
      <aside className="legal-toc" aria-label="On this page">
        <div className="legal-toc__title">On this page</div>
        <nav>
          {sections.map((s) => (
            <a className="legal-toc__link" href={`#${s.id}`} key={s.id}>
              {s.h}
            </a>
          ))}
        </nav>
      </aside>

      <article className="legal" data-reveal>
        <div className="eyebrow">Legal</div>
        <h1>Privacy Policy</h1>
        <p className="legal__updated">Last updated 13 October 2026</p>
        <p className="legal__intro">
          This policy explains what personal data Neeglo collects through this
          website, why we collect it, and the rights you have over it. It is
          written to be read, not skimmed past.
        </p>

        {sections.map((s) => (
          <section className="legal__section" id={s.id} key={s.id}>
            <h2>{s.h}</h2>
            {s.p.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </section>
        ))}
      </article>
    </div>
  );
}
