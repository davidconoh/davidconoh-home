import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // Resolves to the "./foo" directory in your current working directory
  root: '.',
  sitemap: true,
  site: 'https://davidconoh.github.io',
  // base: '/my-repo',
  integrations: [preact(), svelte()],
  // Resolves to the "./foo/public" directory in your current working directory
  publicDir: 'static',
  outDir: 'public'
});