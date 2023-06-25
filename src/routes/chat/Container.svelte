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
      chatWrapper.scrollTo(0, chatWrapper.scrollHeight);
    }
  });
</script>

<div class="w-screen h-screen flex flex-col justify-end">
	<div class="overflow-y-auto" bind:this={chatWrapper}>
		<slot />
	</div>
</div>
