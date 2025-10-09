import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/e2e/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      exclude: [
        "node_modules/**",
        ".next/**",
        "out/**",
        "**/*.config.*",
        "**/*.d.ts",
        "**/interfaces/**",
        "playwright/**",
        "e2e/**",
        "coverage/**",
        "**/app/**/page.tsx",
        "**/app/layout.tsx",
        "**/app/sitemap.ts",
      ],
      thresholds: {
        lines: 15,
        functions: 80,
        branches: 85,
        statements: 15,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
