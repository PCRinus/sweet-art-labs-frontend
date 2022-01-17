<script>
	export let cake_info;

	let cakeIngredients = cake_info.data?.attributes?.cake_ingredients;
</script>

<section class="my-2">
	<h1 class="text-darkLava text-2xl">Ingrediente</h1>
	<h1>
		{cakeIngredients === undefined ? 'Nu există date momentan.' : cakeIngredients}
	</h1>
</section>
