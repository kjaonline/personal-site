<script>
	export let data;
	import { PortableText } from "@portabletext/svelte"
</script>

<div>
	{#if data && data.posts.length}
		{#each data.posts as post}
		<a href="/blog/{post.slug.current}">
			<div>
				<h2> {post.title} </h2>
			</div>
			<div>
				<PortableText value={post.body} />
			</div>
		</a>
		{/each}
	{/if}
</div>