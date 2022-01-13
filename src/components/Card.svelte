<script>
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

<div class="bg-slate-200 border rounded-sm flex flex-col">
	<div class="img-container">
		<img class="object-contain w-full" src={thumbnailUrl} alt={thumbnailAlt} />
	</div>
	<div class="text-container p-2">
		<h1>{name}</h1>
		<Price {price} {unit} />
		<div class="flex -mx-2 mt-2" id="button-container">
			<Primary>
				<a href={`/prajituri/${id}`}>Vezi detalii</a>
			</Primary>
			<!-- <Secondary>Adauga in cos</Secondary> -->
		</div>
	</div>
</div>
