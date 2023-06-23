<script lang="ts">
  import Bubble from "./Bubble.svelte";
  import type {Chat} from "./types";
  import {pause} from "./util";
  import {afterUpdate, beforeUpdate} from "svelte";

  let chats: Chat[] = []
  let chatWrapper
  let loading = false
  let autoscroll = false

  beforeUpdate(() => {
    if (chatWrapper) {
      const scrollableDistance = chatWrapper.scrollHeight - chatWrapper.offsetHeight;
      autoscroll = chatWrapper.scrollTop > scrollableDistance - 20;
    }
  });

  afterUpdate(() => {
    if (autoscroll) {
      chatWrapper.scrollTo(0, chatWrapper.scrollHeight);
    }
  });

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

<div class="container mx-auto h-screen flex flex-col-reverse">
	<div
		bind:this={chatWrapper}
		class="flex flex-col p-4 scroll-smooth overflow-y-auto"
	>
		{#each chats as chat}
			<Bubble isMe={chat.sender === 'me'} content={chat.content} />
		{/each}
		{#if loading}
			<span class="loading loading-dots loading-md my-1 ml-2"></span>
		{/if}
		<input class="absolute bottom-0" on:keydown={handleKeydown} />
	</div>
</div>

