import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Served from a custom apex domain (dziedzicsoftwaresolutions.com) via
// GitHub Pages, so the base path is root. The public/CNAME file tells
// GitHub Pages which domain to bind to.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
