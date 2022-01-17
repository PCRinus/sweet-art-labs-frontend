<script>
	import { mobileNavMenu } from '../../store';
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';

	const dispatch = createEventDispatcher();

	const morphNavIcon = () => {
		$mobileNavMenu = !$mobileNavMenu;
		dispatch('toggleNav');
	};
</script>

<button type="button" on:click={morphNavIcon}>
	<Icon
		class={$mobileNavMenu === true ? 'hidden' : ''}
		icon="ic:round-menu"
		width="2rem"
		height="2rem"
	/>
	<Icon
		class={$mobileNavMenu === true ? '' : 'hidden'}
		icon="ic:round-close"
		width="2rem"
		height="2rem"
	/>
</button>
