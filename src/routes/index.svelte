<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/homepage');
		const data = await res.json();

		return {
			props: {
				homepage: data
			}
		};
	};
</script>

<script>
	import Primary from '$components/Buttons/Primary.svelte';
	import Secondary from '$components/Buttons/Secondary.svelte';
	import NewProducts from '$components/Homepage/NewProducts.svelte';

	export let homepage;

	const [homepageData, productsData] = homepage.result;
	console.log(homepageData);
	console.log(productsData);

	const { intro, banner_photo } = homepageData?.data?.attributes;
	const bannerUrl = banner_photo?.data?.attributes?.formats?.large?.url;
	const bannerAlt = banner_photo?.data?.attributes?.alternativeText;
</script>

<div class="flex flex-col gap-6">
	<h1 class="text-4xl text-darkLava font-satisfy mx-auto">Sweet Art Labs</h1>

	<div class="relative">
		<img class="rounded-sm aspect-[2/3] w-full" src={bannerUrl} alt={bannerAlt} />
		<div class="flex flex-col absolute z-10 inset-x-0 bottom-0 p-2">
			<Primary>
				<a slot="text" class="" href="/prajituri">Vezi prăjiturile noastrte!</a>
			</Primary>
		</div>
	</div>

	<h1 class="text-4xl text-darkLava font-satisfy mx-auto">Produse noi</h1>

	<NewProducts newProducts={productsData} />

	<Secondary>
		<a slot="text" href="/contact">Contactează-ne</a>
	</Secondary>
</div>
