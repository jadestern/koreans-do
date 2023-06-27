<script lang="ts">
  export let link

  let email = ''

  const sendEmail = () => {
    // email validate 를 의도적으로 안함
    window.open(link, "_blank");
    console.log('email', email) // TODO: GA 로
  }

  const handleKeydown = (event) => {
    const value = event.target.value

    if(event.key === 'Enter' && value) {
      sendEmail()
    }
  }
</script>

<dialog id="emailModal" class="modal">
	<form method="dialog" class="modal-box">
		<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		<h3 class="font-bold text-lg">Excellent Choice!</h3>
		<p class="py-4">
			If you leave your e-mail address,
			I will send you the detailed information about this.
			You can get it in a day.
		</p>
		<div class="relative">
			<input
				bind:value={email}
				type="email"
				placeholder="Type here"
				class="input input-primary w-full pr-16"
				on:keydown={handleKeydown}
				required
			/>
			<button class="btn btn-primary absolute top-0 right-0 rounded-l-none" on:click={sendEmail}>Send</button>
		</div>
	</form>
</dialog>
