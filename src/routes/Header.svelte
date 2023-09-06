<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div>
		<a href="/">
			<h1> Kris Alcordo </h1>
		</a>
	</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
			<li aria-current={$page.url.pathname === '/blgo' ? 'page' : undefined}>
				<a href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss" scoped>
	header {
		display: flex;
		align-items: center;
	}

	nav ul {
		list-style-type: none;
		display: flex;
		li {
			padding: 0 10px
		}
	}

</style>
