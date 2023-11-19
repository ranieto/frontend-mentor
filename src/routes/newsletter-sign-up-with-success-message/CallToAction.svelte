<script lang="ts">
	import { enhance } from "$app/forms";
	import CheckCircle from "~icons/mdi/check-circle";
	import illustrationDesktop from "./illustration-sign-up-desktop.svg";
	import illustrationMobile from "./illustration-sign-up-mobile.svg";

	export let errorMessage = "";
	export let email = "";
</script>

<main>
	<div class="content">
		<h1>Stay updated!</h1>
		<p>Join 60,000+ product managers receiving monthly updates on:</p>
		<ul>
			<li>
				<div class="icon">
					<CheckCircle />
				</div>
				Product discovery and building what matters
			</li>
			<li>
				<div class="icon">
					<CheckCircle />
				</div>
				Measuring to ensure updates are a success
			</li>
			<li>
				<div class="icon">
					<CheckCircle />
				</div>
				And much more!
			</li>
		</ul>
		<form action="?/subscribe" method="post" use:enhance>
			<div class="input-wrapper">
				<div class="input-info">
					<label for="email">Email address</label>
					<p class="error-message">{errorMessage}</p>
				</div>
				<input
					type="text"
					name="email"
					placeholder="email@company.com"
					bind:value={email}
				/>
			</div>
			<button>Subscribe to monthly newsletter</button>
		</form>
	</div>

	<picture>
		<source srcset={illustrationDesktop} media="(width > 618px)" />
		<img src={illustrationMobile} alt="" />
	</picture>
</main>

<style>
	main {
		background: var(--white);
		height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr;
		max-width: 375px;
		min-width: 230px;
	}

	picture {
		grid-row: 1;
	}

	.content {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	li {
		display: flex;
		gap: 0.6rem;
	}

	.icon {
		flex-shrink: 0;
		color: var(--tomato);
		font-size: 1.1rem;
		padding-top: 0.1rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 1rem;
	}

	label,
	.error-message {
		font-weight: 700;
		font-size: 0.7rem;
	}

	.error-message {
		color: var(--tomato);
	}

	.input-info {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.4rem;
	}

	input {
		width: 100%;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		border: 1px solid var(--lighter-grey);

		&::placeholder {
			color: var(--lighter-grey);
		}

		&:focus {
			outline: solid var(--dark-slate-grey);
		}
	}

	button {
		background: var(--dark-slate-grey);
		border: 0;
		color: var(--white);
		padding: 1rem;
		border-radius: 7px;
		width: 100%;
		font-size: 0.9rem;
		cursor: pointer;

		&:hover {
			background: var(--button-gradient);
			box-shadow: var(--tomato-shadow) 0 10px 10px;
		}
	}

	@media (width > 618px) {
		main {
			grid-template-columns: repeat(2, 1fr);
			height: unset;
			max-width: 50rem;
			border-radius: 17px;
			margin: 1rem;
		}

		picture {
			grid-column: 2;
			padding: 1rem;
			height: 100%;
		}

		img {
			height: 100%;
			object-fit: cover;
		}

		.content {
			padding: 3rem;
		}
	}
</style>
