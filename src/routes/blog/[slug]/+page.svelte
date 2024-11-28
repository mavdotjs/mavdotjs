<script>
	const { data } = $props();
	const {
		page: { default: Page, metadata },
	} = data;
</script>
<div class="pl-2">
    <h1 class="text-5xl">{metadata.title}</h1>
    <span class="text-2xl text-base-content/70">
        {#if metadata.createdOn}
            Published {metadata.dateString}
        {/if}
    </span>
    <main class="prose pt-2">
        <Page />
    </main>
</div>
