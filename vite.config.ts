import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` must match the GitHub Pages repo name when deploying to
// https://<user>.github.io/dziedzic-software-site/. If you later attach
// a custom domain via CNAME, change this back to '/'.
export default defineConfig({
  base: '/dziedzic-software-site/',
  plugins: [react()],
})
