<script lang="ts">
  export let title = ''
  export let description = ''
  export let buttonLabel = ''
</script>

<div class="hero min-h-screen"
     style="background-image: url(https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk=);">
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{title}</h1>
			<p class="mb-5">{description}</p>
			<button class="btn btn-primary">{buttonLabel}</button>
		</div>
	</div>
</div>