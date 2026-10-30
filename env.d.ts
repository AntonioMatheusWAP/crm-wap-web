/// <reference types="vite/client" />

declare module 'vue-the-mask' {
  import type { Directive } from 'vue'

  export const mask: Directive<HTMLElement, string | string[]>
}
