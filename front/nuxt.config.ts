// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["/styles/global.scss"],

  modules: [
    "nuxt-schema-org",
    "nuxt-seo-experiments",
    "nuxt-simple-robots",
    "@nuxtjs/sitemap",
    "nuxt-icon",

    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: [400, 700],
          Inter: [100, 300, 400, 600, 700],
        },
      },
    ],
  ],

  site: {
    // production URL
    name: "Remove My Background",
    url: "https://remove-my-background.com",
  },

  plugins: ["~/plugins/request.js"],

  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
