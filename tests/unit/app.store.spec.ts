import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useAppStore } from '@/stores/app'

describe('app store', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('toggles drawer', () => {
    const store = useAppStore()
    expect(store.drawer).toBe(true)
    store.toggleDrawer()
    expect(store.drawer).toBe(false)
  })
})
