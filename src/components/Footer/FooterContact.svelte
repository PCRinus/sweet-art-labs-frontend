<script>
	import { getContext, onMount } from 'svelte';

	const data = getContext('contactData');
	const { address, phone, hours } = data.result.data.attributes;
	const hoursArray = hours.split('\n');
</script>

<div class="contact text-base my-4">
	<h1>{address}</h1>
	{#each hoursArray as hours}
		<h1>{hours}</h1>
	{/each}
	<h1>Telefon: {phone}</h1>
</div>
