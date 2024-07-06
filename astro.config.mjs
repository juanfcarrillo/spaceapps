import cloudflare from "@astrojs/cloudflare";
import storyblok from '@storyblok/astro';
import { defineConfig } from 'astro/config';

import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), 'PUBLIC');

import tailwind from "@astrojs/tailwind";

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
      // accessToken: import.meta.env.PUBLIC_STORYBLOK_TOKEN || env.PUBLIC_STORYBLOK_TOKEN,
      accessToken: rrYkNYGhAGfZVPZM17Mregtt,
      components: {
        page: 'storyblok/Page',
        timelineSection: 'storyblok/TimelineSectionSB',
        textIconSection: 'storyblok/TextIconSectionSB',
        cardSection: 'storyblok/CardSectionSB',
        divider: 'storyblok/DividerSB',
        countdown: 'storyblok/CountDownSB',
        imageTextSection: 'storyblok/ImageTextSectionSB',
        ctaFull: 'storyblok/CTAFullSB',
        faqSection: 'storyblok/FAQsectionSB',
        carousel: 'storyblok/CarouselSB',
        competition: 'storyblok/CompetitionSB',
        cardSectionStyle2: 'storyblok/CardSection2SB',
        formSection: 'storyblok/FormSectionSB',
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
