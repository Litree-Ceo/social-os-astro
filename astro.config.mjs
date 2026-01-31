import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",

  integrations: [preact(), tailwind(), icon({
    include: {
      mdi: ["*"],
    }
  })],

  adapter: node({
    mode: "standalone"
  }),
});