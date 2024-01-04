import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server : {
      host : ['192.168.29.220', 'localhost'],
      port : 5173,
  },

})
