<template>
  <Modal
    role="dialog"
    aria-labelledby="modal-title"
    aria-hidden="false"
  >
    <div class="flex flex-col gap-6 justify-center">
      <p
        id="modal-title"
        class="font-bold">
        Are you ready to have fun? <br> Please type your name
      </p>
      <TextBox
        v-model="name"
        placeholder="Your name..."
        :autofocus="true"
        aria-placeholder="Enter your name"
        @keyup.enter="startGame"
        />
    </div>
    <div class="flex justify-end mt-6">
      <Button
        :disabled="!name"
        class="bg-[#f88f89]"
        :aria-disabled="!name ? 'true' : 'false'"
        @click="startGame"
        aria-label="Start the game"
      >
        Play
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TextBox from '@/components/TextBox.vue'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'

const emit = defineEmits(['update:modelValue'])

const name = ref('')

const startGame = () => {
  if (name.value.trim()) {
    emit('update:modelValue', name.value)
    localStorage.setItem('player', name.value)
  }
}
</script>
