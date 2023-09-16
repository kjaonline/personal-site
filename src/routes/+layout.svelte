<script>
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import './styles.css';
	const date = new Date().getFullYear()
</script>

<div class="header">
	<div class="header-container">
		<Header />
		<Nav />
	</div>
</div>
<div class="app">
	<main>
		<slot />
	</main>

	<footer>
	Kris Alcordo (c) 2015-{date}
	</footer>
</div>

<style lang="scss" scoped>
	.header {
		position: sticky;
		top: 0;
		padding: 10px;
		background: #fff;
		&-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			max-width: 1000px;
			margin: 0 auto;
		}
	}

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
</style>
