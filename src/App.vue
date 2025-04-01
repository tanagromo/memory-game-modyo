<template>
  <div class="relative h-screen bg-[#fbf6d0]">
    <div v-if="player">
      <GameBoard />
    </div>
    <div v-else>
      <PlayerModal v-model="player" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import PlayerModal from '@/components/PlayerModal.vue'
import GameBoard from '@/components/GameBoard.vue'

const player = ref('')

onMounted(() => {
  player.value = localStorage.getItem('player')
})

watchEffect(() => {
  if (player.value) {
    localStorage.setItem('player', player.value)
  }
})

</script>
