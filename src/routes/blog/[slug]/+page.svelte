<script>
	export let data;
	import { PortableText } from "@portabletext/svelte"
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.title} />
</svelte:head>

<div>
	<div>
		<h2> { data.post.title } </h2>
	</div>
	<div>
		<PortableText value={ data.post.body } />
	</div>
</div>