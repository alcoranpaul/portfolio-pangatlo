import type { Writable } from 'svelte/store';
import { get } from 'svelte/store';

export async function handleRequest<T>(
    queryFn: () => Promise<T>,
    store?: Writable<T>
): Promise<T> {
    try {
        if (store) {
            const cached = get(store);
            if (cached && Array.isArray(cached) && (cached as T[]).length > 0) {
                return cached;
            }
        }
        const data = await queryFn();
        if (store) store.set(data);
        return data;
    } catch (error) {
        throw new Error(`handleRequest failed: ${String(error)}`, { cause: error });
    }
}