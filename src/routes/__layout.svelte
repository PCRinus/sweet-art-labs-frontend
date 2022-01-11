<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="content max-w-2xl mx-auto">
	<Navbar />
	<slot />
</div>
<div class="footer mx-auto">
	<Footer />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(html, body, #svelte) {
		height: 100%;
	}

	:global(#svelte) {
		display: flex;
		flex-direction: column;
	}

	.content {
		flex: 1 0 auto;
	}
	.footer {
		flex-shrink: 0;
	}
</style>
