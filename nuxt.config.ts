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
    url: "https://karczagi-89kft.hu",
  },
  sitemap: {
    urls: async () => {
      return ["/"];
    },
  },
  experimental: {
    appManifest: false,
  },
});
