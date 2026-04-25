import { handleRequest } from '$lib/server/api';
import { getExperience, getProjects } from '$lib/server/queries';
import { experience as experienceStore, projects as projectStore } from '$lib/stores/portfolio';
import { type Project, type Experience } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const experience = await handleRequest<Experience[]>(getExperience, experienceStore);
    const projects = await handleRequest<Project[]>(getProjects, projectStore)
    console.log(projects);
    return { experience, projects };
}) satisfies PageServerLoad;