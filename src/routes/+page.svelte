<script lang="ts">
	import Links from '$lib/components/left/Links.svelte';
	import Navigation from '$lib/components/left/Navigation.svelte';
	import PersonalInfo from '$lib/components/left/PersonalInfo.svelte';
	import Experience from '$lib/components/right/Experience.svelte';
	import ExperienceDetail from '$lib/components/experience/ExperienceDetail.svelte';
	import Projects from '$lib/components/right/Projects.svelte';
	import Skills from '$lib/components/right/Skills.svelte';
	import type { Experience as ExperienceType, Project } from '$lib/types';

	type Selected =
		| { type: 'experience'; item: ExperienceType }
		| { type: 'project'; item: Project }
		| null;

	const { data } = $props();
	let selected = $state<Selected>(null);
</script>

<main>
	<section class="left">
		<PersonalInfo />
		<Navigation />
		<Links />
	</section>
	<section class="right">
		{#if selected?.type === 'experience'}
			<ExperienceDetail item={selected.item} onBack={() => (selected = null)} />
		{:else}
			<Experience
				experience={data.experience}
				onSelect={(item: ExperienceType) => (selected = { type: 'experience', item })}
			/>
			<Projects />
			<Skills />
		{/if}
	</section>
</main>

<style>
	main {
		display: flex;
		width: 100vw;
		height: 100vh;
		background: var(--color-bg);
	}

	.left {
		width: 30%;
		position: sticky;
		top: 0;
		height: 100vh;
		padding: 2.5rem 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-right: 0.5px solid var(--color-border);
	}

	.right {
		width: 70%;
		overflow-y: auto;
		padding: 2.5rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
</style>
