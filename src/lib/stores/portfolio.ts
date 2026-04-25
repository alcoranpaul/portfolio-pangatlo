import type { Experience, Project, Skill, Tag } from '$lib/types';
import { writable } from 'svelte/store';

export const experience = writable<Experience[]>([]);
export const projects = writable<Project[]>([]);
export const skills = writable<Skill[]>([]);
export const tags = writable<Tag[]>([]);