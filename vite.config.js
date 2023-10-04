import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// const path = require('path')

// https://vitejs.dev/config/
// https://chaika.hatenablog.com/entry/2022/05/14/083000
export default defineConfig({
  // alias: {
  //   '@' : path.resolve(__dirname, '/src')
  //   // '@' : path.join(__dirname, 'src')
  // },
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, '/src')
    }
  },
  plugins: [vue()],
})
