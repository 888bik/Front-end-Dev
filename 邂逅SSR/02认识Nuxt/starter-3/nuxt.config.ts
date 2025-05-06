// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    //只能作用于服务端
    apiSecret: "abc",
    //可用于客户端,客户端
    public: {
      baseURL: "http://bik.com",
    },
  },
  css: ["~/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables.scss" as *;',
        },
      },
    },
  },
  // builder:"vite"//webpack,vite
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "My nuxt app",
      meta: [
        {
          name: "description",
          content: "My first nuxt app",
        },
      ],
      link: [],
    },
  },
});
