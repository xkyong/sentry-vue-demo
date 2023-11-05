import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { sentryVitePlugin } from '@sentry/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sentry-vue-demo',

  plugins: [
    vue(),
    vueJsx(),
    // Put the Sentry vite plugin after all other plugins
    // automatically create releases and upload source maps to Sentry
    sentryVitePlugin({
      org: "xiekaiyong",
      project: "sentry-vue-demo",
      authToken: process.env.SENTRY_AUTH_TOKEN
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // 使用 sentry，sentry 平台上如果需要定位到源码位置，需要把 `build.sourcemap` 设置为 true
  build: {
    sourcemap: true
  }
})