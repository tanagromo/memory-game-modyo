import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import PlayerModal from '@/components/game/PlayerModal.vue'



describe('PlayerModal', () => {
  it('disables the play button if the name is empty', async () => {
    const wrapper = mount(PlayerModal)
    const button = wrapper.find('button')

    expect(button.element.disabled).toBe(true)
  })


  it('enables the play button when there is a name', async () => {
    const wrapper = mount(PlayerModal)
    const input = wrapper.find('input')
    await input.setValue('Pepito')
    const button = wrapper.find('button')

    expect(button.element.disabled).toBe(false)
  })

  it('stores player name in localStorage when play button is clicked', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')
    const wrapper = mount(PlayerModal)
    
    const input = wrapper.find('input')
    await input.setValue('Pepito')

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(setItemSpy).toHaveBeenCalledWith('player', 'Pepito')

    setItemSpy.mockRestore()
  })
  
})
