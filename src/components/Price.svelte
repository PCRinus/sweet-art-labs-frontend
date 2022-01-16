<script>
	export let price;
	export let unit;

	const tranlsateUnit = (unit) => {
		return unit === 'kilogram' ? 'kilogram' : 'bucată';
	};
</script>

<p class="italic">{price} lei / {tranlsateUnit(unit)}</p>
