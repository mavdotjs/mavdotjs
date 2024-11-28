import { mdsvex } from 'mdsvex';
import gfm from 'remark-gfm';
import github from 'remark-github';
import adapter from 'svelte-adapter-deno';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			remarkPlugins: [gfm, [github, { repository: 'mavdotjs/.github' }]],
			rehypePlugins: [rehypeSlug],
			extension: '.page'
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.svelte', '.page']
};

export default config;
