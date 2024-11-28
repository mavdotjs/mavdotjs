// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	// biome-ignore lint/style/noNamespace: <explanation>
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	declare module '*.page' {
		import type { Component } from 'svelte';
		declare const PageComponent: Component;
		export default PageComponent;
		export const metadata: {
			title: string;
			createdOn: string;
		};
	}
}

export {};
