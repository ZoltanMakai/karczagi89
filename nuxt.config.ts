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

  modules: ["@nuxt/image", "nuxt-simple-sitemap"],
  site: {
    url: "https://karczagi-89kft.hu",
  },
  sitemap: {
    urls: async () => {
      return ["/"];
    },
  },
  image: {
    format: ["webp"],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
