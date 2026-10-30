import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('renders translated title', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Painel')
  })

  it('applies CPF mask', async () => {
    const wrapper = mount(HomeView)
    const input = wrapper.find('input')
    await input.setValue('12345678901')
    expect(input.element.value).toBe('123.456.789-01')
  })
})
