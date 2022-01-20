<script>
	import { mobileNavMenu } from '$lib/store';
	import Icon from '@iconify/svelte';

	const morphNavIcon = () => {
		$mobileNavMenu = !$mobileNavMenu;
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
