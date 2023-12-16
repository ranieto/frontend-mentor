<script lang="ts">
	import MdiLaunch from "~icons/mdi/launch";
	import Badge from "./Badge.svelte";

	export let data;
	const { routes } = data;
</script>

<div class="container">
	<header><h1>Frontend Mentor Challenges</h1></header>
	<main>
		<ul>
			{#each routes as { name, href, dateCompleted, difficulty, url } (href)}
				<a {href}>
					<li>
						<div class="left-block">
							<h2>{name}</h2>
							<a href={url} target="_blank" class="external-link">
								<MdiLaunch />
							</a>
						</div>
						<div class="right-block">
							<div class="badge"><Badge {difficulty} /></div>
							<p class="date">{dateCompleted}</p>
						</div>
					</li>
				</a>
			{/each}
		</ul>
	</main>
</div>

<style lang="postcss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		min-height: 100dvh;
		margin: 2rem;
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
	}

	h2 {
		font-size: 1.1rem;
		font-weight: 700;
	}

	.date {
		font-size: 0.8rem;
		font-style: italic;
		margin-right: 0.3rem;
		margin-top: 0.3rem;
	}

	main {
		background: #fff;
		border-radius: 10px;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	li {
		display: flex;
		justify-content: space-between;
		gap: 5rem;
		background: #d3d3d33a;
		padding: 1rem;
		border-radius: 10px;
		box-shadow: hsl(0deg 0% 0% / 10%) 0 5px 5px;

		&:hover {
			background: #d3d3d387;
		}
	}

	.right-block {
		text-align: right;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.external-link {
		display: block;
		width: fit-content;
		color: #000;
		opacity: 0.4;
		margin-top: 0.3rem;

		&:hover {
			opacity: 1;
		}
	}
</style>
