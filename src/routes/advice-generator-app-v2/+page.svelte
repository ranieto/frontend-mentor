<script lang="ts">
	import { enhance } from "$app/forms";
	import { slide } from "svelte/transition";
	import MdiDice from "~icons/mdi/dice-5";
	import TablerLoader2 from "~icons/tabler/loader-2";
	import desktopDivider from "./pattern-divider-desktop.svg";
	import mobileDivider from "./pattern-divider-mobile.svg";

	export let data;
	export let form;

	let loading = false;

	$: advice = form ? form.advice : data?.advice;
	$: id = form ? form.id : data?.id;
</script>

<main>
	{#if !loading}
		<h1>Advice #{id}</h1>

		<q in:slide>
			{advice}
		</q>
	{:else}
		<div class="loader">
			<TablerLoader2 />
		</div>
	{/if}

	<picture>
		<source srcset={mobileDivider} media="(width < 550px)" />
		<img src={desktopDivider} alt="divider" />
	</picture>

	<form
		method="post"
		use:enhance={() => {
			loading = true;

			return async ({ update }) => {
				await update();
				loading = false;
			};
		}}
	>
		<button disabled={loading} aria-label="Get new advice">
			<MdiDice />
		</button>
	</form>
</main>

<style lang="postcss">
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
		transform: translate(-50%, 50%);
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

		&:disabled {
			background: var(--light-cyan);
			cursor: wait;

			&:hover {
				box-shadow: none;
			}
		}
	}

	.loader {
		font-size: 3rem;
		animation: loader 1s infinite linear;
	}

	@keyframes loader {
		0% {
			rotate: 0deg;
		}

		100% {
			rotate: 360deg;
		}
	}
</style>
