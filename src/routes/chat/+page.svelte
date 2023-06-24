<script lang="ts">
  import Message from "./Bubble.svelte";
  import type {ButtonType, MessageType} from "./types";
  import {pause} from "./util";
  import Container from "./Container.svelte";

  let chats: MessageType[] = []
  let buttons: ButtonType[] = []
  let loading = false

  const handleButtonClick = (selected: ButtonType,) => {
    console.log(selected,)
  }

  // TODO 배포시 삭제
  async function handleKeydown(event,) {
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
  }
</script>

<Container>
	{#each chats as chat}
		<Message isMe={chat.sender === 'me'}>{chat.content}</Message>
	{/each}
	{#if loading}
		<span class="loading loading-dots loading-md my-1 ml-2"></span>
	{/if}
	{#each buttons as button}
		<div class="my-3">
			<button
				class="btn btn-outline btn-sm btn-block"
				on:click={() => handleButtonClick(button,)}
			>
				{button.content}
			</button>
		</div>
	{/each}
	<input class="absolute bottom-0" on:keydown={handleKeydown} />
</Container>
