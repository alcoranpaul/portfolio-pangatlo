<script lang="ts">
	const { id, title, children } = $props();
</script>

<section {id}>
	<h2 class="section-label">{title}</h2>
	{@render children()}
</section>

<style>
	section {
		margin: 5px;
	}
</style>
