<script>
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import './styles.css';
	const date = new Date().getFullYear()
</script>

<div class="app">
	<Header />
	<main>
		<div class="info">
			<h3>Links</h3>
			<Nav />
		</div>
		<div class="content">
			<slot />
		</div>
	</main>

	<footer>
	Kris Alcordo (c) 2015-{date}
	</footer>
</div>

<style lang="scss" scoped>
	.app {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		padding: 10px;
	}
	footer {
		 padding: 30px;
		 text-align: center;
	}
	main {
		display: flex;
	}

	.info {
		width: 300px;
	}

	.content {
		width: 100%;
	}

	h3 {
		margin: 0 0 10px 0;
		text-transform: uppercase;
	}
</style>
