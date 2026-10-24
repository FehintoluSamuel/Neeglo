import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Close, Menu } from "../../brand/icons.jsx";
import Icon from "./Icon.jsx";
import { nav } from "../data/content.js";

export default function Header({ active }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = (event) => {
      if (event.matches) setMobileOpen(false);
    };

    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <a className="brand" href="/index.html" aria-label="Neeglo home">
            <img src="/neeglo-logo.webp" alt="Neeglo" className="brand-logo" />
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
          <a
            className="header-cta"
            href="/contact.html"
            data-cta="header"
          >
            Start a project
          </a>

          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Icon as={mobileOpen ? Close : Menu} />
          </button>
        </div>
      </div>

      {mobileOpen &&
        createPortal(
          <>
            <div
              className="mobile-nav__scrim"
              aria-hidden="true"
              onClick={closeMenu}
            />

            <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
              <div className="mobile-nav__head">
                <span className="mobile-nav__label">Menu</span>
              </div>

              <div className="mobile-nav__links">
                {nav.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`mobile-nav__item${
                      active === item.id ? " is-active" : ""
                    }`}
                    aria-current={active === item.id ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <a
                className="mobile-nav__cta"
                href="/contact.html"
                data-cta="header-mobile"
                onClick={closeMenu}
              >
                Start a project
              </a>
            </nav>
          </>,
          document.body
        )
      }
    </header>
  );
}
