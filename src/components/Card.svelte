<script>
	import { variables } from '$lib/variables';
	import Primary from './Buttons/Primary.svelte';
	import Secondary from './Buttons/Secondary.svelte';

	export let cardData;

	let { id } = cardData;
	let { name, price, unit, image } = cardData.attributes;
	let thumbnailUrl = `${variables.basePath}${image.data[0].attributes.formats.thumbnail.url}`;
</script>

<div class="bg-slate-200 border rounded-sm p-2">
	<!--TODO: add upload url to env vars-->
	<img class="" src={thumbnailUrl} alt="cake_thumbnail" />
	<h1>{name}</h1>
	<h2>{price} lei/{unit}</h2>
	<div class="flex -mx-2 mt-2" id="button-container">
		<Primary>
      <a href={`/prajituri/${id}`}>Vezi detalii</a>
    </Primary>
		<Secondary>Adauga in cos</Secondary>
	</div>
	id: {id}
</div>
