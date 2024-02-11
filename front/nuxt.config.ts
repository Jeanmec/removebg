// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icon",

    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: [400, 700],
          Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
  ],

  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
