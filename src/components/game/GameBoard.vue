<template>
  <section v-if="isGameOver">
    <div class="h-screen flex flex-col justify-center items-center gap-8">
      <h1
        aria-live="polite"
        class="w-[4/6] md:w-full text-center text-2xl md:text-6xl text-[#1f0e1a]">
        🎉 Amazing {{ playerName }}, you won! Congratulations 🎉
      </h1>
      <Button
        class="bg-[#f88f89] text-[#fbf6d0]"
        aria-label="Restart the game"
        @click="restartGame"
      >
        Restart Game
      </Button>
    </div>
  </section>
  <section
    v-else-if="cards.length"
    class="pt-3"
    >
    <Score :correctGuesses="correctGuesses" :errors="errors" />
    <div
      role="grid"
      class="grid grid-cols-4 md:grid-cols-5 gap-4 p-4"
      >
      <Card
        v-for="card in cards"
        :key="card.id"
        :card
        @click="flipCard(card)"
        @keydown.enter="flipCard(card)"
        role="gridcell"
        tabindex="0"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { watchEffect, ref, onMounted } from 'vue'
import { useModyoQuery } from '@/composables/useModyoQuery'
import Card from '@/components/game/Card.vue'
import useMemoryGame from '@/composables/useMemoryGame'
import Score from '@/components/game/Score.vue'
import Button from '@/components/Button.vue'
import useConfetti from '@/composables/useConfetti'

const { launchConfetti } = useConfetti()
const { data, isLoading } = useModyoQuery(10)
const { cards, isGameOver, flipCard, restartGame, errors, correctGuesses, initializeGame } = useMemoryGame()

const playerName = ref('')

onMounted(() => {
  playerName.value = localStorage.getItem('player') || ''
})

watchEffect(() => {
  if (!isLoading.value && data.value && data.value.length > 0) {
    initializeGame(data.value)
  }
  if (isGameOver.value === true) {
    launchConfetti()
  }
})
</script>
