<template>
  <button
    role="button"
    type="button"
    class="px-4 py-3 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>