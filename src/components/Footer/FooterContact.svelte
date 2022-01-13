<script>
	import { getContext, onMount } from 'svelte';

  const hoursArray = [];

	onMount(async () => {
    const data = await getContext('contactData');
    const { address, hours, phone } = data.result.data.attributes;
    hoursArray = hours.split('\n');
	});
</script>

<div class="contact my-4">
	<!-- <h1>Adresa noastra: {address}</h1> -->
	{#each hoursArray as hours}
		<h1>{hours}</h1>
	{/each}
	<!-- <h1>Telefon: {phone}</h1> -->
</div>
