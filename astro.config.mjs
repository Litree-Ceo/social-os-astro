import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import preact from "@astrojs/preact";
import icon from "astro-icon";

const tailwind = await import("@astrojs/tailwind");

// https://astro.build/config
export default defineConfig({
  output: "server",

  integrations: [preact(), tailwind.default(), icon({
    include: {
      mdi: ["*"],
    }
  })],

  adapter: node({
    mode: "standalone"
  }),
});