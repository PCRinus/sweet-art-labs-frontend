<script>
	import Primary from './Buttons/Primary.svelte';
	import Secondary from './Buttons/Secondary.svelte';

	export let cardData;
</script>

<div class="bg-slate-200 border rounded-sm p-2">
	<h1>{cardData.name}</h1>
	<h2>{cardData.price}/{cardData.unit}</h2>
	<div class="flex -mx-2" id="button-container">
		<Primary>Vezi detalii</Primary>
		<Secondary>Adauga in cos</Secondary>
	</div>
</div>
