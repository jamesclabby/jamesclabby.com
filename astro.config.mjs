// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jamesclabby.com', // Add site URL for canonical URLs and SEO
  integrations: [react(), tailwind(), sitemap()],
  // Enable absolute imports with @/ alias as mentioned in cursor rules
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
