<template>
  <header
    class="flex flex-col text-sm text-[#1f0e1a] md:text-xl md:flex-row items-center justify-around bg-[#79c3aa]
    h-fit md:h-20 p-5 w-[80%] m-auto rounded-md border-b-2 border-r-2 border-[#1f0e1a]"
  >
    <h1 class="font-bold" :aria-live="'polite'">
      Let's play {{ playerName }} :D
    </h1>
    <div class="flex gap-4" aria-live="polite">
      <p>
        <strong>Matches: </strong>
        <span :aria-label="'You have ' + correctGuesses + ' matches'">{{ correctGuesses }}</span>
      </p>
      <p>
        <strong>Fails: </strong>
        <span :aria-label="'You have ' + errors + ' fails'">{{ errors }}</span>
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  correctGuesses: number
  errors: number
}>()

const playerName = ref('')

onMounted(() => {
  playerName.value = localStorage.getItem('player') || ''
})
</script>
