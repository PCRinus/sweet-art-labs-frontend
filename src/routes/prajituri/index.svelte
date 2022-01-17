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
	import Card from '../../components/Card.svelte';

	export let cardData;
</script>

<svelte:head>
	<title>Sweet Art Labs - Prăjituri</title>
</svelte:head>

<h1 class="text-darkLava text-3xl mb-4">Prăjiturile noastre</h1>
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
