import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base path ensures assets load properly on GitHub Pages (subpaths) and custom domains
  base: './',
  server: {
    port: 3000,
    open: true
  }
})
