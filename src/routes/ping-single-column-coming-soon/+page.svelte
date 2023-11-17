<script lang="ts">
	import { enhance } from "$app/forms";
	import IonLogoInstagram from "~icons/ion/logo-instagram";
	import IonLogoTwitter from "~icons/ion/logo-twitter";
	import IonSocialFacebook from "~icons/ion/social-facebook";
	import type { ActionData } from "./$types";
	import dashboardImage from "./illustration-dashboard.png";
	import logo from "./logo.svg";

	export let form: ActionData;
</script>

<main>
	<img class="logo" src={logo} alt="The PING logo" />
	<div class="text">
		<h1>
			We are launching <span>soon!</span>
		</h1>
		<p>Subscribe and get notified</p>
	</div>

	<form action="?/subscribe" method="post" use:enhance>
		<label for="email">
			<input
				type="text"
				class:form-error={form?.error}
				name="email"
				placeholder="Your email address..."
			/>
		</label>

		<div class="form-message">
			{#if form?.error}
				<p class="error">{form.error}</p>
			{:else if form?.success}
				<p class="success">{form.success}</p>
			{/if}
		</div>
		<button>Notify Me</button>
	</form>

	<img class="mockup" src={dashboardImage} alt="Mockup of a dashboard" />

	<div class="spacer"></div>

	<footer>
		<div class="socials">
			<a href="/" class="social-link">
				<IonSocialFacebook />
			</a>
			<a href="/" class="social-link">
				<IonLogoTwitter />
			</a>
			<a href="/" class="social-link">
				<IonLogoInstagram />
			</a>
		</div>
		<p>© Copyright Ping. All rights reserved.</p>
	</footer>
</main>

<style>
	main {
		margin: 2rem;
		max-width: 50ch;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		align-items: center;
		text-align: center;
	}

	h1 {
		font-size: 2rem;
		color: var(--gray);

		& span {
			font-weight: 700;
			color: var(--very-dark-blue);
		}
	}

	form {
		display: grid;
		gap: 0.4rem 1rem;
		width: 100%;
	}

	input {
		border: 1px solid var(--pale-blue);
		padding: 0.7rem 1rem;
		border-radius: 30px;
		width: 100%;
		font-size: 0.8rem;
	}

	input::placeholder {
		color: var(--pale-blue);
	}

	.form-error {
		border: 1px solid var(--light-red);
	}

	.form-message {
		font-size: 0.8rem;
		font-style: italic;
		text-align: center;
	}

	.error {
		color: var(--light-red);
	}

	.success {
		color: var(--green);
	}

	button {
		padding: 0.7rem 1rem;
		border-radius: 30px;
		background: var(--blue);
		border: none;
		color: var(--white);
		box-shadow: var(--blue-shadow) 0 5px 10px;
		width: 100%;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
	}

	.socials {
		display: flex;
		gap: 1rem;
	}

	.social-link {
		padding: 0.3rem;
		border: 1px solid var(--pale-blue);
		border-radius: 50%;
		color: var(--blue);

		&:hover {
			border: 1px solid var(--blue);
			background: var(--blue);
			color: var(--white);
		}
	}

	.spacer {
		flex: 1;
	}

	footer {
		justify-self: end;
		color: var(--gray);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		& p {
			font-size: 0.7rem;
		}
	}

	@media (width > 55ch) {
		form {
			grid-template-columns: 5fr 2fr;
		}

		form input {
			grid-row: 1;
		}

		form button {
			grid-row: 1;
			grid-column: 2;
		}

		.form-message {
			min-height: 3ch;
		}
	}
</style>
