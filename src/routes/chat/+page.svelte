<script lang="ts">
  import Message from "./Bubble.svelte";
  import type {ButtonType, MessageType} from "./types";
  import Container from "./Container.svelte";
  import {onMount,} from "svelte";
  import {BUTTONS, YOU_CHATS} from "./constants";
  import {find, flow, get, head, last, map} from 'lodash/fp'
  import {pause} from "./util";

  let chats: MessageType[] = []
  let buttons: ButtonType[] = []
  let loading = false

  const handleButtonClick = (selected: ButtonType) => {
    console.log(selected)
  }

  const addChat = async (payload: MessageType) => {
    await typing()
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

  const typing = async () => {
    loading = true;
    await pause(700 * (1 + Math.random()));
    loading = false;
  }

  onMount(async () => {
    await typing()
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
	{#each chats as chat}
		{#if typeof chat.content === 'string'}
			<Message isMe={chat.sender === 'me'} content={chat.content} />
		{:else}
			hello
		{/if}
	{/each}
	{#if loading}
		<span class="loading loading-dots loading-md my-1 ml-2"></span>
	{/if}
	{#if !!buttons.length}
		<div class="mt-3">
			{#each buttons as button}
				<div class="my-2">
					<button
						class="btn btn-outline btn-sm btn-block"
						on:click={() => handleButtonClick(button)}
					>
						{button.content}
					</button>
				</div>
			{/each}
		</div>
	{/if}

	<!--	<input class="absolute bottom-0" on:keydown={handleKeydown} />-->
</Container>
