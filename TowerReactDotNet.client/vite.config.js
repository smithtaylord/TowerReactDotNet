import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../TowerReactDotNet/wwwroot',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})
