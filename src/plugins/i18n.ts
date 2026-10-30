import { createI18n } from 'vue-i18n'
import ptBR from '@/locales/pt-BR.json'
import en from '@/locales/en.json'

export type MessageSchema = typeof ptBR

export default createI18n<[MessageSchema], 'pt-BR' | 'en', false>({
  legacy: false,
  locale: 'pt-BR',
  fallbackLocale: 'en',
  messages: {
    'pt-BR': ptBR,
    en,
  },
})
