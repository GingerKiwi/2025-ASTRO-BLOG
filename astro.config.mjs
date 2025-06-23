// astro.config.mjs

import { defineConfig } from 'astro/config';
import path from 'node:path'; // ✅ Required for path.resolve()
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(),],
  alias: {
    '~/layouts': path.resolve('./src/layouts'), // ✅ This needs `path` defined
  },
});
