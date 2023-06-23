<script lang="ts">
  import Bubble from "./Bubble.svelte";

  let chats = []

  let loading = false;


</script>

<div class="container mx-auto min-h-screen flex flex-col justify-end gap-2 p-4 chatWrapper
">
	{#each chats as chat}
		<Bubble isRight={chat.sender === 'me'} content={chat.content} />
	{/each}
	{#if loading}
		<span class="loading loading-dots loading-md my-1 ml-2"></span>
	{/if}
</div>


<style>
	@media (prefers-reduced-motion) {
		.chatWrapper {
			scroll-behavior: auto;
		}
	}
</style>
