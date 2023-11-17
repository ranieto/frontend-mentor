<script lang="ts">
	import MaterialSymbolsChevronRightRounded from "~icons/material-symbols/chevron-right-rounded";
	import MaterialSymbolsErrorCircleRounded from "~icons/material-symbols/error-circle-rounded";
	import type { ActionData } from "./$types";
	import heroDesktop from "./hero-desktop.jpg";
	import heroMobile from "./hero-mobile.jpg";
	import logo from "./logo.svg";

	export let form: ActionData;
</script>

<main>
	<img src={logo} alt="Base Apparel logo" />
	<div class="content">
		<div class="texts">
			<h1>
				We're <strong>coming soon</strong>
			</h1>
			<p>
				Hello fellow shoppers! We're currently building our new fashion store.
				Add your email below to stay up-to-date with announcements and our
				launch deals.
			</p>
		</div>
		<form action="?/subscribe" method="post">
			<div class="input-wrapper" class:error={form?.error}>
				<input
					type="text"
					placeholder="Email Address"
					name="email"
					value={form?.email || ""}
				/>
				<div class="error-icon">
					{#if form?.error}
						<MaterialSymbolsErrorCircleRounded />
					{/if}
				</div>
				<button><MaterialSymbolsChevronRightRounded /></button>
			</div>
			{#if form?.error}
				<p class="error-text">{form.error}</p>
			{/if}
		</form>
	</div>
	<picture>
		<source srcset={heroMobile} media="(width < 100ch)" />
		<img src={heroDesktop} alt="A woman looking at the camera" />
	</picture>
</main>

<style>
	main {
		--sides: minmax(3ch, 20ch);

		min-height: 100dvh;
		display: grid;

		/* grid-template-columns: 4fr 3fr; */
		grid-template-rows: 10ch auto;
		grid-template-columns:
			var(--sides)
			[content-start] 1fr [content-end]
			var(--sides) [picture-start] 1fr [picture-end];

		/* display: grid;
		grid-template-columns:
			[full-width-start] var(--sides)
			[content-start] 1fr [content-end]
			var(--sides) [full-width-end]; */

		/* text-align: center; */

		row-gap: 3rem;

		/* padding: 3rem 0; */
	}

	main > :not(picture) {
		grid-column: content;
	}

	picture {
		grid-column: picture;
		grid-row: 1 / -1;

		/* grid-column: full-width; */

		& img {
			height: 100%;
			width: 100%;
			object-fit: cover;

			/* width: 100%;
			max-height: 30ch;
			object-fit: cover; */
		}
	}

	h1 {
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 300;
		letter-spacing: 1rem;
		line-height: 4.5rem;
	}

	strong {
		color: var(--dark-grayish-red);
		font-weight: 600;
	}

	input {
		border: none;
		padding: 0.6rem 0;
		flex: 1;

		&::placeholder {
			color: var(--desaturated-red-transparent);
		}

		&:focus {
			outline: none;
		}
	}

	button {
		padding: 0.6rem 2rem;
		border: none;
		border-radius: 40px;
		background: var(--button-gradient);
		color: var(--white);
		font-size: 1.8rem;
		cursor: pointer;

		&:hover {
			opacity: 0.5;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.input-wrapper {
		border: 1px solid var(--desaturated-red-transparent);
		display: flex;

		/* justify-content: space-between; */
		align-items: center;
		overflow: hidden;
		border-radius: 40px;
		padding-left: 2rem;
		gap: 0.5rem;

		&:focus-within {
			outline: solid var(--dark-grayish-red);
		}

		&.error {
			outline: solid var(--soft-red);
		}
	}

	.error-icon {
		font-size: 1.4rem;
		color: var(--soft-red);
		min-width: 2ch;
	}

	.error-text {
		color: var(--soft-red);
		margin-left: 2rem;
		text-align: left;
	}

	.texts {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
