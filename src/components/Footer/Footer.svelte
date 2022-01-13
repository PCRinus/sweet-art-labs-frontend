<script>
	import FooterContact from './FooterContact.svelte';
	import FooterSocials from './FooterSocials.svelte';
</script>

<footer class="footer px-6 pt-8 bg-goldCrayola text-slate-900">
	<div class="max-w-6xl mx-auto">
		<h1 class="text-5xl font-satisfy">Sweet Art Labs</h1>

		<hr />

		<FooterContact />

		<FooterSocials />

		<div class="rights flex flex-col text-sm my-6">
			<h1 class="mx-auto">&copy; Sweet Art Labs 2022</h1>
			<h1 class="mx-auto">
				Designed by <a href="https://www.mirceacasapu.com" target="_blank">Mircea Casapu</a>
			</h1>
		</div>
	</div>
</footer>
