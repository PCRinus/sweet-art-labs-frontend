<script context="module">
	export const load = async ({ fetch }) => {
		const req = await fetch('/api/aboutData');
		const data = await req.json();

		return {
			props: {
				aboutUsData: data
			}
		};
	};
</script>

<script>
	export let aboutUsData;
	const { heading, description } = aboutUsData.res.data.attributes;
</script>

<h1>{heading}</h1>
<h1>{description}</h1>
