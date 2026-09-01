import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split heavy libraries out of the main bundle so the page shell
        // loads first and charts/icons stream in alongside it.
        manualChunks: {
          react: ['react', 'react-dom'],
          charts: ['recharts'],
          motion: ['framer-motion'],
          icons: ['react-icons/fa', 'react-icons/si', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 700,
  },
})
