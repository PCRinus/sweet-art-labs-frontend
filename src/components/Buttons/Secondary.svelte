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
	class="flex justify-center bg-goldCrayola text-black transition hover:scale-105 px-4 {paddingY} rounded-sm {size}"
>
	<slot name="icon" />
	<slot name="text" />
</button>
