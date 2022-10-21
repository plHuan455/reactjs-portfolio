import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: { 
      "~atoms": path.resolve(__dirname, 'src/components/atoms'),
      "~molecules": path.resolve(__dirname, 'src/components/molecules'),
      "~organisms": path.resolve(__dirname, 'src/components/organisms'),
      "~templates": path.resolve(__dirname, 'src/components/templates'),
      "~assets": path.resolve(__dirname, 'src/assets'),
      "~pages": path.resolve(__dirname, 'src/pages'),
      "~containers": path.resolve(__dirname, 'src/containers'),
      "~hooks": path.resolve(__dirname, 'src/hooks'),
      "~services": path.resolve(__dirname, 'src/services'),
    },
  },
})
