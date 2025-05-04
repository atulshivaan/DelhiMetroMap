import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['227b-45-118-156-64.ngrok-free.app', 'localhost', '127.0.0.1'], // Add your Ngrok URL here
  },
})
