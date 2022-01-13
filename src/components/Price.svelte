<script>
	export let price;
	export let unit;

	const tranlsateUnit = (unit) => {
		if (unit !== 'kilogram') {
			return 'bucată';
		}
		return 'kilogram';
	};
</script>

<p>{price} lei/{tranlsateUnit(unit)}</p>
