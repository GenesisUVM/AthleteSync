import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  build: {
    // genera el archivo .vite/manifest.json en outDir
    manifest: true,
    rollupOptions: {
      // sobreescribe la entrada por defecto .html
      input: './src/main.jsx',
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000', 
    },
  },
})
