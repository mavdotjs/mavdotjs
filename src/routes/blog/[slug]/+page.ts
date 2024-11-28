import { pages } from '$lib/pages';

export const prerender = true;

export function load({ params: { slug } }) {
	const page = pages[slug];
	return {
		page,
	};
}
