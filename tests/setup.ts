import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'
import i18n from '@/plugins/i18n'
import { mask } from 'vue-the-mask'

globalThis.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

config.global.plugins = [createVuetify({ components, directives }), createPinia(), i18n]
config.global.directives = { mask }
config.global.stubs = { VChart: true }
