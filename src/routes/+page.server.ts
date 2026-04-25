import { handleRequest } from '$lib/server/api';
import { getExperience, getProjects, getProjectTags, getTags } from '$lib/server/queries';
import { experience as experienceStore, projects as projectsStore, tags as tagsStore } from '$lib/stores/portfolio';
import { type Project, type Experience, type Tag } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const experience = await handleRequest<Experience[]>(getExperience, experienceStore);
    const projects = await handleRequest<Project[]>(getProjects, projectsStore);
    const projectTags = await getProjectTags();

    const projectsWithTags = projects.map(p => ({
        ...p,
        tags: projectTags.filter(pt => pt.project_id === p.id)
    }));
    const tags = await handleRequest<Tag[]>(getTags, tagsStore);

    return { experience, projects: projectsWithTags, tags };
}) satisfies PageServerLoad;