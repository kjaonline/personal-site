<script>
	export let data;
	let interval = 0
	let displayArray = ['', '', '']
	let skillsArray = [
		'Experimentation',
		'AB Testing',
		'Retention',
		'Activation',
		'Onboarding',
		'Intelligent user tracking',
		'Growth'
	]

	const yoe = new Date().getFullYear() - 2018;

	setInterval(()=>{
		displayArray = []
		// Move the last item to the first position
		if ( interval <= skillsArray.length ){
			displayArray[0] = skillsArray[interval]
			displayArray[1] = skillsArray[interval + 1]
			displayArray[2] = skillsArray[interval + 2]
			interval++
		} 
		if ( interval > skillsArray.length - 3) {
			interval = 0
		}
	},1500)
</script>

<svelte:head>
	<title>Kris Alcordo</title>
	<meta name="description" content="Kris Alcordo" />
</svelte:head>

<section>
	<div>
		Combining 8 Years of Internet Marketing Expertise with {yoe} Years of Fullstack Software Engineering to unlock
		<div class="slider">
			<ul>
				{displayArray[0]}
				{displayArray[1]}
				{displayArray[2]}
			</ul>
		</div>
	</div>
	<div>
		{#if data && data.posts.length}
			{#each data.posts as post}
				<div>
					{post.title}
				</div>
			{/each}
		{/if}
	</div>
</section>

<style lang="scss" scoped>
	section {
		text-align: center;
	}
	.slider {
		margin-left: 5px;
		ul {
			list-style: none;
			padding: 0;
			margin: 20px auto;
			display: flex;
			justify-content: center;
			gap: 20px;
		}
	}
</style>
