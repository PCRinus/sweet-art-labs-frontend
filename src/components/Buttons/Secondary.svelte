<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const click = () => {
		dispatch('secondaryClick');
	};
</script>

<button
	on:click={click}
	type="button"
	class="bg-powderBlue-500 text-black transition hover:scale-105 px-2 py-1 rounded-sm"
>
	<slot />
</button>
