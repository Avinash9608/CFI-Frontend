import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.BASE_URL": JSON.stringify("https://cfi-backend.vercel.app"),
  },
});
