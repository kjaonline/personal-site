<script>
	import SingleBlogList from "$lib/components/SingleBlogList.svelte";
	export let data;
</script>

<svelte:head>
	<title>Growth Engineer Blog</title>
	<meta name="description" content="Kris Alcordo">
</svelte:head>

<div>
	{#if data && data.posts.length}
		{#each data.posts as post}
		<SingleBlogList 
			slug={post.slug}
			title={post.title}
			body={post.body}
		/>
		{/each}
	{/if}
</div>

<style>

</style>