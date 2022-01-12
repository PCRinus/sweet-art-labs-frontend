<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/about');
		const data = await res.json();

		return {
			props: {
				aboutUsData: data
			}
		};
	};
</script>

<script>
	export let aboutUsData;
	const { heading, description } = aboutUsData.result.data.attributes;
</script>

<h1>{heading}</h1>
<h1>{description}</h1>
