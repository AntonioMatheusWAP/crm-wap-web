import type { App } from 'vue'
import vuetify from './vuetify'
import i18n from './i18n'
import pinia from '@/stores'
import router from '@/router'
import { registerMask } from './mask'
import { registerECharts } from './echarts'

export function registerPlugins(app: App) {
  app.use(vuetify).use(i18n).use(pinia).use(router)
  registerMask(app)
  registerECharts(app)
}
