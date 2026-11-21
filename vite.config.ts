import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    // Nitro plugin for serverless deployment
    nitro(),
    // TanStack Start must come BEFORE the React plugin to preserve route generation and HMR
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      // Nitro/Vite builds from this
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
