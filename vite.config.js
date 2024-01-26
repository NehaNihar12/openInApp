import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/

const root = resolve(__dirname, "src");

export default defineConfig({
  resolve: {
    alias: [
      { find: "assets", replacement: resolve(root, "assets") },
      { find: "components", replacement: resolve(root, "components") },
      { find: "pages", replacement: resolve(root, "pages") },
    ],
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['@svgr/webpack'],
  },
});
