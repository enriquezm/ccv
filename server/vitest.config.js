import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // enables using global `describe`, `it`, etc.
    environment: 'node',
    coverage: {
      provider: 'c8', // enables coverage reporting
      reporter: ['text', 'json', 'html'], // coverage output formats
    },
    include: ['src/**/*.test.ts'],
  },
});