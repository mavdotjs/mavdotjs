import { metadata, pages } from '$lib/pages';

export const prerender = true;

export const entries = () => {
    return metadata.map(v => ({ slug: v.name }))
}
export function load({ params: { slug } }) {
	const page = pages[slug];
	return {
		page,
	};
}
