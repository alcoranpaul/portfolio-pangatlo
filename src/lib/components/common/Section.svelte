<script lang="ts">
	const { id, title, children } = $props();
</script>

<section {id}>
	<h2 class="section-label">{title}</h2>
	<div class="children">{@render children()}</div>
</section>

<style>
	section {
		margin: 5px;
	}
	.children {
		margin: 5px;
	}
</style>
