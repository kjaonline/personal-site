<script>
	import {toHTML} from '@portabletext/to-html'
	export let slug;
	export let title;
	export let body;
</script>

<a href="/blog/{slug.current}">
	<div>
		<h2> {title} </h2>
	</div>
	<div>
		{@html toHTML(body)}
	</div>
</a>

<style lang="scss" scoped>
	h2 { 
		margin: 0;
	}
	a {
		text-decoration: none;
		margin: 0 0 25px 0;
		border-bottom: 1px solid #000;
		padding-bottom: 10px;
	}
	a:visited {
		color: inherit;
	}
</style>
