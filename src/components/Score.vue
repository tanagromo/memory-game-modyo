<template>
  <div class="score-board">
    <p><strong>Aciertos:</strong> {{ correctGuesses }}</p>
    <p><strong>Errores:</strong> {{ errors }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  correctGuesses: number
  errors: number
}>()
</script>

<style scoped>
.score-board {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.2rem;
}

strong {
  font-weight: bold;
}
</style>
