<script>
	import { capitalize } from '$lib/formatters';
	import { variables } from '$lib/variables';
	import Primary from './Buttons/Primary.svelte';
	import Secondary from './Buttons/Secondary.svelte';
	import Price from './Price.svelte';

	export let cardData;

	let { id } = cardData;
	let { name, price, unit, image } = cardData.attributes;
	let thumbnailUrl = `${variables.basePath}${image.data[0].attributes.formats.small.url}`;
	let thumbnailAlt = image.data[0].attributes.alternativeText;
</script>

<div class="flex flex-col gap-1 bg-zinc-200 rounded-sm">
	<!-- <div class="mr-4">
		<a href={`/prajituri/${id}`}>
			<img class="rounded-l-md aspect-[2/3] w-36" src={thumbnailUrl} alt={thumbnailAlt} />
		</a>
	</div>
	<div class="text-container p-2">
		<a href={`/prajituri/${id}`}>
			<h1 class="text-3xl">{capitalize(name)}</h1>
		</a>
		<Price {price} {unit} />
		<div class="flex flex-col -mx-2 mt-2" id="button-container">
			<Primary>
				<a href={`/prajituri/${id}`}>Vezi detalii</a>
			</Primary>
			<Secondary>Adauga in cos</Secondary>
		</div>
	</div> -->

	<a href={`/prajituri/${id}`}>
		<img
			class="rounded-sm aspect-[2/2] object-cover w-full"
			src={thumbnailUrl}
			alt={thumbnailAlt}
		/>
	</a>
	<div class="flex flex-col gap-2 p-2">
		<a href={`/prajituri/${id}`}>
			<h1 class="text-xl">{capitalize(name)}</h1>
		</a>
		<Price {price} {unit} size={'text-lg'} />
		<Secondary size={'text-lg'} paddingY={'py-2'}>
			<a slot="text" href={`/prajituri/${id}`}>Vezi detalii</a>
		</Secondary>
		<Primary size={'text-lg'} paddingY={'py-2'}>
			<p slot="text">Adaugă în coș</p>
		</Primary>
	</div>
</div>
