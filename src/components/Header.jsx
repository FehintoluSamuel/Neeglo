import { useState } from "react";
import { Menu } from "../../brand/icons.jsx";
import Icon from "./Icon.jsx";
import { nav } from "../data/content.js";

export default function Header({ active }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <a className="brand" href="/index.html" aria-label="Neeglo home">
            <img src="/neeglo-logo.svg" alt="Neeglo" className="brand-logo" />
          </a>

          <nav className="main-nav" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link${active === item.id ? " is-active" : ""}`}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon as={Menu} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`mobile-nav__item${
                active === item.id ? " is-active" : ""
              }`}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
