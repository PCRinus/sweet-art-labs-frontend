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

	import Price from '../../components/Price.svelte';
	export let cakeData;
	const { name, price, unit, cake_info, image, categories, allergens } =
		cakeData.result.data.attributes;
	const imgUrl = variables.basePath + image.data[0].attributes.formats.medium.url;
	console.log(imgUrl);
</script>

<section class="flex flex-col sm:flex-row gap-6">
	<div class="cake-image-container max-w-screen-sm">
		<img src={imgUrl} alt="" />
	</div>
	<div class="cake-data-container">
		<h1 class="text-5xl">{name}</h1>
		<Price {price} {unit} />
	</div>
</section>

<style>
</style>
