<script>
	import MobileNavButton from './MobileNavButton.svelte';

	let hidden = true;
	let toggle;

	$: toggle = hidden === true ? 'hidden' : '';

	const toggleMobileNav = () => {
		hidden = !hidden;
	};
</script>

<nav class="p-6">
	<div class="md:hidden">
		<div class="flex justify-between">
			<a href="/">Sweet Art Labs Logo</a>
			<MobileNavButton on:toggleNav={toggleMobileNav} />
		</div>
	</div>

	<!-- Mobile Nav -->
	<div class={toggle}>
		<div class="md:hidden">
			<ul>
				<li>
					<a href="/prajituri" on:click={toggleMobileNav}>Prajituri</a>
				</li>
				<li>
					<a href="/despre-noi" on:click={toggleMobileNav}>Despre Noi</a>
				</li>
				<li>
					<a href="/contact" on:click={toggleMobileNav}>Contact</a>
				</li>
			</ul>
		</div>
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
