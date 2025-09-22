import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Serve app from root so routes are / and /process
  base: './',
  build: {
    outDir: 'dist',
  },
})
