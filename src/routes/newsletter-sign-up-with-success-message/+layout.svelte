<div class="app">
	<slot />
</div>

<style>
	@font-face {
		font-family: Roboto;
		font-weight: 400;
		src:
			local("Roboto Regular"),
			url("/src/lib/assets/fonts/Roboto-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: Roboto;
		font-weight: 700;
		src:
			local("Roboto Bold"),
			url("/src/lib/assets/fonts/Roboto-Bold.woff2") format("woff2");
	}

	.app {
		/* Primary */
		--tomato: hsl(4deg 100% 67%);
		--tomato-shadow: hsl(4deg 100% 67% / 40%);
		--gradient-start: hsl(348deg 79% 65% / 100%);
		--button-gradient: linear-gradient(
			135deg,
			var(--gradient-start),
			var(--tomato)
		);

		/* Neutral */
		--dark-slate-grey: hsl(234deg 29% 20%);
		--charcoal-grey: hsl(235deg 18% 26%);
		--grey: hsl(231deg 7% 60%);
		--lighter-grey: hsl(231deg 7% 80%);
		--white: hsl(0deg 0% 100%);

		font-family: Roboto, sans-serif;
		min-height: 100dvh;
		display: grid;
		place-content: center;
		background: var(--charcoal-grey);
		color: var(--dark-slate-grey);
	}
</style>
