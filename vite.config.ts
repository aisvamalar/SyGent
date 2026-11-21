import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Determine Nitro preset based on environment
const nitroPreset = process.env.VERCEL ? "vercel" : "node-server";

console.log(`[Vite] Building with Nitro preset: ${nitroPreset}`);

export default defineConfig({
  plugins: [
    // Nitro must come before TanStack Start
    nitro({ preset: nitroPreset }),
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
