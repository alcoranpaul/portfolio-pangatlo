import { handleRequest } from '$lib/server/api';
import { getExperience } from '$lib/server/queries';
import { experience as experienceStore } from '$lib/stores/portfolio';
import type { Experience } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const experience = await handleRequest<Experience[]>(getExperience, experienceStore);
    console.log(experience);
    return { experience };
}) satisfies PageServerLoad;