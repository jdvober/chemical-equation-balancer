import { defineConfig } from "vite"

import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ react(), tsconfigPaths() ],
  build: {
    outDir: "./dist",
    emptyOutDir: true
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
} )
