<script>
  import {afterUpdate, beforeUpdate} from "svelte";

  let chatWrapper
  let autoscroll = false

  beforeUpdate(() => {
    if (chatWrapper) {
      const scrollableDistance = chatWrapper.scrollHeight - chatWrapper.offsetHeight;
      autoscroll = chatWrapper.scrollTop > scrollableDistance - 20;
    }
  });

  afterUpdate(() => {
    if (autoscroll) {
      setTimeout(() => {
        chatWrapper.scrollTo({
          top: chatWrapper.scrollHeight,
          left: 0,
          behavior: 'smooth'
        })
      }, 500)
    }
  });
</script>

<div class="w-screen h-screen flex flex-col justify-end">
	<div class="overflow-y-auto" bind:this={chatWrapper}>
		<slot />
	</div>
</div>
