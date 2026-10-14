import { brand } from "../data/content.js";
import { Github, Linkedin, Gmail, XTwitter, Instagram } from "../../brand/icons.jsx";
import Icon from "./Icon.jsx";

const columns = [
  {
    title: "Products",
    links: [
      { label: "TrendySize", href: "/solutions.html" },
      { label: "How it works", href: "/solutions.html" },
      { label: "Pilot status", href: "/status.html" },
    ],
  },
  {
    title: "Team",
    links: [
      { label: "Co-founders", href: "/team.html" },
      { label: "Work & builds", href: "/work.html" },
      { label: "About us", href: "/company.html" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company.html" },
      { label: "Field notes", href: "/company.html" },
      { label: "Contact", href: "/contact.html" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/solutions.html" },
      { label: "Status", href: "/status.html" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {columns.map((col) => (
          <div key={col.title}>
            <div className="footer-col__title">{col.title}</div>
            <div className="footer-col__links">
              {col.links.map((link) => (
                <a
                  key={link.label}
                  className="footer-col__link"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="footer-about">
          <div className="footer-col__title">{brand.name}</div>
          <p className="footer-about__text">
            Neeglo is an independent software company building TrendySize -
            digital measurement for fashion businesses. Supported by Bincom Dev.
            Founded {brand.founded}.
          </p>
          <div className="footer-social">
            <a
              className="footer-social__item"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neeglo on GitHub"
            >
              <Icon as={Github} size={18} />
            </a>
            <a
              className="footer-social__item"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neeglo on LinkedIn"
            >
              <Icon as={Linkedin} size={18} />
            </a>
            <a
              className="footer-social__item"
              href="mailto:hello@glenur.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Neeglo"
            >
              <Icon as={Gmail} size={18} />
            </a>
            <a
              className="footer-social__item"
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neeglo on X"
            >
              <Icon as={XTwitter} size={18} />
            </a>
            <a
              className="footer-social__item"
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neeglo on Instagram"
            >
              <Icon as={Instagram} size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <div className="footer-legal__links">
          <span>
            © {new Date().getFullYear()} {brand.legalName}
            {brand.companyNumber
              ? ` · Company No. ${brand.companyNumber}`
              : ""}
          </span>
          <a className="footer-legal__link" href="/privacy.html">
            Privacy
          </a>
          <a className="footer-legal__link" href="/terms.html">
            Terms
          </a>
          <a className="footer-legal__link" href="/status.html">
            Status
          </a>
          <a className="footer-legal__link" href="/sitemap.xml">
            Sitemap
          </a>
        </div>
        <div className="footer-legal__built">
          Set in Roboto and Gnomon Foreground · Build for the long run
        </div>
      </div>
    </footer>
  );
}
