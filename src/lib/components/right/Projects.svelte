<script lang="ts">
	import Section from '$lib/components/common/Section.svelte';
	import ProjectItem from '$lib/components/project/ProjectItem.svelte';
	import type { Project, Tag } from '$lib/types';

	const {
		projects,
		tags,
		onSelect
	}: {
		projects: Project[];
		tags: Tag[];
		onSelect: (item: Project) => void;
	} = $props();

	let activeTag = $state<number | null>(null);
	let filtered = $derived(
		activeTag ? projects.filter((p) => p.tags?.some((t) => t.id === activeTag)) : projects
	);
</script>

<Section id="projects" title="Projects">
	<div class="filters">
		<button class="filter-btn" class:active={activeTag === null} onclick={() => (activeTag = null)}
			>All</button
		>
		{#each tags as tag (tag.id)}
			<button
				class="filter-btn"
				class:active={activeTag === tag.id}
				onclick={() => (activeTag = tag.id)}>{tag.name}</button
			>
		{/each}
	</div>
	<div class="grid">
		{#each filtered as item (item.id)}
			<ProjectItem {item} {onSelect} />
		{/each}
	</div>
</Section>

<style>
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-bottom: 1.25rem;
	}

	.filter-btn {
		font-size: 11px;
		padding: 4px 12px;
		border-radius: 20px;
		border: 0.5px solid var(--color-border);
		background: none;
		color: var(--color-text);
		opacity: 0.5;
		cursor: pointer;
		transition:
			opacity 0.15s,
			background 0.15s,
			color 0.15s;
	}

	.filter-btn:hover {
		opacity: 0.8;
	}

	.filter-btn.active {
		opacity: 1;
		background: var(--color-text);
		color: var(--color-bg);
		border-color: var(--color-text);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
	}
</style>
