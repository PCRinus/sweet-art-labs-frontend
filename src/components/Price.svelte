<script>
	export let price;
	export let unit;

	const tranlsateUnit = (unit) => {
		return unit === 'kilogram' ? 'kilogram' : 'bucată';
	};
</script>

<p class="text-2xl text-darkLava">{price} lei/{tranlsateUnit(unit)}</p>
