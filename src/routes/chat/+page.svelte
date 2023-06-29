<script lang="ts">
	import Message from "./Message.svelte";
	import type { CardType, ContentData, MessageType, ThemeData } from "./types";
	import { onMount, } from "svelte";
	import { BUTTONS, YOU_CHATS } from "./constants";
	import { find, flow, get, head, last, map } from 'lodash/fp'
	import { customWindow, emailValidate, getFetchJson, pause } from "./util";
	import Container from "./Container.svelte";
	import Card from "./Card.svelte";
  import Modal from "./Modal.svelte";

	let chats: MessageType[] = []
	$: lastChatContent = flow(last, get('content'))(chats)

  let buttons: MessageType[] = []
  let loading = false
  let hasInput = false

  const handleButtonClick = (selected: MessageType) => {
    buttons = []
    chats = [...chats, selected as MessageType]
  }

  const addChat = async (payload: MessageType) => {
    await typing(typeof payload.content === 'string' ? payload.content.length : 100)
    chats = [...chats, payload]
  }

  const renderButton = async (lastChatAfterId: number) => {
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



  const typing = async (length?: number) => {
    loading = true;
    await pause(10 * (length ?? 10 + Math.random()));
    loading = false;
  }

  onMount(async () => {
    await typing(30)
    chats = [...chats, head(YOU_CHATS) as MessageType]
  })


  let email = ''
  const sendEmail = (content: string) => {
    hasInput = false

	  customWindow.gtag('event', 'followup_email', {
			address: content,
		  question: lastChatContent,
	  })

    chats = [...chats, {
      id: 0,
      afterId: emailValidate(content) ? 23 : 24,
      afterType: 'message',
      sender: 'me',
      content,
    }]
  }

  async function handleKeydown(event) {
    const value = event.target.value

    if(event.key === 'Enter' && value) {
      sendEmail(value)
    }
  }

  let cards: CardType[] = []
  const showThemeCard = async () => {
    loading = true;
		const result: ThemeData[] = await getFetchJson('/chat/themes')

	  const themes = result.map((theme) => {
			return {
				...theme,
				buttonLabel: 'This is it',
				onClick: async () => {
          customWindow.gtag('event', 'click_theme', {
						theme_title: theme.title,
						theme_desc: theme.description,
					})
					cards = []
					chats = [...chats, {
						id: 0,
						afterId: -1,
						afterType: 'card-content',
						sender: 'me',
						content: theme.title,
					}]
				}
			}
	  })
    loading = false;

		cards = [...themes]
  }


  let searchLink = ''
	let isModalOpen = false
  const showContentCard = async () => {
    loading = true
	  const result: ContentData[] = await getFetchJson(`/chat/contents?category=${lastChatContent}`)

	  const contents = result.map((content) => {
			return {
				...content,
				isContent: true,
				buttonLabel: 'Show me more',
        theme: lastChatContent,
				onClick: async () => {
          customWindow.gtag('event', 'click_content', {
            theme_title: lastChatContent,
            content_title: content.title,
            content_desc: content.description,
          })
          searchLink = content.searchLink
					if(localStorage.getItem('email')) {
            window.open(content.searchLink, "_blank");
          } else {
            customWindow.emailModal.showModal()
          }
				}
			}
	  })
    loading = false

    cards = [...contents]
  }

	const gtagClickAnswer = (answer: string) => {
		customWindow.gtag('event', 'click_answer', {
			question: flow(last, get('content'))(chats),
			answer,
		})
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
      case 'input':
        hasInput = true
        break;
      case 'card-theme':
        showThemeCard()
        break
	    case 'card-content':
        showContentCard()
		    break
    }
  }
</script>

<Container>
	<div class="p-3">
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
							on:click={() => {
								gtagClickAnswer(button.content)
								handleButtonClick(button)
							}}
						>
							{button.content}
						</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	{#if cards.length}
		<div class="my-4 carousel carousel-center w-screen p-4 space-x-4 bg-neutral">
			{#each cards as card}
				<div class="carousel-item w-4/5">
					<Card
						isContent={card.isContent}
						imageUrl={card.imageUrl}
						title={card.title}
						description={card.description}
						buttonLabel={card.buttonLabel}
						theme={card.theme}
						on:click={card.onClick}
					/>
				</div>
			{/each}
		</div>
	{/if}
	{#if hasInput}
		<div class="relative m-3">
			<form>
				<input
					bind:value={email}
					type="email"
					placeholder="Type here"
					class="input input-bordered w-full pr-16"
					on:keydown={handleKeydown}
					required
				/>
			</form>
			<button class="btn btn-primary absolute top-0 right-0 rounded-l-none" on:click={() => sendEmail(email)}>Send</button>
		</div>
	{/if}
</Container>
<Modal link={searchLink} />
