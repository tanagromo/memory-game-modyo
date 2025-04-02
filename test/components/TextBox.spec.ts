import { mount } from '@vue/test-utils'
import TextBox from '@/components/TextBox.vue'
import { describe, expect, it } from 'vitest'

describe('TextBox', () => {
  it('renders with default placeholder', () => {
    const wrapper = mount(TextBox)
    expect(wrapper.find('input').attributes('placeholder')).toBe('Jane Doe')
  })

  it('renders with custom placeholder', () => {
    const placeholder = 'Enter your name'
    const wrapper = mount(TextBox, {
      props: {
        placeholder
      }
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe(placeholder)
  })

  it('updates the model when typing', async () => {
    const wrapper = mount(TextBox)
    const input = wrapper.find('input')
    
    await input.setValue('John Doe')
    
    expect(wrapper.vm.model).toBe('John Doe')
  })

  it('has the correct input type', () => {
    const wrapper = mount(TextBox, {
      props: {
        type: 'password'
      }
    })
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })
})
