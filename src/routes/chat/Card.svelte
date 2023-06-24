<script lang="ts">
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  export let imageUrl = 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
  export let title = 'Shoes!'
  export let description = 'If a dog chews shoes whose shoes does he choose?'

  export let buttonLabel = 'Buy Now'

  const onClick = () => {
    dispatch('click')
  }
</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
	<figure><img alt={title} src={imageUrl} /></figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary" on:click={onClick}>{buttonLabel}</button>
		</div>
	</div>
</div>
