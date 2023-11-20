<script lang="ts">
	import { invalidateAll } from "$app/navigation";
	import MdiDice from "~icons/mdi/dice-5";
	import type { PageServerData } from "./$types";
	import desktopDivider from "./pattern-divider-desktop.svg";
	import mobileDivider from "./pattern-divider-mobile.svg";

	let loading = false;

	export let data: PageServerData;
</script>

<main>
	<h1>Advice #{data?.id}</h1>
	<q>
		{data?.advice}
	</q>

	<picture>
		<source srcset={mobileDivider} media="(width < 550px)" />
		<img src={desktopDivider} alt="divider" />
	</picture>

	<button
		on:click={async () => {
			loading = true;
			await invalidateAll();
			loading = false;
		}}
		class:loading
		aria-label="Get new advice"
	>
		<MdiDice />
	</button>
</main>

<style>
	main {
		position: relative;
		text-align: center;
		background: var(--dark-grayish-blue);
		max-width: 50ch;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin: 1rem;
		padding: 3rem;
		border-radius: 15px;

		@media (width < 550px) {
			padding: 3rem 1rem;
		}
	}

	h1 {
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.3rem;
		font-size: 0.8rem;
	}

	q {
		font-size: 1.75rem;
	}

	img {
		padding: 1.5rem 0;
	}

	button {
		position: absolute;
		bottom: 0;
		transform: translateY(50%);
		background: var(--accent);
		color: var(--dark-blue);
		font-size: 1.5rem;
		padding: 1rem;
		border-radius: 50%;
		border: none;
		cursor: pointer;

		&:hover {
			box-shadow: var(--accent) 0 0 30px;
		}
	}

	.loading {
		background: var(--light-cyan);
		cursor: wait;

		&:hover {
			box-shadow: none;
		}
	}
</style>
