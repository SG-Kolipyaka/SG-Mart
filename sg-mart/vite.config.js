import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  // Remove the TypeScript test setup or replace with a JavaScript setup
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',  // Make sure this is a JavaScript file or remove it if not needed
  }
})
