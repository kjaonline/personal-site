<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';

	const date = new Date().getFullYear()
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>

	<footer>
	Kris Alcordo (c) 2015-{date}
	</footer>
</div>

<style>
	footer {
		 text-align: center;
	}
</style>
