import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Example alias for src folder
    },
  },
  server: {
    fs: {
      strict: false, // Allows access to the file system
    },
  },
})
