import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // DEPLOYMENT BASE PATH CONFIGURATION:
  // 
  // Option A: CUSTOM DOMAIN (e.g., www.yourdomain.com)
  // If using a custom domain, set base to "/" 
  // base: "/",
  //
  // Option B: GITHUB PAGES SUBDIRECTORY (e.g., username.github.io/repo-name)
  // If NOT using a custom domain, set base to your repo name
  // base: "/your-repo-name/",
  //
  // Current setting: Custom domain mode (change if needed)
  base: mode === "production" ? "/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
