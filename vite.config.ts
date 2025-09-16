import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base so assets work from subfolder /main
  base: './',
  build: {
    outDir: 'dist/main',
  },
})
