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

<p class="italic">{price} lei/{tranlsateUnit(unit)}</p>
