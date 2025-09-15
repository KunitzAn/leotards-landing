import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Build the site into /main so it is served at https://domen.ru/main
  base: '/',
  build: {
    outDir: 'dist/main',
  },
})
