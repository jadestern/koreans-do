<script lang="ts">
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	export let isContent = false
  export let imageUrl = ''
  export let title = 'Shoes!'
  export let description = 'If a dog chews shoes whose shoes does he choose?'

  export let buttonLabel = 'Buy Now'

  const onClick = () => {
    dispatch('click')
  }
</script>

<div class="card {imageUrl ? '': 'card-compact'} bg-base-100 shadow-xl w-full">
	{#if imageUrl}
		<figure><img alt={title} src={imageUrl} class="aspect-video object-cover" /></figure>
	{/if}
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
		<div class="card-actions justify-end">
			{#if isContent}
				<button
					data-theme={title}
					class="btn btn-primary"
					on:click={onClick}
				>
					{buttonLabel}
				</button>
				{:else}
				<button
					class="btn btn-primary"
					on:click={onClick}
				>
					{buttonLabel}
				</button>
			{/if}
		</div>
	</div>
</div>
