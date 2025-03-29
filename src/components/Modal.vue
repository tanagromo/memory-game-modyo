<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div
      v-bind="$attrs"
      class="bg-white rounded-lg shadow-lg p-6 w-[90%] md:max-w-xl"
      >
      <div class="py-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>