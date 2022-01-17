<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const click = () => {
		dispatch('primaryClick');
	};
</script>

<button
	on:click={click}
	type="button"
	class="bg-darkLava text-white text-2xl transition hover:scale-105 py-4 rounded-sm"
>
	<slot />
</button>
