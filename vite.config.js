// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/new-mag/', // Optional: only needed if deploying in a subdirectory
  plugins: [react()],
})
