let cache: Cache;
if(globalThis.caches) {
    cache = await caches.open('pfp')
}

export async function GET() {
    const request = new Request('https://github.com/mavdotjs.png')
    if(globalThis.caches) {
        const cached = await cache.match(request)
        if(cached) {
            return cached
        }
    }
    const pfp = await fetch(request)
    if(globalThis.caches) {
        await cache.put(request, pfp)
    }
    return new Response(pfp.body, {
        headers: pfp.headers,
        status: pfp.status
    })
}