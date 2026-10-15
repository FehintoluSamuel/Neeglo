import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
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
