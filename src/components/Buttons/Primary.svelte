<script>
	import { createEventDispatcher } from 'svelte';

	export let size = '';
	export let paddingY = 'py-4';

	const dispatch = createEventDispatcher();

	const click = () => {
		dispatch('primaryClick');
	};
</script>

<button
	on:click={click}
	type="button"
	class="flex justify-center content-center gap-2 bg-darkLava text-white transition hover:scale-105 {paddingY} rounded-sm {size}"
>
	<slot name="icon" />
	<slot name="text" />
</button>
