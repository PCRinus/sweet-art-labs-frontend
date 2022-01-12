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
	class="bg-darkLava text-white transition hover:scale-105 px-2 py-1 mx-2 rounded-sm"
>
	<slot />
</button>
