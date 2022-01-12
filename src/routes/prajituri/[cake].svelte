<script context="module">
	export const load = async ({ fetch, params }) => {
		const res = await fetch(`/api/${params.cake}`);
		const data = await res.json();

		return {
			props: {
				cakeData: data
			}
		};
	};
</script>

<script>
	export let cakeData;
	const { name, price, unit, cake_info, image, categories, allergens } =
		cakeData.result.data.attributes;
</script>

<h1>Cake info</h1>
<h1>{name}</h1>
<h1>{price}</h1>
<h1>{unit}</h1>
