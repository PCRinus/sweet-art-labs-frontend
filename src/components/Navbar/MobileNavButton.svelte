<script>
	import { mobileNavMenu } from '../../store';
	import Icon from '@iconify/svelte';

	let hidden = true;
	let hiddenOpen = '';
	let hiddenClose = 'hidden';

	const morphNavIcon = () => {
		hidden = !hidden;
		hiddenOpen = hidden ? '' : 'hidden';
		hiddenClose = hidden ? 'hidden' : '';
		$mobileNavMenu = hiddenClose;
	};
</script>

<button type="button" on:click={morphNavIcon}>
	<Icon class={hiddenOpen} icon="ic:round-menu" width="32" height="32" />
	<Icon class={hiddenClose} icon="ic:round-close" width="32" height="32" />
</button>
