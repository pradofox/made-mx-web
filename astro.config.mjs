// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://made-mx.com',
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    ssr: {
      external: ['node:buffer', 'node:path', 'node:fs'],
    },
  },
});
