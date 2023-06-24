<script>
  export let isMe = false
</script>

<div class="chat chat-{isMe ? 'end' : 'start'}">
	<div class="chat-bubble chat-bubble-{isMe ? 'secondary' : 'primary'} shadow-md">
		<slot />
	</div>
</div>
