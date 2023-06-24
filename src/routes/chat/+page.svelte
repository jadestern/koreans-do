<script lang="ts">
  import Message from "./message/Bubble.svelte";
  import type {MessageType} from "./types";
  import {onMount,} from "svelte";
  import {BUTTONS, YOU_CHATS} from "./constants";
  import {find, flow, get, head, last, map} from 'lodash/fp'
  import {pause} from "./util";
  import Container from "./Container.svelte";

  let chats: MessageType[] = []
  let buttons: MessageType[] = []
  let loading = false

  const handleButtonClick = (selected: MessageType) => {
    buttons = []
    chats = [...chats, selected as MessageType]
  }

  const addChat = async (payload: MessageType) => {
    await typing(typeof payload.content === 'string' ? payload.content.length : 100)
    chats = [...chats, payload]
  }

  const renderButton = async (lastChatAfterId: number) => {
    await pause(900 * (1 + Math.random()));
    buttons = [...buttons, ...flow(
      find((button) => button.id === lastChatAfterId),
      get('chatIds'),
      map((id => {
        return flow(
          find({id}),
        )(YOU_CHATS)
      }))
    )(BUTTONS)]
  }

  $: {
    const lastChat = flow(last)(chats)
    switch (lastChat?.afterType) {
      case 'button':
        renderButton(lastChat?.afterId)
        break;
      case 'message':
        flow(
          find({id: lastChat?.afterId}),
          addChat
        )(YOU_CHATS)
        break;
    }
  }

  const typing = async (length?: number) => {
    loading = true;
    await pause(30 * (length ?? 10 + Math.random()));
    loading = false;
  }

  onMount(async () => {
    await typing(30)
    chats = [...chats, head(YOU_CHATS) as MessageType]
  })

  // TODO input 넣을 때 주석 제거
  /*async function handleKeydown(event,) {
    if (event.key === 'Enter' && event.target.value) {
      const reply: MessageType = {
        id: 10,
        sender: 'me',
        groupId: 10,
        beforeId: 10,
        content: event.target.value,
      }

      event.target.value = '';

      chats = [...chats, reply];
      await pause(200 * (1 + Math.random()),);

      loading = true;

      await pause(700 * (1 + Math.random()),);

      loading = false;

      buttons = [...buttons, {
        id: 0,
        groupId: 0,
        beforeId: 0,
        content: 'Nice to meet you, too.',
      },]
    }
  }*/
</script>

<Container>
	{#if !!chats.length}
		<div class="flex flex-col gap-2">
			{#each chats as chat}
				{#if typeof chat.content === 'string'}
					<Message isMe={chat.sender === 'me'} content={chat.content} />
				{:else}
					hello
				{/if}
			{/each}
		</div>
	{/if}
	{#if loading}
		<span class="loading loading-dots loading-md my-1 ml-2"></span>
	{/if}
	{#if !!buttons.length}
		<div class="mt-3">
			{#each buttons as button}
				<div class="my-2">
					<button
						class="btn btn-outline btn-sm btn-block h-auto py-1 capitalize"
						on:click={() => handleButtonClick(button)}
					>
						{button.content}
					</button>
				</div>
			{/each}
		</div>
	{/if}
</Container>
<!--	<input class="absolute bottom-0" on:keydown={handleKeydown} />-->
