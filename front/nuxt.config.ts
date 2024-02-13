// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["/styles/global.scss"],

  modules: [
    "nuxt-icon",

    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: [400, 700],
          Inter: [100, , 300, 400, 600, 700],
        },
      },
    ],
  ],

  plugins: ["~/plugins/request.js"],

  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
