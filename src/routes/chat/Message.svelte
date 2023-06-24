<script>
  export let isMe = false

  export let content = ''
</script>

<div class="chat {isMe ? 'chat-end' : 'chat-start'}">
	<div class="chat-bubble {isMe ? 'bg-secondary' : 'bg-gray-200'} {isMe ? 'text-base-100' : 'text-blue-800'} shadow-md">
		{@html content}
	</div>
</div>
