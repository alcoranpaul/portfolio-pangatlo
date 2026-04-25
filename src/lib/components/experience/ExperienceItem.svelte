<script lang="ts">
	import type { Experience } from '$lib/types';
	const { item, onSelect }: { item: Experience; onSelect: (item: Experience) => void } = $props();
</script>

<div class="card">
	<div class="card-top">
		<div>
			<p class="role">{item.role}</p>
			<p class="company">{item.company}</p>
		</div>
		<div class="date-arrow">
			<span class="date">
				{new Date(item.start_date).getFullYear()} — {item.is_current
					? 'Present'
					: new Date(item.end_date!).getFullYear()}
			</span>
		</div>
	</div>
	<p class="desc">{item.description}</p>
	<div class="tags">
		{#each item.tech_stack as tech (tech)}
			<span class="tag">{tech}</span>
		{/each}
	</div>
	<button class="view-link" onclick={() => onSelect(item)}>View ↗</button>
</div>

<style>
	.card {
		padding: 1.25rem 1.5rem;
		background: var(--color-bg);
		border: 0.5px solid var(--color-border);
		border-radius: var(--border-radius-md, 8px);
		transition: background 0.15s;
	}

	.card:hover {
		background: var(--color-bg-secondary);
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
	}

	.role {
		font-size: 14px;
		font-weight: 500;
		color: var(--color-text);
	}

	.company {
		font-size: 12px;
		color: var(--color-text);
		margin-top: 3px;
		opacity: 0.7;
	}

	.date {
		font-size: 11px;
		color: var(--color-text);
		white-space: nowrap;
		opacity: 0.5;
	}

	.desc {
		font-size: 12px;
		color: var(--color-text);
		line-height: 1.6;
		margin-top: 10px;
		opacity: 0.65;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 10px;
	}

	.tag {
		font-size: 11px;
		padding: 3px 10px;
		border-radius: 20px;
		background: var(--color-bg-secondary);
		color: var(--color-text-secondary);
		border: 0.5px solid var(--color-border);
	}
	.view-link {
		display: inline-block;
		margin-top: 12px;
		font-size: 11px;
		color: var(--color-text);
		text-decoration: none;
		padding: 4px 12px;
		border-radius: 20px;
		border: 0.5px solid var(--color-text);
		transition:
			background 0.15s,
			color 0.15s;
	}

	.view-link:hover {
		background: var(--color-text);
		color: var(--color-bg);
	}
</style>
