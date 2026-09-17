import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        fiveReasons: fileURLToPath(new URL('./five-reasons/index.html', import.meta.url)),
        uvaFavorite: fileURLToPath(new URL('./uva-favorite/index.html', import.meta.url)),
        findYourBox: fileURLToPath(new URL('./find-your-box/index.html', import.meta.url)),
      },
    },
  },
})
