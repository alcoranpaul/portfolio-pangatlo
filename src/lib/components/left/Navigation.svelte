<script lang="ts">
	import { onMount } from 'svelte';

	let activeId = $state('experience');
	const sections = [
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'skills', label: 'Skills' }
	];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) activeId = entry.target.id;
				});
			},
			{ threshold: 0.5 }
		);

		document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>

<nav>
	<ul>
		{#each sections as section (section.id)}
			<li>
				<a href="#{section.id}" class="nav-item" class:active={activeId === section.id}>
					{section.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
	}
	.nav-item {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 16px;
		color: var(--color-text-tertiary);
		padding: 4px 0;
	}

	.nav-item.active {
		color: var(--color-text-primary);
		border-bottom: 1px solid var(--color-text-primary);
	}
</style>
