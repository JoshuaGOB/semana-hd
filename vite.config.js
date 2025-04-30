import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/semana-hd/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // This ensures public directory is properly processed
    copyPublicDir: true,
  }
})
