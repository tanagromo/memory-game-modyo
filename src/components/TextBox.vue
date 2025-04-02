<template>
  <div class="relative w-full">
    <input
      class="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent px-2 py-1 placeholder:text-gray-500"
      :type="type"
      :placeholder="placeholder"
      :autofocus
      v-bind="$attrs"
      v-model="model"
    />
  </div>
</template>

<script setup>

defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'Jane Doe'
  },
  autofocus: {
    type: Boolean,
    default: false
  }
})

const model = defineModel()

</script>
