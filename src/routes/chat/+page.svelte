<script lang="ts">
  import Bubble from "./bubble/Message.svelte";
  import type {Chat} from "./types";
  import {pause} from "./util";
  import Container from "./Container.svelte";

  let chats: Chat[] = []
  let loading = false


  async function handleKeydown(event) {
    if (event.key === 'Enter' && event.target.value) {
      const reply: Chat = {
        id: 10,
        sender: 'me',
        groupId: 10,
        beforeId: 10,
        content: event.target.value
      }

      event.target.value = '';

      chats = [...chats, reply];
      await pause(200 * (1 + Math.random()));

      loading = true;

      await pause(700 * (1 + Math.random()));

      loading = false;
    }
  }
</script>

<Container>
	{#each chats as chat}
		<Bubble isMe={chat.sender === 'me'} content={chat.content} />
	{/each}
	{#if loading}
		<span class="loading loading-dots loading-md my-1 ml-2"></span>
	{/if}
	<input class="absolute bottom-0" on:keydown={handleKeydown} />
</Container>
