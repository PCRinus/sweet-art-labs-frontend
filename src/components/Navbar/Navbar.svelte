<script>
	import { mobileNavMenu } from '../../store';
	import CartButton from './CartButton.svelte';
	import MobileNavButton from './MobileNavButton.svelte';

	const toggleNavbarIfExpanded = () => {
		$mobileNavMenu = $mobileNavMenu === true ? false : false;
	};
</script>

<nav class="px-4 py-2">
	<div class="md:hidden">
		<div class="flex justify-between">
			<CartButton />
			<a href="/" on:click={toggleNavbarIfExpanded}>
				<img class="rounded-full w-12" src="/logo.jpg" alt="logo" />
			</a>
			<MobileNavButton />
		</div>
	</div>

	<!-- Mobile Nav -->
	<div class="{$mobileNavMenu === false ? 'hidden' : ''} md:hidden mt-4">
		<ul>
			<li>
				<a href="/prajituri" on:click={toggleNavbarIfExpanded}>Prajituri</a>
			</li>
			<li>
				<a href="/despre-noi" on:click={toggleNavbarIfExpanded}>Despre Noi</a>
			</li>
			<li>
				<a href="/contact" on:click={toggleNavbarIfExpanded}>Contact</a>
			</li>
		</ul>
	</div>

	<!-- Desktop Nav -->
	<div class="hidden md:flex justify-between max-w-7xl mx-auto">
		<a href="/">Sweet Art Labs Logo</a>
		<div id="nav-links">
			<a href="/prajituri" class="mx-2">Prajituri</a>
			<a href="/despre-noi" class="mx-2">Despre Noi</a>
			<a href="/contact" class="mx-2">Contact</a>
		</div>
	</div>
</nav>
