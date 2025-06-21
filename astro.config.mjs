// @ts-check
import { defineConfig } from 'astro/config';

import image from '@astrojs/image';

export default defineConfig({
  integrations: [image()],
});

// https://astro.build/config
export default defineConfig({});
