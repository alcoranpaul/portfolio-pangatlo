<script lang="ts">
	import Section from '$lib/components/common/Section.svelte';
	import type { Experience } from '$lib/types';
	import ExperienceItem from '$lib/components/experience/ExperienceItem.svelte';

	const {
		experience,
		onSelect
	}: {
		experience: Experience[];
		onSelect: (item: Experience) => void;
	} = $props();
</script>

<Section id="experience" title="Experience">
	{#each experience as item (item.id)}
		<ExperienceItem {item} {onSelect} />
	{/each}
</Section>
