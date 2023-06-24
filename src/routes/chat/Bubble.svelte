<script>
  export let isMe = false

  export let content = ''
</script>

<div class="flex chat chat-{isMe ? 'end' : 'start'}">
	<div class="chat-bubble chat-bubble-{isMe ? 'secondary' : 'primary'} shadow-md">
		{@html content}
	</div>
</div>
