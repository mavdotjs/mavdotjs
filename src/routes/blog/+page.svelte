<script>
    const { data } = $props()
    const { metadata } = data
</script>

<div class="flex flex-col gap-y-2 items-center">
    {#each metadata as page}
        <a href="/blog/{page.name}" class="card bg-base-200 w-96 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{page.title}</h2>
                <div class="card-actions justify-between text-base-content/70">
                    <span>Published {page.dateString}</span>
                </div>
            </div>
        </a>
    {/each}
</div>