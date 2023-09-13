<script>
	import { PortableText } from "@portabletext/svelte"
	export let slug;
	export let title;
	export let body;
</script>

<a href="/blog/{slug.current}">
	<div>
		<h2> {title} </h2>
	</div>
	<div>
		<PortableText value={body} />
	</div>
</a>

<style lang="scss" scoped>
	a {
		text-decoration: none;
	}
	a:visited {
		color: inherit;
	}
</style>
