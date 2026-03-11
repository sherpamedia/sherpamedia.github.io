import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://sherpamedia.github.io",
  integrations: [mdx()],
});