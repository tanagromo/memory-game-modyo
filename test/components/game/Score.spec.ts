import { mount } from '@vue/test-utils'
import Score from '@/components/game/Score.vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('Score', () => {
  beforeEach(() => {
    localStorage.setItem('player', 'Juan')
  })

  it('renders the player name from localStorage and checks aria-live', async () => {
    const wrapper = mount(Score, {
      props: {
        correctGuesses: 3,
        errors: 2
      }
    })
  
    await wrapper.vm.$nextTick()
  
    const h1 = wrapper.find('h1')
    expect(h1.text()).toContain("Let's play Juan :D")
  
    expect(h1.attributes('aria-live')).toBe('polite')
  })

  it('displays correct matches and errors', () => {
    const wrapper = mount(Score, {
      props: {
        correctGuesses: 5,
        errors: 1
      }
    })
    
    expect(wrapper.text()).toContain('Matches: 5')
    expect(wrapper.text()).toContain('Fails: 1')
  })
})