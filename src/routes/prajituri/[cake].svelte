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
	import { variables } from '$lib/variables';
	import { capitalize } from '$lib/formatters';
	import Cakeingredients from '../../components/Cake/Cakeingredients.svelte';
	import CakeDescription from '../../components/Cake/CakeDescription.svelte';

	import Price from '../../components/Price.svelte';
	import Secondary from '../../components/Buttons/Secondary.svelte';
	export let cakeData;
	const { name, price, unit, cake_info, image, categories, allergens } =
		cakeData?.result?.data?.attributes;
	const imgUrl = variables.basePath + image.data[0]?.attributes?.formats?.medium?.url;
</script>

<section class="flex flex-col gap-4 ">
	<h1 class="text-4xl">{capitalize(name)}</h1>
	<img class="rounded-lg aspect-[1/1] w-full object-cover" src={imgUrl} alt={imgUrl} />
	<Price {price} {unit} />
	<CakeDescription {cake_info} />
	<Cakeingredients {cake_info} />
</section>
