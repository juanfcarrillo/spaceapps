import { useStoryblokApi } from "@storyblok/astro";
import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
    context.locals.STORYBLOK_TOKEN = import.meta.env.STORYBLOK_TOKEN;
    const baseUrl = import.meta.env.PUBLIC_VERCEL_URL ? new URL(import.meta.env.PUBLIC_VERCEL_URL || "") : context.url;
    const { hostname } = baseUrl;

    const subdomain = hostname.split('.')[0]

    let isDraft = false;

    if (hostname.includes("localhost") || hostname.includes("127.0.0.1")) {
        isDraft = true;
    }

    if (subdomain.includes("draft")) {
        isDraft = true;
    }

    context.locals.isDraft = isDraft;

    context.locals.getPageContent = async (page) => {
        const storyblokApi = useStoryblokApi();

        console.log(context.url, "asdasdasds");

        const searchParams = new URLSearchParams(context.url.search);
        const published = searchParams.get("_storyblok_published") || undefined;
    
        const { data } = await storyblokApi.get(`/cdn/stories/${page}`, {
            version: isDraft ? "draft" : "published",
            from_release: published,
        });
    
        const content = data.story.content;

        return content;
    }

    return next();
});