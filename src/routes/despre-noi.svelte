<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/about');
		const data = await res.json();

		return {
			props: {
				aboutUsData: data
			}
		};
	};
</script>

<script>
	export let aboutUsData;
	const { heading, description } = aboutUsData.result.data.attributes;
</script>

<svelte:head>
	<title>Sweet Art Labs - Despre noi</title>
</svelte:head>

<div class="flex flex-col">
	<h1 class="text-darkLava font-satisfy text-4xl mb-4 mx-auto">Despre noi</h1>
</div>
<h1>{heading}</h1>
<h1>{description}</h1>
