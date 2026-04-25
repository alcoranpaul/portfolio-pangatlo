<script lang="ts">
	import type { Experience } from '$lib/types';

	const { item, onBack } = $props<{ item: Experience; onBack: () => void }>();
</script>

<div class="detail">
	<button class="back" onclick={onBack}>← Back</button>
	<h2 class="role">{item.role}</h2>
	<p class="company">{item.company}</p>
	<p class="desc">{item.description}</p>
	<div class="tags">
		{#each item.tech_stack as tech (tech)}
			<span class="tag">{tech}</span>
		{/each}
	</div>
</div>

<style>
	.back {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 12px;
		color: var(--color-text-secondary);
		padding: 0;
		margin-bottom: 1.5rem;
	}

	.back:hover {
		color: var(--color-text);
	}

	.role {
		font-size: 20px;
		font-weight: 500;
		color: var(--color-text);
	}

	.company {
		font-size: 13px;
		color: var(--color-text);
		opacity: 0.7;
		margin-top: 4px;
	}

	.desc {
		font-size: 13px;
		color: var(--color-text);
		opacity: 0.65;
		line-height: 1.7;
		margin-top: 1rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 1rem;
	}

	.tag {
		font-size: 11px;
		padding: 3px 10px;
		border-radius: 20px;
		background: var(--color-bg-secondary);
		color: var(--color-text);
		opacity: 0.7;
		border: 0.5px solid var(--color-border);
	}
</style>
