import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rolldownOptions: {
      input: Object.fromEntries(['index', 'sobre', 'projetos'].map(page => [page, fileURLToPath(new URL(`./${page}.html`, import.meta.url))])),
    },
  },
})
