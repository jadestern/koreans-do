<script>
  import Hero from "./Hero.svelte";
</script>

<svelte:head>
	<title>Koreans do</title>
	<meta content="Svelte demo app" name="description" />
</svelte:head>

<section>
	<Hero
		buttonLabel="Get Started"
		description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
		title='Hello there'
	/>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme('colors.gray.100');
	}
</style>