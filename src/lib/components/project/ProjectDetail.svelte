<script lang="ts">
	import Detail from '$lib/components/common/Detail.svelte';
	import type { Project } from '$lib/types';

	const { item, onBack } = $props<{ item: Project; onBack: () => void }>();
</script>

<Detail
	title={item.title}
	subtitle={item.description}
	description={item.description}
	techStack={item.tech_stack}
	{onBack}
/>
