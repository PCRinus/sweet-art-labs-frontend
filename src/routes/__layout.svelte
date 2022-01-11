<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';

	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Sweet Art Labs</title>
</svelte:head>

<div class="content p-8 max-w-6xl mx-auto xl:text-2xl lg:text-xl md:text-lg sm:text-base">
	<div class="upper-content">
		<Navbar />
		<slot />
	</div>
	<Footer />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body) {
		@apply bg-powderBlue-300;
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
