<script>
  import Hero from "./Hero.svelte";
</script>

<svelte:head>
	<title>Koreans do</title>
	<meta content="Svelte demo app" name="description" />
</svelte:head>

<section>
	<Hero />
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme('colors.gray.100');
	}
</style>