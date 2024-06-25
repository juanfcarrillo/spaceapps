import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
    context.locals.STORYBLOK_TOKEN = import.meta.env.STORYBLOK_TOKEN;
    return next();
});