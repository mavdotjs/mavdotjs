let cache: Cache;
if(globalThis.caches) {
    cache = await caches.open('pfp')
}

export async function GET() {
    const url = 'https://github.com/mavdotjs.png'
    if(globalThis.caches) {
        const cached = await cache.match(url)
        if(cached) {
            return cached
        }
    }
    const pfp = await fetch(url)
    if(globalThis.caches) {
        await cache.put(url, pfp)
    }
    return new Response(pfp.body, {
        headers: pfp.headers,
        status: pfp.status
    })
}