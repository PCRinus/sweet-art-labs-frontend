<script>
	import MobileNavButton from './MobileNavButton.svelte';
</script>

<nav class="p-6">
	<div class="md:hidden">
		<div class="flex justify-between">
			<a href="/">Sweet Art Labs Logo</a>
			<MobileNavButton />
		</div>
	</div>
	<div class="hidden md:flex justify-between max-w-6xl mx-auto">
		<a href="/">Sweet Art Labs Logo</a>
		<div id="nav-links">
			<a href="/prajituri" class="mx-2">Prajituri</a>
			<a href="/about" class="mx-2">Despre Noi</a>
			<a href="/contact" class="mx-2">Contact</a>
		</div>
	</div>
</nav>
