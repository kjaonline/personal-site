<script>
	let interval = 0
	let skillsArray = [
		'Experimentation',
		'AB Testing',
		'Retention',
		'Activation',
		'Onboarding',
		'Intelligent user tracking'
	]

	const yoe = new Date().getFullYear() - 2018;

	setInterval(()=>{
		// Move the last item to the first position
		const lastItem = skillsArray.pop();
		skillsArray.unshift(lastItem);
		skillsArray = skillsArray
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
			{#each skillsArray as skill}
				<li> {skill} </li>
			{/each}
			</ul>
		</div>
	</div>
	
</section>

<style lang="scss" scoped>
	.slider {
		margin-left: 5px;
		display: inline-block;
		transform: translateY(20px);
		ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}
		li {
			opacity: 0.5;
		}
		li:nth-child(3){
			opacity: 1;
		}
		li:nth-child(1), li:nth-child(4) {
			opacity: 0.1;
		}
		li:nth-child(n + 5){
			display:none;
		}
	}
</style>
