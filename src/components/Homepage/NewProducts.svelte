<script>
	import Card from '$components/Card.svelte';
	import Price from '$components/Price.svelte';
	import Secondary from '$components/Buttons/Secondary.svelte';
	import Primary from '$components/Buttons/Primary.svelte';
	import { capitalize } from '$lib/formatters';
	import { mobileNavMenu } from '$lib/store';

	export let newProducts;

	const toggleNavbarIfExpanded = () => {
		$mobileNavMenu = $mobileNavMenu === true ? false : false;
	};
</script>

<div class="grid gap-2 grid-cols-2">
	{#each newProducts.data as product}
		<Card>
			<a href={`/prajituri/${product.id}`} slot="cover-image">
				<img
					class="rounded-sm aspect-[2/2] object-cover w-full"
					src={product.attributes.image.data[0].attributes.formats.medium.url}
					alt={product.attributes.image.data[0].attributes.alternativeText}
				/>
			</a>
			<a href={`/prajituri/${product.id}`} slot="title">
				<h1>{capitalize(product.attributes.name)}</h1>
			</a>
			<span slot="price">
				<Price price={product.attributes.price} unit={product.attributes.unit} size={'text-lg'} />
			</span>
			<span slot="secondary">
				<Secondary size={'text-lg'} paddingY={'py-2'} on:secondaryClick={toggleNavbarIfExpanded}>
					<a slot="text" href={`/prajituri/${product.id}`}>Detalii</a>
				</Secondary>
			</span>
			<span slot="primary">
				<Primary size={'text-lg'} paddingY={'py-2'}>
					<p slot="text">Adaugă în coș</p>
				</Primary>
			</span>
		</Card>
	{/each}
</div>
