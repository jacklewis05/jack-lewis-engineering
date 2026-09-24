import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Repo name is "portfolio", deployed to https://jacklewis05.github.io/po
// If you ever rename the GitHub repo, update this `base` to match: '/<repo-name>/'
export default defineConfig({
  base: '/jack-lewis-engineering/',
  plugins: [react(), tailwindcss()],
})
