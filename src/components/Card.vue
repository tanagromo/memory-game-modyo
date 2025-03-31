<template>
  <div class="game-card cursor-pointer" @click="flipCard">
    <div class="w-full h-full relative card-inner" :class="{ 'is-flipped': isFlipped }">
      <div class="absolute w-full h-full rounded-lg card-front bg-blue-400 border-b-2 border-r-2 border-blue-700 hover:shadow-lg"></div>

      <div class=" w-full h-full card-back">
        <img :src="imageUrl" :alt="name" class="object-cover w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  imageUrl: string
  name: string
  isFlipped: boolean
  isMatched: boolean
}>()

const emit = defineEmits(['click'])

const flipCard = () => {
  if (!props.isFlipped && !props.isMatched) {
    emit('click')
  }
}
</script>

<style scoped>
.game-card {
  width: 100%;
  height: 160px;
  perspective: 1000px;
}

.card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.is-flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}
</style>
