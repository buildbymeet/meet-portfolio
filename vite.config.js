import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' lets the built site work on any host, including GitHub Pages sub-paths.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 700 },
})
