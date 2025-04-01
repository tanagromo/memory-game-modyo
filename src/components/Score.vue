<template>
  <div class="flex flex-col text-sm md:text-lg md:flex-row items-center justify-around bg-[#79c3aa] h-fit md:h-20 p-5 text-xl w-[80%] m-auto rounded-md border-b-2 border-r-2 border-[#1f0e1a]">
    <p>Vamos {{ playerName }} :D </p>
    <div class="flex gap-4">
      <p><strong>Matches:</strong> {{ correctGuesses }}</p>
      <p><strong>Fails:</strong> {{ errors }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  correctGuesses: number
  errors: number
}>()

const playerName = ref('')

onMounted(() => {
  playerName.value = localStorage.getItem('player')
})
</script>
