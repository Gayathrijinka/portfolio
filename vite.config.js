import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path for GitHub Pages and static hosting compatibility
  base: './',
  server: {
    port: 3000,
    open: true
  }
})
