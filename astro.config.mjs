import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp', // optional, if you're using sharp
    })
  ],
  vite: {
    resolve: {
      alias: {
        '~': new URL('./src', import.meta.url),
      },
    },
  },
});
