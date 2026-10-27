import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import yaml from '@rollup/plugin-yaml'

export default defineConfig({
  root: 'src',
  base: './',
  plugins: [vue(), yaml()],
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
