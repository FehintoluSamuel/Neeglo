import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, join } from "node:path";
import { copyFile, mkdir } from "node:fs/promises";

const cleanRoutes = [
  "products",
  "team",
  "work",
  "company",
  "contact",
  "status",
  "privacy",
  "terms",
];

function cleanPageRoutes() {
  return {
    name: "clean-page-routes",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (!req.url) return next();
        const requestUrl = new URL(req.url, "http://localhost");
        const route = requestUrl.pathname.replace(/^\/|\/$/g, "");
        if (route.endsWith(".html") && cleanRoutes.includes(route.slice(0, -5))) {
          _res.statusCode = 302;
          _res.setHeader("Location", `/${route.slice(0, -5)}${requestUrl.search}`);
          _res.end();
          return;
        }
        if (cleanRoutes.includes(route)) {
          requestUrl.pathname = `/${route}.html`;
          req.url = `${requestUrl.pathname}${requestUrl.search}`;
        }
        next();
      });
    },
    async writeBundle(options) {
      const outputDir = resolve(options.dir ?? "dist");
      await Promise.all(
        cleanRoutes.map(async (route) => {
          const routeDir = join(outputDir, route);
          await mkdir(routeDir, { recursive: true });
          await copyFile(join(outputDir, `${route}.html`), join(routeDir, "index.html"));
        }),
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), cleanPageRoutes()],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "products.html"),
        team: resolve(__dirname, "team.html"),
        work: resolve(__dirname, "work.html"),
        company: resolve(__dirname, "company.html"),
        contact: resolve(__dirname, "contact.html"),
        status: resolve(__dirname, "status.html"),
        privacy: resolve(__dirname, "privacy.html"),
        terms: resolve(__dirname, "terms.html"),
        notfound: resolve(__dirname, "404.html"),
      },
    },
  },
});
