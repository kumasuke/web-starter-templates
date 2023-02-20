import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'


// https://astro.build/config
export default defineConfig({
  site: 'https://test.site/',
  integrations: [sitemap(), solidJs()],
  vite: {
    plugins: [],
  },
})
