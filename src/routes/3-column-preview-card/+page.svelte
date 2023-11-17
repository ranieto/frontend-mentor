<script lang="ts">
	import iconLuxury from "./icon-luxury.svg";
	import iconSedans from "./icon-sedans.svg";
	import iconSuvs from "./icon-suvs.svg";

	const items = [
		{
			title: "sedans",
			description:
				"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
			icon: iconSedans,
			color: "var(--bright-orange)",
		},
		{
			title: "suvs",
			description:
				"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
			icon: iconSuvs,
			color: "var(--dark-cyan)",
		},
		{
			title: "luxury",
			description:
				"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
			icon: iconLuxury,
			color: "var(--very-dark-cyan)",
		},
	];
</script>

<div class="container">
	{#each items as { title, description, icon, color } (title)}
		<div class="card" style={`--accent: ${color}`}>
			<img src={icon} alt={`Icon depicting a ${title}`} />
			<h1 class="title">{title}</h1>
			<p>{description}</p>
			<a href="/">Learn More</a>
		</div>
	{/each}
</div>

<style>
	.container {
		border-radius: 10px;
		margin: 1rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;

		@media (width >= 100ch) {
			flex-direction: row;
		}
	}

	.card {
		padding: 2rem 2rem 3rem;
		max-width: 30ch;
		display: flex;
		gap: 1.3rem;
		flex-direction: column;
		align-items: start;
		background: var(--accent);
	}

	h1 {
		font-family: "Big Shoulders Display", sans-serif;
		text-transform: uppercase;
		font-size: 2rem;
	}

	a {
		text-decoration: none;
		border: none;
		border: 1px solid var(--very-light-gray);
		background: var(--very-light-gray);
		color: var(--accent);
		padding: 0.7rem 2rem;
		border-radius: 30px;
		cursor: pointer;

		&:hover {
			background: transparent;
			color: var(--very-light-gray);
		}
	}
</style>
