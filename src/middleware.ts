import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
    context.locals.STORYBLOK_TOKEN = import.meta.env.STORYBLOK_TOKEN;
    const url = import.meta.env.PUBLIC_VERCEL_URL ? new URL(import.meta.env.PUBLIC_VERCEL_URL || "") : context.url;
    const { hostname } = url;

    const subdomain = hostname.split('.')[0]

    if (hostname.includes("localhost") || hostname.includes("127.0.0.1")) {
        context.locals.isDraft = true;
    }

    if (subdomain.includes("draft")) {
        context.locals.isDraft = true;
    }

    context.locals.isDraft = false;

    return next();
});