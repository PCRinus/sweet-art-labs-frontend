<script>
	export let cake_info;

	let cakeIngredients = cake_info.data?.attributes?.cake_ingredients;
</script>

<h1 class="my-4">
	{cakeIngredients === undefined ? 'Nu există date momentan.' : cakeIngredients}
</h1>
