<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';

	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		theme.set(mediaQuery.matches ? 'dark' : 'light');

		mediaQuery.addEventListener('change', (e) => {
			theme.set(e.matches ? 'dark' : 'light');
		});
	});

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div data-theme={$theme} class="theme-wrapper">
	{@render children()}
</div>

<style>
	.theme-wrapper {
		min-height: 100vh;
		background: var(--color-bg);
		color: var(--color-text);
	}
</style>
