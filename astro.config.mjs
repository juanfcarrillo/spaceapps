import cloudflare from "@astrojs/cloudflare";
import storyblok from '@storyblok/astro';
import { defineConfig } from 'astro/config';

import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), 'STORYBLOK');

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        textIcon: 'storyblok/textIconSB',
        timelineSection: 'storyblok/TimelineSectionSB',
        textIconSection: 'storyblok/TextIconSectionSB',
        cardSection: 'storyblok/CardSectionSB',
        divider: 'storyblok/DividerSB',
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: 'us', // optional,  or 'eu' (default)
      },
    })
  ],
  redirects: {
    '/': '/colegio'
  }
});