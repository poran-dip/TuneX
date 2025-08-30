import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(() => {
  const isCI = process.env.GITHUB_ACTIONS === 'true'

  return {
    base: isCI ? '/TuneX/' : '/',
    plugins: [
      react(),
      tailwindcss()
    ],
    resolve: {
      alias: {
        "@": "/src"
      },
    },
  }
})
