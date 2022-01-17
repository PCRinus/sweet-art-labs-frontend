<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/contact');
		const data = await res.json();

		return {
			props: {
				contactData: data
			}
		};
	};
</script>

<script>
	import Footer from '$components/Footer/Footer.svelte';
	import Navbar from '$components/Navbar/Navbar.svelte';
	import { setContext } from 'svelte';

	export let contactData;

	setContext('contactData', contactData);
</script>

<svelte:head>
	<title>Sweet Art Labs</title>
</svelte:head>

<div class="content text-xl">
	<Navbar />
	<div class="upper-content p-4">
		<div class="max-w-7xl mx-auto">
			<slot />
		</div>
	</div>
	<Footer />
</div>

<style>
	/* Fonts */
	@import url('https://fonts.googleapis.com/css2?family=Moon+Dance&family=Satisfy&display=swap');

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
