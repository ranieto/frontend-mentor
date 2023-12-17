<script lang="ts">
	import { superForm } from "sveltekit-superforms/client";
	import MaterialSymbolsErrorCircleRounded from "~icons/material-symbols/error-circle-rounded";

	export let data;
	const { form, errors, enhance } = superForm(data.form);
</script>

<main>
	<div class="text">
		<h1>Learn to code by watching others</h1>
		<p>
			See how experienced developers solve problems in real-time. Watching
			scripted tutorials is great, but understanding how developers think is
			invaluable.
		</p>
	</div>

	<div class="call-to-action">
		<p class="trial">
			<strong>Try it free 7 days</strong>
			then $20/mo. thereafter
		</p>

		<form action="?/register" method="post" use:enhance>
			<div class="input-wrapper" class:error={$errors.firstName}>
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					bind:value={$form.firstName}
					aria-invalid={$errors.firstName ? "true" : undefined}
				/>
				<div class="error-icon">
					{#if $errors.firstName}
						<MaterialSymbolsErrorCircleRounded />
					{/if}
				</div>
			</div>
			{#if $errors.firstName}
				<p class="error-message">{$errors.firstName}</p>
			{/if}

			<div class="input-wrapper" class:error={$errors.lastName}>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					bind:value={$form.lastName}
					aria-invalid={$errors.lastName ? "true" : undefined}
				/>
				<div class="error-icon">
					{#if $errors.lastName}
						<MaterialSymbolsErrorCircleRounded />
					{/if}
				</div>
			</div>
			{#if $errors.lastName}
				<p class="error-message">{$errors.lastName}</p>
			{/if}

			<div class="input-wrapper" class:error={$errors.email}>
				<input
					type="text"
					name="email"
					placeholder="Email Address"
					bind:value={$form.email}
					aria-invalid={$errors.email ? "true" : undefined}
				/>
				<div class="error-icon">
					{#if $errors.email}
						<MaterialSymbolsErrorCircleRounded />
					{/if}
				</div>
			</div>
			{#if $errors.email}
				<p class="error-message">{$errors.email.at(0)}</p>
			{/if}

			<div class="input-wrapper" class:error={$errors.password}>
				<input
					type="password"
					name="password"
					placeholder="Password"
					bind:value={$form.password}
					aria-invalid={$errors.password ? "true" : undefined}
				/>
				<div class="error-icon">
					{#if $errors.password}
						<MaterialSymbolsErrorCircleRounded />
					{/if}
				</div>
			</div>
			{#if $errors.password}
				<p class="error-message">{$errors.password}</p>
			{/if}

			<button>Claim your free trial</button>

			<p class="terms">
				By clicking the button, you are agreeing to our <a href="/">
					Terms and Services
				</a>
			</p>
		</form>
	</div>
</main>

<style lang="postcss">
	main {
		--main-box-shadow: var(--shadow) 0 7px;
		--main-border-radius: 10px;
		--inner-border-radius: 5px;

		padding: 4rem 1rem;
		display: grid;
		gap: 4rem;
		text-align: center;
		max-width: 60ch;
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
		line-height: 3.5rem;
	}

	strong {
		font-weight: 700;
	}

	a {
		color: var(--red);
		font-weight: 600;
		text-decoration: none;

		&:hover {
			opacity: 0.7;
		}
	}

	form {
		background: var(--white);
		box-shadow: var(--main-box-shadow);
		color: var(--grayish-blue);
		padding: 1.5rem;
		padding-bottom: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		border-radius: var(--main-border-radius);
	}

	.error {
		outline: solid var(--red);
	}

	.error-message {
		color: var(--red);
		font-size: 0.7rem;
		font-style: italic;
		text-align: right;
		margin-top: -0.8rem;
	}

	input {
		border: none;
		font-weight: 600;
		width: 100%;
		padding-inline: 1rem;

		&:focus {
			outline: none;
		}
	}

	.input-wrapper {
		padding: 1rem;
		border: 1px solid var(--grayish-blue);
		border-radius: var(--inner-border-radius);
		display: flex;
		justify-content: space-between;
		align-items: center;

		&:focus-within {
			outline: solid var(--dark-blue);
		}
	}

	.error-icon {
		font-size: 1.4rem;
		color: var(--red);
		min-width: 2ch;
	}

	button {
		padding: 1rem;
		color: var(--white);
		border: none;
		background: var(--green);
		box-shadow: var(--green-shadow) 0 7px;
		border-radius: var(--inner-border-radius);
		text-transform: uppercase;
		cursor: pointer;

		&:hover {
			opacity: 0.6;
		}
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.call-to-action {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.trial {
		background: var(--accent);
		padding: 1rem;
		border-radius: var(--main-border-radius);
		box-shadow: var(--main-box-shadow);
	}

	.terms {
		font-size: 0.8rem;
		text-align: center;
	}

	@media (width > 100ch) {
		main {
			grid-template-columns: minmax(40ch, 1fr) minmax(30ch, 50ch);
			max-width: 120ch;
		}

		h1 {
			font-size: 3rem;
		}

		.text {
			text-align: left;
			justify-content: center;
		}
	}
</style>
