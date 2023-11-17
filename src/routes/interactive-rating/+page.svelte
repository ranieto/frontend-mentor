<script lang="ts">
	import { enhance } from "$app/forms";
	import Star from "~icons/ic/round-star";
	import type { ActionData } from "./$types";
	import thanksImage from "./illustration-thank-you.svg";

	export let form: ActionData;
</script>

<main>
	{#if form?.rating}
		<div class="container centered">
			<img src={thanksImage} alt="A phone and a credit card" />
			<p class="result">You selected {form.rating} out of 5</p>
			<h1>Thank you!</h1>
			<p>
				We appreciate you taking the time to give a rating. If you ever need
				more support, don't hesitate to get in touch!
			</p>
		</div>
	{:else}
		<div class="container">
			<div class="icon">
				<Star />
			</div>
			<h1>How did we do?</h1>
			<p>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>
			<form method="POST" action="?/rate" use:enhance>
				<fieldset>
					<div class="option">
						<label for="one">1</label>
						<input type="radio" name="rating" value="1" id="one" />
					</div>
					<div class="option">
						<label for="two">2</label>
						<input type="radio" name="rating" value="2" id="two" />
					</div>
					<div class="option">
						<label for="three">3</label>
						<input type="radio" name="rating" value="3" id="three" />
					</div>
					<div class="option">
						<label for="four">4</label>
						<input type="radio" name="rating" value="4" id="four" />
					</div>
					<div class="option">
						<label for="five">5</label>
						<input type="radio" name="rating" value="5" id="five" />
					</div>
				</fieldset>
				{#if form?.error}
					<p class="error">{form.error}</p>
				{/if}
				<button>Submit</button>
			</form>
		</div>
	{/if}
</main>

<style>
	main {
		background: var(--dark-blue);
		padding: 2rem;
		border-radius: 10px;
		max-width: 40ch;
	}

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.centered {
		text-align: center;
		align-items: center;
		padding: 1rem 0;

		& img {
			max-width: 20ch;
		}
	}

	.result {
		color: var(--accent);
		background: var(--medium-grey-transparent);
		padding: 0.2rem 1rem;
		border-radius: 30px;
	}

	h1 {
		font-weight: 700;
		font-size: 1.5rem;
		color: var(--white);
	}

	p {
		font-size: 0.9rem;
	}

	.icon {
		padding: 0.7rem;
		border-radius: 50%;
		background: var(--medium-grey-transparent);
		width: fit-content;
		color: var(--accent);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	fieldset {
		display: flex;
		justify-content: space-between;
		border: none;
	}

	.option {
		min-height: 3rem;
		min-width: 3rem;
		display: flex;
		justify-content: center;
		place-items: center;
	}

	input {
		position: absolute;
		appearance: none;
		background: var(--medium-grey-transparent);
		border-radius: 50%;
		aspect-ratio: 1 / 1;
		width: 3rem;
		cursor: pointer;

		&:hover {
			background: var(--accent);
		}

		&:active,
		&:checked {
			background: var(--medium-grey);
		}
	}

	label {
		z-index: 1;
		cursor: pointer;
		color: var(--white);
	}

	button {
		background: var(--accent);
		color: var(--white);
		display: block;
		border: none;
		padding: 0.7rem;
		border-radius: 40px;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		cursor: pointer;

		&:hover {
			background: var(--white);
			color: var(--accent);
		}
	}

	.error {
		text-align: center;
		color: var(--accent);
		font-style: italic;
	}
</style>
