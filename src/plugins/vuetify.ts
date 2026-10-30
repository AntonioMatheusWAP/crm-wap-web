import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { pt, en } from 'vuetify/locale'

export default createVuetify({
  locale: {
    locale: 'pt',
    fallback: 'en',
    messages: { pt, en },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1565C0',
          secondary: '#455A64',
        },
      },
    },
  },
})
