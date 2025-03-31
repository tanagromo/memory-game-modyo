<template>
  <div v-if="isGameOver">
    Game Over!
    <Button @click="restartGame">Restart Game</Button>
  </div>
  <div v-else-if="!isGameOver && cards.length">
    <Score :correctGuesses="correctGuesses" :errors="errors" />
    <div class="grid grid-cols-5 gap-4 p-4">
      <Card
        v-for="card in cards"
        :key="card.id"
        :imageUrl="card.url"
        :name="card.name"
        :isFlipped="card.isFlipped"
        :isMatched="card.isMatched"
        @click="flipCard(card)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useModyoQuery } from '@/composables/useModyoQuery'
import Card from '@/components/Card.vue'
import useMemoryGame from '@/composables/useMemoryGame'
import Score from '@/components/Score.vue'
import Button from '@/components/Button.vue'

const { data, isLoading } = useModyoQuery(10)
const { cards, isGameOver, flipCard, restartGame, initializeGame, errors, correctGuesses } = useMemoryGame()


watchEffect(() => {
  if (!isLoading.value && data.value && data.value.length > 0) {
    initializeGame(data.value)
  }
})
</script>
