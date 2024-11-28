const dateRegex = /(?<year>\d{1,4})-(?<month>\d{2})-(?<day>\d{2})/;

type ChangeFields<T, R> = Omit<T, keyof R> & R;

const rawPages = Object.entries(
	import.meta.glob<typeof import('*.page')>(['./pages/*.page', '!**/_*.page'], { eager: true })
).map(([v, m]) => {
	let createdOn: null | Date = null;
	const metadata = m['metadata'];
	const parsedDate = metadata.createdOn.match(dateRegex)?.groups;
	if (parsedDate) {
		createdOn = new Date();
		createdOn.setFullYear(
			parseInt(parsedDate.year),
			parseInt(parsedDate.month) - 1,
			parseInt(parsedDate.day)
		);
		createdOn.setHours(0, 0, 0, 0);
	}
	return [
		v.replace(/^\.\/pages\//, '').replace(/\.page$/, ''),
		{ ...m, metadata: { ...metadata, createdOn, dateString: new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(
			createdOn || 0
		) } } as ChangeFields<
			typeof import('*.page'),
			{ metadata: Omit<typeof import('*.page').metadata, 'createdOn'> }
		> & { metadata: { createdOn: Date | null, dateString: string | null } }
	] as const;
});

export const metadata = rawPages.map(([v, m]) => {
	const metadata = m['metadata'];
	return { ...metadata, name: v } as const;
});

export const pages = Object.fromEntries(
	rawPages.map(([v, m]) => {
		return [v, m] as const;
	})
);
