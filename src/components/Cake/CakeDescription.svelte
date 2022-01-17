<script>
	export let cake_info;

	let cakeDescription = cake_info?.data?.attributes?.cake_description;
</script>

<section class="my-2">
	<h1 class="text-darkLava text-2xl">Descriere</h1>
	<h1>
		{cakeDescription === undefined ? 'Nu există date momentan.' : cakeDescription}
	</h1>
</section>
