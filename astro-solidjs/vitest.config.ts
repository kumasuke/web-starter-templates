// see: https://vitest.dev/config/#configuration
// see: https://github.com/solidjs/templates/blob/master/ts-vitest/vite.config.ts

import solidPlugin from 'vite-plugin-solid'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect.js'],
    exclude: ['tests/vrt.spec.ts', 'node_modules'],
    deps: { registerNodeLoader: true },
    threads: false,
    isolate: false,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
})
