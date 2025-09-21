import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [react()],
    base: '/geox-labs.github.io/', // 👈 MUST match your repo name
    define: {
      // only expose what you actually need
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.')
      }
    }
  }
})
