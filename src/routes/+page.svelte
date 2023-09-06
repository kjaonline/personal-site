<script>
	let interval = 0
	let skillsArray = [
		'Experimentation',
		'AB Testing',
		'Retention',
		'Activation',
		'Onboarding',
		'ARR optimization'
	]

	const growthEngineer = () => {
		alert('yolo')
	}

	setInterval(()=>{
		// Move the last item to the first position
		const lastItem = skillsArray.pop();
		skillsArray.unshift(lastItem);
		skillsArray = skillsArray
		if(interval === skillsArray.length){
			interval = 0
		} else {
			interval++
		}
	},1000)
</script>

<svelte:head>
	<title>Kris Alcordo</title>
	<meta name="description" content="Kris Alcordo" />
</svelte:head>

<section>
	<div>
		Unlocking Digital Growth: Combining 8 Years of Internet Marketing Expertise with 5 Years of Fullstack Engineering for Focused Customer Retention and Activation.
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
