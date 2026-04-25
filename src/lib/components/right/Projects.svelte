<script lang="ts">
	import Section from '$lib/components/common/Section.svelte';
	import ProjectItem from '$lib/components/project/ProjectItem.svelte';
	import type { Project } from '$lib/types';

	const {
		projects,
		onSelect
	}: {
		projects: Project[];
		onSelect: (item: Project) => void;
	} = $props();
</script>

<Section id="projects" title="Projects">
	<div class="grid">
		{#each projects as item (item.id)}
			<ProjectItem {item} {onSelect} />
		{/each}
	</div>
</Section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
	}
</style>
