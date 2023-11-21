export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  generate: {
    routeRules: {
      "/**": { prerender: true },
    },
  },
  modules: ["nuxt-simple-sitemap"],
  site: {
    url: "https://example.com",
  },
  sitemap: {
    urls: async () => {
      return ["/"];
    },
  },
});
