import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/roboto";
import "@fontsource-variable/jetbrains-mono";
import "./styles/index.css";
import Layout from "./components/Layout.jsx";
import Products from "./pages/Products.jsx";
import Solutions from "./pages/Solutions.jsx";
import Team from "./pages/Team.jsx";
import Work from "./pages/Work.jsx";
import Company from "./pages/Company.jsx";
import Contact from "./pages/Contact.jsx";
import Status from "./pages/Status.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";

const routes = {
  products: Products,
  solutions: Solutions,
  team: Team,
  work: Work,
  company: Company,
  contact: Contact,
  status: Status,
  privacy: Privacy,
  terms: Terms,
  notfound: NotFound,
};

const rootEl = document.getElementById("root");
const page = rootEl.dataset.page;
const Page = routes[page] ?? NotFound;

createRoot(rootEl).render(
  <React.StrictMode>
    <Layout active={page}>
      <Page />
    </Layout>
  </React.StrictMode>
);
