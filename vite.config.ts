import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Update base to match your domain structure
  // For domen.ru/main, the base should be '/main/'
  base: '/main/',
})
