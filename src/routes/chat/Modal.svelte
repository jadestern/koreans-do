<script lang="ts">
	import { customWindow, emailValidate } from "./util";

	export let link

  let email = ''

  const sendEmail = () => {
    // email validate 를 의도적으로 안함
    window.open(link, "_blank");
	  customWindow.dataLayer.push({
		  event: 'followup_email',
		  properties: {
			  address: email,
			  question: 'modal'
		  },
	  })

	  if(emailValidate(email)) {
      localStorage.setItem('email', email)
    }
  }

  const handleKeydown = (event) => {
    const value = event.target.value

    if(event.key === 'Enter' && value) {
      sendEmail()
    }
  }
</script>

<dialog class="modal" id="emailModal">
	<form class="modal-box" method="dialog">
		<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		<h3 class="font-bold text-lg">Excellent Choice!</h3>
		<p class="py-4">
			Please leave an e-mail for more information.
			<br>
			Then you will directly get to the content.
		</p>
		<div class="relative">
			<input
				bind:value={email}
				class="input input-primary w-full pr-16"
				on:keydown={handleKeydown}
				placeholder="Type here"
				required
				type="email"
			/>
			<button class="btn btn-primary absolute top-0 right-0 rounded-l-none" on:click={sendEmail}>Send</button>
		</div>
	</form>
</dialog>
