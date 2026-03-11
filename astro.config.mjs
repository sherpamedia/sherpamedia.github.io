import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sherpamedia.github.io",
  integrations: [mdx(), sitemap()],
  // Enable View Transitions for SPA-like navigation (no full page reloads)
  experimental: {},
});
