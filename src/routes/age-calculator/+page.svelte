<script lang="ts">
	import { enhance } from "$app/forms";
	import Arrow from "~icons/guidance/down-2-short-arrow";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	$: ageYears = form?.years || "--";
	$: ageMonths = form?.months || "--";
	$: ageDays = form?.days || "--";
	$: isDayError = form?.dayError || form?.dateError;
	$: isMonthError = form?.monthError || form?.dateError;
	$: isYearError = form?.yearError || form?.dateError;
</script>

<article>
	<form action="?/calculate" method="post" use:enhance>
		<div class="inputs">
			<label for="day">
				<p class="label-text" class:error-text={isDayError}>Day</p>
				<input
					name="day"
					type="number"
					inputmode="numeric"
					value={form?.day || ""}
					class:error-input={isDayError}
					placeholder="DD"
				/>
				<p class="error-message error-text">
					{form?.dayError || form?.dateError || ""}
				</p>
			</label>
			<label for="month">
				<p class="label-text" class:error-text={isMonthError}>Month</p>
				<input
					name="month"
					type="number"
					inputmode="numeric"
					value={form?.month || ""}
					placeholder="MM"
					class:error-input={isMonthError}
				/>
				<p class="error-message error-text">{form?.monthError || ""}</p>
			</label>
			<label for="year">
				<p class="label-text" class:error-text={isYearError}>Year</p>
				<input
					name="year"
					type="number"
					inputmode="numeric"
					value={form?.year || ""}
					placeholder="YYYY"
					class:error-input={isYearError}
				/>
				<p class="error-message error-text">{form?.yearError || ""}</p>
			</label>
		</div>

		<div class="button-wrapper">
			<button type="submit" aria-label="calculate"><Arrow /></button>
		</div>
	</form>

	<div class="result">
		<p>
			<span class="number">{ageYears}</span>
			{ageYears === 1 ? "year" : "years"}
		</p>
		<p>
			<span class="number">{ageMonths}</span>
			{ageMonths === 1 ? "month" : "months"}
		</p>
		<p>
			<span class="number">{ageDays}</span>
			{ageDays === 1 ? "day" : "days"}
		</p>
	</div>
</article>

<style>
	article {
		background: var(--white);
		padding: 2.3rem;
		border-radius: 20px;
		border-bottom-right-radius: 150px;
		width: clamp(58ch, 100vw, 65ch);
		min-width: 243px;
	}

	.inputs {
		display: flex;
		gap: 2rem;
	}

	input {
		border: 1px solid var(--light-grey);
		border-radius: 5px;
		padding: 0.7rem;
		font-weight: 800;
		font-size: 1.5rem;
		max-width: 8ch;
		margin: 0.3rem 0;

		&:focus {
			outline: solid var(--accent);
		}

		&::placeholder {
			color: var(--smokey-grey);
			opacity: 0.7;
			font-weight: 700;
		}
	}

	.label-text {
		text-transform: uppercase;
		color: var(--smokey-grey);
		font-size: 0.7rem;
		letter-spacing: 0.25rem;
		font-weight: 700;
	}

	.error-input {
		border-color: var(--light-red);
	}

	.error-message {
		font-style: italic;
		font-size: 0.7rem;
	}

	.error-text {
		color: var(--light-red);
	}

	.button-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&::before {
			content: "";
			flex: 1;
			background: var(--light-grey);
			height: 1px;
		}
	}

	button {
		font-size: 1.8rem;
		background: var(--accent);
		border: none;
		border-radius: 50%;
		color: var(--white);
		padding: 1.5rem;
		cursor: pointer;

		&:hover {
			background: var(--off-black);
		}
	}

	.result {
		line-height: 5.5rem;
		font-size: 5rem;
		font-weight: 800;
		font-style: italic;
	}

	.number {
		color: var(--accent);
	}

	@media (width < 73ch) {
		article {
			width: unset;
		}

		.inputs {
			gap: 1rem;
		}

		input {
			width: clamp(6ch, 25vw, 8ch);
		}

		.button-wrapper {
			margin-block: 2rem;
		}

		.button-wrapper::after {
			content: "";
			flex: 1;
			background: var(--light-grey);
			height: 1px;
		}

		.result {
			font-size: clamp(2rem, 13vw, 4rem);
			line-height: clamp(2.5rem, 20vw, 5.5rem);
		}
	}

	@media (width < 50ch) {
		article {
			padding-bottom: 5rem;
		}

		.button-wrapper {
			margin-block: 1rem;
		}

		button {
			font-size: 1rem;
			padding: 1rem;
		}

		.inputs {
			flex-direction: column;
			align-items: center;
		}

		.label-text {
			text-align: center;
		}

		input {
			width: 100%;
			text-align: center;
		}
	}
</style>
