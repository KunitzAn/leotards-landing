import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Update base to match your repo name for GitHub Pages
  // Example: if repo is your-username.github.io then base should be '/'
  // If repo is leotards-landing under user/organization, keep '/leotards-landing/'
  base: '/leotards-landing/',
})
