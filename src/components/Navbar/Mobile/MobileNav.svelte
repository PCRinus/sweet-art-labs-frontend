<script>
	import { disableScrollHandling } from '$app/navigation';

	import { mobileNavMenu } from '$lib/store';
	import CartButton from '../CartButton.svelte';
	import MobileNavButton from '../Mobile/MobileNavButton.svelte';

	const toggleNavbarIfExpanded = () => {
		$mobileNavMenu = $mobileNavMenu === true ? false : false;
	};
</script>

<div class="md:hidden flex justify-between">
	<CartButton />
	<a href="/" on:click={toggleNavbarIfExpanded}>
		<img class="rounded-full w-12" src="/logo.jpg" alt="logo" />
	</a>
	<MobileNavButton />
</div>

<div
	class="{$mobileNavMenu === false
		? 'hidden'
		: ''} md:hidden bg-black opacity-60 mt-4 fixed top-12 left-0 right-0 bottom-0 z-20"
>
	<!-- <div class="text-black bg-neutral-50 opacity-100 flex flex-col">
		<a href="/prajituri" class="mx-2">Prajituri</a>
		<a href="/despre-noi" class="mx-2">Despre Noi</a>
		<a href="/contact" class="mx-2">Contact</a>
	</div> -->
</div>
