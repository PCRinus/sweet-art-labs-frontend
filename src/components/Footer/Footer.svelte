<script>
	import FooterContact from './FooterContact.svelte';
	import FooterSocials from './FooterSocials.svelte';
</script>

<footer class="footer p-4 bg-darkLava text-slate-50">
	<div class="max-w-6xl mx-auto">
		<h1 class="text-4xl font-satisfy">Sweet Art Labs</h1>

		<FooterContact />

		<FooterSocials />

		<div class="rights flex flex-col text-xs mt-4">
			<h1 class="mx-auto">&copy; Sweet Art Labs 2022</h1>
			<h1 class="mx-auto">
				Designed by <a href="https://www.mirceacasapu.com" target="_blank">Mircea Casapu</a>
			</h1>
		</div>
	</div>
</footer>
