<script>
	import Links from '$lib/components/left/Links.svelte';
	import Navigation from '$lib/components/left/Navigation.svelte';
	import PersonalInfo from '$lib/components/left/PersonalInfo.svelte';
	import Experience from '$lib/components/right/Experience.svelte';
	import Projects from '$lib/components/right/Projects.svelte';
	import Skills from '$lib/components/right/Skills.svelte';
</script>

<main>
	<section class="left">
		<PersonalInfo />
		<Navigation />
		<Links />
	</section>
	<section class="right">
		<Experience />
		<Projects />
		<Skills />
	</section>
</main>

<style>
	main {
		display: flex;
		width: 100vw;
		height: 100vh;
	}

	.left {
		width: 30%;
		position: sticky;
		top: 0;
		height: 100vh;
		background-color: rgba(255, 0, 0, 0.208);
	}
	.right {
		width: 70%;
		overflow-y: auto;
		background-color: rgba(255, 255, 0, 0.17);
	}
</style>
