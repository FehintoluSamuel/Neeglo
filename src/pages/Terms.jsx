import { brand } from "../data/content.js";

const sections = [
  {
    id: "agreement",
    h: "1. Agreement",
    p: [
      `These terms govern your use of the website operated by ${brand.legalName} ("Neeglo"). By using the site you accept them. If you do not accept them, please do not use the site.`,
    ],
  },
  {
    id: "use-of-site",
    h: "2. Use of the site",
    p: [
      "You may view and link to the site for lawful purposes. You may not attempt to disrupt it, gain unauthorised access, scrape it at a rate that degrades service, or misrepresent your relationship with Neeglo.",
    ],
  },
  {
    id: "ip",
    h: "3. Intellectual property",
    p: [
      `All content, marks, and code on this site are owned by ${brand.legalName} or its licensors unless stated otherwise. Copying for commercial use requires written permission. Benchmark figures reflect the engagements and dates stated and are not a guarantee of future results.`,
    ],
  },
  {
    id: "engagements",
    h: "4. Engagements and contracts",
    p: [
      "Nothing on this site is an offer capable of acceptance. Services are provided only under a signed statement of work or master services agreement, which will include scope, fees, and specific terms for confidentiality, data protection, and liability.",
    ],
  },
  {
    id: "confidentiality",
    h: "5. Confidentiality",
    p: [
      "Case studies are published with client permission and anonymised where required. Any information shared with us in an enquiry is treated as confidential and is not used publicly without your agreement.",
    ],
  },
  {
    id: "disclaimers",
    h: "6. Disclaimers",
    p: [
      "The site is provided on an \u201cas is\u201d basis. While we keep information correct, we do not warrant that it is complete, current, or free from error, and we may change or remove content at any time.",
    ],
  },
  {
    id: "liability",
    h: "7. Limitation of liability",
    p: [
      "To the extent permitted by law, Neeglo is not liable for indirect or consequential loss arising from use of this site. Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud.",
    ],
  },
  {
    id: "law",
    h: "8. Governing law",
    p: [
      "These terms are governed by the laws of Nigeria, where Neeglo's founding team operates. The courts of Nigeria have exclusive jurisdiction over any dispute arising from this site.",
    ],
  },
  {
    id: "changes",
    h: "9. Changes",
    p: [
      "We may update these terms. Material changes will be reflected in the date below. Continued use of the site after a change constitutes acceptance.",
    ],
  },
  {
    id: "contact",
    h: "10. Contact",
    p: [`Questions about these terms: ${brand.emailGeneral}.`],
  },
];

export default function Terms() {
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
        <h1>Terms of Use</h1>
        <p className="legal__updated">Last updated 13 October 2026</p>
        <p className="legal__intro">
          The terms that apply when you browse this website. Signed engagements
          are governed by their own contract, not this page.
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
