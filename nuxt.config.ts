export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    "/**": { prerender: true },
  },
  modules: ["@nuxt/image", "nuxt-simple-sitemap", "nuxt-delay-hydration"],
  site: {
    url: "https://karczagi-89kft.hu",
  },
  sitemap: {
    urls: async () => {
      return ["/"];
    },
  },
  delayHydration: {
    debug: process.env.NODE_ENV === "development",
    mode: "init",
  },
});
