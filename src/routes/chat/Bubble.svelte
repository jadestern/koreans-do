<script>
  export let isMe = false

  export let content = ''
</script>

<div class="chat chat-{isMe ? 'end' : 'start'}">
	<div class="chat-bubble bg-{isMe ? 'primary' : 'base-200'} text-{isMe ? 'base-100' : 'blue-800'} shadow-md">
		{@html content}
	</div>
</div>
