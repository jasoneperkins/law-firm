import {defineConfig} from "astro/config"
import icon from "astro-icon"
import tailwind from "@astrojs/tailwind"
import db from "@astrojs/db"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    tailwind(),
    db(),
    sitemap(),
  ],
})
