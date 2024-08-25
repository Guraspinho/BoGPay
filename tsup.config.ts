// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'], // CommonJS and ES Modules
  dts: true,              // Generate TypeScript declaration files
  minify: true,           // Minify the output
  sourcemap: true,        // Generate source maps
  clean: true,             // Clean output directory before each build
  watch: process.env.NODE_ENV === 'development' // Enable watch mode when in development
});
