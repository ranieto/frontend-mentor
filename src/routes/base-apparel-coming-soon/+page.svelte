<script lang="ts">
	import ErrorIcon from "~icons/ic/outline-error";
	import RightArrow from "~icons/material-symbols-light/chevron-right-rounded";
	import type { ActionData } from "./$types";
	import heroDesktop from "./hero-desktop.jpg";
	import heroMobile from "./hero-mobile.jpg";
	import logo from "./logo.svg";

	export let form: ActionData;
</script>

<div class="page">
	<header>
		<a href="/"><img class="logo" src={logo} alt="Base Apparel logo" /></a>
	</header>
	<main>
		<h1>
			We're <span>coming soon</span>
		</h1>
		<p>
			Hello fellow shoppers! We're currently building our new fashion store. Add
			your email below to stay up-to-date with announcements and our launch
			deals
		</p>
		<form action="?/subscribe" method="post">
			<div class="input-wrapper" class:error={form?.error}>
				<input
					name="email"
					placeholder="Email Address"
					value={form?.email || ""}
				/>
				<div class="input-right">
					{#if form?.error}
						<div class="error-icon">
							<ErrorIcon />
						</div>
					{/if}
					<button type="submit"><RightArrow /></button>
				</div>
			</div>
			{#if form?.error}
				<p class="error-message">{form.error}</p>
			{/if}
		</form>
	</main>
	<picture>
		<source srcset={heroDesktop} media="(width > 800px)" />
		<img class="hero" src={heroMobile} alt="" />
	</picture>
</div>

<style lang="postcss">
	.page {
		background: var(--gradient-bg);
		display: grid;
		min-height: 100dvh;
		grid-template-rows: 100px 400px auto;
	}

	header {
		padding: 2rem 1rem;
		display: flex;
		align-items: center;
	}

	.logo {
		scale: 0.7;
	}

	main {
		padding: 4rem clamp(1rem, 9vw, 3rem) 2rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	h1 {
		font-weight: 300;
		font-size: 3rem;
		text-transform: uppercase;
		letter-spacing: 0.5rem;
		line-height: 3.5rem;

		span {
			font-weight: 600;
			color: var(--dark-grayish-red);
		}
	}

	p {
		font-size: 1rem;
	}

	picture {
		grid-row: 2;
	}

	.hero {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.input-wrapper {
		--border-radius: 30px;

		padding-left: 2rem;
		border: 1px solid var(--desaturated-red-lighter);
		border-radius: var(--border-radius);
		display: flex;
		justify-content: space-between;
		overflow: hidden;

		&.error {
			border: 2px solid var(--error);
		}
	}

	input {
		background: transparent;
		border: none;
		color: var(--dark-grayish-red);
		flex: 1;
		min-width: 0;

		&::placeholder {
			color: var(--desaturated-red);
			opacity: 0.4;
		}
	}

	button {
		border: none;
		background: var(--gradient-btn);
		border-radius: var(--border-radius);
		color: #fff;
		padding: 0.3rem 1.4rem;
		font-size: 2rem;
		cursor: pointer;

		&:hover {
			opacity: 0.5;
		}
	}

	.input-right {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-shrink: 0;
	}

	.error-icon {
		font-size: 1.5rem;
		color: var(--error);
	}

	.error-message {
		color: var(--error);
		margin-left: 2rem;
		margin-top: 0.3rem;
		font-size: 0.9rem;
		text-align: left;
	}

	@media (width > 800px) {
		.page {
			--padding-left: clamp(1rem, 20vw, 5rem);

			grid-template-columns: 4fr 3fr;
			grid-template-rows: 1fr 4fr;
			gap: 4rem 6rem;
			background:
				no-repeat url("./bg-pattern-desktop.svg"),
				var(--gradient-bg);
			background-size: 100% 100%;
		}

		.logo {
			scale: 0.9;
		}

		picture {
			grid-column: 2;
			grid-row: 1 / -1;
		}

		header {
			padding: 0 0 0 var(--padding-left);
		}

		.hero {
			height: 100%;
			object-fit: cover;
		}

		main {
			padding: 0 4rem 0 var(--padding-left);
			grid-row: 2;
			grid-column: 1;
			text-align: left;
			max-width: 900px;
		}

		h1 {
			font-size: 4.5rem;
			line-height: 5rem;
		}
	}

	@media (width > 2000px) {
		.page {
			grid-template-columns: 1fr 4fr 3fr;
		}

		main,
		header {
			grid-column: 2;
		}

		picture {
			grid-column: 3;
		}
	}
</style>
