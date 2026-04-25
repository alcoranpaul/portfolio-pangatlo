<script lang="ts">
	import Detail from '$lib/components/common/Detail.svelte';
	import type { Project } from '$lib/types';

	const { item, onBack } = $props<{ item: Project; onBack: () => void }>();

	let markdown = $state('');
	let headings = $state<{ id: string; text: string; level: number }[]>([]);
	let contentEl = $state<HTMLDivElement | null>(null);

	const filename = $derived(
		item.detail_path
			?.split('/')
			.pop()
			?.replace(/\.[^.]+$/, '')
	);

	$effect(() => {
		if (!filename) return;
		fetch(`/api/files/markdown/${filename}`)
			.then((res) => res.text())
			.then((text) => {
				markdown = text;
				setTimeout(() => {
					if (!contentEl) return;
					const els = contentEl.querySelectorAll('h1, h2, h3');
					headings = Array.from(els).map((el) => {
						const t = el.textContent ?? '';
						const id = t
							.toLowerCase()
							.replace(/[^\w\s]+/g, '')
							.replace(/\s+/g, '-')
							.trim();
						el.id = id;
						return { id, text: t, level: parseInt(el.tagName[1]) };
					});
				}, 0);
			});
	});
</script>

<Detail
	title={item.title}
	description={item.description}
	techStack={item.tech_stack}
	githubUrl={item.github_url}
	liveUrl={item.live_url}
	{onBack}
>
	{#snippet toc()}
		<ul>
			{#each headings as heading, i (i)}
				<li>
					<a
						href="#{heading.id}"
						class={heading.level === 1 ? 'outer-heading' : 'inner-heading'}
						onclick={(e) => {
							e.preventDefault();
							document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
						}}
					>
						{heading.text}
					</a>
				</li>
			{/each}
		</ul>
	{/snippet}
	<div bind:this={contentEl}>
		{#if markdown}
			<img
				class="banner"
				src="/api/files/image/{item.image_url
					?.split('/')
					.pop()
					?.replace(/\.[^.]+$/, '')}"
				alt={item.title}
				onerror={(e) =>
					((e.currentTarget as HTMLImageElement).src =
						`https://picsum.photos/seed/${item.id}/800/300`)}
			/>
		{/if}
		{@html markdown}
		{#if markdown}
			<img
				class="full-image"
				src="/api/files/image/{item.image_url
					?.split('/')
					.pop()
					?.replace(/\.[^.]+$/, '')}"
				alt={item.title}
				onerror={(e) =>
					((e.currentTarget as HTMLImageElement).src =
						`https://picsum.photos/seed/${item.id}/800/450`)}
			/>
		{/if}
	</div>
</Detail>

<style>
	.banner {
		width: 100%;
		height: 250px;
		object-fit: cover;
		object-position: center top;
		border-radius: 8px;
		margin-bottom: 1rem;
		display: block;
	}

	.full-image {
		width: 100%;
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		margin-bottom: 1.5rem;
		display: block;
	}
</style>
