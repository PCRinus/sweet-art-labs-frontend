<script>
	export let price;
	export let unit;
	export let size = '';

	const tranlsateUnit = (unit) => {
		return unit === 'kilogram' ? 'kilogram' : 'bucată';
	};
</script>

<p class="text-darkLava {size}">{price} lei/{tranlsateUnit(unit)}</p>
