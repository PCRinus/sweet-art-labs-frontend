<script>
	import { capitalize } from '$lib/formatters';
	import { variables } from '$lib/variables';
	import { mobileNavMenu } from '$lib/store';
	import Primary from './Buttons/Primary.svelte';
	import Secondary from './Buttons/Secondary.svelte';
	import Price from './Price.svelte';
	import Tags from './Tags.svelte';

	export let cardData;

	let { id } = cardData;
	let { name, price, unit, image, allergens, categories } = cardData.attributes;
	let thumbnailUrl = `${variables.basePath}${image.data[0].attributes.formats.small.url}`;
	let thumbnailAlt = image.data[0].attributes.alternativeText;
	console.log(allergens);
	console.log(categories);

	const toggleNavbarIfExpanded = () => {
		$mobileNavMenu = $mobileNavMenu === true ? false : false;
	};
</script>

<div class="flex flex-col gap-2 bg-zinc-200 rounded-sm">
	<a href={`/prajituri/${id}`}>
		<img
			class="rounded-sm aspect-[2/2] object-cover w-full"
			src={thumbnailUrl}
			alt={thumbnailAlt}
		/>
	</a>
	<div class="flex flex-col gap-2 px-2 pb-2">
		<a href={`/prajituri/${id}`}>
			<h1 class="text-xl">{capitalize(name)}</h1>
		</a>
		<Price {price} {unit} size={'text-lg'} />
		<div class="flex">
			{#each allergens.data as allergen}
				<Tags tagText={allergen.attributes.name} />
			{/each}
		</div>
		<Secondary size={'text-lg'} paddingY={'py-2'} on:secondaryClick={toggleNavbarIfExpanded}>
			<a slot="text" href={`/prajituri/${id}`}>Vezi detalii</a>
		</Secondary>
		<Primary size={'text-lg'} paddingY={'py-2'}>
			<p slot="text">Adaugă în coș</p>
		</Primary>
	</div>
</div>
