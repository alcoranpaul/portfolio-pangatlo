import { handleRequest } from '$lib/server/api';
import { getProjects } from '$lib/server/queries';
import { projects } from '$lib/stores/portfolio';

export async function GET() {
    return handleRequest(getProjects, projects);
}