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
});
