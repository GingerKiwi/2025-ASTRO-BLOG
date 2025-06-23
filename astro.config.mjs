// astro.config.mjs

import { defineConfig } from 'astro/config';
import path from 'node:path'; // ✅ Required for path.resolve()
import sitemap from '@astrojs/sitemap';
import content from '@astrojs/content';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), content()],
  alias: {
    '~/layouts': path.resolve('./src/layouts'), // ✅ This needs `path` defined
  },
});
