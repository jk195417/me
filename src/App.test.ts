import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'
import { resumes } from './resumes'

const button = (wrapper: ReturnType<typeof mount>, text: string) =>
  wrapper.findAll('button').find((b) => b.text() === text)!

describe('App', () => {
  it('shows the introduction in Traditional Chinese by default', () => {
    const wrapper = mount(App)
    expect(wrapper.findAll('main').map((m) => m.attributes('id'))).toEqual(['introduction'])
    expect(wrapper.text()).toContain(resumes['zh-TW'].chapters.introduction.title)
  })

  it('switches chapters', async () => {
    const wrapper = mount(App)
    await button(wrapper, resumes['zh-TW'].chapters.experience.title).trigger('click')
    expect(wrapper.findAll('main').map((m) => m.attributes('id'))).toEqual(['experience'])
  })

  it('shows every chapter with titles in print mode', async () => {
    const wrapper = mount(App)
    await button(wrapper, 'Print Mode').trigger('click')
    expect(wrapper.findAll('main')).toHaveLength(4)
    expect(wrapper.findAll('main h3')).toHaveLength(4)
  })

  it('switches language', async () => {
    const wrapper = mount(App)
    await button(wrapper, 'en').trigger('click')
    expect(button(wrapper, 'en').attributes('aria-pressed')).toBe('true')
    expect(wrapper.text()).toContain(resumes.en.chapters.introduction.content.split('\n')[1])
  })
})
