<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/card');
		const cardData = await res.json();

		return {
			props: {
				cardData: cardData.result.data
			}
		};
	};
</script>

<script>
	import Card from '$components/Card.svelte';

	export let cardData;
</script>

<svelte:head>
	<title>Sweet Art Labs - Prăjituri</title>
</svelte:head>

<div class="flex flex-col">
	<h1 class="text-darkLava text-4xl font-satisfy mb-4 mx-auto">Produsele noastre</h1>
</div>
<div class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
	{#each cardData as data}
		<Card cardData={data} />
	{/each}
	{#each cardData as data}
		<Card cardData={data} />
	{/each}
	{#each cardData as data}
		<Card cardData={data} />
	{/each}
</div>
