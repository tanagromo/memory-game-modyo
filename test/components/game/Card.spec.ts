import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Card from '@/components/game/Card.vue'

describe('Card', () => {
  it('renders correctly with props', () => {
    const wrapper = mount(Card, {
      props: {
        imageUrl: 'https://cdn.modyo.cloud/uploads/6bab500a-c518-4cee-818b-2d3e3e79c036/original/fish.jpg',
        name: 'Bear',
        isFlipped: false,
        isMatched: false
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://cdn.modyo.cloud/uploads/6bab500a-c518-4cee-818b-2d3e3e79c036/original/fish.jpg')
    expect(img.attributes('alt')).toBe('Bear')
  })

  it('emits click event when clicked and not flipped or matched', async () => {
    const emit = vi.fn()
    const wrapper = mount(Card, {
      props: {
        imageUrl: 'https://cdn.modyo.cloud/uploads/6bab500a-c518-4cee-818b-2d3e3e79c036/original/fish.jpg',
        name: 'Bear',
        isFlipped: false,
        isMatched: false
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click event when already flipped or matched', async () => {
    const wrapper = mount(Card, {
      props: {
        imageUrl: 'https://cdn.modyo.cloud/uploads/6bab500a-c518-4cee-818b-2d3e3e79c036/original/fish.jpg',
        name: 'Bear',
        isFlipped: true,
        isMatched: false
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })
})
