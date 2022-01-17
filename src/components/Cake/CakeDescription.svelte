<script>
	export let cake_info;

	let cakeDescription = cake_info?.data?.attributes?.cake_description;
</script>

<h1 class="my-2">
	{cakeDescription === undefined ? 'Nu există date momentan.' : cakeDescription}
</h1>
