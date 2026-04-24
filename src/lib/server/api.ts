import type { Writable } from 'svelte/store';
import { get } from 'svelte/store';

export async function handleRequest(
    queryFn: () => Promise<unknown>,
    store?: Writable<unknown>
) {
    try {
        if (store) {
            const cached = get(store);
            if (cached && Array.isArray(cached) && cached.length > 0) {
                return new Response(JSON.stringify(cached), {
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        }

        const data = await queryFn();

        if (store) store.set(data);

        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: String(error) }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}