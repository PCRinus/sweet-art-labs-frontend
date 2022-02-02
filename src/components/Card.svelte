<div class="flex flex-col gap-2 bg-zinc-200 rounded-sm">
	<slot name="cover-image" />
	<div class="flex flex-col gap-2 px-2 pb-2">
		<slot name="title" />
		<slot name="price" />
		<slot name="secondary" />
		<slot name="primary" />
	</div>
</div>
