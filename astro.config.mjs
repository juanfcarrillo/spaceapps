import storyblok from '@storyblok/astro';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), 'PUBLIC');
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), storyblok({
    accessToken: import.meta.env.PUBLIC_STORYBLOK_TOKEN || env.PUBLIC_STORYBLOK_TOKEN,
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
      formSection: 'storyblok/FormSectionSB'
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: 'us' // optional,  or 'eu' (default)
    }
  })],
  adapter: vercel()
});