<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';

	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Sweet Art Labs</title>
</svelte:head>

<div class="content xl:text-2xl lg:text-xl md:text-lg sm:text-base">
	<Navbar />
	<div class="upper-content p-6">
		<div class="max-w-5xl mx-auto">
			<slot />
		</div>
	</div>
	<Footer />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer base {
		html {
			-webkit-tap-highlight-color: transparent;
		}
	}

	:global(body) {
		@apply bg-neutral-50;
	}

	:global(html, body, #svelte, .content) {
		height: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
	}
	.upper-content {
		flex: 1 0 auto;
	}

	:global(.footer) {
		flex-shrink: 0;
	}
</style>
