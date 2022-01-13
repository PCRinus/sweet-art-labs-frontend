<script>
	import { getContext, onMount } from 'svelte';

	let hoursArray = [];

	const data = getContext('contactData');
	console.log(data);
</script>

<div class="contact my-4">
	<!-- <h1>Adresa noastra: {address}</h1> -->
	{#each hoursArray as hours}
		<h1>{hours}</h1>
	{/each}
	<!-- <h1>Telefon: {phone}</h1> -->
</div>
