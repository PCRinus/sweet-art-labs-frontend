<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/card');
		const cardData = await res.json();

		return {
			props: {
				cardData: cardData.result.data
			}
		};
	};
</script>

<script>
	import Primary from '$components/Buttons/Primary.svelte';
	import Secondary from '$components/Buttons/Secondary.svelte';
	import Card from '$components/Card.svelte';
	import Price from '$components/Price.svelte';
	import { mobileNavMenu } from '$lib/store';
	import { capitalize } from '$lib/formatters';

	export let cardData;

	const toggleNavbarIfExpanded = () => {
		$mobileNavMenu = $mobileNavMenu === true ? false : false;
	};
</script>

<svelte:head>
	<title>Sweet Art Labs - Prăjituri</title>
</svelte:head>

<div class="flex flex-col">
	<h1 class="text-darkLava text-4xl font-satisfy mb-4 mx-auto">Produsele noastre</h1>
</div>
<div class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
	{#each cardData as data}
		<Card>
			<a href={`/prajituri/${data.id}`} slot="cover-image">
				<img
					class="rounded-sm aspect-[2/2] object-cover w-full"
					src={data.attributes.image.data[0].attributes.formats.medium.url}
					alt={data.attributes.image.data[0].attributes.alternativeText}
				/>
			</a>
			<a href={`/prajituri/${data.id}`} slot="title">
				<h1>{capitalize(data.attributes.name)}</h1>
			</a>
			<span slot="price">
				<Price price={data.attributes.price} unit={data.attributes.unit} size={'text-lg'} />
			</span>
			<span slot="secondary">
				<Secondary size={'text-lg'} paddingY={'py-2'} on:secondaryClick={toggleNavbarIfExpanded}>
					<a slot="text" href={`/prajituri/${data.id}`}>Detalii</a>
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
