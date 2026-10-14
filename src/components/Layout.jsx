import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import useReveal from "../hooks/useReveal.js";

export default function Layout({ active, children }) {
  useReveal();

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header active={active} />
      <main id="main" className={`site-main page-${active}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
