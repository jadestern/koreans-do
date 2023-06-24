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

<div
	bind:this={chatWrapper}
	class="w-screen h-screen flex flex-col justify-end p-3"
>
	<slot />
</div>
