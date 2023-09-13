 <script>
	import { page } from '$app/stores';
 </script>

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

<style lang="scss" scoped>
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;

		li {
			margin: 0  0 5px 0;
		}
	}

	a {
		text-decoration: none;
	}
</style>