<div class="app">
	<slot />
</div>

<style>
	@font-face {
		font-family: Manrope;
		font-weight: 400;
		src:
			local("Manrope Regular"),
			url("/src/lib/assets/fonts/Manrope-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: Manrope;
		font-weight: 800;
		src:
			local("Manrope Extra Bold"),
			url("/src/lib/assets/fonts/Manrope-ExtraBold.woff2") format("woff2");
	}

	.app {
		/* Primary */
		--light-cyan: hsl(193deg 38% 86%);
		--accent: hsl(150deg 100% 66%);

		/* Neutral */
		--grayish-blue: hsl(217deg 19% 38%);
		--dark-grayish-blue: hsl(217deg 19% 24%);
		--dark-blue: hsl(218deg 23% 16%);

		font-family: Manrope, sans-serif;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background: var(--dark-blue);
		color: var(--light-cyan);
		font-weight: 800;
	}
</style>
