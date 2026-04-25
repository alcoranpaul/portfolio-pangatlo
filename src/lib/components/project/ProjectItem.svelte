<script lang="ts">
	import type { Project } from '$lib/types';

	const { item, onSelect } = $props<{
		item: Project;
		onSelect: (item: Project) => void;
	}>();
</script>

<button class="card" onclick={() => onSelect(item)}>
	<div class="image">
		{#if item.image_url}
			<img src={item.image_url} alt={item.title} />
		{:else}
			<img
				class="placeholder"
				src="https://picsum.photos/seed/{item.id}/400/225"
				alt={item.title}
			/>
		{/if}
	</div>
	<div class="details">
		<p class="title">{item.title}</p>
		<p class="desc">{item.description}</p>
		<div class="tags">
			{#each item.tech_stack as tech (tech)}
				<span class="tag">{tech}</span>
			{/each}
		</div>
		<div class="links">
			{#if item.github_url}
				<a href={item.github_url} target="_blank" rel="noreferrer" class="link">GitHub ↗</a>
			{/if}
			{#if item.live_url}
				<a href={item.live_url} target="_blank" rel="noreferrer" class="link">Live ↗</a>
			{/if}
		</div>
	</div>
</button>

<style>
	.card {
		background: var(--color-bg);
		border: 0.5px solid var(--color-border);
		border-radius: 8px;
		overflow: hidden;
		cursor: pointer;
		transition: background 0.15s;
		display: flex;
		flex-direction: column;
	}

	.card:hover {
		background: var(--color-bg-secondary);
	}

	.image {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		flex-shrink: 0;
	}

	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.placeholder {
		width: 100%;
		height: 100%;
		background: var(--color-bg-secondary);
		border-bottom: 0.5px solid var(--color-border);
	}

	.details {
		padding: 0.75rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 6px;
		text-align: left;
	}

	.title {
		font-size: 13px;
		font-weight: 500;
		color: var(--color-text);
	}

	.desc {
		font-size: 11px;
		color: var(--color-text);
		opacity: 0.65;
		line-height: 1.5;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
	}

	.tag {
		font-size: 10px;
		padding: 2px 8px;
		border-radius: 20px;
		background: var(--color-bg-secondary);
		color: var(--color-text);
		opacity: 0.7;
		border: 0.5px solid var(--color-border);
	}

	.links {
		display: flex;
		gap: 6px;
		margin-top: 4px;
	}

	.link {
		font-size: 10px;
		color: var(--color-text);
		opacity: 0.5;
		text-decoration: none;
		padding: 3px 10px;
		border-radius: 20px;
		border: 0.5px solid var(--color-border);
		transition: opacity 0.15s;
	}

	.link:hover {
		opacity: 1;
	}
</style>
