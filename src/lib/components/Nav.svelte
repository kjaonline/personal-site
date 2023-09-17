 <script>
	import { page } from '$app/stores';
 </script>

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

<style lang="scss" scoped>
	ul {
		display: flex;
		list-style-type: none;
		align-items: flex-end;
		padding: 0;
		margin: 0;
		gap: 20px;
	}

	a {
		text-decoration: none;
		font-weight: bold;
		color: var(--main-color-dark);
		&:visited {
			color: inherit;
		}
		&:hover {
			transition: 0.5s all;
			color: var(--main-color-mid);
		}
	}
</style>