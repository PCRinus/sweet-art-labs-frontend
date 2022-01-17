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

<div class="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-3">
	{#each cardData as data}
		<Card cardData={data} />
	{/each}
	{#each cardData as data}
		<Card cardData={data} />
	{/each}
</div>
