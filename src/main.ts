import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as Sentry from '@sentry/vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Vue3 添加全局属性，用以替换 Vue2 中的 Vue.prototype
app.config.globalProperties.$projectName = 'create-vue-demo'

console.log('app: ', app)

app.use(createPinia())
app.use(router)

console.log(import.meta.env)

// Sentry.init 应该在 app.mount 之前执行！
import.meta.env.MODE === 'production' && Sentry.init({
  app,
  dsn: 'https://2e21a42f06b6a155db089403ad0c3618@o4504734283595776.ingest.sentry.io/4506170714292224',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

app.mount('#app')
