<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<main>
	{#each data.items as { title, description, icon, color } (title)}
		<div class="card" style={`--accent: ${color}`}>
			<img src={icon} alt={title} />
			<h1 class="title">{title}</h1>
			<p>{description}</p>
			<a href="/">Learn More</a>
		</div>
	{/each}
</main>

<style>
	main {
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
