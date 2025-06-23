import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [], // or remove this line entirely
  vite: {
    resolve: {
      alias: {
        '~': path.resolve('./src'), // this makes ~/ refer to the src folder
      },
    },
  },
});