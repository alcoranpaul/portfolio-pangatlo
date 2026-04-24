<script lang="ts">
	const { id, title, children } = $props();
</script>

<section {id}>
	<p class="section-label">{title}</p>
	{@render children()}
</section>

<style>
	section {
		margin: 5px;
	}
</style>
