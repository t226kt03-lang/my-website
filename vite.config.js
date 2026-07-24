import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/my-website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'app.html')
      }
    }
  }
})