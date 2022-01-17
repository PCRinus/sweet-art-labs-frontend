<script>
	export let cake_info;

	let cakeNutritionalInfo = cake_info.data?.attributes?.cake_nutritional_value;
</script>

<section class="my-2">
	<h1 class="text-darkLava text-2xl">Valori energetice</h1>
	<h1>
		{cakeNutritionalInfo === undefined ? 'Nu există date momentan.' : cakeNutritionalInfo}
	</h1>
</section>
