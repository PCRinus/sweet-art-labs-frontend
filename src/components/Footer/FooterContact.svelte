<script>
	import { getContext } from 'svelte';

	const data = getContext('contactData');
	const { adress, hours, phone } = data.result.data.attributes;
	const hoursArray = hours.split('\n');
</script>

<div class="contact my-4">
	<h1>Adresa noastra: {adress}</h1>
	{#each hoursArray as hours}
		<h1>{hours}</h1>
	{/each}
	<h1>Telefon: {phone}</h1>
</div>
