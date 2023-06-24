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

<div class="container mx-auto h-screen flex flex-col-reverse">
	<div
		bind:this={chatWrapper}
		class="flex flex-col p-4 scroll-smooth overflow-y-auto"
	>
		<slot />
	</div>
</div>
