<script context="module">
	export const load = async () => {
		const res = await fetch('/api/cardData');
		const cardData = await res.json();

		return {
			props: {
				cardData: cardData.result.data[0].attributes
			}
		};
	};
</script>

<script>
	import Card from '../../components/Card.svelte';

	export let cardData;

	console.log(cardData);
</script>

<h1>Prajituri lista</h1>
<div class="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-3">
	<Card {cardData} />
	<Card {cardData} />
	<Card {cardData} />
	<Card {cardData} />
</div>
