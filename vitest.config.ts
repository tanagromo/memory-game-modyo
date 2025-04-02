import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'
import { URL } from 'node:url'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@test': fileURLToPath(new URL('./test', import.meta.url)),
    }
  }
})