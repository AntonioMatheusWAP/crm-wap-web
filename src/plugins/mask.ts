import type { App } from 'vue'
import { mask } from 'vue-the-mask'

// vue-the-mask targets Vue 2; only its function directive is Vue 3 compatible.
// It locates the inner <input>, so it works on Vuetify fields: v-mask="'###.###.###-##'"
export function registerMask(app: App) {
  app.directive('mask', mask)
}
