<template>
  <div class="relative h-[100dvh] bg-pink-100">
    <div v-if="player">
      hi
    </div>
    <div v-else>
      <PlayerModal v-model="player" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import PlayerModal from '@/components/PlayerModal.vue'

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
