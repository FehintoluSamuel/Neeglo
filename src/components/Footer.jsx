import { brand } from "../data/content.js";
import { Github, Linkedin, Gmail, XTwitter, Instagram } from "../../brand/icons.jsx";
import Icon from "./Icon.jsx";

const columns = [
  {
    title: "Home",
    links: [
      { label: "TrendySize", href: "/products" },
      { label: "How it works", href: "/products#how" },
      { label: "Pilot status", href: "/status" },
    ],
  },
  {
    title: "Team",
    links: [
      { label: "Co-founders", href: "/team" },
      { label: "Work & builds", href: "/work" },
      { label: "About us", href: "/company" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Field notes", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/products" },
      { label: "Status", href: "/status" },
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
            digital measurement for fashion businesses. Founded {brand.founded}.
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
              href="mailto:hello@neeglo.com"
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
          <a className="footer-legal__link" href="/privacy">
            Privacy
          </a>
          <a className="footer-legal__link" href="/terms">
            Terms
          </a>
          <a className="footer-legal__link" href="/status">
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
