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
	import Primary from '../../components/Buttons/Primary.svelte';

	import Icon from '@iconify/svelte';

	export let cakeData;

	const { name, price, unit, cake_info, image, categories, allergens } =
		cakeData?.result?.data?.attributes;
	const imgUrl = variables.basePath + image.data[0]?.attributes?.formats?.medium?.url;
</script>

<svelte:head>
	<title>Sweet Art Labs - {capitalize(name)}</title>
</svelte:head>

<!-- Mobile cake screen -->
<section class="flex flex-col gap-4 md:hidden">
	<h1 class="text-3xl">{capitalize(name)}</h1>
	<img class="rounded-md aspect-[1/1] w-full object-cover" src={imgUrl} alt={imgUrl} />
	<Price {price} {unit} size={'text-2xl'} />
	<CakeDescription {cake_info} />
	<Cakeingredients {cake_info} />
	<Primary size={'text-2xl'}>
		<p slot="text">Adaugă în coș</p>
	</Primary>
</section>

<!-- Desktop cake screen -->
<section class="hidden md:flex gap-8">
	<img class="rounded-md basis-[37%] aspect-[1/1] w-full object-cover" src={imgUrl} alt={imgUrl} />
	<div class="flex flex-col">
		<h1 class="text-darkLava text-3xl mb-2">{capitalize(name)}</h1>
		<Price {price} {unit} size={'text-2xl'} />
		<CakeDescription {cake_info} />
		<Cakeingredients {cake_info} />
		<Primary size={'text-2xl'}>
			<p slot="text">Adaugă în coș</p>
		</Primary>
	</div>
</section>
