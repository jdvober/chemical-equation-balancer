import { defineConfig } from "vite"

import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), viteSingleFile()],
	build: {
		outDir: "./dist",
		emptyOutDir: true,
		cssCodeSplit: false,
		assetsInlineLimit: 100000000,
		rollupOptions: {
			output: {
				inlineDynamicImports: true, // Attempt to inline all dynamic imports
				//              manualChunks: () => 'everything.js', // Forces all JS into one chunk
			},
		},
	},
	server: {
		watch: {
			usePolling: true,
		},
	},
})
