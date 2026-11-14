import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// base './' lets the built site work on any host, including GitHub Pages sub-paths.
// Two pages: the portfolio (index.html) and the Jewellery ERP product page.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        erp: resolve(__dirname, 'jewellery-erp.html'),
      },
    },
  },
})
