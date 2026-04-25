<script lang="ts">
	import type { Snippet } from 'svelte';
	const { title, subtitle, description, techStack, onBack, children, toc, githubUrl, liveUrl } =
		$props<{
			title: string;
			subtitle?: string;
			description: string;
			techStack: string[];
			onBack: () => void;
			children?: Snippet;
			toc?: Snippet;
			githubUrl?: string | null;
			liveUrl?: string | null;
		}>();
</script>

<div class="detail">
	<button class="back" onclick={onBack}>← Back</button>
	<h2 class="title">{title}</h2>
	{#if subtitle}
		<p class="subtitle">{subtitle}</p>
	{/if}
	<p class="desc">{description}</p>
	<div class="tags">
		{#each techStack as tech, i (i)}
			<span class="tag">{tech}</span>
		{/each}
	</div>
	{#if githubUrl || liveUrl}
		<div class="links">
			{#if githubUrl}
				<a href={githubUrl} target="_blank" rel="noreferrer" class="link">Source Code ↗</a>
			{/if}
			{#if liveUrl}
				<a href={liveUrl} target="_blank" rel="noreferrer" class="link">Live ↗</a>
			{/if}
		</div>
	{/if}

	{#if children || toc}
		<div class="layout">
			{#if toc}
				<div class="toc">
					{@render toc()}
				</div>
			{/if}
			{#if children}
				<div class="content">
					{@render children()}
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.back {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 12px;
		color: var(--color-text);
		opacity: 0.5;
		padding: 0;
		margin-bottom: 1.5rem;
	}

	.back:hover {
		opacity: 1;
	}

	.links {
		display: flex;
		gap: 8px;
		margin-top: 1rem;
	}

	.link {
		font-size: 11px;
		color: var(--color-text);
		text-decoration: none;
		padding: 4px 12px;
		border-radius: 20px;
		border: 0.5px solid var(--color-text);
		opacity: 0.6;
		transition: opacity 0.15s;
	}

	.link:hover {
		opacity: 1;
	}

	.title {
		font-size: 20px;
		font-weight: 500;
		color: var(--color-text);
	}

	.subtitle {
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

	.layout {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
		width: 100%;
		overflow: hidden;
	}

	.toc {
		width: 25%;
		flex-shrink: 0;
		position: sticky;
		top: 0;
		align-self: flex-start;
		overflow-y: auto;
		padding-left: 10px;
		scroll-behavior: smooth;
	}

	.toc :global(ul) {
		list-style: none;
		padding-left: 0;
		margin: 0;
	}

	.toc :global(li) {
		margin-bottom: 4px;
		cursor: pointer;
	}

	.toc :global(li:hover) {
		text-decoration: underline;
	}

	.toc :global(.outer-heading) {
		font-size: 14px;
		font-weight: 350;
		color: var(--color-text);
		opacity: 0.8;
		text-decoration: none;
	}

	.toc :global(.inner-heading) {
		font-size: 12px;
		font-weight: 200;
		color: var(--color-text);
		opacity: 0.6;
		position: relative;
		padding-left: 10px;
		margin-left: 10px;
		text-decoration: none;
		display: block;
	}

	.toc :global(.inner-heading::before) {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 1px;
		background: var(--color-border);
	}

	.toc::-webkit-scrollbar {
		width: 5px;
	}
	.toc::-webkit-scrollbar-track {
		background: var(--color-bg-secondary);
		border-radius: 2px;
	}
	.toc::-webkit-scrollbar-thumb {
		background: var(--color-border);
		border-radius: 7px;
	}
	.toc::-webkit-scrollbar-thumb:hover {
		background: var(--color-text);
	}

	.content {
		height: 70vh;
		overflow-y: auto;
		width: 100%;
		padding: 0 20px 20px 20px;
		cursor: default;
		scroll-behavior: smooth;
		min-width: 0;
	}

	.content::-webkit-scrollbar {
		width: 5px;
	}
	.content::-webkit-scrollbar-track {
		background: var(--color-bg-secondary);
		border-radius: 2px;
	}
	.content::-webkit-scrollbar-thumb {
		background: var(--color-border);
		border-radius: 7px;
	}
	.content::-webkit-scrollbar-thumb:hover {
		background: var(--color-text);
	}

	.content :global(h1) {
		font-size: 28px;
		font-weight: 500;
		color: var(--color-text);
		margin: 1.5rem 0 0.5rem;
	}
	.content :global(h2) {
		font-size: 20px;
		font-weight: 500;
		color: var(--color-text);
		margin: 1.25rem 0 0.5rem;
	}
	.content :global(h3) {
		font-size: 18px;
		font-weight: 500;
		color: var(--color-text);
		margin: 1rem 0 0.5rem;
	}
	.content :global(h4) {
		font-size: 16px;
		font-weight: 500;
		color: var(--color-text);
		margin: 1rem 0 0.5rem;
	}

	.content :global(p) {
		font-size: 13px;
		color: var(--color-text);
		opacity: 0.75;
		line-height: 1.8;
		margin-bottom: 0.75rem;
	}

	.content :global(ul),
	.content :global(ol) {
		padding-left: 1rem;
		margin-bottom: 0.75rem;
	}

	.content :global(ul p),
	.content :global(ol p) {
		margin-top: 0;
		margin-bottom: 0;
	}

	.content :global(li) {
		font-size: 13px;
		color: var(--color-text);
		opacity: 0.75;
		line-height: 1.8;
		list-style: none;
		padding-left: 0.75rem;
		position: relative;
	}

	.content :global(li::before) {
		content: '–';
		position: absolute;
		left: 0;
		opacity: 0.4;
	}

	.content :global(a) {
		color: var(--color-text);
		text-decoration: underline;
		text-underline-offset: 3px;
		opacity: 0.7;
	}

	.content :global(a:hover) {
		opacity: 1;
	}

	.content :global(code) {
		font-size: 12px;
		font-family: monospace;
		background: var(--color-bg-secondary);
		border: 0.5px solid var(--color-border);
		border-radius: 4px;
		padding: 1px 6px;
	}

	.content :global(pre) {
		background: var(--color-bg-secondary);
		border: 0.5px solid var(--color-border);
		border-radius: 8px;
		padding: 1rem;
		overflow-x: auto;
		margin-bottom: 1rem;
	}

	.content :global(pre code) {
		background: none;
		border: none;
		padding: 0;
		font-size: 12px;
	}

	.content :global(blockquote) {
		border-left: 2px solid var(--color-border);
		padding-left: 1rem;
		margin: 1rem 0;
		opacity: 0.6;
	}

	.content :global(hr) {
		border: none;
		border-top: 0.5px solid var(--color-border);
		margin: 1.5rem 0;
	}
</style>
