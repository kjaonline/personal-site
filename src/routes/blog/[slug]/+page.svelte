<script>
	export let data;
	import { PortableText } from "@portabletext/svelte"
</script>

<div>
	<div>
		<h2> { data.post.title } </h2>
	</div>
	<div>
		<PortableText value={ data.post.body } />
	</div>
</div>