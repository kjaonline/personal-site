<script>
	export let data;
	console.log(data)
	import { PortableText } from "@portabletext/svelte"
	import dayjs from 'dayjs';
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.title} />
</svelte:head>

<header>
	<h1> { data.post.title } </h1>
	{data.author.name}
	<div class="date">
		{ dayjs(data.post._createdAt).format('MMMM M, YYYY')}
	</div>
</header>
<div>
	<PortableText value={ data.post.body } />
</div>

<style lang="scss" scoped>
	header {
		h1 {
			margin: 0;	
		}
	}
</style>