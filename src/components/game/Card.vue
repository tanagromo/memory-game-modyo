<template>
  <div
    class="w-full h-[95px] md:h-[160px] perspective-distant cursor-pointer"
    :aria-label="card.isFlipped ? `Showing ${card.name} card` : 'Hidden card'"
    @click="flipCard"
    >
    <div
      class="card-inner w-full h-full relative"
      :class="{ 'is-flipped': card.isFlipped }"
    >
      <div
        class="card-front absolute w-full h-full rounded-lg bg-[#f88f89] border-b-2 border-r-2 border-[#1f0e1a] hover:shadow-lg"
        :aria-hidden="card.isFlipped ? 'true' : 'false'"
      />
      <div
        class="w-full h-full card-back border-2 border-[#1f0e1a] shadow-lg rounded-lg"
        :aria-hidden="card.isFlipped ? 'false' : 'true'"
      >
        <img :src="card.url" :alt="card.alt_text || card.name" class="object-cover w-full h-full rounded-md" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Card } from '@/types/card.ts'

const props = defineProps<{
  card: Card
}>()

const emit = defineEmits(['click'])

const flipCard = () => {
  if (!props.card.isFlipped && !props.card.isMatched) {
    emit('click')
  }
}
</script>

<style scoped>
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
