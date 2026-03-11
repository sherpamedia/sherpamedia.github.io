import { defineConfig } from "tinacms";

export default defineConfig({
  // Your TinaCloud client ID (get free at app.tina.io after connecting your GitHub repo)
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "assets/img",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ─── SITE SETTINGS ────────────────────────────────────────────────
      {
        name: "settings",
        label: "Site Settings",
        path: "src/content/settings",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "siteTitle", label: "Site Title" },
          { type: "string", name: "tagline", label: "Hero Tagline" },
          { type: "string", name: "heroSubtext", label: "Hero Sub-text", ui: { component: "textarea" } },
          { type: "string", name: "footerTagline", label: "Footer Tagline" },
          { type: "string", name: "calendlyUrl", label: "Calendly URL" },
          { type: "string", name: "copyright", label: "Copyright Text" },
        ],
      },

      // ─── HOME PAGE ────────────────────────────────────────────────────
      {
        name: "home",
        label: "Home Page",
        path: "src/content/home",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroSubtext", label: "Hero Sub-text", ui: { component: "textarea" } },
          {
            type: "object",
            name: "trustedBrands",
            label: "Trusted Brands Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              {
                type: "object",
                name: "logos",
                label: "Brand Logos",
                list: true,
                fields: [
                  { type: "string", name: "name", label: "Brand Name" },
                  { type: "image", name: "logo", label: "Logo File" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "awardBlock",
            label: "Award Block",
            fields: [
              { type: "string", name: "text", label: "Award Text" },
              { type: "image", name: "podcastImage", label: "Podcast Image" },
              { type: "image", name: "awardBadge", label: "Award Badge" },
            ],
          },
        ],
      },

      // ─── SERVICE PAGE ─────────────────────────────────────────────────
      {
        name: "service",
        label: "Service Page",
        path: "src/content/service",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "pageTitle", label: "Page Title" },
          { type: "string", name: "heroTitle", label: "Hero Heading" },
          { type: "string", name: "heroSubtext", label: "Hero Sub-text", ui: { component: "textarea" } },
          {
            type: "object",
            name: "steps",
            label: "Process Steps",
            list: true,
            fields: [
              { type: "string", name: "stepLabel", label: "Step Label (e.g. Step 1)" },
              { type: "string", name: "title", label: "Step Title" },
              { type: "string", name: "body", label: "Step Body", ui: { component: "textarea" } },
            ],
          },
          { type: "string", name: "ctaHeading", label: "CTA Heading" },
        ],
      },

      // ─── ABOUT PAGE ───────────────────────────────────────────────────
      {
        name: "about",
        label: "About Page",
        path: "src/content/about",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "rich-text", name: "mainBody", label: "Main Body" },
          { type: "string", name: "missionHeading", label: "Mission Heading" },
          { type: "string", name: "missionBody", label: "Mission Body", ui: { component: "textarea" } },
          { type: "string", name: "ctaHeading", label: "CTA Heading" },
          { type: "string", name: "ctaSubtext", label: "CTA Sub-text" },
        ],
      },

      // ─── CASE STUDIES ─────────────────────────────────────────────────
      {
        name: "caseStudy",
        label: "Case Studies",
        path: "src/content/case-studies",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "client", label: "Client Name" },
          { type: "image", name: "podcastImage", label: "Podcast / Show Image" },
          { type: "image", name: "awardBadge", label: "Award Badge (optional)" },
          { type: "image", name: "videoThumb", label: "Video Thumbnail (optional)" },
          { type: "string", name: "videoUrl", label: "Video URL (optional)" },
          { type: "string", name: "summary", label: "Short Summary", ui: { component: "textarea" } },
          { type: "rich-text", name: "body", label: "Full Case Study Body", isBody: true },
        ],
      },

      // ─── PORTFOLIO ────────────────────────────────────────────────────
      {
        name: "portfolioItem",
        label: "Portfolio",
        path: "src/content/portfolio",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Person / Show Name", isTitle: true, required: true },
          { type: "image", name: "photo", label: "Photo" },
          { type: "string", name: "role", label: "Role / Description" },
          { type: "number", name: "order", label: "Display Order" },
        ],
      },

      // ─── TESTIMONIALS ─────────────────────────────────────────────────
      {
        name: "testimonial",
        label: "Testimonials",
        path: "src/content/testimonials",
        format: "json",
        fields: [
          { type: "string", name: "showName", label: "Show / Client Name", isTitle: true, required: true },
          { type: "image", name: "showLogo", label: "Show Logo" },
          { type: "image", name: "sponsorLogo", label: "Sponsor Logo (optional)" },
          { type: "string", name: "body", label: "Testimonial Text", ui: { component: "textarea" } },
          { type: "number", name: "order", label: "Display Order" },
        ],
      },
    ],
  },
});
