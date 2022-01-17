<script>
	import { createEventDispatcher } from 'svelte';

	export let size = '';
	export let paddingY = 'py-4';

	const dispatch = createEventDispatcher();

	const click = () => {
		dispatch('secondaryClick');
	};
</script>

<button
	on:click={click}
	type="button"
	class="flex justify-center bg-powderBlue-500 text-black transition hover:scale-105 {paddingY} rounded-sm {size}"
>
	<slot name="icon" />
	<slot name="text" />
</button>
