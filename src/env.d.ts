/// <reference types="astro/client" />
type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {
		STORYBLOK_TOKEN: string
		isDraft: boolean
		getPageContent: (page: string) => Promise<any>
	}
}