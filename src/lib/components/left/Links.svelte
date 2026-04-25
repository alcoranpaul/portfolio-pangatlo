<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<ul>
	<li>GitHub</li>
	<li>Itch.io</li>
	<li>LinkedIn</li>
	<li>Resume</li>
</ul>
<button onclick={() => theme.update((t) => (t === 'light' ? 'dark' : 'light'))}>
	{$theme === 'light' ? 'Dark' : 'Light'} mode
</button>

<style>
</style>
